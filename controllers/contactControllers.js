const asyncHandler = require('express-async-handler');

const contacts = require('../models/contactModels')


//@Desc Get All contacts
//@routes GET /api/getcontacts 
//access public

const getcontacts = asyncHandler(async(req, res) =>{
    const contact =await contacts.find()
    if(!contact){
      res.status(404);
      throw new Error('Contact Not Found')
    }
    res.status(200).json(contact);
})

//@Desc Create New contacts
//@routes POST /api/getcontacts 
//access public

const createContacts = asyncHandler(async(req, res) =>{
    console.log('the request body is:',req.body);
    const  {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400)
     throw new Error('All Fields Are Mandatory')
    }
 
    const contactDetails = await contacts.create({
        name, email, phone
    })
    res.status(201).json(contactDetails);
})

//@Desc Get contacts by Id
//@routes GET /api/getcontacts/:id
//access public

const getContactsById =asyncHandler( async(req,res)=>{
    const contactDetails = await contacts.findById(req.params.id)
    if(!contactDetails){
      res.status(404);
      throw new Error('Contact Not Found')
    }
    res.status(200).json(contactDetails)
})

//@Desc Update contacts by Id
//@routes PUT /api/getcontacts/:id
//access public
const updateContactsById = asyncHandler(async(req,res)=>{
    const contactDetails = await contacts.findById(req.params.id)
    if(!contactDetails){
      res.status(404);
      throw new Error('Contact Not Found')
    }
    const updateContactDetails = await contacts.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updateContactDetails)
})

//@Desc Delete contacts by Id
//@routes DELETE /api/getcontacts/:id
//access public

const deleteContactsById = asyncHandler(async (req, res) => {
  const contactId = req.params.id;
  
  // Find the contact by ID
  const deleteContactDetails = await contacts.findById(contactId);
  console.log("deleteContactDetails", deleteContactDetails);

  // Check if contact exists
  if (!deleteContactDetails) {
      res.status(404);
      throw new Error('Contact Not Found');
  }
  // Delete the contact
  await contacts.deleteOne({ _id: contactId }); // Assuming contacts is your Mongoose model
  res.status(200).json(deleteContactDetails);
});

module.exports = {getcontacts,createContacts,getContactsById,updateContactsById,deleteContactsById}