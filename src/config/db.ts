import mongoose from 'mongoose';
import colors from 'colors'

export const connectdb = async () => {
  try {
    
    const {connection} = await mongoose.connect(process.env.MONGO_URI)
    const url = `${connection.host}:${connection.port}`
    console.log(colors.yellow.bold(`MongoDb conectado en ${url}`))
    
  } catch (error) {
    console.log(colors.bgBlack(error.message))
    process.exit(1)
    
  }
};