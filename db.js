const dotenv = require('dotenv')
dotenv.config()


const mongodb = require('mongodb')

//let connectionString = 'mongodb+srv://ToDoApp:todoapp12345@cluster0.y4ygf.mongodb.net/ComplexApp?retryWrites=true&w=majority'

mongodb.connect(process.env.CONNECTIONSTRING , {useNewUrlParser : true , useUnifiedTopology:true} ,function(err  ,client){
   module.exports = client
   const app = require('./app')
   app.listen(process.env.PORT)

})