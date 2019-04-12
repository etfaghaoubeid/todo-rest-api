# todo-rest-api
todo-rest-api is a simple RESTfull API based on express
## Installation

### Requirements
* Node.js >= 8
* MongoDB >= 3.x
### command 
```
git clone git@github.com:etfaghaoubeid/todo-rest-api.git
cd todo-rest-api
npm install
add your mongodb url to config/config
node app
```
### api endpoint
```
http://localhost:3001/api
http://localhost:3001/api/addTodo
http://localhost:3001/api/deleteTodo
http://localhost:3001/api/updateTodo
```
### API Stracture
```
├── config                   # Project configurations
│   ├── config               # mongo db url
├── controllers              # Application controllers    
│   ├── todo.controller      # todo controller
├── models                   # Application Models 
│   ├── todo                 # todo model
├── routes                   # Application routes
│   ├── api                  # api folder
│   │   └── todo             # todo routes
├── app                      # appplication start point 
├── package-lock.json        # Tpackage-lock.json
└── process.json             # process file
```
