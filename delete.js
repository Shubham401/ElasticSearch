var client = require('./connection.js');

//It will delete our Index
client.indices.delete({index: 'gov'},function(err,resp,status) {  
  console.log("delete",resp);
});