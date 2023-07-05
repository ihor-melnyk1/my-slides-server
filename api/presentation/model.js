import mongoose from 'mongoose';

const { Schema } = mongoose;

const Presentation = new Schema({
  author: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  slides: { type: Array, required: true },
  isPublic: { type: Boolean, required: true },
  name: { type: String, required: true },
  topic: { type: String, required: true },
  likedUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

export default mongoose.model('Presentation', Presentation);
