import { Home } from "../components/Home";
import data from "../data/config";
import { getAllPosts, type GhostPostsOrPages } from "../lib/ghost";

export const metadata = {
  title: data.title,
  description: data.description,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    siteName: data.title,
    locale: 'en_US',
    type: 'website',

  },
  twitter: {
    card: 'summary',
    title: data.title,
    creator: data.author,
    description: data.description,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  metadataBase: new URL(data.url),
  verification: {
    other: {
      name: 'p:domain_verify',
      value: "95a26872f3e0d41d50578baf4aaa8835",
    },
  },
}

export default async function Page() {
  let posts: GhostPostsOrPages | [];

  try {
    posts = await getAllPosts({ limit: 6 });
  } catch (error) {
    console.error(error);
    posts = [];
  }

  return (
    <Home cmsData={{ posts }} />
  );
}
