
# fancytodo-server
Providing a todo list services which can be added, manipulated, and deleted later

## POST new todos:

* URL:

        /todos

* Method:

        POST

* URL Params:

        None

* Data Params:

        Required:

        title=[string]
        description=[string]
        status=[boolean]
        Due_date=[timestamp]
        
        Required Headers:
        access_token=[string]

* Success Response:

        Code: 201 CREATED
        Content: {
            "id": 1,
            "title": "Do it!",
            "description": "Just Do It!",
            "status": "false",
            "Due_date": "2020-10-04T17:00:00.000Z",
            "updatedAt": "2020-08-03T09:53:47.174Z",
            "createdAt": "2020-08-03T09:53:47.174Z",
            "userId":8
        }

* Error Response:

        Code: 400 BAD REQUEST
        Content: { error : "Validation error" }
        
        Code: 401 UNAUTHORIZED
        Content: { error : "Access denied" }

        Code: 500 INTERNAL ERROR
        Content: { error : "SequelizeDatabaseError" }
    
## GET all todos:

* URL:

        /todos

* Method:

        GET

* URL Params:

        None

* Data Params:

        Required Headers:
        access_token=[string]

* Success Response:

        Code: 200 OK
        Content: [
            {
                "id": 1,
                "title": "Do it!",
                "description": "Just Do It!",
                "status": false,
                "Due_date": "2020-11-04T17:00:00.000Z",
                "createdAt": "2020-08-03T10:07:35.858Z",
                "updatedAt": "2020-08-03T10:07:35.858Z",
                "userId":8            
            },
            {
                "id": 2,
                "title": "Do it Again!!",
                "description": "Just Do It!",
                "status": true,
                "Due_date": "2020-11-04T17:00:00.000Z",
                "createdAt": "2020-08-03T10:08:00.162Z",
                "updatedAt": "2020-08-03T10:08:00.162Z",
                "userId":8
            }
        ]

* Error Response:

        Code: 401 UNAUTHORIZED
        Content: { error : "Access denied" }

        Code: 500 INTERNAL SERVER ERROR
        Content: { error : "SequelizeDatabaseError" }

## GET specific todo by ID:

* URL:

        /todos/:id

* Method:

        GET

* URL Params:

        Required:

        id=[integer]
        
        Required Headers:
        access_token=[string]

* Data Params:

        None

* Success Response:

        Code: 200 OK
        Content: {
            "id": 1,
            "title": "Do it!",
            "description": "Just Do It!",
            "status": false,
            "Due_date": "2020-11-04T17:00:00.000Z",
            "createdAt": "2020-08-03T10:07:35.858Z",
            "updatedAt": "2020-08-03T10:07:35.858Z",
            "userId":8
        }

* Error Response:

        Code: 401 UNAUTHORIZED
        Content: { error : "Unauthorized access" }

        Code: 404 FILE NOT FOUND
        Content: { error : "File not Found" }

        Code: 500 INTERNAL SERVER ERROR
        Content: { error : "SequelizeDatabaseError" }

## PUT specific todo by ID:

* URL:

        /todos/:id

* Method:

        PUT

* URL Params:

        Required:

        id=[integer]
        
        Required Headers:
        access_token=[string]

* Data Params:

        Optional:

        title=[string]
        description=[string]
        status=[boolean]
        Due_date=[timestamp]

* Success Response:

        Code: 200 OK
        Content: {
            "id": 1,
            "title": "Do it Again from Put!!",
            "description": "Just Do It!",
            "status": true,
            "Due_date": "2020-11-04T17:00:00.000Z",
            "createdAt": "2020-08-03T10:07:35.858Z",
            "updatedAt": "2020-08-03T10:57:41.996Z",
            "userId":8
        }

* Error Response:

        Code: 400 BAD REQUEST
        Content: { error : "Validation error" }
        
        Code: 401 UNAUTHORIZED
        Content: { error : "Unauthorized access" }

        Code: 404 FILE NOT FOUND
        Content: { error : "File not Found" }

        Code: 500 INTERNAL SERVER ERROR
        Content: { error : "SequelizeDatabaseError" }

