// import { url } from 'inspector'
import mongoose, { Schema, Document } from 'mongoose'
interface IFile extends Document {
  url: string // This will now store `ufsUrl`
  filename: string
  fileType: string
  uploadedAt: Date
}

const FileSchema = new Schema<IFile>({
  url: { type: String, required: true },
  filename: { type: String, required: true },
  fileType: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
})

export default mongoose.models.Image || mongoose.model('Image', FileSchema)
