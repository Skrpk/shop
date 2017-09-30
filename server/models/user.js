import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: { type: String, unique: true, lowercase: true, index: true },
  email: String,
  password: String,
});

export default mongoose.model('User', UserSchema);
