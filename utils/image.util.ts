import Jimp from "jimp";

export const resizeImage = async (
  imagePath: string,
  width: number,
  height: number
) => {
  try {
    const image = await Jimp.read(imagePath);
    await image.resize(width, height).writeAsync("path/to/resized_image.jpg");
    console.log("Resized image successfully");
  } catch (error) {
    console.error("Error while resizing image:", error);
  }
};
