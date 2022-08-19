const models = require("../database/models");

const getBranch = async (req, res) => {
  try {
    const branchs = await models.Branchs.findAll({
      include: [
        {
          model: models.Companies,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json({
      message: "Get all branchs",
      data: branchs,
    });
  } catch (e) {
    res.status(500).json({
      message: "Bad Request",
      error: e,
    });
  }
};

const postBranch = async (req, res) => {
  try {
    const { CompanyId } = req.body;

    const verifyBranch = await models.Branchs.findOne({
      where: { CompanyId: CompanyId },
    });

    if (verifyBranch) {
      return res.status(400).json({ message: "Branch is registered" });
    }

    const verifyCompany = await models.Companies.findByPk(CompanyId);

    if (!verifyCompany) {
      return res.status(400).json({ message: "Company not found" });
    }

    const branch = await models.Branchs.create({ ...req.body });

    res.json({
      message: "Branch created",
      data: branch,
    });
  } catch (e) {
    res.status(500).json({
      message: "Bad request",
      error: e,
    });
  }
};

const putBranch = async (req, res) => {
  try {
    const id = req.params.id;

    const branch = await models.Branchs.findByPk(id);

    if (!branch) {
      return res.status(404).json({
        message: "Branch not found",
      });
    }

    const updateBranch = await branch.update({ ...req.body });

    res.status(200).json({
      message: "Branch update",
      data: updateBranch,
    });
  } catch (e) {
    res.status(500).json({
      message: "Bad request",
      error: e,
    });
  }
};

const deleteBranch = async (req, res) => {
  try {
    const id = req.params.id;

    const branch = await models.Branchs.findByPk(id);

    if (!branch) {
      return res.status(404).json({
        message: "Branch not found",
      });
    }

    await branch.destroy();

    res.status(202).json({
      message: "branch removed",
    });
  } catch (e) {
    res.status(500).json({
      message: "Bad request",
      error: e,
    });
  }
};

module.exports = { getBranch, postBranch, putBranch, deleteBranch };
