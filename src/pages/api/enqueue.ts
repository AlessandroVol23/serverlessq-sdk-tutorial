import type { NextApiRequest, NextApiResponse } from "next";
import MyQueue from "./queueHandler";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  (await MyQueue).enqueue();
  res.status(200).end();
}
