import { NextApiRequest, NextApiResponse } from "next";

import { books } from "@/data/books";

const REQUEST_DELAY = 3_000;

const sleep = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, REQUEST_DELAY)
  );

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    await sleep();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
  }
}
