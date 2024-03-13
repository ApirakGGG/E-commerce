
import { ironSession } from 'next-iron-session';

const secretCookiePassword = process.env.SECRET_COOKIE_PASSWORD || 'your-default-password';

export default ironSession({
  password: secretCookiePassword,
  cookieName: 'my-cookie',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
