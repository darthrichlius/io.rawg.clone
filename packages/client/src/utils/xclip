/**
 * Create an array containing random unique values from a specified length
 * This method helps resolves the fact that `new Array(6)` can't be used properly by Array.map()
 *
 * @param {number} length The length of the desired array
 * @returns {Array} An array with the desired length where each as a random values
 */
const newRandomArray = (length: number) => {
  /**
   * Initializes an empty `Set` to store number values.
   * Utilizes the built-in `Set` functionality to skip in case of existing values.
   */
  const uniqueValues = new Set<number>();
  while (uniqueValues.size < length) {
    uniqueValues.add(Math.floor(Math.random() * length));
  }
  return Array.from(uniqueValues);
};

export default { newRandomArray };
