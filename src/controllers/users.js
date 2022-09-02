const { generateJWT } = require("../helpers/jwt");

const bcrypt = require("bcryptjs");

const models = require("../database/models/");

const getUser = async (req, res) => {
  try {
    const users = await models.Users.findAll({
      include:[{
        model: models.Roles,
        attributes: ['name']
  
      }]
    });

    res.status(200).json({
      message: "Get all users",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      message: "Bad Request",
      error: err,
    });
  }
};

const postUser = async (req, res) => {
  try {
  
    const { email, password, RoleId } = req.body;

    const verifyUser = await models.Users.findOne({ where: { email: email } });

    if (verifyUser) {
      return res.status(400).json({ message: "User is registered" });
    }
    const verifyRole = await models.Roles.findByPk(RoleId);
    if (!verifyRole) {
      return res.status(400).json({ message: "Role not found" });
    }

    const hash = bcrypt.hashSync(password);

    const user = await models.Users.create({
      ...req.body,
      image: "noImage",
      password: hash,
    });

    //token
    const token = await generateJWT(user.id);

    res.status(201).json({
      message: "User created",
      token: token,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "Bad request",
      error: err,
    });
  }
};

const putUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await models.Users.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }



    const updateUser = await user.update({ ...req.body });

    res.status(200).json({
      message: "User update",
      data: updateUser,
    });
  } catch (err) {
    res.status(500).json({
      message: "Bad request",
      error: err,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await models.Users.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await user.destroy();

    res.status(204).json({
      message: "User removed",
    });
  } catch (err) {
    res.status(500).json({
      message: "Bad request",
      error: err,
    });
  }
};

module.exports = { getUser, postUser, putUser, deleteUser };
