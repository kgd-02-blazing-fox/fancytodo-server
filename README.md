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
