const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
//tempalate engine
app.engine('handlebars', handlebars());
//http logger
app.use(morgan('combined'));

app.get('/',(req, res) => {return res.send('Hello world!');});

app.listen(port, () => console.log(`Example app listening a http:localhost:${port}`));
