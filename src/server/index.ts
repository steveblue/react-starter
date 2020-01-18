import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import bodyParser from 'body-parser';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errorHandler);

app.listen(process.env.PORT || 3200, () => {
    console.log(
        `[${new Date().toISOString()}]`,
        chalk.blue(`App is running: http://localhost:${process.env.PORT || 3200}`)
    );
});

export default app;
