import NextAuth, {CredentialsSignin} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
} = NextAuth({
    pages: {
        signIn: '/i/flow/login',
        newUser: '/i/flow/signup',
    },
    callbacks: {
        async session({ session, token }) {
            console.log('session callback', session, token);
            const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`);
            const userData = await authResponse.json();
            (session as any).userData = userData;
            return session;
        }
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: credentials.username,
                        password: credentials.password,
                    }),
                })

                if (!authResponse.ok) {
                    const credentialsSignin = new CredentialsSignin();
                    if (authResponse.status === 404) {
                        credentialsSignin.code = 'no_user';
                    } else if (authResponse.status === 401) {
                        credentialsSignin.code = 'wrong_password';
                    }
                    throw credentialsSignin;
                }

                const user = await authResponse.json()
                console.log('user', user);
                return {
                    email: user.id,
                    name: user.nickname,
                    image: user.image,
                    ...user,
                }
            },
        }),
    ]
});