import type { NextApiRequest, NextApiResponse } from "next";

export default function Preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setPreviewData({});
  res.writeHead(307, { Location: "/" });
  res.end();
}

