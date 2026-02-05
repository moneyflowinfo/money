export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
    const target = url.searchParams.get('url');
  
    if (!target) {
      return new Response('url 파라미터가 없습니다', { status: 400 });
    }
  
    try {
      const targetUrl = decodeURIComponent(target);
      const response = await fetch(targetUrl, {
        method: request.method,
        headers: request.headers,
        redirect: 'follow',
      });
  
      const newHeaders = new Headers(response.headers);
      newHeaders.set('Access-Control-Allow-Origin', '*');
      newHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      newHeaders.set('Access-Control-Allow-Headers', '*');
  
      if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: newHeaders });
      }
  
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
    } catch (e) {
      return new Response('프록시 오류: ' + e.message, { status: 500 });
    }
  }