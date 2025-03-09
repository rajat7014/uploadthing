'use client'

import { UploadButton, UploadDropzone } from '@/utils/uploadthing'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <UploadButton
        endpoint='imageUploader'
        className='bg-blue-500 border border-white-500 text-black font-semibold py-2 px-6 rounded cursor-pointer hover:bg-blue-600 transition duration-300 focus:outline-none'
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log('Files: ', res)
          alert('Upload Completed')
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`)
        }}
      />

      <UploadDropzone endpoint={'imageUploader'} />
    </main>
  )
}

// import { UploadButton } from '@uploadthing/react'
// import type { OurFileRouter } from '@/app/api/uploadthing/core'

// export default function FileUpload() {
//   return (
//     <div className='flex flex-col items-center'>
//       <UploadButton<OurFileRouter>
//         endpoint='imageUploader'
//         onClientUploadComplete={(res) => {
//           console.log('Uploaded:', res)
//           alert('Upload Successful!')
//         }}
//         onUploadError={(error) => {
//           console.error('Upload Error:', error)
//           alert('Upload Failed!')
//         }}
//       />
//     </div>
//   )
// }
