const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email field is required"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
      isAsync: false,
    },
  },
  password: {
    type: String,
    required: [true, "Password field is required"],
  },
  first_name: {
    type: String,
    required: [true, "First name field is required"],
  },
  last_name: {
    type: String,
    required: [true, "Last Name field is required"],
  },
  gender: {
    type: String,
    enum: ["Homme", "Femme"],
  },
  phone: {
    type: Number,
    required: [true, "Phone field is required"],
  },
  role: {
    type: String,
    enum: ["Admin", "Supervisor", "User"],
    default: "User",
  },
  country: {
    type: mongoose.Types.ObjectId,
    ref: "Countries",
  },
  state: {
    type: mongoose.Types.ObjectId,
    ref: "States",
  },
  address: {
    type: mongoose.Types.ObjectId,
    ref: "Addresses",
  },
  newsletter: { type: Boolean, default: false },
  verified: {
    type: Boolean,
    default: false,
  },
  verify_token: {
    type: String,
  },
  pass_reset_token: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});
UserSchema.pre("save", function (next) {
  var User = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(User.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        }
        User.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("Users", UserSchema);
