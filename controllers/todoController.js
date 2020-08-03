class TodoController {

  static createTodo(req,res,next) {
    res.send("Create Todo")
  }

  static getTodos(req, res, next) {
    res.send("Get Todos")
  }

  static getTodo(req, res, next) {
    res.send("Get Todo")
  }

  static putTodo(req, res, next) {
    res.send("Put Todos")
  }

  static deleteTodo(req, res, next) {
    res.send("Delete Todo")
  }

  // static async createTodo(req, res, next) {
  //   res.send("Create Todo")
  // }

  // static async getTodos(req, res, next) {
  //   res.send("Get Todos")
  // }

  // static async getTodo(req, res, next) {
  //   res.send("Get Todo")
  // }

  // static async putTodos(req, res, next) {
  //   res.send("Put Todos")
  // }

  // static async deleteTodo(req, res, next) {
  //   res.send("Delete Todo")
  // }

}

module.exports = TodoController