import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getSizes = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getSizes;
