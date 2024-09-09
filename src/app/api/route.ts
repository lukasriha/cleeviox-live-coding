import { books } from "@/data/books";

const REQUEST_DELAY = 3_000;

const sleep = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, REQUEST_DELAY)
  );

export async function GET() {
  try {
    await sleep();
    return Response.json({ data: books });
  } catch (error: unknown) {
    console.error(error);
  }
}
