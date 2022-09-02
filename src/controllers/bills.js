const models = require("../database/models");

const getBill = async (req, res) => {
    try {
        const bills = await models.Bills.findAll();

        res.status(200).json({
            message: "Get all bill",
            data: bills
        });
    } catch (e) {
        res.status(500).json({
            message: "Bad request",
            error: e,
        });
    }
};

const postBill = async (req, res) => {
    try {
        const { name } = req.body;

        const verifyBill = await models.Bills.findOne({
            where: { name: name },
        });

        if (verifyBill) {
            return res.status(400).json({ message: "Bill is registered" });
        }
        const bill = await models.Bill.create({ ...req.body });

        res.json({
            message: "Bill Created",
            data: bill,
        });

    } catch (e) {
        res.status(500).json({
            message: "Bad request",
            error: e,
        });
    }
};

const putBill = async (req, res) => {
    try {
        const id = req.params.id;

        const bill = await models.Bills.findByPk(id);

        if (!bill) {
            return res.status(404).json({
                message: "Bill update",
                data: updateBill,
            });
        }
    } catch (e) {
        res.status(500).json({
            message: "Bad request",
            error: e,
        });
    }
};

const deleteBill = async (req, res) => {
    try {
        const id = req.params.id;

        const bill = await models.Bills.findByPk(id);

        if (!bill) {
            return res.status(404).json({
                message: "Bill not found",
            });
        }

        await bill.destroy();

        res.status(202).json({
            message: "Bill removed",
        });
    } catch (e) {
        res.status(500).json({
            message: "Bad request",
            error: e,
        });
    }
};

module.exports = { getBill, postBill, putBill, deleteBill };