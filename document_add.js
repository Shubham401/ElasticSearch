var client = require('./connection.js');

//To add document in our Index
client.index({  
  index: 'gov',
  id: '1',
  type: 'constituencies',
  body: {
    "ConstituencyName": "Ipswich",
    "ConstituencyID": "E14000761",
    "ConstituencyType": "Borough",
    "Electorate": 74499,
    "ValidVotes": 48694,
  }
},function(err,resp,status) {
    console.log(resp);
});