import Presentation from '../model';

export default (userId) => Presentation.find({ author: userId });
