const {generateJWT} = require('../helpers/jwt');

const bcrypt = require('bcryptjs');

const models = require('../database/models');

const getUser = async (req, res) => {
  try {
    const users = await models.Users.findAll();

    res.status(200).json({
      message: 'Get all users',
      data: users
    })

  } catch (e) {
    res.status(500).json({
      message: 'Bad Request',
      error: e
    })
  }
}

const postUser = async (req, res) => {
  try {

    const { firstName, lastName, email, password, image, RoleId } = req.body;

    const verifyUser = await models.Users.findOne({ where: { email: email } });
    if (verifyUser) {
      return res.status(400).json({ message: 'User is registered' });
    }

    const verifyRole = await models.Roles.findByPk(RoleId);
    if (!verifyRole) {
      return res.status(400).json({ message: 'Role not found' })
    }

    const hash = bcrypt.hashSync(password, 8);

    const user = await models.Users.create({ ...req.body, image: 'noImage', password:hash});
    
    //token
    const token = await generateJWT(user.id)

    res.json({
      message: 'User created',
      token:token
    });

  } catch (e) {
    res.status(500).json({
      message: 'Bad request',
      error: e
    });
  }
}

const putUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { firstName, lastName, password, image, RoleId } = req.body;

    const user = await models.Users.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    const verifyRole = await models.Roles.findByPk(RoleId);

    if (!verifyRole) {
      return res.status(404).json({
        message: 'Role not found'
      })
    }

    const updateUser = await user.update({ ...req.body })

    res.status(200).json({
      message: 'User update',
      data: updateUser
    })

  } catch (e) {
    res.status(500).json({
      message: 'Bad request',
      error: e
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await models.Users.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    await user.destroy();

    res.status(202).json({
      message: 'User removed'
    });

  }catch(e){
    res.status(500).json({
      message: 'Bad request',
      error: e
    });
  }
}

module.exports = { getUser, postUser, putUser, deleteUser }
