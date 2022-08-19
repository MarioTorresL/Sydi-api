const { generateJWT } = require("../helpers/jwt");

const bcrypt = require("bcryptjs");

const models = require("../database/models");

const getEmployee = async (req, res) => {
  try {
    const users = await models.Employees.findAll({
      include: [
        {
          model: models.Branchs,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json({
      message: "Get all employees",
      data: users,
    });
  } catch (e) {
    res.status(500).json({
      message: "Bad Request",
      error: e,
    });
  }
};

const postEmployee = async (req, res) => {
  try {
    const {rut, BranchId } = req.body;

    const verifEmployee = await models.Users.findOne({
      where: { rut: rut },
    });
    if (verifEmployee) {
      return res.status(400).json({ message: "Employee is registered" });
    }

    const verifyBranch = await models.Branchs.findByPk(BranchId);
    if (!verifyBranch) {
      return res.status(400).json({ message: "Branch not found" });
    }

    

  } catch (e) {
    res.status(500).json({
      message: "Bad request",
      error: e,
    });
  }
};

const putEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const { firstName, lastName, salary, rut, direction, phone, BranchId } =
      req.body;

    const employee = await models.Employees.findByPk(id);

    if (!employee) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    //----------???????--------

    const verifyBranch = await models.Branchs.findByPk(Roleid);

    if (!verifyBranch) {
      return res.status(404).json({
        message: "Branch not found",
      });
    }

    const updateUser = await user.update({ ...req.body });

    res.status(200).json({
      message: "Employee update",
      data: updateUser,
    });

    //--------????-----
  } catch (e) {
    res.status(500).json({
      message: "Bad request",
      error: e,
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;

    const employee = await models.Employees.findByPk(id);

    //--------??????------

    if (!employee) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    //--------?????-----

    await employee.destroy();

    res.status(202).json({
      message: "Employee removed",
    });
  } catch (e) {
    res.status(500).json({
      message: "Bad request",
      error: e,
    });
  }
};

module.exports = { getEmployee, postEmployee, putEmployee, deleteEmployee };
