const models = require("../database/models");

const getCompany = async (req, res) => {
  try {
    const companies = await models.Companies.findAll();

    res.status(200).json({
      message: "Get all users",
      data: companies,
    });
  } catch (e) {
    res.status(500).json({
      message: "Bad Request",
      error: e,
    });
  }
};

const postCompany = async (req, res) => {
  try {
    const { name, direction, rut, status } = req.body;

    const verifyCompany = await models.Companies.findOne({ where: { name: name } });

    if (verifyCompany) {
      return res.status(400).json({ message: "Company is registered" });
    }
    //????????
    const verifyUser = await models.Users.findByPk(RoleId);

    if (!verifyUser) {
      return res.status(400).json({ message: "User not found" });
    }
    /////?????

    const company = await models.Company.create({ ...req.body });

    res.json({
      message: "User created",
      data: company,
    });
  } catch (e) {
    res.status(500).json({
      message: "Bad request",
      error: e,
    });
  }
};

const putCompany = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, direction, rut, status } = req.body;

    const company = await models.Companies.findByPk(id);

    if (!company) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    // ???????
    const verifyUser = await models.Users.findByPk(RoleId);

    if (!verifyUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    // ???????

    const updateCompany = await company.update({ ...req.body });

    res.status(200).json({
      message: "Company update",
      data: updateCompany,
    });
  } catch (e) {
    res.status(500).json({
      message: "Bad request",
      error: e,
    });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const id = req.params.id;

    const company = await models.Companies.findByPk(id);

    if (!company) {
      return res.status(404).json({
        message: "company not found",
      });
    }

    await company.destroy();

    res.status(202).json({
      message: "Company removed",
    });
  } catch (e) {
    res.status(500).json({
      message: "Bad request",
      error: e,
    });
  }
};

module.exports = { getCompany, postCompany, putCompany, deleteCompany };
