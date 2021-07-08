import express from 'express';
import employeeRoute from './routes/employee.routes'

const app = express();

app.use('/', employeeRoute);

app.listen(3000,() => {
    console.log('App running on Port: 3000');
})