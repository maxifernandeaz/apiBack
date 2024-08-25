const express = require ('express');
const {errorLogs, handlerError} = require('./middleware/error.handeler')
const apiRouter = require('./server')
const  cors = require('cors')
const app = express();
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
  res.send('Hola mundo')
})

apiRouter(app)

app.use(handlerError)
app.use(errorLogs)



app.listen(port, (req, res)=>{
  console.log(`Puerto escuchando en el ${port} de mi raiz`);
})


