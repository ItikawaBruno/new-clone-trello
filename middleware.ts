import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Middleware protege todas as rotas, exceto arquivos estáticos e a rota "/"
    '/((?!_next|$|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Protege APIs
    '/(api|trpc)(.*)',
  ],
};
