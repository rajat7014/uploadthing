// import { connectToDatabase } from '@/lib/mongodb'
// import ImageModel from '@/models/ImageModel'
// import { createUploadthing, type FileRouter } from 'uploadthing/next'
// import { UploadThingError } from 'uploadthing/server'

// connectToDatabase()
// const f = createUploadthing()

// const auth = (req: Request) => ({ id: 'fakeId' }) // Fake auth function

// // FileRouter for your app, can contain multiple FileRoutes
// export const ourFileRouter = {
//   // Define as many FileRoutes as you like, each with a unique routeSlug
//   imageUploader: f({
//     image: {
//       /**
//        * For full list of options and defaults, see the File Route API reference
//        * @see https://docs.uploadthing.com/file-routes#route-config
//        */
//       maxFileSize: '4MB',
//       maxFileCount: 1,
//     },
//   })

//     // Set permissions and file types for this FileRoute
//     .middleware(async ({ req }) => {
//       // This code runs on your server before upload
//       const user = await auth(req)

//       // If you throw, the user will not be able to upload
//       if (!user) throw new UploadThingError('Unauthorized')

//       // Whatever is returned here is accessible in onUploadComplete as `metadata`
//       return { userId: user.id }
//     })

//     .onUploadComplete(async ({ metadata, file }) => {
//       // This code RUNS ON YOUR SERVER after upload
//       console.log('Upload complete for userId:', metadata.userId)

//       console.log('file url', file, file.url)

//       // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
//       return { uploadedBy: metadata.userId }
//     }),

// } satisfies FileRouter

// export type OurFileRouter = typeof ourFileRouter

import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { connectToDatabase } from '@/lib/mongodb'
import File from '@/models/File' // Import the Mongoose model

const f = createUploadthing()

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } }).onUploadComplete(
    async ({ file }) => {
      await connectToDatabase() // Ensure DB connection

      console.log('UploadThing File Response:', file)

      const permanentUrl = `https://uploadthing.com/f/${file.key}`

      // Save file details to MongoDB
      const newFile = await File.create({
        url: permanentUrl,
        filename: file.name,
        fileType: file.type,
      })

      console.log('File saved to database:', newFile)
      return { url: permanentUrl }
    }
  ),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
