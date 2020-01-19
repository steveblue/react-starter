import express from 'express';
import cors from 'cors';
import path from 'path';
import chalk from 'chalk';
import bodyParser from 'body-parser';
import ssr from './middleware/ssr';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errorHandler);

app.use('/dist/client', express.static(path.resolve(process.cwd(), 'dist', 'client')));

app.get('/*', ssr);

app.listen(process.env.PORT || 3200, () => {
    console.log(
        `[${new Date().toISOString()}]`,
        chalk.blue(`App is running: http://localhost:${process.env.PORT || 3200}`)
    );
});

export default app;
