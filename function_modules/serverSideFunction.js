// retrive all data from the collection
function retriveAllData(req, res){
  console.log(req.ip + " is the ip");
  res.status(200).send({"location":{"lat":37.478855, "lng":-122.180135}});
}

//exporting function from module
module.exports.retriveAllData = retriveAllData;
