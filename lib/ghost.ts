import { Node } from "unist";
import { parse as urlParse } from "url";
import GhostContentAPI, {
  Params,
  PostOrPage,
  SettingsResponse,
  Pagination,
  PostsOrPages,
  Tag,
  Author,
} from "@tryghost/content-api";
import { normalizePost } from "./ghost-normalize";
import { collections as config } from "../routesConfig";
import { Collections } from "./collections";

import {
  ghostAPIUrl,
  ghostAPIKey,
  processEnv,
  ProcessEnvProps,
} from "./processEnv";
import { IToC } from "./toc";

import { locale } from "dayjs";
export interface NavItem {
  url: string;
  label: string;
  alternateLabel?: string;
}
export interface LimitAndLocale {
  limit?: number;
  locale?: string;
}

interface BrowseResults<T> extends Array<T> {
  meta: { pagination: Pagination };
}

export interface GhostSettings extends SettingsResponse {
  processEnv: ProcessEnvProps;
  secondary_navigation?: NavItem[];
}
export interface GhostPostOrPage extends PostOrPage {
  htmlAst?: Node | null;
  toc?: IToC[] | null;
}

export interface GhostPostsOrPages extends BrowseResults<GhostPostOrPage> {}

export interface GhostTags extends BrowseResults<Tag> {}

export interface GhostAuthors extends BrowseResults<Author> {}

const api = new GhostContentAPI({
  url: ghostAPIUrl,
  key: ghostAPIKey,
  version: "v5.0",
});

const postAndPageFetchOptions: Params = {
  limit: "all",
  include: ["tags", "authors", "count.posts"],
  order: ["featured DESC", "published_at DESC"],
};

const tagAndAuthorFetchOptions: Params = {
  limit: "all",
  include: "count.posts",
};

const postAndPageSlugOptions: Params = {
  limit: "all",
  fields: "slug",
};

// helpers
export async function getAllSettings(): Promise<GhostSettings> {
  //const cached = getCache<SettingsResponse>('settings')
  //if (cached) return cached
  const settings = await api.settings.browse();
  settings.url = settings?.url?.replace(/\/$/, ``);

  const result = {
    processEnv,
    ...settings,
  };
  //setCache('settings', result)
  console.log(result);
  return result;
}

export async function getAllTags(): Promise<GhostTags> {
  const tags = await api.tags.browse(tagAndAuthorFetchOptions);
  return tags;
}

export async function getAllAuthors() {
  return await api.authors.browse(tagAndAuthorFetchOptions);
}

export async function getAllPosts(
  props: Record<string, unknown>
): Promise<GhostPostsOrPages> {
  return await api.posts.browse({
    ...postAndPageFetchOptions,
    ...(props && { ...props }),
  });
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await api.posts.browse({
    ...postAndPageSlugOptions,
  });
  return posts.map((p) => p.slug);
}

export async function getAllPages(
  props: Record<string, unknown>
): Promise<GhostPostsOrPages> {
  const pages = await api.pages.browse({
    ...postAndPageFetchOptions,
    ...(props && { ...props }),
  });
  return pages;
}

// specific data by slug
export async function getTagBySlug(slug: string): Promise<Tag> {
  return await api.tags.read({
    ...tagAndAuthorFetchOptions,
    slug,
  });
}
export async function getAuthorBySlug(slug: string): Promise<Author> {
  return await api.authors.read({
    ...tagAndAuthorFetchOptions,
    slug,
  });
}

export async function getPostBySlug(
  slug: string
): Promise<GhostPostOrPage | null> {
  let result: GhostPostOrPage;
  if (!slug) {
    return Promise.resolve(null);
  }
  const post = await api.posts.read({
    ...postAndPageFetchOptions,
    slug,
  });
  // older Ghost versions do not throw error on 404
  if (!post) return null;

  const { url } = await getAllSettings();
  result = await normalizePost(post, (url && urlParse(url)) || undefined);
  return result;
}

export async function getPageBySlug(
  slug: string
): Promise<GhostPostOrPage | null> {
  let result: GhostPostOrPage;
  const page = await api.pages.read({
    ...postAndPageFetchOptions,
    slug,
  });

  // older Ghost versions do not throw error on 404
  if (!page) return null;

  const { url } = await getAllSettings();
  result = await normalizePost(page, (url && urlParse(url)) || undefined);
  return result;
}

// specific data by author/tag slug
export async function getPostsByAuthor(
  slug: string
): Promise<GhostPostsOrPages> {
  const posts = await api.posts.browse({
    ...postAndPageFetchOptions,
    filter: `authors.slug:${slug}`,
  });
  return posts;
}

export async function getPostsByTag(
  slug: string,
  limit?: number,
  excludeId?: string
): Promise<GhostPostsOrPages> {
  const exclude = (excludeId && `+id:-${excludeId}`) || ``;
  const posts = await api.posts.browse({
    ...postAndPageFetchOptions,
    ...(limit && { limit: `${limit}` }),
    filter: `tags.slug:${slug}${exclude}`,
  });
  return posts;
}

// Collections
export const collections = new Collections<PostOrPage>(config);
