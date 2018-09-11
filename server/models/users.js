var mongoose =require('mongoose');

var Users = mongoose.model('Users', {
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  age: {
    type: Number,
    required:true
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  }
});

module.exports={Users};
