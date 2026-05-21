function normalizeUrl(url) {
    if (!url) return undefined;
    return url.trim().replace(/\/$/, "");
}

/** Resolve Better Auth base URL for client and server. */
export function getAuthBaseURL() {
    const fromEnv = normalizeUrl(
        process.env.NEXT_PUBLIC_BETTER_AUTH_URL || process.env.BETTER_AUTH_URL,
    );
    if (fromEnv) return fromEnv;

    if (typeof window !== "undefined") {
        return window.location.origin;
    }

    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    return "http://localhost:3000";
}
