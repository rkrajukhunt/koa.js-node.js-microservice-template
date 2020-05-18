import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  myData: {
    name: String
  }
});

export default mongoose.model('test', schema);
