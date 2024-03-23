import { FastAverageColor } from "fast-average-color";

export const getColorFromUrl = async (url) => {
  const fac = new FastAverageColor();
  const color = await fac.getColorAsync(url);

  return color.hex;
};
