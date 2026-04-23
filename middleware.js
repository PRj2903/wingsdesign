export const config = {
  matcher: '/:path*',
};

export default function middleware(request) {
  const authorizationHeader = request.headers.get('authorization');

  if (authorizationHeader) {
    const basicAuth = authorizationHeader.split(' ')[1];
    const [user, password] = atob(basicAuth).split(':');

    // You can set these in your Vercel Environment Variables
    const expectedUser = process.env.BASIC_AUTH_USER || 'himanshu';
    const expectedPassword = process.env.BASIC_AUTH_PASSWORD || '11081999';

    if (user === expectedUser && password === expectedPassword) {
      // Return a response with the x-middleware-next header to continue the request
      return new Response(null, {
        headers: { 'x-middleware-next': '1' },
      });
    }
  }

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
