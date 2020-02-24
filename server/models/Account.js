const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema ({
      nickName: { type: String,
                  unique: true,
                  required: true
                },
      password: { type: String,
                  required: true
                    },
      email: { type: String,
               default: ''
             },
    
      region: {type: String,
               required: true
              },
      status: {type: String,
                 required: true,
                 default: 'NOT_SOLD'
      },
      firstName: {type:String},
      lastName: {type:String},
      dateOfSelling: {type: String}
});


mongoose.model('account', accountSchema);