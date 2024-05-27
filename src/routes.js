import { buildRoutePath } from "./utils/build-route-path.js";
import { postTask } from "./routes/tasks/postTask.js"

export const routes = [
  {
    method: 'POST',
    path: buildRoutePath('/task'),
    handler: (req, res) => {
      return postTask(req, res);
    }
  }
]