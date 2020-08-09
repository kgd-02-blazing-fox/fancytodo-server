## **API Documentation : Fancy Todo Server**

**Link Deploy :**

* **[FancyTodo_Server](https://fancytodoichlas.herokuapp.com/)**

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
  | due_date | DATE | true |

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
      "id": 1,
      "title": "Ini adalah title",
      "description": "Ini adalah description",
      "status": "none",
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
      { "error" : [ "Required todo title." ] }
      ```

      OR

      ```json
      { "error" : [ "Required todo description." ] }
      ```

      OR

      ```json
      { "error" : [ "Required todo status." ] }
      ```

      OR

      ```json
      { "error" : [ "Required todo due date." ] }
      ```
      OR

      ```json
      { "error" : [ "Field title can't be empty" ] }
      ```
      OR

      ```json
      { "error" : [ "Field description can't be empty" ] }
      ```
      OR

      ```json
      { "error" : [ "Must be in none, done, & expire" ] }
      ```
      OR

      ```json
      { "error" : [ "Field status can't be empty" ] }
      ```
      OR

      ```json
      { "error" : [ "Field due date can't be empty" ] }
      ```
      OR

      ```json
      { "error" : [ "Field due date invalid format" ] }
      ```
      OR

      ```json
      { "error": "You have invalid token, please login!" }
      ```


  * **Code:** 404 UNAUTHORIZED <br />
      **Content:** 
      ```json
      { "error": "You are unauthenticated to make this request" }
      ```

      OR

      ```json
      { "error": "You are unauthorized to make this request" }
      ```


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
        "status": "none",
        "due_date": "2020-08-26T00:00:00.000Z",
        "createdAt": "2020-08-04T01:16:08.143Z",
        "updatedAt": "2020-08-04T01:16:08.143Z"
      },
      {
        "id": 2,
        "title": "Ini adalah title2",
        "description": "Ini adalah description2",
        "status": "none",
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
      

  * **Code:** 404 UNAUTHORIZED <br /> 
      **Content:** 
      ```json
      { "error": "You are unauthenticated to make this request" }
      ```

      OR

      ```json
      { "error": "You are unauthorized to make this request" }
      ```


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
      "status": "none",
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


  * **Code:** 404 UNAUTHORIZED <br />
      **Content:** 
      ```json
      { "error": "You are unauthenticated to make this request" }
      ```

      OR

      ```json
      { "error": "You are unauthorized to make this request" }
      ```


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


  * **Code:** 404 UNAUTHORIZED <br />
      **Content:** 
      ```json
      { "error": "You are unauthenticated to make this request" }
      ```

      OR

      ```json
      { "error": "You are unauthorized to make this request" }
      ```


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


  * **Code:** 404 UNAUTHORIZED <br />
      **Content:** 
      ```json
      { "error": "You are unauthenticated to make this request" }
      ```

      OR

      ```json
      { "error": "You are unauthorized to make this request" }
      ```


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
      { "error" : [ "Field email can't be empty!" ] }
      ```
      OR
      ```json
      { "error" : "Your email already exist" }
      ```
      OR
      ```json
      { "error" : [ "Field password can't be empty!" ] }
      ```
      OR
      ```json
      { "error" : [ "Validation isEmail on email failed" ] }
      ```
      OR
      ```json
      { "error" : [ "Password length more than 5 and less than 16" ] }
      ```
   

  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```

----

**Login User**
----
  Returns json data.

* **URL**

  /login

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
    { "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImljaGxhc3VsMDk5OUBnbWFpbC5jb20iLCJpYXQiOjE1OTY1MTgxNDV9.XMgRIuuJMX8byn4zhJCS7yXEH-rb96UhErjlQ45ijgQ" }
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

----

**Update Status Todos**
----
  Returns json data.

* **URL**

  /todos/editStatus/:id

* **Method:**

  `PATCH`

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
  | status | STRING | true |

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "msg": "Success update status todo" }
    ```
 
* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
      **Content:** 
      ```json
      { "error": "You have invalid token, please login!" }
      ```
 

  * **Code:** 404 UNAUTHORIZED <br /> 
      **Content:** 
      ```json
      { "error": "You are unauthenticated to make this request" }
      ```

      OR

      ```json
      { "error": "You are unauthorized to make this request" }
      ```


  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```
----

**Get Restaurant**
----
  Returns json data.

* **URL**

  /resto/

* **Method:**

  `GET`
  
*  **URL Params**
 
   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | entity_id | INTEGER | true |

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    [
      {
        "results_found": "53",
        "results_start": "11",
        "results_shown": "10",
        "restaurants": [
          {
            "id": "16774318",
            "name": "Otto Enoteca & Pizzeria",
            "url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village",
            "location": {
              "address": "1 5th Avenue, New York, NY 10003",
              "locality": "Greenwich Village",
              "city": "New York City",
              "latitude": "40.732013",
              "longitude": "-73.996155",
              "zipcode": "10003",
              "country_id": "216"
            },
            "average_cost_for_two": "60",
            "price_range": "2",
            "currency": "$",
            "thumb": "https://b.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_thumb.png",
            "featured_image": "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
            "photos_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop",
            "menu_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/menu#tabtop",
            "events_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/events#tabtop",
            "user_rating": {
              "aggregate_rating": "3.7",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "1046"
            },
            "has_online_delivery": "0",
            "is_delivering_now": "0",
            "has_table_booking": "0",
            "deeplink": "zomato://r/16774318",
            "cuisines": "Cafe",
            "all_reviews_count": "15",
            "photo_count": "18",
            "phone_numbers": "(212) 228-2930",
            "photos": [
              {
                "id": "u_MjA5MjY1OTk5OT",
                "url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_640_640_thumb.JPG",
                "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_200_thumb.JPG",
                "user": {
                  "name": "John Doe",
                  "zomato_handle": "John",
                  "foodie_level": "Super Foodie",
                  "foodie_level_num": "9",
                  "foodie_color": "f58552",
                  "profile_url": "https://www.zomato.com/john",
                  "profile_deeplink": "zoma.to/u/1170245",
                  "profile_image": "string"
                },
                "res_id": "16782899",
                "caption": "#awesome",
                "timestamp": "1435111770",
                "friendly_time": "3 months ago",
                "width": "640",
                "height": "640",
                "comments_count": "0",
                "likes_count": "0"
              }
            ],
            "all_reviews": [
              {
                "rating": "5",
                "review_text": "The best latte I've ever had. It tasted a little sweet",
                "id": "24127336",
                "rating_color": "305D02",
                "review_time_friendly": "2 months ago",
                "rating_text": "Insane!",
                "timestamp": "1435507367",
                "likes": "0",
                "user": {
                  "name": "John Doe",
                  "zomato_handle": "John",
                  "foodie_level": "Super Foodie",
                  "foodie_level_num": "9",
                  "foodie_color": "f58552",
                  "profile_url": "https://www.zomato.com/john",
                  "profile_deeplink": "zoma.to/u/1170245",
                  "profile_image": "string"
                },
                "comments_count": "0"
              }
            ]
          }
        ]
      }
    ]
    ```
 
* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
      **Content:** 
      ```json
      { "error": "You dont have quentity id" }
      ```
      OR

      ```json
      { "error": "You have invalid token, please login!" }
      ```

  * **Code:** 404 UNAUTHORIZED <br /> 
      **Content:** 
      ```json
      { "error": "You are unauthenticated to make this request" }
      ```

      OR

      ```json
      { "error": "You are unauthorized to make this request" }
      ```

 

  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```

----

**Login With Google**
----
  Returns json data.

* **URL**

  /login-google

* **Method:**

  `POST`

* **Request Headers**

| key | value | required |
| :---: | :---: | :---: |
| id_token | googletoken | true |
  
*  **URL Params**
 
   none

* **Data Params**

   none

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImljaGxhc3VsMDk5OUBnbWFpbC5jb20iLCJpYXQiOjE1OTY1MTgxNDV9.XMgRIuuJMX8byn4zhJCS7yXEH-rb96UhErjlQ45ijgQ" }
    ```

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
      **Content:** 
      ```json
      { "error" : "Please login via website!" }
      ```
      OR
  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```