## DELETE specific todo by ID:

* URL:

        /todos/:id

* Method:

        DELETE

* URL Params:

        Required:

        id=[integer]
        
        Required Headers:
        access_token=[string]

* Data Params:

        None

* Success Response:

        Code: 200 OK
        Content: {
            "id": 1,
            "title": "Do it Again from Put!!",
            "description": "Just Do It!",
            "status": true,
            "Due_date": "2020-11-04T17:00:00.000Z",
            "createdAt": "2020-08-03T10:07:35.858Z",
            "updatedAt": "2020-08-03T10:57:41.996Z",
            "userId":8
        }

* Error Response:

        Code: 401 UNAUTHORIZED
        Content: { error : "Unauthorized access" }

        Code: 404 FILE NOT FOUND
        Content: { error : "File not Found" }

        Code: 500 INTERNAL SERVER ERROR
        Content: { error : "SequelizeDatabaseError" }
        
## POST register:

* URL:

        /register

* Method:

        POST

* URL Params:

        None
        
* Data Params:

        Required:

        firstname=[string]
        email=[string]
        password=[string]
        
        Optional:

        lastname=[string]

* Success Response:

        Code: 201 CREATED
        Content: {
            "id": 8,
            "firstname": "John",
            "lastname": "Doe",
            "email": "Johndoe2@gmail.com",
            "password": "$2a$10$GWM8zFoEAWCoZfOY4JWlouUYzYcSMByZokEgFqyPrFwGoKV/saBo.",
            "updatedAt": "2020-08-04T10:32:56.249Z",
            "createdAt": "2020-08-04T10:32:56.249Z",
            "fullname": "John Doe"
        }

* Error Response:

        Code: 400 BAD REQUEST
        Content: { error : "SequelizeValidationError" , error :"SequelizeUniqueConstraintError"}

        Code: 500 INTERNAL SERVER ERROR
        Content: { error : "SequelizeDatabaseError" }
        
## POST login:

* URL:

        /login

* Method:

        POST

* URL Params:

        None
        
* Data Params:

        Required:

        email=[string]
        password=[string]
        
        --Via Google login--
        
        None

* Success Response:

        Code: 200 OK
        Content: {
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJKb2huZG9lQGdtYWlsLmNvbSIsImlhdCI6MTU5NjUzNzM1Mn0.RUkSnWdagE-wdW3MgUYZPip6U9k9JTT-5SlB7eFYh2A"
        }
        
        
        --Via Google login (UNREGISTERED user from database)--
        
        Code: 201 CREATED
        Content: {user:{
            "id": 8,
            "firstname": "John Doe",
            "lastname": "",
            "email": "Johndoe2@gmail.com",
            "password": "$2a$10$GWM8zFoEAWCoZfOY4JWlouUYzYcSMByZokEgFqyPrFwGoKV/saBo.",
            "updatedAt": "2020-08-04T10:32:56.249Z",
            "createdAt": "2020-08-04T10:32:56.249Z",
            "fullname": "John Doe"
        },{
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJKb2huZG9lQGdtYWlsLmNvbSIsImlhdCI6MTU5NjUzNzM1Mn0.RUkSnWdagE-wdW3MgUYZPip6U9k9JTT-5SlB7eFYh2A"
        }}
        
        
        --Via Google login (REGISTERED user from database)--
        Content: {
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJKb2huZG9lQGdtYWlsLmNvbSIsImlhdCI6MTU5NjUzNzM1Mn0.RUkSnWdagE-wdW3MgUYZPip6U9k9JTT-5SlB7eFYh2A"
        }

* Error Response:

        Code: 400 BAD REQUEST
        Content: { error : "Username/password didn't match" , error :"Please fill in the required information"}

        Code: 500 INTERNAL SERVER ERROR
        Content: { error : "SequelizeDatabaseError" }



