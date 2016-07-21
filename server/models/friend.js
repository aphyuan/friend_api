var mongoose = require('mongoose');
var FriendSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

mongoose.model('friendDatabase', FriendSchema);
// Validations
FriendSchema.path('color').required(true, 'Color cannot be blank');
FriendSchema.path('weight').required(true, 'Weight cannot be blank');
FriendSchema.path('name').required(true, 'Name cannot be blank');
