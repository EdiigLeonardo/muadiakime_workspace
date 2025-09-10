import { DefaultSession, DefaultUser } from 'next-auth';
// JWT is used in type extensions below
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    id: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
  }
}