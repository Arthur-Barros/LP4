define({ "api": [
  {
    "type": "delete",
    "url": "/tasks",
    "title": "delete task",
    "group": "Tasks",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>Task'a list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>Task id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/api/todo/todoService.js",
    "groupTitle": "Tasks",
    "name": "DeleteTasks"
  },
  {
    "type": "get",
    "url": "/tasks",
    "title": "List all task",
    "group": "Tasks",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>Task'a list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.id",
            "description": "<p>Task id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "tasks.done",
            "description": "<p>Task is done?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "taks.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 200 OK\n[{\n    \"id\": 1,\n    \"description\": \"Arthur\",\n    \"done\": false\n    \"created_at\": \"2016-02-10T15:46:51.778Z\"\n\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error\nHTTP/1.1 404 Not Found\n{\n    \"error\": \"DescriptionNotFound\"\n    \"error\": \"DoneNotFound\"\n    \"error\": \"IdNotFound\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/api/todo/todoService.js",
    "groupTitle": "Tasks",
    "name": "GetTasks"
  },
  {
    "type": "post",
    "url": "/tasks",
    "title": "create the tasks",
    "group": "Tasks",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "tasks.done",
            "description": "<p>Task is done?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "taks.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n   \"description\": \"barros\",\n   \"_id\": \"60ca93582c342d3fdf6ce00e\",\n   \"createdAt\": \"2021-06-17T00:12:08.353Z\",\n   \"done\": false\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/api/todo/todoService.js",
    "groupTitle": "Tasks",
    "name": "PostTasks"
  },
  {
    "type": "put",
    "url": "/tasks",
    "title": "update tasks",
    "group": "Tasks",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "tasks.done",
            "description": "<p>Task is done?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"60ca9403ce1d3640b173aae2\",\n  \"description\": \"Arthur\",\n  \"createdAt\": \"2021-06-17T00:14:59.430Z\",\n  \"done\": false\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/api/todo/todoService.js",
    "groupTitle": "Tasks",
    "name": "PutTasks"
  }
] });
