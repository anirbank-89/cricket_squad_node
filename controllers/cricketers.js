import mongoose from 'mongoose';
import Cricketer from '../model/cricketer.js';

export const getAllCricketers = async (req,res)=>{
    try {
        var all_users = await Cricketer.find().exec();

        res.status(200).json({
            status: true,
            message: "All cricketers successfully get",
            data: all_users
        });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({
            status: false,
            message: "Failed to find data. Server error.",
            error: err
        });
    }
}

export const addCricketer = async (req,res)=>{
    const cricketer = req.body;
    console.log("Incoming data", req.body);

    const NEW_CRICKETER = new Cricketer(cricketer);

    try {
        var save_data = await NEW_CRICKETER.save();
        
        res.status(200).json({
            status: true,
            message: "Data saved successfully.",
            data: save_data
        });
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: "Failed to add data. Server error.",
            error: err
        });
    }
}

export const getCricketerById = async (req,res)=>{
    var id = req.params.id;
    try {
        var data = await Cricketer.findOne({_id: mongoose.Types.ObjectId(id)}).exec();

        return res.status(200).json({
            status: true,
            message: "Cricketer data successfully get.",
            data: data
        });
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            message: "Invalid id",
            error: err
        });
    }
}

export const editCricketer = async (req,res)=>{
    var id = req.params.id;

    return Cricketer.findOneAndUpdate(
        {_id: mongoose.Types.ObjectId(id)},
        req.body,
        { new: true },
        (err,docs)=>{
            if (!err) {
                res.status(200).json({
                    status: true,
                    message: "Data successfully edited!",
                    data: docs
                });
            }
            else {
                res.status(500).json({
                    status: false,
                    message: "Invalid id.",
                    error: err
                });
            }
        }
    );
}

export const deleteCricketer = async (req,res)=>{
    var id = req.params.id;

    return Cricketer.deleteOne({_id: mongoose.Types.ObjectId(id)})
      .then(data=>{
          res.status(200).json({
              status: false,
              message: "Cricketer data deleted successfully.",
              data: data
          });
      })
      .catch(err=>{
          res.status(500).json({
              status: false,
              message: "Invalid id",
              error: err
          });
      });
}