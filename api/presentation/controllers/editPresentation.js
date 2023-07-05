import editPresentation from '../queries/editPresentation';

export default async (req, res) => {
  try {
    const { id } = req.params;
    const slides = req.body;
    const presentation = await editPresentation(id, { slides });
    res.status(200).send(presentation);
  } catch (e) {
    res.status(500).end();
  }
};
