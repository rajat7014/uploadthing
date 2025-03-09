import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

export const connectToDatabase = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log('Database already connected')
      return
    }

    await mongoose.connect(MONGODB_URI)
    console.log('✅ DB Connected Successfully')
  } catch (error) {
    console.error('❌ DB Connection Error:', error)
    process.exit(1)
  }
}
