import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/course-routes';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/eCourse_db', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type: 'application/json'}));

routes(app);

app.listen(PORT, () => {
    console.log(`App started at ${PORT}`);
})