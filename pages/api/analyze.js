// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cvstfjs = require('@microsoft/customvision-tfjs-node');

export default async (req, res) => {
  const model = new cvstfjs.ObjectDetectionModel();
  await model.loadModelAsync('file://customvision/model.json');
  const response = await fetch("http://192.168.1.21/jpg").then(x => x).catch(() => null);
  if (response)
  {
    const buffer = await response.buffer();
    const result = await model.executeAsync(buffer);
    // console.log(result);
    res.status(200).json(result);
    return;
  } 
  res.status(200).json(null);
}
