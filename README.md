
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

* Success Response:

        Code: 201 CREATED
        Content: {
            "id": 1,
            "title": "Do it!",
            "description": "Just Do It!",
            "status": "false",
            "Due_date": "2020-10-04T17:00:00.000Z",
            "updatedAt": "2020-08-03T09:53:47.174Z",
            "createdAt": "2020-08-03T09:53:47.174Z"
        }

* Error Response:

        Code: 400 BAD REQUEST
        Content: { error : "Validation error" }

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

        None

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
                "updatedAt": "2020-08-03T10:07:35.858Z"
            },
            {
                "id": 2,
                "title": "Do it Again!!",
                "description": "Just Do It!",
                "status": true,
                "Due_date": "2020-11-04T17:00:00.000Z",
                "createdAt": "2020-08-03T10:08:00.162Z",
                "updatedAt": "2020-08-03T10:08:00.162Z"
            }
        ]

* Error Response:

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
            "updatedAt": "2020-08-03T10:07:35.858Z"
        }

* Error Response:

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
            "updatedAt": "2020-08-03T10:57:41.996Z"
        }

* Error Response:

        Code: 400 BAD REQUEST
        Content: { error : "Validation error" }

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
            "updatedAt": "2020-08-03T10:57:41.996Z"
        }

* Error Response:

        Code: 404 FILE NOT FOUND
        Content: { error : "File not Found" }

        Code: 500 INTERNAL SERVER ERROR
        Content: { error : "SequelizeDatabaseError" }



