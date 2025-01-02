import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|es|fr|hi|id|ig|it|ja|pt|ru|th|tr|vi|zh)/:path*']
};