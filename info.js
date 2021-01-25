var client = require('./connection.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

//To check how many documents there are in our index
client.count({index: 'gov',type: 'constituencies'},function(err,resp,status) {  
  console.log("constituencies",resp);
});