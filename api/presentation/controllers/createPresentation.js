import getPresentationInfo from '../../../utils/getPresentationInfo';
import createPresentation from '../queries/createPresentation';

export default async (req, res) => {
  try {
    const { user } = res.locals;
    const {
      name, topic, isPublic, slides,
    } = req.body;
    const presentation = await createPresentation({
      author: user._id,
      name,
      topic,
      isPublic,
      slides: slides || [{
        textFields: [],
        images: [],
        backgroundColor: '#ffffff',
        backgroundImage: null,
      }],
    });
    res.status(200).send(getPresentationInfo(presentation));
  } catch (e) {
    res.status(500).end();
  }
};
