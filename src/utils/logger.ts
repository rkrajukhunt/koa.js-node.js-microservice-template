import bunyan from 'bunyan';
import config from 'config';

const level: bunyan.LogLevel = config.get('log_level');
const output: string = config.get('log_output');

let stream: bunyan.Stream;
if (output === 'stdout') {
  stream = { level, stream: process.stdout };
} else if (output === 'stderr') {
  stream = { level, stream: process.stderr };
} else {
  stream = { level, path: output };
}

export default bunyan.createLogger({
  name: config.get('name'),
  streams: [stream]
});
