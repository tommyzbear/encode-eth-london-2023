import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

const fakeKey = "123456";

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { privateKey } = req.body;

  //   if (privateKey === fakeKey) {
  //     return res.status(200);
  //   } else {
  //     return res.status(401).send({ error: "You are not authorized" });
  //   }

  try {
    if (privateKey === fakeKey) {
      res.status(200);
    } else {
      res.status(401).send({ error: "You are not authorized" });
    }
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
