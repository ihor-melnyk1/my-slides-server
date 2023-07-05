import getUserInfo from '../../../utils/getUserInfo';

export default (req, res) => {
  try {
    res.status(200).send(getUserInfo(res.locals.user));
  } catch (e) {
    res.status(500).end();
  }
};
