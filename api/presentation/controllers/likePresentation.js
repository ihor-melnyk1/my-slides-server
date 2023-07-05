import editPresentation from '../queries/editPresentation';
import getPublicPresentations from '../queries/getPublicPresentations';

export default async (req, res) => {
  try {
    const { user } = res.locals;
    const { presentationId } = req.body;
    const presentations = await getPublicPresentations();
    const presentation = presentations.find(({ _id }) => _id.toString() === presentationId);
    if (!presentation) {
      return res.status(400).end();
    }
    let likedUsers = [...presentation.toObject().likedUsers];
    console.log(likedUsers);
    const currentUser = likedUsers.find((userId) => userId.toString() === user._id.toString());
    console.log(user._id);
    console.log(currentUser);
    if (currentUser) {
      likedUsers = likedUsers.filter((userId) => userId.toString() !== user._id.toString());
    } else {
      likedUsers.push(user._id);
    }
    const result = await editPresentation(presentation._id, { likedUsers });
    res.status(200).send(result);
  } catch (e) {
    res.status(500).end();
  }
};
