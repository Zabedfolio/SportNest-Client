import { createAuthClient } from "better-auth/react"
import { getAuthBaseURL } from "./auth-url"

export const authClient = createAuthClient({
    baseURL: getAuthBaseURL(),
})

export const { signIn, signUp, useSession } = authClient