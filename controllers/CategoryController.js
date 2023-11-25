import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

const CreateCategoryController = async (req, res) => {  
  try {
    const { name } = req.body;
    if (!name) {
      res.status(404).send({
        success: false,
        message: "name is required",
      });
    }

    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      res.status(200).send({
        success: true,
        message: "This category is already exist",
      });
    }

    //new category

    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "create category successfully",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in categoryController" + error,
    });
  }
};

const UpdateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const willBeUpdateCategory = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );

    res.status(201).send({
      success: true,
      message: "Update Category Sucessfully",
      willBeUpdateCategory,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in UpdateCategoryController" + error,
    });
  }
};

const Categories = async(req,res)=>{
    try {
        const categories = await categoryModel.find({});
        res.status(201).send({
            success : true,
            message : 'all categories',
            categories,
        })
    } catch (error) {
        res.status(500).send({
            success : false,
            message : 'error in Categories controller' +  error
        })
    }
}

const SingleCategory = async (req,res) =>{
     try {
      const {slug} = req.params;
      const singleCategory = await categoryModel.findOne({slug : slug});
      res.status(200).send({
        success : true,
        message : 'This is single category',
        singleCategory
      })
     }catch (error) {
      res.status(500).send({
          success : false,
          message : 'error in SingleCategory controller' +  error
      })
  }
}

const DeleteCategory = async(req,res) =>{
  try {
    const {id} = req.params;
    const deletedCategory = await categoryModel.findByIdAndDelete(id);
    res.status(202).send({
      success : true,
      message : 'this categpry is deleted',
      deletedCategory
    })
  } catch (error) {
    res.status(500).send({
        success : false,
        message : 'error in delete Category controller' +  error
    })
}
}

export  {
  CreateCategoryController,
  UpdateCategoryController,
  Categories,
  SingleCategory,
  DeleteCategory
};
