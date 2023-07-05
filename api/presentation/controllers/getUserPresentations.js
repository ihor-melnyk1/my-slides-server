import getPresentationInfo from '../../../utils/getPresentationInfo';
import getUserPresentations from '../queries/getUserPresentations';

export default async (req, res) => {
  try {
    const { user } = res.locals;
    const presentations = await getUserPresentations(user._id);
    const result = presentations.map((presentation) => ({
      ...getPresentationInfo(presentation),
    }));
    res.status(200).send(result);
  } catch (e) {
    res.status(500).end();
  }
};
