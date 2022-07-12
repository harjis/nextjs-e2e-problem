import type { NextApiRequest, NextApiResponse } from "next";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.method, req.url);
    res.status(200).json({method: req.method});
};

export default examples;
