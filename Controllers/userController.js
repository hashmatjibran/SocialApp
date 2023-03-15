const userList = require('../Models/users');
  const mongoose = require('mongoose');
  const user=  function user (request , response) {
  return  response.end('<h1>This is user page</h1>');
}
const profile = function profile (request , response) {
    return response.end('<h2>This is User profile page</h2>')
  }

const createUser = function (request , response) { 

    const newUser= userList.create({
      name:request.body.name,
      email:request.body.email,
      password:request.body.password

    });
    return getusers(request , response);
 }

const getusers= function getusers(request ,response){

 

    const query =userList.find({});
    const arr =  query.exec()
    .then((result) => {
      return response.render('getusers',{"data":result});
      
    }).catch((err) => {
      console.log(`Error in Populating the users :${err}`);
    });

 }

 exports.deleteUser = function (request , response) {

  const query = userList.findByIdAndDelete(request.query.id);
  const res=query.exec()
  .then((result) => {

    return response.redirect('/user/users');
    
  }).catch((err) => {
    console.log(`error :${err}`)
  });

  
 }

 exports.createAccount = function(request , response){
  return response.render("createNewUser");
 }


 exports.getusers = getusers; 
exports.createUser = createUser;
exports.user = user;
 exports.profile = profile;
