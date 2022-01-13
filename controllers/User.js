import mongoose from 'mongoose';

import userSchema from '../models/user.js';

export var addUser = async (req, res) => {
    try {
        const NEW_USER = new userSchema(req.body);

        let data = NEW_USER.save();
        console.log("Cricketer ", data);

        return res.status(200).json({
            status: true,
            message: "Data saved successfully.",
            data: data
        });
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            message: "Failed to save data. Server error.",
            error: err.message
        });
    }
}

export var getUsers = async (req, res) => {
    let users = await userSchema.find({}).exec();

    if (users.length > 0) {
        return res.status(200).json({
            status: true,
            message: "Data successfully get.",
            data: users
        });
    }
    else {
        return res.status(200).json({
            status: true,
            message: "No data",
            data: []
        });
    }
}

export var getUserById = async (req, res) => {
    var id = req.params.id;

    try {
        let user = await userSchema.findOne({ _id: mongoose.Types.ObjectId(id) }).exec();

        return res.status(200).json({
            status: true,
            message: "Data successfully get.",
            data: user
        });
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            message: "Invalid id. Server error.",
            error: err.message
        });
    }
}

export var editUser = async (req,res) => {
    var id = req.params.id;

    try {
        let edit = await userSchema.findOneAndUpdate(
            { _id: mongoose.Types.ObjectId(id) },
            req.body,
            { new: true }
        ).exec();

        return res.status(200).json({
            status: true,
            message: "Data successfully edited.",
            data: edit
        });
}
    catch (err) {
        return res.status(500).json({
            status: false,
            message: "Invalid id. Server error.",
            error: err.message
        });
    }
}

export var deleteUser = async (req,res) => {
    var id = req.params.id;

    return userSchema.findOneAndDelete({ _id: mongoose.Types.ObjectId(id) })
        .then(data => {
            res.status(200).json({
                status: true,
                message: "Data successfully deleted.",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: false,
                message: "Invalid id. Server error.",
                error: err.message
            });
        });
}