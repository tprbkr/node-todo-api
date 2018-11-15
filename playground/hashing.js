
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
	id: 10
};

var token = jwt.sign(data, 'abc123');
console.log(token);

var decode = jwt.verify(token, 'abc123');
console.log('decoded token:', decode);


// this token-hashing can be replaced with simple JWT as above
// const{SHA256} = require('crypto-js');
// var message = 'I am user prabhakar';
// var hash = SHA256(message).toString();
// console.log(`Message: ${message} \n Hash : ${hash}`);

// var data = {
// 	id: 4
// };

// var token = {
// 	data,
// 	hash : SHA256(JSON.stringify(data)+'some secrete').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();

// var resulthash =  SHA256(JSON.stringify(data)+'some secrete').toString();
// if (resulthash === token.hash){
// 	console.log('data was not changed');
// } else {
// 	console.log('data was changed, do not trust');
// }
