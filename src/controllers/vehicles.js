const models = require('../database/models');

const getAllVehicle = async (req, res)=>{
  try{

    const vehicles = await models.Vehicles.findAll();

    res.status(200).json({
      message: 'Get all vehicles',
      data: vehicles
    })

  }catch(e){
    res.status(500).json({
      message: 'Bad request',
      error: e
    })
  }
}

const getOneVehicle = async (req, res)=>{
  try{

    const id = req.params.id;
    console.log('id', id)

    const vehicle = await models.Vehicles.findByPk(id);
    
    if(!vehicle){
      return res.status(400).json({message:'Vehicle not found'})
    }

    res.status(200).json({
      message:'Get One vehicle',
      data:vehicle
    })

  }catch(e){
    res.status(500).json({
      message:'Bad request',
      error: e
    })
  }
}

const postVehicle = async (req, res)=>{
  try{

    const { licence_plate } = req.body;

    const verifyVehicle = await models.Vehicles.findOne({ where:{ licence_plate } })

    if(verifyVehicle){
    return res.status(400).json({message:'Vehicle has already been registered'})
    }

    const vehicle = await models.Vehicles.create({...req.body})
    console.log('vehicle', vehicle)
    res.status(200).json({
      message: 'Vehicle created',
      data: vehicle
    })

  }catch(e){
    res.status(500).json({
      message:'Bad request',
      error: e
    })
  }
}

const putVehicle = async (req, res)=>{
  try{
    
    const id = req.params.id;

    const vehicle = await models.Vehicles.findByPk(id);
    
    if(!vehicle){
      return res.status(404).json({message:'Vehicle not found'})
    }

    const updateVehicle = await vehicle.update({...req.body}) 
    
    res.status(200).json({
      message: 'Vehicle update',
      data: updateVehicle
    })
  }catch(e){
    res.status(500).json({
      message: 'Bad request',
      error: e
    })
  }
}

const deleteVehicle = async (req, res)=>{
  try{

    const id = req.params.id;

    const vehicle = await models.Vehicles.findByPk(id);

    if (!vehicle) {
      return res.status(404).json({
        message: 'Vehicle not found'
      });
    }

    await vehicle.destroy();

    res.status(202).json({
      message: 'Vehicle removed'
    });
  }catch(e){
    return status(500).json({
      message:'Bad request',
      error: e
    })
  }
}

module.exports = { 
  getAllVehicle, 
  getOneVehicle, 
  putVehicle, 
  postVehicle, 
  deleteVehicle
};
