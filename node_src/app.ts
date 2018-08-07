import express = require('express');
import { Api }from './api/index';

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 4);

app.use('/api', Api)

export default app;