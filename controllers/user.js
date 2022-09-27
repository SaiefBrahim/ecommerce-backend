const User = require("../models/users");
const Address = require("../models/address");

exports.addUser = async (req, res, next) => {
  var address = new Address(req.body.address);
  await address.save().catch((err) => {
    console.error(err);
    return res.status(403).json({ err: err });
  });

  var user = new User({ ...req.body, address: address._id });
  user
    .save()
    .then((data) => {
      return res.status(201).json({
        success: true,
        msg: "Successful created new User",
        data: data,
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(403).json({ err: err });
    });
};
exports.getUsers = (req, res, next) => {
  req.query.populate === "address"
    ? User.find()
        .populate("address")
        .then((data) => {
          return res.status(200).json({ success: true, data: data });
        })
        .catch((err) => {
          console.error(err);
          return res.status(403).json({ err: err });
        })
    : User.find()
        .then((data) => {
          return res.status(200).json({ success: true, data: data });
        })
        .catch((err) => {
          console.error(err);
          return res.status(403).json({ err: err });
        });
};
exports.getUserId = (req, res, next) => {
  req.query.populate === "address"
    ? User.findById(req.params.id)
        .populate("address")
        .then((data) => {
          return res.status(200).json({ success: true, data: data });
        })
        .catch((err) => {
          console.error(err);
          return res.status(403).json({ err: err });
        })
    : User.findById(req.params.id)
        .then((data) => {
          return res.status(200).json({ success: true, data: data });
        })
        .catch((err) => {
          console.error(err);
          return res.status(403).json({ err: err });
        });
};
exports.updateUserId = (req, res, next) => {
  User.findById(req.params.id)
    .then((data) => {
      Address.findByIdAndUpdate(data.address, { ...req.body.address }).then(
        () => {
          User.findByIdAndUpdate(req.params.id, {
            ...req.body,
            address: req.body.address._id,
          }).then((result) => {
            return res.status(200).json({ success: true, data: result });
          });
        }
      );
    })
    .catch((err) => {
      console.error(err);
      return res.status(404).json({ err: "No User Found" });
    });
};
exports.deleteUserId = (req, res, next) => {
  User.findById(req.params.id)
    .then((data) => {
      Address.findByIdAndDelete(data.address).then(() => {
        User.findByIdAndDelete(req.params.id).then((result) => {
          return res.status(200).json({ delete: true, data: result });
        });
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(404).json({ err: "No User Found" });
    });
};