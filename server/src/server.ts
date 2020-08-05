import express from 'express';

const app = express();

app.use(express.json());

/* app.get('/users', (request, response) => {
    const users = [
        {name: 'Lisandro', age: 49},
        {name: 'Cida', age: 51},
        {name: 'Lilica', age: 21},
    ]; */

app.post('/users', (request, response) => {
    console.log(request.body);


    const users = [
        {name: 'Lisandro', age: 49},
        {name: 'Cida', age: 51},
        {name: 'Lilica', age: 21},
    ];

    return response.json(users);
});


app.listen(3333);