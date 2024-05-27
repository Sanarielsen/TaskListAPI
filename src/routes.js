/* 
  Exemple of new route
  method: Name of type method is executed like POST or GET.
  path: Path of the route executed to know witch route and params that have;
  handler: Here you reference the routine that you want to execute.
  {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: '/task/:id',
    handler: (req, res) => {
    console.log("Route is develop or referenced here");
  }
*/

export const routes = []