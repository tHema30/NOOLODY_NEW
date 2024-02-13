// Multer configuration for handling file uploads
// import multer from 'multer'

// const storage = multer.diskStorage({
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// export const upload = multer({ storage: storage });


import multer  from 'multer';
import fs from 'fs/promises';


const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = 'uploads/';
    await fs.mkdir(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});
const upload = multer({ storage });

export default upload;