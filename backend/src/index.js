/* Métodos HTTP: get, post, put, delete
     Tipos de parametros:
        Query Params: request.query (Filtros, ordenação, paginação...)
        Route Params: request.params (Identificar um recurso na alteração ou remoção)
        Body:         request.body (Dados para criação ou alteração de um registro)

        MongoDB (Não-relacional)
*/
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://paulo:paulinho123@cluster0-csetw.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.post('/users', (request, response) => {
    console.log(request.body)
    return response.json({message: 'Hello World'});
} );

app.listen(3333);