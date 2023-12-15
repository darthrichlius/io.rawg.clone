/**
 * Create an array containing random values from a specified length
 * This method helps resolves the fact that `new Array(6)` can't be used properly by Array.map()
 *
 * @param {number} length The length of the desired array
 * @returns {Array} An array with the desired length where each as a random values
 */
const newRandomArray = (length: number) => {
  return Array.from({ length: length }, () =>
    Math.floor(Math.random() * length)
  );
};

export default { newRandomArray };
