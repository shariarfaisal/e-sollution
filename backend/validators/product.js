const fs = require('fs')
const multer = require('multer');
const upload = multer({dest: 'uploads/'})


const createValidator = ({ name, description, price, file, fileError }) => {
  const error = {}

  if(!name) error.name = "Name required!"
  else if(name.length > 100) error.name = "Name must be in 100 characters!"

  if(description.length > 1000) error.description = "Description must be in 1000 characters!"
  if(!price) error.price = "Price required!"
  // else if(typeof price !== 'number') error.price = "Price must be a Number!"

  if(fileError) error.image = fileError
  else if(!file) error.image = "Image required!"
  else if(file.size > 10485760) error.image = "Image max size is 10MB!"

  const isValid = Object.keys(error).length === 0

  // Delete image file from uploads folder...
  if(!isValid && file){
    fs.unlink(`./uploads/${file.filename}`,err=>{
      if(err){
        console.log(err);
        return
      }
    })
  }

  return { error, isValid }
}

module.exports = {
  createValidator
}
