import chalk from 'chalk';
import express from 'express';
import path from 'path';
import errorHandler from './middleware/errorHandler';
import ssr from './middleware/ssr';

const app = express();

app.use(errorHandler);

app.use('/dist/client', express.static(path.resolve(process.cwd(), 'dist', 'client')));

app.get('/*', ssr);

app.listen(process.env.PORT || 3200, () => {
    const addr = `http://localhost:${process.env.PORT || 3200}`;
    process.stdout.write(
        `\n [${new Date().toISOString()}] ${chalk.green('Server running:')} ${chalk.blue(addr)}`,
    );
});

export default app;
