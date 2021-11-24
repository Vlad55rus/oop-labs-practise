import * as express from 'express';
import * as http from 'http';
import { Logger } from './logger/logger';

const port = 3050;
const logger: Logger = new Logger('index');

process.on('uncaughtException', (err) => {
    logger.error('Caught uncaught exception', err);
});

const app = express();
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

server.on('listening', (): void => {
    const address = server.address();
    const bind = (typeof address === 'string') ? `pipe ${ address }` : `port ${ address.port }`;
    logger.info(`Listening on ${ bind }`);
});

