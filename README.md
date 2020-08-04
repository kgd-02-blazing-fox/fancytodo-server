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
    "UserId": 1,
    "updatedAt": "2020-08-04T01:18:04.601Z",
    "createdAt": "2020-08-04T01:18:04.601Z"
    }
    ```

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        { "error" : ["Required todo title."] }
        ```

        OR

        ```json
        { "error" : ["Required todo description."] }
        ```

        OR

        ```json
        { "error" : ["Required todo status."] }
        ```

        OR

        ```json
        { "error" : ["Required todo due date."] }
        ```
        OR

        ```json
        { "error" : ["Field title can't be empty"] }
        ```
        OR

        ```json
        { "error" : ["Field description can't be empty"] }
        ```
        OR

        ```json
        { "error" : ["Field status can't be empty"] }
        ```
        OR

        ```json
        { "error" : ["Field due date can't be empty"] }
        ```
        OR

        ```json
        { "error" : ["Field due date invalid format"] }
        ```
        OR

        ```json
        { "error": "You have invalid token, please login!" }
        ```

    OR

  * **Code:** 404 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error": "You are unauthenticated to make this request" }
        ```

        OR

        ```json
        { "error": "You are unauthorized to make this request" }
        ```

    OR

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
  * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        { "error": "You have invalid token, please login!" }
        ```
      OR

  * **Code:** 404 UNAUTHORIZED <br /> 
      **Content:** 
      ```json
      { "error": "You are unauthenticated to make this request" }
      ```

      OR

      ```json
      { "error": "You are unauthorized to make this request" }
      ```

    OR

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

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | jsonwebtoken | true |
  
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
    "UserId": 1,
    "createdAt": "2020-08-04T01:16:08.143Z",
    "updatedAt": "2020-08-04T01:16:08.143Z"
    }
    ```

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
      **Content:** 
      ```json
      { "error": "You have invalid token, please login!" }
      ```

      OR

  * **Code:** 404 UNAUTHORIZED <br />
      **Content:** 
      ```json
      { "error": "You are unauthenticated to make this request" }
      ```

      OR

      ```json
      { "error": "You are unauthorized to make this request" }
      ```

    OR

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

* **Request Headers**

| key | value | required |
| :---: | :---: | :---: |
| token | jsonwebtoken | true |
  
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
  * **Code:** 400 BAD REQUEST <br />
      **Content:** 
      ```json
      { "error": "You have invalid token, please login!" }
      ```

      OR

  * **Code:** 404 UNAUTHORIZED <br />
      **Content:** 
      ```json
      { "error": "You are unauthenticated to make this request" }
      ```

      OR

      ```json
      { "error": "You are unauthorized to make this request" }
      ```

    OR

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

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | jsonwebtoken | true |
  
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
  * **Code:** 400 BAD REQUEST <br />
      **Content:** 
      ```json
      { "error": "You have invalid token, please login!" }
      ```

      OR

  * **Code:** 404 UNAUTHORIZED <br />
      **Content:** 
      ```json
      { "error": "You are unauthenticated to make this request" }
      ```

      OR

      ```json
      { "error": "You are unauthorized to make this request" }
      ```

    OR

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
  * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        { "error" : ["Field email can't be empty!"] }
        ```
        OR
        ```json
        { "error" : "Your email already exist" }
        ```
        OR
        ```json
        { "error" : ["Field password can't be empty!"] }
        ```
        OR
        ```json
        { "error" : ["Validation isEmail on email failed"] }
        ```
        OR
        ```json
        { "error" : ["Password length more than 5 and less than 16"] }
        ```
      OR    

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
  * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        { "error" : "Invalid email & password!" }
        ```
      OR
  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```