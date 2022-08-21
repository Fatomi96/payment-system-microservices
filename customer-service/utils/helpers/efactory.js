import ApiError from '../errors/api.error.js';
import constants from '../constants/api.message.js';

const { RESOURCE_NOT_FOUND } = constants;

/**
 *Contains ErrorFactory methods
 * @class ErrorFactory
 */
export default class ErrorFactory extends Error {
  static resolveError(error) {
    let message = 'Error while processing request. It is not you, it is us.';
    let status = 500;
    if (error.received === 0) {
      status = 404;
      message = RESOURCE_NOT_FOUND(error.resource);
    }
    return new ApiError({ message, status });
  }
}