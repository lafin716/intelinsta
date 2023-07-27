import Jimp from "jimp";

export const resizeImage = async (
  imagePath: string,
  width: number,
  height: number
) => {
  try {
    const image = await Jimp.read(imagePath);
    await image.resize(width, height).writeAsync("path/to/resized_image.jpg");
    console.log("리사이징이 완료되었습니다");
  } catch (error) {
    console.error("리사이징 오류:", error);
  }
};
