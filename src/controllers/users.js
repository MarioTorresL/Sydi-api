const models = require('../database/models');

const getUser = async (req, res) => {
  try {
    const users = await models.Users.findAll();

    res.status(200).send({
      message: 'Get all users',
      data: users
    })

  } catch (e) {
    res.status(500).send({
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
      return res.status(400).send({ message: 'User is registered' });
    }

    const verifyRole = await models.Roles.findByPk(RoleId);

    if (!verifyRole) {
      return res.status(400).send({ message: 'Role not found' })
    }

    const user = await models.Users.create({ ...req.body, image: 'noImage' });

    res.send({
      message: 'User created',
      data: user.toJSON()
    });

  } catch (e) {
    res.status(500).send({
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
      return res.status(404).send({
        message: 'User not found'
      });
    }

    const verifyRole = await models.Roles.findByPk(RoleId);

    if (!verifyRole) {
      return res.status(404).send({
        message: 'Role not found'
      })
    }

    const updateUser = await user.update({ ...req.body })

    res.status(200).send({
      message: 'User update',
      data: updateUser.toJSON()
    })

  } catch (e) {
    res.status(500).send({
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
      return res.status(404).send({
        message: 'User not found'
      });
    }

    await user.destroy();

    res.status(202).send({
      message: 'User removed'
    });

  } catch (e) {

    res.status(500).send({
      message: 'Bad request',
      error: e
    });
  }
}

module.exports = { getUser, postUser, putUser, deleteUser }