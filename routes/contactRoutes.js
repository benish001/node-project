const express = require('express');
const router =  express.Router();
const {getcontacts,createContacts,getContactsById,updateContactsById,deleteContactsById}=require('./../controllers/contactControllers')

router.route('/getAllContacts').get(getcontacts)
router.route('/createContact').post(createContacts)
router.route('/getContactById/:id').get(getContactsById)
router.route('/updateContactById/:id').put(updateContactsById)
router.route('/deleteContactById/:id').delete(deleteContactsById)

module.exports=router;