import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const BASE_URL = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:9090";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
} = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/i/flow/login",
        newUser: "/i/flow/signup",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.userData = user; // Store user data in token
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.userData; // Retrieve user data from token
            return session;
        }
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const authResponse = await fetch(`${BASE_URL}/api/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: credentials.username,
                        password: credentials.password,
                    }),
                });

                if (!authResponse.ok) {
                    if (authResponse.status === 404) {
                        throw new Error("User not found");
                    } else if (authResponse.status === 401) {
                        throw new Error("Incorrect password");
                    }
                    throw new Error("Login failed");
                }

                const user = await authResponse.json();
                return {
                    email: user.id,
                    name: user.nickname,
                    image: user.image,
                    ...user,
                };
            },
        }),
    ],
});
