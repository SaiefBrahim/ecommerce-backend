const States = require("../models/states");
const Countries = require("../models/countries");

exports.addState = async (req, res, next) => {
  const State = new States({ ...req.body });
  State.save()
    .then((data) => {
      return res.status(201).json({ success: true, data: data });
    })
    .catch((error) => {
      return res.status(400).json({ success: false, error: error });
    });
};

exports.addStates = (req, res, next) => {
  try {
    const statesArray = [];
    req.body.forEach(async (state) => {
      const State = new States({
        ...state,
      });
      State.save();
      statesArray.push(State);
    });
    res
      .status(201)
      .json({ success: true, saved: statesArray.length, data: statesArray });
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
};

exports.getStates = (req, res, next) => {
  if (req.query.populate === "country") {
    States.find()
      .populate("Countries", "_id", "country")
      .then((data) => {
        return res.status(200).json({ success: true, data: data });
      })
      .catch((error) => {
        return res.status(400).json({ success: false, error: error });
      });
  }
  States.find()
    .then((data) => {
      return res.status(200).json({ success: true, data: data });
    })
    .catch((error) => {
      return res.status(400).json({ success: false, error: error });
    });
};

exports.getStatesByCountry = async (req, res, next) => {
  if (req.query.populate === "country") {
    States.find({ country: req.query.country })
      .populate("Countries", "_id", "country")
      .then((data) => {
        return res.status(200).json({ success: true, data: data });
      })
      .catch((error) => {
        return res.status(400).json({ success: false, error: error });
      });
  }
  States.find({ country: req.query.country })
    .then((data) => {
      return res.status(200).json({ success: true, data: data });
    })
    .catch((error) => {
      return res.status(400).json({ success: false, error: error });
    });
};
exports.getState = (req, res, next) => {
  if (req.query.populate === "country") {
    States.findById(req.params.id)
      .populate("Countries", "_id", "country")
      .then((data) => {
        return res.status(200).json({ success: true, data: data });
      })
      .catch((error) => {
        return res.status(400).json({ success: false, error: error });
      });
  }
  States.findById(req.params.id)
    .then((data) => {
      return res.status(200).json({ success: true, data: data });
    })
    .catch((error) => {
      return res.status(400).json({ success: false, error: error });
    });
};
exports.updateState = async (req, res, next) => {
  States.findByIdAndUpdate(
    req.params.id,
    { ...req.body }
      .then((result) => {
        return res.status(200).json({ success: true, data: result });
      })
      .catch((error) => {
        return res.status(400).json({ success: false, error: error });
      })
  ).catch((err) => {
    return res.status(400).json({ success: false, error: err });
  });
};
exports.deleteState = (req, res, next) => {
  States.findByIdAndDelete(req.params.id)
    .then((data) => {
      return res.status(200).json({ deleted: true, data: data });
    })
    .catch((error) => {
      return res.status(400).json({ deleted: false, error: error });
    });
};
