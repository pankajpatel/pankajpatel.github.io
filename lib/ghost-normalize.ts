import { rehype as Rehype } from "rehype";
import { Node, Parent } from "unist";
import { visit } from "unist-util-visit";
import cloneDeep from "clone-deep";
import { PostOrPage } from "@tryghost/content-api";
import { generateTableOfContents } from "./toc";
import { GhostPostOrPage } from "./ghost";
import { parse as urlParse, UrlWithStringQuery } from "url";

import { processEnv } from "./processEnv";
const { toc, nextImages } = processEnv;

const rehype = Rehype().use({
  settings: {
    fragment: true,
    space: `html`,
    emitParseErrors: false,
    verbose: false,
  },
});

export const normalizePost = async (
  post: PostOrPage,
  cmsUrl: UrlWithStringQuery | undefined,
): Promise<GhostPostOrPage> => {
  if (!cmsUrl) throw Error("ghost-normalize.ts: cmsUrl expected.");

  const htmlAst = rehype.parse(post.html || "");

  // author images
  const authors = post.authors;

  return {
    ...post,
    authors,
    htmlAst,
    toc: null,
  };
};

/**
 * Rewrite absolute Ghost CMS links to relative
 */

interface LinkElement extends Node {
  tagName: string;
  properties?: HTMLAnchorElement;
  children?: Node[];
}

export const withRewriteGhostLinks =
  (cmsUrl: UrlWithStringQuery, basePath = "/") =>
  (htmlAst: Node) => {
    visit(htmlAst, { tagName: `a` }, (node: LinkElement) => {
      if (!node.properties) return;
      const href = urlParse(node.properties.href);
      if (href.protocol === cmsUrl.protocol && href.host === cmsUrl.host) {
        node.properties.href = basePath + href.pathname?.substring(1);
      }
    });

    return htmlAst;
  };

/**
 * Rewrite relative links to be used with next/link
 */

export const rewriteRelativeLinks = (htmlAst: Node) => {
  visit(htmlAst, { tagName: `a` }, (node: LinkElement) => {
    const href = node.properties?.href;
    if (href && !href.startsWith(`http`)) {
      const copyOfNode = cloneDeep(node);
      delete copyOfNode.properties;
      delete copyOfNode.position;
      copyOfNode.tagName = `span`;
      node.tagName = `Link`;
      node.children = [copyOfNode];
    }
  });

  return htmlAst;
};

/**
 * Syntax Highlighting with PrismJS using refactor
 */

interface NodeProperties {
  className?: string[];
  style?: string | string[];
}

export interface PropertiesElement extends Node {
  tagName: string;
  properties?: NodeProperties;
  children?: Node[];
}

export interface PropertiesParent extends Parent {
  tagName?: string;
}

export const tableOfContents = (htmlAst: Node) => {
  if (!toc.enable) return null;
  return generateTableOfContents(htmlAst);
};

/**
 * Rewrite img tags to be used with next/image
 * Always attach aspectRatio for image cards
 */

interface ImageElement extends Node {
  tagName: string;
  properties: HTMLImageElement;
}

interface ImageParent extends Parent {
  properties?: NodeProperties;
}

export const rewriteInlineImages = async (htmlAst: Node) => {
  let nodes: { node: ImageElement; parent: ImageParent | undefined }[] = [];

  visit(
    htmlAst,
    { tagName: `img` },
    (node: ImageElement, _index: number, parent: ImageParent | undefined) => {
      if (nextImages.inline) {
        node.tagName = `Image`;
      }

      nodes.push({ node, parent });
    }
  );

  return htmlAst;
};
