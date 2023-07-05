import Presentation from '../model';

export default (id, presentation) => Presentation
  .findByIdAndUpdate(id, presentation, { new: true });
