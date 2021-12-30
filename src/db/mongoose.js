const mongoose = require('mongoose');
const validator = require('validator');

// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

// Create User model
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a postive number');
      }
    },
  },
});

const Task = mongoose.model('Task', {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

// Create new instance of user object
const me = new User({
  name: 'Mj',
  email: 'dddhu@',
});

const task1 = new Task({
  description: 'Learn Spring boot',
  completed: false,
});

// Save to DB
me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log('Error!', error);
  });

// task1
//   .save()
//   .then(() => {
//     console.log(task1);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
