from flask import Flask, Response, request
from config.db import Todos
import json
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r'/*': {'origins': '*'}})

@app.route("/todos", methods=["GET"])
def get_some_todos():
    try:
        datas = []
        for todo in Todos.objects():
            datas.append(todo.to_json())
        return Response(
            response= json.dumps(
                datas
            ),
            status=200,
            mimetype="aplication/json"
        )
    except Exception as ex:
        print(ex)
        return Response(
            response= json.dumps(
                {"message": "cannot read todos",
                }),
            status=500,
            mimetype="aplication/json"
        )

@app.route("/todos", methods=["POST"])
def createTodo():
    try:  
        datas = request.json
        todo = Todos(
            description=datas["description"],
        )

        if not todo.description == "":
            dbResponse = todo.save()
        
        
        return Response(
            response= json.dumps(
                {"message": "todo created",
                "_id": f"{dbResponse.id}",
                }),
            status=200,
            mimetype="aplication/json"
        )
    except Exception as ex:
        print(ex)

@app.route("/todos/<_id>", methods=["PATCH"])
def upadte_todo(_id):
    try:
        dbResponse = Todos.objects(id=_id)
        dbResponse.update(
            description=request.json["description"],
            done=request.json["done"]
        )
    
        return Response(
            response= json.dumps(
            {"message": "todo updated"}),
            status=200,
            mimetype="aplication/json"
        )
      
    except Exception as ex:
        print("***************")
        print(ex)
        print("***************")
        return Response(
            response= json.dumps(
                {"message": "sorry cannot update todo"}),
            status=500,
            mimetype="aplication/json"
        )

#################################
@app.route("/todos/<_id>", methods=["DELETE"])
def delete_todo(_id):
    try:
        dbResponse = Todos(id=_id)
        print("opaaaa", dbResponse)
    
        dbResponse.delete()
        
        return Response(
            response= json.dumps(
            {"message": "todo deleted", "_id": _id}),
            status=200,
            mimetype="aplication/json"
        )
     
        
    except Exception as ex:
        print("***********")
        print(ex)
        print("***********")
        return Response(
            response= json.dumps(
                {"message": "sorry cannot delete user"}),
            status=500,
            mimetype="aplication/json"
        )

app.run(debug=True)