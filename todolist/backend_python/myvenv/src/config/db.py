import json
import mongoengine as db
import datetime

try:
    db.connect('todo', host='127.0.0.1', port=27017)
except:
    print("Error - Cannot connect to db")

class Todos(db.Document):
    description = db.StringField(required=True)
    done = db.BooleanField(default=False, required=True)
    createdAt = db.DateTimeField(default=datetime.datetime.utcnow)
    def to_json(self):
            return {
                "id":json.dumps(f"{self.id}"),
                "description": self.description,
                "done": self.done
            }
"""
@api {get} /tasks List all task
@apiGroup Tasks
@apiSuccess {Object[]} tasks Task'a list
@apiSuccess {Number} tasks.id Task id
@apiSuccess {String} tasks.title Task title
@apiSuccess {Boolean} tasks.done Task is done?
@apiSuccess {Date} taks.created_at Register's date
@apiSuccessExample {json} Success 
    HTTP/1.1 200 OK
      [{
        "id": 1,
        "description": "Arthur",
        "done": false
        "created_at": "2016-02-10T15:46:51.778Z"

      }]
@apiErrorExample {json} List error
      HTTP/1.1 500 Internal Server Error
      HTTP/1.1 404 Not Found
    {
        "error": "DescriptionNotFound"
        "error": "DoneNotFound"
        "error": "IdNotFound"
    }
"""

"""
@api {post} /tasks create the tasks
@apiGroup Tasks
@apiSuccess {String} tasks.title Task title
@apiSuccess {Boolean} tasks.done Task is done?
@apiSuccess {Date} taks.created_at Register's date
@apiSuccessExample {json} Success
        HTTP/1.1 201 OK
        [{
            "description": "barros",
            "_id": "60ca93582c342d3fdf6ce00e",
            "createdAt": "2021-06-17T00:12:08.353Z",
            "done": false
        }]
@apiErrorExample {json} List error
    HTTP/1.1 500 Internal Server Error
"""

"""
@api {put} /tasks update tasks
@apiGroup Tasks
@apiSuccess {String} tasks.title Task title
@apiSuccess {Boolean} tasks.done Task is done?
@apiSuccessExample {json} Success
        HTTP/1.1 200 OK
        [{
            "_id": "60ca9403ce1d3640b173aae2",
            "description": "Arthur",
            "createdAt": "2021-06-17T00:14:59.430Z",
            "done": false
        }]
 @apiErrorExample {json} List error
      HTTP/1.1 500 Internal Server Error
"""

"""
@api {delete} /tasks delete task
@apiGroup Tasks
@apiSuccess {Object[]} tasks Task'a list
@apiSuccess {Number} tasks.id Task id
@apiSuccessExample {json} Success
          HTTP/1.1 204 OK
        
@apiErrorExample {json} List error
      HTTP/1.1 500 Internal Server Error
"""
        
