# Server Construction

## server.js

This file is main file when we execute that server. When execute route, that instruction need to reach that file to know what this route need to do.

## routes.js

This file has a structure necessary to execute route when that server need to execute. Normally the properties need to be suffer a treatment because the params and body just have a order of props, not name + value. Because of that we need organize that routes.

**Example of new route:**
- **method**: Name of type method is executed like POST or GET.
- **path**: Path of the route executed to know witch route and params that have;
- **handler**: Here you reference the routine that you want to execute.

```
  {
    method: 'POST',
    path: '/task/:id',
    handler: (req, res) => {
      console.log("Route is develop or referenced here");
    }
  }
```
This method is referenced inside of *server.js* to know if current route exists or not inside of our back-end.

## database.js

This file has instructions to write everything relationed with CRUD operations. That datas has writed inside of file, that file is relationed inside of that instruction.

**Structure:**

- *Constructor()* - Is a method uses when we instances a current class with name "Database";

- *#persist* - Execute a query to delete, insert or update a information inside of file or database;

- *select(table, search)* - Is a method to execute select query following parameters with name of table and which value with correspondy value of.

- *insert()* - Is a method to execute insert query following parameters with name of table and row if you want to register too.

- *delete()* - Is a method to execute delete query following parameters with name of table and identifier number of row corresponding to the data you wish to delete.

- *update()* - Is a method to execute update query following parameters with name of table and entire object with identifier number to know which row you need to update.