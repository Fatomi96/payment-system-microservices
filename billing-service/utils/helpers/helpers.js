import constants from '../constants/api.message'

const { FAIL, SUCCESS, SUCCESS_RESPONSE } = constants;


/**
 *Contains Helper methods
 * @class Helper
 */
class Helper {
  /**
   * validates an input based on a schema
   * @static
   * @param { Joi } schema - The validation schema.
   * @param { Object } object - The data to be validated
   * @memberof Helper
   * @returns { boolean }
   */
  static async validateInput(schema, object) {
    return schema.validateAsync(object);
  }

  /**
     * Generates a JSON response for success scenarios.
     * @static
     * @param {Response} res - Response object.
     * @param {object} options - An object containing response properties.
     * @param {object} options.data - The payload.
     * @param {string} options.message -  HTTP Status code.
     * @param {number} options.code -  HTTP Status code.
     * @memberof Helpers
     * @returns {JSON} - A JSON success response.
     */
  static successResponse(
    res,
    { data, message = SUCCESS_RESPONSE, code = 200 }
  ) {
    return res.status(code).json({
      status: SUCCESS,
      message,
      data
    });
  }

  /**
   * Generates a JSON response for failure scenarios.
   * @static
   * @param {Request} req - Request object.
   * @param {Response} res - Response object.
   * @param {object} error - The error object.
   * @param {number} error.status -  HTTP Status code, default is 500.
   * @param {string} error.message -  Error message.
   * @param {object|array} error.errors -  A collection of  error message.
   * @memberof Helpers
   * @returns {JSON} - A JSON failure response.
   */
  static errorResponse(req, res, error) {
    return res.status(code).json({
      status: FAIL,
      message: error.message,
      errors: error.errors
    });
  }
}

export default Helper;
