import mongoose, { Schema } from "mongoose";

export interface IUser {
  handle: string
  name: string
  email: string
  password: string

}

const userSchema = new Schema({
  handle: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true  
  },

  name: {
    type: String,
    required: true,
    trim: true
  },
    email: {
    type: String,
    required: true,
    trim: true,
    unique: true,  //unique, tells mongoose that there can only be one email
    lowercase: true // para forzar minusculas 
  },
    password: {
    type: String,
    required: true,
    trim: true
  },


})

const User = mongoose.model<IUser>('User',userSchema ) // They have two names, the first for the model name, the second for the schema name that the user model has
export default User // for use in various locations