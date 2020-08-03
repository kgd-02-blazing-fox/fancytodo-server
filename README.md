# fancytodo-server

**show todo**
----

* **URL**

  /todos/

* **Method:**
  
  GET


* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{"id":1,"title":"Koding","description":"Bikin Dokumentasi","status":"on progress","Due_date":"2020-08-07","createdAt":"2020-08-03T06:51:37.358Z","updatedAt":"2020-08-03T06:51:37.358Z"`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR 


**create todo**
----

* **URL**

  /todos/

* **Method:**
  
  `POST`
  
* **Data Params**

  `let input = { title: req.body.title, description: req.body.description, status: req.body.status, Due_date: req.body.Due_date }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"id":4,"title":"","description":"Tidur malam mimpi koding","status":"pending","Due_date":"2020-08-02","updatedAt":"2020-08-03T09:26:37.687Z","createdAt":"2020-08-03T09:26:37.687Z"}`
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ name: 'UncompleteInput', message: err.errors[0].message }`

  OR

    * **Code:** 500 INTERNAL SERVER ERROR 


**show spesific id todo**
----
  
* **URL**

  /todos/:id

* **Method:**
  
  GET
  
*  **URL Params**
    /:id

   **Required:** 
   `id=[integer]`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{"id": 1,"title": "Koding","description": "Bikin Dokumentasi","status": "on progress","Due_date": "2020-08-07","createdAt": "2020-08-03T06:51:37.358Z","updatedAt": "2020-08-03T06:51:37.358Z"}`
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** `{"name": "NoData"}`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR

**Update Spesific Id ToDo**
----

* **URL**

  /todos/:id

* **Method:**
  
  `PUT`
  
*  **URL Params**

    /:id

   **Required:**
 
   `id=[integer]`


* **Data Params**

  `{ title: req.body.title, description: req.body.description, status: req.body.status, Due_date: req.body.Due_date }`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{"id":3,"title":"Makan","description":"Eating Supermie","status":"On progress","Due_date":"2020-08-02","createdAt":"2020-08-03T09:15:34.114Z","updatedAt":"2020-08-03T10:15:42.940Z"}`
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** `{ name: "Data Not Found" }`

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** `{"name":"UncompleteInput","message":"Todo.title cannot be null"}`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />



**Delete Todo**
----

* **URL**

  /todos/:id

* **Method:**
  
  `DELETE`
  
*  **URL Params**

    /:id

    **Required:**
 
   `id=[integer]`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `1`
 
* **Error Response:**

  * **Code:** 404 Not FOund <br />
    **Content:** `{"name":"Data Not Found"}`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR  <br />
