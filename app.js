import express from 'express';
const app = express();
import ejs from'ejs'
let port = process.env.port || 8082;


app.use(express.static('./dist'));
app.set('views','./dist');
app.engine('html', ejs.renderFile);


const server = app.listen(8082,function(){
    console.log(port,'open');
})
