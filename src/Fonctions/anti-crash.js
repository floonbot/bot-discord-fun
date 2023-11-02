const colorette = require('colorette');
const PrettyError = require('pretty-error');
const winston = require('winston');
const { format, transports } = winston;

const logger = winston.createLogger({
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'error_log.txt', level: 'error' }),
    new transports.Console({ format: format.simple(), level: 'info' })
  ]
});

const pe = new PrettyError();

function handleUncaughtException(error, origin) {
  console.log(colorette.red('----- Uncaught exception -----'));
  console.log(pe.render(error));
  console.log(colorette.red('----- Exception origin -----'));
  console.log(pe.render(origin));
  logger.error('Uncaught exception', { error, origin });
}

function handleUnhandledRejection(reason, promise) {
  console.log(colorette.red('----- Unhandled Rejection at -----'));
  console.log(pe.render(promise));
  console.log(colorette.red('----- Reason -----'));
  console.log(pe.render(reason));
  logger.error('Unhandled Rejection', { reason, promise });
}

function handleWarning(warning) {
  console.log(colorette.yellow('----- Warning -----'));
  console.log(pe.render({
    name: warning.name,
    message: warning.message,
    stack: warning.stack
  }));
  logger.warn('Warning', { warning });
}

function configureErrorHandling() {
  process.on('uncaughtException', handleUncaughtException);
  process.on('unhandledRejection', handleUnhandledRejection);
  process.on('warning', handleWarning);
}

module.exports = configureErrorHandling;
