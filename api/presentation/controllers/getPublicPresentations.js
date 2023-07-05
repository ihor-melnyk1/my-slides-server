import getPresentationInfo from '../../../utils/getPresentationInfo';
import getUserInfo from '../../../utils/getUserInfo';
import getPublicPresentations from '../queries/getPublicPresentations';

export default async (req, res) => {
  try {
    const presentations = await getPublicPresentations();
    const result = presentations.map((presentation) => ({
      ...getPresentationInfo(presentation),
      author: getUserInfo(presentation.author),
    }));
    res.status(200).send(result);
  } catch (e) {
    res.status(500).end();
  }
};
