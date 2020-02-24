const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
       email: { type: String,
                unique: true,
                required: true
              },
    passwordHash: { type: String,
                    required: true
              }
});


mongoose.model('user', userSchema);