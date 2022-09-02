const models = require('../database/models')

const getRole = async(req,res) => {
  try{
    const roles = await models.Roles.findAll();
    
    res.status(200).json ({
      message:'Get all roles',
      data:roles
    })
  }catch(e){
    res.status(500).send({
      message:'Bad Request', 
      error:e
    })
  }
}

const postRole = async (req,res) => {
  try{
    const name = req.body.name;

    const verifyRole = await models.Roles.findOne({where:{name:name}});

    if(verifyRole){
      return res.status(400).json({message:'name is registered'});
    }

    const role = await models.Roles.create({name:name});

    res.status(201).send({
      message: 'Role created',
      data:{id: role.id, name: role.name}
    });

  }catch(e){
    res.status(500).json({
      message:'Bad Request',
      error:e
    });
  }
}

const putRole = async (req, res) => {
  try{
    const id = req.params.id;
    const name = req.body;

    const role = await models.Roles.findByPk(id);

    if(!role){
      return res.status(404).json({
        message:'Role not found'
      });
    }

    const updateRole = await role.update(name);

    res.status(200).json({
      message: 'Role updated',
      data: updateRole.toJSON()
    })
  }catch(e){
    res.status(500).json({
      message:'Bad Request',
      error:e
    })
  }
}

const deleteRole = async (req, res) => {
  try{
    const id = req.params.id;

    const role = await models.Roles.findByPk(id);

    if(!role){
      return res.status(404).json({
        message:'Role not found'
      });
    }

    await role.destroy();

    res.status(202).json({
      message:'Role removed'
    })

  }catch(e){
    res.status(500).json({
      message:'Bad Request',
      error:e
    })
  }
}

module.exports = { getRole, postRole, putRole, deleteRole }
