import mongoose, { Schema } from "mongoose";

export interface IUser {
  name: string
  email: string
  password: string

}

const userSchema = new Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },
    email: {
    type: String,
    required: true,
    trim: true,
    unique: true  //unique, tells mongoose that there can only be one email
  },
    password: {
    type: String,
    required: true,
    trim: true
  },


})

const User = mongoose.model<IUser>('User',userSchema ) // They have two names, the first for the model name, the second for the schema name that the user model has
export default User // for use in various locations