import { NextApiResponse, NextApiRequest } from "next";
const cvstfjs = require('@microsoft/customvision-tfjs-node');

export default async(_req: NextApiRequest, res: NextApiResponse) => {
    const model = new cvstfjs.ObjectDetectionModel();
    await model.loadModelAsync('file://customvision/model.json');
    const response = await fetch(process.env.CAM_IP).then(x => x).catch(() => null);
    if (response) {
        const buffer = await response.buffer();
        const result = {image: buffer, result: await model.executeAsync(buffer)};
        res.status(200).json(result);
    }
    else res.status(200).json(null);
}