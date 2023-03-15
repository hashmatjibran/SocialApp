exports.posts=function(request , response)
{
    return response.end('<h1>This is Posts Page</h1>');
}
exports.myPosts = function (request , response) {

    return response.end('<h1>Your Posts</h1>');
  }