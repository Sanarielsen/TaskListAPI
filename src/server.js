import { routes } from './routes.js';
import http from 'node:http'

const server = http.createServer( (req, res) => {
  const { method, url } = req;

  const route = routes.find( (route) => {
    return route.method === method && route.path === url
  } )

  if (route) {

    const routeParams = request.url.match(route.path);

    const { ...params } = routeParams.groups;
    request.params = params

    return route.handler(req, res);
  }

  return res.writeHead(404).end();
})

server.listen(1234);