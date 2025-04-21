'use client';

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {

  if (typeof window !== "undefined") {
    // checks that we are client-side
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
      person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
      },
    });
  }

  return (
    <PostHogProvider client={posthog}>
      {children}
    </PostHogProvider>
  );
}
