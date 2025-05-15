import { rehype as Rehype } from "rehype";
import { Node, Parent } from "unist";
import { visit } from "unist-util-visit";
import { cloneDeep } from "lodash";
import { refractor } from "refractor/core";
import { toString as nodeToString } from "hast-util-to-string";
import { PostOrPage } from "@tryghost/content-api";
import { generateTableOfContents } from "./toc";
import { GhostPostOrPage } from "./ghost";
import { parse as urlParse, UrlWithStringQuery } from "url";

import { processEnv } from "./processEnv";
const { prism, toc, nextImages } = processEnv;

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
  basePath?: string
): Promise<GhostPostOrPage> => {
  if (!cmsUrl) throw Error("ghost-normalize.ts: cmsUrl expected.");
  const rewriteGhostLinks = withRewriteGhostLinks(cmsUrl, basePath);

  let htmlAst = rehype.parse(post.html || "");
  // for (const process of processors) {
  //   htmlAst = await process(htmlAst);
  // }

  // const toc = tableOfContents(htmlAst);

  // image meta
  const url = post.feature_image;

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

const withRewriteGhostLinks =
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

const rewriteRelativeLinks = (htmlAst: Node) => {
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

interface PropertiesElement extends Node {
  tagName: string;
  properties?: NodeProperties;
  children?: Node[];
}

interface PropertiesParent extends Parent {
  tagName?: string;
}

const tableOfContents = (htmlAst: Node) => {
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

const rewriteInlineImages = async (htmlAst: Node) => {
  let nodes: { node: ImageElement; parent: ImageParent | undefined }[] = [];

  visit(
    htmlAst,
    { tagName: `img` },
    (node: ImageElement, _index: number, parent: ImageParent | undefined) => {
      if (nextImages.inline) {
        node.tagName = `Image`;
      }

      const { src } = node.properties;
      nodes.push({ node, parent });
    }
  );

  return htmlAst;
};
