import Presentation from '../model';

export default () => Presentation.find({ isPublic: true }).populate('author');
