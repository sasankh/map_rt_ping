// retrive location
function retriveLocation(req, res){
  res.status(200).send({"location":{"lat":37.478855, "lng":-122.180135}});
}

//exporting function from module
module.exports.retriveLocation = retriveLocation;
