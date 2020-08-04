# fancytodo-server

## **API Documentation**

**Create Todo**
----
  Returns json data.

* **URL**

  /todos/

* **Method:**

  `POST`
  
*  **URL Params**
 
   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | STRING | true |
  | description | STRING | true |
  | status | STRING | true |
  | due_date | DATE | true |

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "id": 1,
    "title": "Ini adalah title",
    "description": "Ini adalah description",
    "status": "Urgent",
    "due_date": "2020-08-26T00:00:00.000Z",
    "updatedAt": "2020-08-04T01:18:04.601Z",
    "createdAt": "2020-08-04T01:18:04.601Z"
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```

----

**Get Todos**
----
  Returns json data.

* **URL**

  /todos/

* **Method:**

  `GET`
  
*  **URL Params**
 
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
          "title": "Ini adalah title",
          "description": "Ini adalah description",
          "status": "Urgent",
          "due_date": "2020-08-26T00:00:00.000Z",
          "createdAt": "2020-08-04T01:16:08.143Z",
          "updatedAt": "2020-08-04T01:16:08.143Z"
      },
      {
          "id": 2,
          "title": "Ini adalah title2",
          "description": "Ini adalah description2",
          "status": "Urgent",
          "due_date": "2020-08-26T00:00:00.000Z",
          "createdAt": "2020-08-04T01:16:08.143Z",
          "updatedAt": "2020-08-04T01:16:08.143Z"
      } 
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```

----

**Get Todo**
----
  Returns json data.

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
          "id": 1,
          "title": "Ini adalah title",
          "description": "Ini adalah description",
          "status": "Urgent",
          "due_date": "2020-08-26T00:00:00.000Z",
          "createdAt": "2020-08-04T01:16:08.143Z",
          "updatedAt": "2020-08-04T01:16:08.143Z"
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```

----

**Update Todo**
----
  Returns json data.

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | STRING | true |
  | description | STRING | true |
  | status | STRING | true |
  | due_date | DATE | true |

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "msg": "Succes update todo" }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```

----

**Delete Todo**
----
  Returns json data.

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  none

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "msg": "Success delete todo" }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```

----
**Register User**
----
  Returns json data.

* **URL**

  /register/

* **Method:**

  `POST`
  
*  **URL Params**
 
   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | email | STRING | true |
  | password | STRING | true |

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "msg": "User created",
    "data": {
      "id": 1,
      "email": "ichlasul0999@gmail.com",
      "password": "$2a$05$5zk42lwn6naUVVA98oR.f.U4x0wGi2KFBcBVxteLUkSCLuXzHNSUG",
      "updatedAt": "2020-08-04T05:15:07.246Z",
      "createdAt": "2020-08-04T05:15:07.246Z"
      }
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```

----
**Login Todo**
----
  Returns json data.

* **URL**

  /login/

* **Method:**

  `POST`
  
*  **URL Params**
 
   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | email | STRING | true |
  | password | STRING | true |

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "acces_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImljaGxhc3VsMDk5OUBnbWFpbC5jb20iLCJpYXQiOjE1OTY1MTgxNDV9.XMgRIuuJMX8byn4zhJCS7yXEH-rb96UhErjlQ45ijgQ"
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```