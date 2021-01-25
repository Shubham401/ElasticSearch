var client = require('./connection.js');

//It will create our Index
client.indices.create({  
  index: 'gov'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});