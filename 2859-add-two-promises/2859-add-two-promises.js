/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
let addTwoPromises = async (a, b) => await(a) + await(b);


/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */