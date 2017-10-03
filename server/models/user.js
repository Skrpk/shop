import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-as-promised';

const UserSchema = new Schema({
  username: { type: String, unique: true, lowercase: true, index: true },
  email: String,
  password: String,
});

UserSchema.methods.comparePasswords = function comparePasswords(password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model('User', UserSchema);
