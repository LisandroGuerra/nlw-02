import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        {name: 'Lisandro', age: 49},
        {name: 'Cida', age: 51},
        {name: 'Lica', age: 21},
    ];

    return response.json(users);
});


app.listen(3333);