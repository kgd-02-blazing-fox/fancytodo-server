# FancyTodo-Server

  Deploy Here:

[FancyTodo_Server](http://localhost:3000)

## API Documentation

----
  **Register**
----
  Register as a new user in FancyTodo app

* **URL**

  /register

* **Method:**

  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |

* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | email | <YOUR_EMAIL> | true |
  | password | <YOUR_PASSWORD> | true |
  | name | <YOUR_NAME> | true |

* **Success Response:**


  * **Code:** 201 Created <br />
    **Content:**
    ```json
    {
      "user": {
          "id": 1,
          "email": "test@mail.com",
          "name": "Panji",
          "createdAt": "2020-08-11T10:15:22.707Z",
          "updatedAt": "2020-08-11T10:15:22.707Z"
      }
    }
    ```

* **Error Response:**

    * **Code:** 400 Bad Request <br />
        **Content:**
        ```json
        {
          "message": [
              "Email has been registered!"
          ]
        }
        ```

        OR

        ```json
        {
          "message": [
              "You have to enter your email with this format: email@email.com",
              "Email is required!",
              "Password is required!",
              "Name is required!"
          ]
        }
        ```

    OR

    * **Code:** 500 Internal Server Error <br />
        **Content:** 
        ```json
        { "message" : "Internal Server Error" }
        ```

----
  **Login**
----
  Login as a user in FancyTodo app

* **URL**

  /login

* **Method:**

  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |

* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | email | <YOUR_EMAIL> | true |
  | password | <YOUR_PASSWORD> | true |

* **Success Response:**


  * **Code:** 200 OK <br />
    **Content:**
    ```json
    {
        "name": "Panji",
    }
    ```

* **Error Response:**

    * **Code:** 400 Bad Request <br />
        **Content:**
        ```json
        {
          "message": "Invalid username or password"
        }
        ```

    OR

    * **Code:** 500 Internal Server Error <br />
        **Content:** 
        ```json
        { "message" : "Internal Server Error" }
        ```

----
  **Create Todo**
----
  Add a new todo in FancyTodo app

* **URL**

  /todos

* **Method:**

  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <USER_TOKEN> | true |

* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | <TODO_TITLE> | true |
  | description | <TODO_DESCRIPTION> | true |
  | due_date | <TODO_DUE_DATE> | true |

* **Success Response:**


  * **Code:** 201 Created <br />
    **Content:**
    ```json
    {
      "title": "Fancy todo API documentation",
      "description": "Fancy todo API documentation",
      "status": "On Progress",
      "due_date": 2020-08-07T00:00:00.000Z
    }
    ```

* **Error Response:**

    * **Code:** 400 Bad Request <br />
        **Content:**
        ```json
        {
          "message": [
              "Title is required!",
              "Description is required!",
              "Due date is required!"
          ]
        }
        ```

    OR

    * **Code:** 500 Internal Server Error <br />
        **Content:** 
        ```json
        { "message" : "Internal Server Error" }
        ```

----
  **Read All Todo**
----
  View all todo list

* **URL**

  /todos

* **Method:**

  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <USER_TOKEN> | true |

* **URL Params**

   none

* **Data Params**

   none

* **Success Response:**


  * **Code:** 200 OK <br />
    **Content:**
    ```json
    [
      {
          "id": 1,
          "title": "Fancy todo",
          "description": "Fancy todo login feature",
          "status": "On Progress",
          "dueDate": "2020-08-20T00:00:00.000Z",
          "UserId": 1,
          "createdAt": "2020-07-08T09:40:13.188Z",
          "updatedAt": "2020-07-08T09:40:13.188Z"
      },
      {
          "id": 2,
          "title": "Fancy todo",
          "description": "Fancy todo API documentation",
          "status": "On Progress",
          "dueDate": "2020-08-20T00:00:00.000Z",
          "UserId": 1,
          "createdAt": "2020-08-08T09:52:56.000Z",
          "updatedAt": "2020-08-08T09:52:56.000Z"
      }
    ]
    ```

* **Error Response:**

    * **Code:** 500 Internal Server Error <br />
        **Content:** 
        ```json
        { "message" : "Internal Server Error" }
        ```

----
  **Read a Todo**
----
  Find a todo by ID

* **URL**

  /todos/:id

* **Method:**

  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <USER_TOKEN> | true |

* **URL Params**

   | key | value | required |
   | :---: | :---: | :---: |
   | id | <TODO_ID> | true |

* **Data Params**

   none

* **Success Response:**


  * **Code:** 200 OK <br />
    **Content:**
    ```json
    {
      "id": 1,
      "title": "Fancy todo",
      "description": "Fancy todo login feature",
      "status": "On Progress",
      "dueDate": "2020-08-20T00:00:00.000Z",
      "UserId": 1,
      "createdAt": "2020-08-08T09:40:13.188Z",
      "updatedAt": "2020-08-08T09:40:13.188Z"
    }
    ```

* **Error Response:**

    * **Code:** 404 Not Found <br />
        **Content:** 
        ```json
        { "message" : "Not Found" }
        ```

----
  **Update Todo**
----
  Update an existing todo in FancyTodo app

* **URL**

  /todos/:id

* **Method:**

  `PUT`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <USER_TOKEN> | true |

* **URL Params**

   | key | value | required |
   | :---: | :---: | :---: |
   | id | <TODO_ID> | true |
   
* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | <TODO_TITLE> | true |
  | description | <TODO_DESCRIPTION> | true |
  | status | <TODO_STATUS> | true |
  | due_date | <TODO_DUE_DATE> | true |

* **Success Response:**


  * **Code:** 200 OK <br />
    **Content:**
    ```json
    {
      "id": 1,
      "title": "Fancy application",
      "description": "Fancy application login feature",
      "status": "Finished",
      "dueDate": "2020-08-20T00:00:00.000Z",
      "UserId": 1,
      "createdAt": "2020-08-08T09:40:13.188Z",
      "updatedAt": "2020-08-08T09:59:20.133Z"
    }
    ```

* **Error Response:**

    * **Code:** 400 Bad Request <br />
        **Content:**
        ```json
        {
          "message": [
              "Title is required!",
              "Description is required!",
              "Due date is required!",
              "Status is required!"
          ]
        }
        ```
    
    OR

    * **Code:** 404 Not Found <br />
        **Content:** 
        ```json
        { "message" : "Not Found" }
        ```

    OR

    * **Code:** 500 Internal Server Error <br />
        **Content:** 
        ```json
        { "message" : "Internal server error" }
        ```

----
  **Delete Todo**
----
  Delete an existing todo in FancyTodo app

* **URL**

  /todos/:id

* **Method:**

  `DELETE`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | token | <USER_TOKEN> | true |

* **URL Params**

   | key | value | required |
   | :---: | :---: | :---: |
   | id | <YOUR_ID> | true |

* **Data Params**

  none

* **Success Response:**


  * **Code:** 200 OK <br />
    **Content:**
    ```json
    {
      "id": 5,
      "title": "Fancy todo",
      "description": "Fancy todo API documentation",
      "status": "On Progress",
      "dueDate": "2020-08-20T00:00:00.000Z",
      "UserId": 1,
      "createdAt": "2020-08-08T09:52:56.017Z",
      "updatedAt": "2020-08-08T09:52:56.017Z"
    }
    ```

* **Error Response:**

    * **Code:** 404 Not Found <br />
        **Content:** 
        ```json
        { "message" : "Not Found" }
        ```

    OR

    * **Code:** 500 Internal Server Error <br />
        **Content:** 
        ```json
        { "error" : "Internal Server Error" }
        ```