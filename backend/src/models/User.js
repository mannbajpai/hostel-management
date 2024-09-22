import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  rollno: {
    type: String,
  },
  role: {
    type: String,
    enum: ['student', 'hostel_admin', 'department_admin'],
    required: true
  }
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', userSchema);

export default User;