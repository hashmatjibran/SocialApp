  const user=  function user (request , response) {
  return  response.end('<h1>This is user page</h1>');
}
const profile = function profile (request , response) {
    return response.end('<h2>This is User profile page</h2>')
  }

const createUser = function (request , response) { 

  return response.end('<h1> Create the USER here<h1>')
 }



exports.createUser = createUser;
exports.user = user;
 exports.profile = profile;
