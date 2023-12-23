
import computer_item_model from "../models/computer_items_model.js";
import slugify from "slugify";

const create_computer_item_controller = async (req,res) =>{
  try {
    //destructure properties from req.body
    const {title,specification_property,specification_value,quantity,price,model,brand} = req.body;
    
    //create slug from title
    const slug = slugify(title);

     //create a computer_item_product
     const computer_item = new computer_item_model({title,slug,specification_property,specification_value,quantity,price,model,brand})
     if (req.file) {
        product.photo.data = req.file.buffer;
        product.photo.contentType = req.file.mimetype;
      }

     //save product   
     await computer_item.save();
     
     res.status(201).send({
        success: true,
        message: `${title} is created`,
        computer_item,
     })

  } catch (error) {
     res.status(505).send({
        success : false,
        message : error.message,

     })
  }
}


const get_computer_item_controller = async (req,res) =>{
    try {
        const computer_items = await computer_item_model.find(req.query).select('-photo')
        res.status(201).send({
          success : true,
          message : 'computer_items',
          computer_items
        })
    } catch (error) {
        res.status(500).send({
            message : "error in getProductController",
            error : error.message
        })  
    }
}


const update_computer_item_controller = async (req,res) =>{
    try {
        const { title, specification_value, specification_property, price, category, subcategory,brand, shipping, quantity ,model} =
          req.body;
        const slug = slugify(title);
    
        const update_computer_item = await computer_item_model.findByIdAndUpdate(req.params.id , 
          {...req.body , slug},{new : true})
          await products.save();
    
        res.status(201).send({
          success : true,
          message : `${title} is updated`,
          update_computer_item
        })
    
      } catch (error) {
         res.status(500).send({
          message : "error in updateProductController",
          error : error.message
         })
      }

}

const delete_computer_item_controller = async (req,res) =>{
try {
     const delete_computer_item = await computer_item_model.findByIdAndDelete({_id : req.params.id});
     res.status(200).send({
      success : true,
      message : `product is delete`,
      delete_computer_item
     })
   } catch (error) {
    res.status(500).send({
     message : "error in deleteProductController",
     error : error.message
    })
 }
}


const single_computer_item_controller = async(req,res)=>{

    try {
      const single_computer_item = await computer_item_model.findOne({slug : req.params.slug}).select('-photo')
      res.status(200).send({
       success : true,
       message : "single_computer_item",
       single_computer_item
      })
    } catch (error) {
     res.status(500).send({
      message : "error in getSingleProductController",
      error : error.message
     })
  }
 
 }


 const computer_item_photo_controller = async(req,res)=>{
    try {
     const computer_item_photo= await computer_item_model.findById(req.params.id).select('photo');
     if(product.photo.data){
      res.set('Content-type',computer_item_photo.photo.contentType);
      return res.status(200).send(computer_item_photo.photo.data);
    }
    } catch (error) {
     res.status(500).send({
      message : "error in productPhotoController",
      error : error.message
     })
  }
 }
 


export{
    create_computer_item_controller,
    get_computer_item_controller,
    update_computer_item_controller,
    delete_computer_item_controller,
    single_computer_item_controller,
    computer_item_photo_controller,
}