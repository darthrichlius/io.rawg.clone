/**
 * Create an URL of a cropped version of the original heavier Game background Image
 *
 * Original Image URL (Currently known): https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
 * Cropped Image (example): https://media.rawg.io/media/crop/<width>/<height>/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
 *
 * @param { string} url The URL of the original version of the image
 * @return { string} url The URL representing the cropped version of the image
 */
const getCroppedGameImageUrl = (
  url: string,
  width: number,
  height: number
): string | undefined => {
  const identifier = "/media/games";

  // The goal is to make sure we have the right identifier (/media) inside the URL
  if (url.indexOf(identifier))
    return url.replace(identifier, `/media/crop/${width}/${height}/games`);
};

export default { getCroppedGameImageUrl };
