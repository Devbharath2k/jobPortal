const mongoose = require("mongoose");
const Sehema = require("../Module/SehemaEmployer");

const EmployerPostMethod = async (req, res) => {
  const {
    fname,
    lname,
    email,
    password,
    phone,
    salary,
    company,
    experience
  } = req.body;
  try {
    const newUser = new Sehema({
      fname,
      lname,
      email,
      password,
      phone,
      salary,
      company,
      experience
    });
    const existingUser = await Sehema.findOne({ email });

    if (existingUser) {
      return res.status(200).json({
        message: "User already exists"
      });
    }
    // const hashedPassword = await bcrypt.hash(password, 10);
    // s;
    // newUser.password = hashedPassword;

    await newUser.save();

    return res.status(201).json({
      message: "User created successfully",
      data: newUser
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
};

//getting Method:

const EmployergetMethod = async (req, res) => {
  try {
    const user = await Sehema.find({});

    res.status(200).json({
      message: "successfully retrieved",
      data: user
    });
  } catch (error) {
    console.log(error.message);
  }
};

// gettingid:
const EmployergettingID = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await Sehema.findById(id);
    res.status(200).json({
      message: "Getting id from user",
      data: users
    });
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      message: error
    });
  }
};

//putMethod

const EmployerPutMethod = async (req, res) => {
  const { id } = req.params;

  try {
    const users = await Sehema.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      message: "users updated successfully",
      data: users
    });
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      message: error
    });
  }
};
//Delete Method:

const EmployerdeleteMethod = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await Sehema.findByIdAndDelete(id);

    res.status(200).json({
      message: "Delete Successfully",
      data: users
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Method not found", error: error });
  }
};

module.exports = { EmployerPostMethod, EmployergetMethod, EmployergettingID, EmployerPutMethod, EmployerdeleteMethod };
