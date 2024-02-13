
import DressDesign from '../models/dressDesignModel.js';
import cloudinary from '../utils/imagecloudinary.js';
import upload from '../utils/multer.js';

const uploadDressDesign = async (req, res) => {
  try {
    const { category, description } = req.body;
    // Use the original filename (if available) or generate a unique identifier
    const publicId = req.file.originalname || `dress_${Date.now()}`;
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `thaiyal/${category}`,
      public_id: publicId,
    });
    // Save dress design details to MongoDB
    const dressDesign = new DressDesign({
      category,
      description,
      designImage: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });

    const savedDressDesign = await dressDesign.save();
    res.status(201).json({
      success: true,
      savedDressDesign,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Controller to get all dress designs
const getAllDressDesigns = async (req, res) => {
  try {
    const dressDesigns = await DressDesign.find();
    res.status(200).json(dressDesigns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller to get a specific dress design by ID
const getDressDesignByCat = async (req, res) => {
  const {category} = req.body;
  try {
    const dressDesign = await DressDesign.find();

    if (!dressDesign) {
      return res.status(404).json({ message: 'Dress Design not found' });
    }

    res.status(200).json(dressDesign);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message:error});
  }
};



  // Edit a dress design by ID
 const editDesign = async (req, res) => {
    try {
      const { category } = req.params;
      const updatedDesign = await DressDesign.find(category, req.body, { new: true });

      if (!updatedDesign) {
        return res.status(404).json({ error: 'Design not found' });
      }

      res.json(updatedDesign);
    } catch (error) {
      console.error('Error editing dress design:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

 const  deleteDesign = async (req, res) => {
    try {
      const { category } = req.params;
      const deletedDesign = await DressDesign.find(category);

      if (!deletedDesign) {
        return res.status(404).json({ error: 'Design not found' });
      }

      res.json({ message: 'Design deleted successfully' });
    } catch (error) {
      console.error('Error deleting dress design:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };





export {

       uploadDressDesign,
       getAllDressDesigns,
      getDressDesignByCat,
      editDesign,
      deleteDesign
              };