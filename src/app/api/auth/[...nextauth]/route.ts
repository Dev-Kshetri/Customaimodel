// imports
import NextAuth from "next-auth"

// importing providers
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: "650426119724-jon1gk3r984usm392p2j3qagu400hf3l.apps.googleusercontent.com" as string,
            clientSecret: "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" as string,
        })
    ]
})

export { handler as GET, handler as POST }