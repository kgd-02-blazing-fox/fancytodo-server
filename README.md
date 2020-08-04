# fancytodo-server

# fancytodo-server
Providing a todo list services which can be added, manipulated, and deleted later

## POST new todos:

* URL:

        /todos

* Method:

        POST

* Data Params:

        Required:

        title=[string]
        description=[string]
        status=[string]
        Due_date=[timestamp]

* Success Response:

        Code: 201 CREATED
        Content: {
            "id": 1,
            "title": "Mandi",
            "description": "Mandi pagi dan siang",
            "status": "done",
            "due_date": "2020-09-14T00:00:00.000Z",
            "createdAt": "2020-08-04T11:08:58.206Z",
            "updatedAt": "2020-08-04T13:52:29.634Z"
        }

* Error Response:

        Code: 400 BAD REQUEST
        Content: { "Validation error" }

        Code: 500 INTERNAL ERROR
        Content: { "SequelizeDatabaseError" }

## GET all todos:

* URL:

        /todos

* Method:

        GET

* Data Params:

        None

* Success Response:

        Code: 200 OK
        Content: [
            {
                "id": 1,
                "title": "Mandi",
                "description": "Mandi pagi dan siang",
                "status": done,
                "due_date": "2020-09-14T00:00:00.000Z",
                "createdAt": "2020-08-04T11:08:58.206Z",
                "updatedAt": "2020-08-04T13:52:29.634Z"
            },
            {
                "id": 2,
                "title": "Mandi lagi",
                "description": "Mandi pagi dan siang",
                "status": true,
                "due_date": "2020-09-14T00:00:00.000Z",
                "createdAt": "2020-08-04T11:08:58.206Z",
                "updatedAt": "2020-08-04T13:52:29.634Z"
            }
        ]

* Error Response:

        Code: 500 INTERNAL SERVER ERROR
        Content: { "SequelizeDatabaseError" }

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
            "title": "Mandi",
            "description": "Mandi pagi dan siang",
            "status": done,
            "due_date": "2020-09-14T00:00:00.000Z",
            "createdAt": "2020-08-04T11:08:58.206Z",
            "updatedAt": "2020-08-04T13:52:29.634Z"
        }

* Error Response:

        Code: 404 FILE NOT FOUND
        Content: { "No Data" }

        Code: 500 INTERNAL SERVER ERROR
        Content: { "SequelizeDatabaseError" }

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
        status=[string]
        Due_date=[timestamp]

* Success Response:

        Code: 200 OK
        Content: {
            "id": 1,
            "title": "Mandi Lagi gaes",
            "description": "Mandi pagi dan siang",
            "status": true,
            "due_date": "2020-09-14T00:00:00.000Z",
            "createdAt": "2020-08-04T11:08:58.206Z",
            "updatedAt": "2020-08-04T13:52:29.634Z"
        }

* Error Response:

        Code: 400 BAD REQUEST
        Content: { "Validation error" }

        Code: 404 FILE NOT FOUND
        Content: { "No Data" }

        Code: 500 INTERNAL SERVER ERROR
        Content: { "SequelizeDatabaseError" }

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
            "title": "Mandi lagi gaes",
            "description": "Mandi pagi dan siang",
            "status": true,
            "due_date": "2020-09-14T00:00:00.000Z",
            "createdAt": "2020-08-04T11:08:58.206Z",
            "updatedAt": "2020-08-04T13:52:29.634Z"
        }

* Error Response:

        Code: 404 FILE NOT FOUND
        Content: { "No Data" }

        Code: 500 INTERNAL SERVER ERROR
        Content: { "SequelizeDatabaseError" }
