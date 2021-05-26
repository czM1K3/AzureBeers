import { NextApiResponse, NextApiRequest } from "next";
const cvstfjs = require('@microsoft/customvision-tfjs-node');
const model = new cvstfjs.ObjectDetectionModel();
const loadModel = async () => {
    await model.loadModelAsync('file://customvision/model.json');
}
loadModel();

export default async(_req: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch(process.env.CAM_IP).then(x => x).catch(() => null);
    if (response) {
        const buffer = await response.buffer();
        const result = {image: buffer, result: await model.executeAsync(buffer)};
        res.status(200).json(result);
    }
    else res.status(200).json(null);
}