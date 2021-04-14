import codes from '../codes';

const getCodes = () => codes;
/**
 * Using the function (async/await) I simulate a request to the server
 * @returns {Promise<*>}
 */
export const logIn = async () => await getCodes();