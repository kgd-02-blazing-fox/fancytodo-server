# FancyTodo-Server

  Deploy Here:

[FancyTodo](http://localhost:3000)

## API Documentation

----
  **Create New To Do**
----
New to do list registration in Fancy To-Do app

* **URL**

  /todos

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
  | title | <YOUR_TITLE>	 | true |
  | description | <YOUR_DESCRIPTION> | true |
  | status | <YOUR_STATUS> | true |
  | due_date | <YOUR_DUE_DATE> | true |

* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "title": "Mandi",
    "description": "Pakai air",
    "status": "Not Completed",
    "due_date": "2020-08-03T00:00:00.000Z"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
    ```json
    [ "Please insert the Title! Value cant be empty!" ]
    ```

    OR

    ```json
    [ "Please insert the Description! Value cant be empty!" ]
    ```

    OR

    ```json
    [ "Please insert the Status! Value cant be empty!" ]
    ```

    OR

    ```json
    [ "Please insert the Due_Date! Value cant be empty!" ]
    ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

----
  **Read All To Do**
----
  Read All To Do List

* **URL**

  /todos

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
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
            "id": 3,
            "title": "Mandi",
            "description": "Pakai air",
            "status": "Not Completed",
            "due_date": "2020-08-03T00:00:00.000Z",
            "createdAt": "2020-08-03T04:57:34.925Z",
            "updatedAt": "2020-08-03T04:57:34.925Z"
        }
    ]
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```


----
  **Find To Do by ID**
----
  Read To Do by ID

* **URL**

  /todos/:id

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
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
            "id": 3,
            "title": "Mandi",
            "description": "Pakai air",
            "status": "Not Completed",
            "due_date": "2020-08-03T00:00:00.000Z",
            "createdAt": "2020-08-03T04:57:34.925Z",
            "updatedAt": "2020-08-03T04:57:34.925Z"
        }
    ]
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

    OR

    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        { "error" : "Error not found" }
        ```    

----
  **Update To Do**
----
  Update To Do Data

* **URL**

  /todos/:id

* **Method:**
  
  `PUT`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | id | <YOUR_ID> | true |

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | <YOUR_TITLE>	 | true |
  | description | <YOUR_DESCRIPTION> | true |
  | status | <YOUR_STATUS> | true |
  | due_date | <YOUR_DUE_DATE> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    [
        {
            "id": 3,
            "title": "Mandi",
            "description": "Pakai air",
            "status": "Not Completed",
            "due_date": "2020-08-03T00:00:00.000Z",
            "createdAt": "2020-08-03T04:57:34.925Z",
            "updatedAt": "2020-08-03T04:57:34.925Z"
        }
    ]
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
    ```json
    [ "Please insert the Title! Value cant be empty!" ]
    ```

    OR

    ```json
    [ "Please insert the Description! Value cant be empty!" ]
    ```

    OR

    ```json
    [ "Please insert the Status! Value cant be empty!" ]
    ```

    OR

    ```json
    [ "Please insert the Due_Date! Value cant be empty!" ]
    ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```  

----
  **Delete To Do**
----
  Delete To Do Data by ID

* **URL**

  /todos/:id

* **Method:**
  
  `DELETE`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
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
    [
        {
            "id": 3,
            "title": "Mandi",
            "description": "Pakai air",
            "status": "Not Completed",
            "due_date": "2020-08-03T00:00:00.000Z",
            "createdAt": "2020-08-03T04:57:34.925Z",
            "updatedAt": "2020-08-03T04:57:34.925Z"
        }
    ]
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

    OR

    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        { "error" : "Error not found" }
        ```    