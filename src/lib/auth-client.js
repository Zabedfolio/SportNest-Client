import { createAuthClient } from "better-auth/react"

// Do not set baseURL here — a build-time value can freeze as localhost:3000.
// Better Auth resolves same-origin /api/auth from window.location in the browser.
export const authClient = createAuthClient()

export const { signIn, signUp, useSession } = authClient