const User = require('../models/userModel');
const Bus = require('../models/busModel');
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose');


class UserController {
    //  [ POST - ROUTE: api/user/register ]
    registerUser = asyncHandler(async(req, res) => {
        const { userName, email, contact, password, roleUser } = req.body;
        const user = await User.findOne({ $or: [{ email }, { userName }] });
        if (!user) {
            var salt = await bcrypt.genSalt(10);
            var hashPassword = await bcrypt.hash(password, salt);
            const newUser = await User.create({
                userName,
                email,
                contact,
                password: hashPassword,
                roleUser
            });
            if (newUser) {
                res.json({
                    _id: newUser._id,
                    userName,
                    email,
                    contact,
                    roleUser,
                    createdAt: newUser.createdAt
                });
            } else {
                res.status(501);
                throw new Error('Fail to resister new user!');
            }
        } else {
            res.status(404);
            throw new Error('User has already existed!');
        }

    })

    //  [ POST - ROUTE: api/user/auth ]
    authUser = asyncHandler(async(req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                userName: user.userName,
                email: user.email,
                contact: user.contact,
                createdAt: user.createdAt,
                token: generateToken(user._id)
            });
        } else {
            res.status(401);
            throw new Error("Invalid UserName or Password");
        }
    })

    //  [ GET - ROUTE: api/user ]
    getUserProfile = asyncHandler(async(req, res) => {
        var user = await User.findById(req.user._id);
        if (user) {
            res.json({
                _id: user._id,
                userName: user.userName,
                email: user.email,
                contact: user.contact,
                roleUser: user.roleUser,
                createdAt: user.createdAt,
            })
        } else {
            res.status(404);
            throw new Error('User does not exist!');
        }
    })

    //  [PATCH - ROUTE: api/user/]  
    updateUser = asyncHandler(async(req, res) => {
        var user = await User.findById(req.user._id);
        if (user) {
            if (req.body.password) {
                var salt = await bcrypt.genSalt(10);
                var hashPassword = await bcrypt.hash(req.body.password, salt);
                user.password = hashPassword;
            }
            var updateUser = await User.findOneAndUpdate({ _id: user._id }, {
                userName: req.body.userName || user.userName,
                email: req.body.email || user.email,
                contact: req.body.contact || user.contact,
                password: hashPassword,
                token: generateToken(user._id),
            }, {
                new: true
            });
            updateUser.password = undefined;
            res.json(updateUser);
        } else {
            res.status(404);
            throw new Error('User does not exist!');
        }
    })

    //  [PATCH - ROUTE: api/user/favorite/:id] - ID of Bus
    addFavoriteBus = asyncHandler(async(req, res) => {
        //     console.log(req.params.id)
        // const bus = await Bus.findById(req.params.id)
        // if (bus) {
        //     var updateUser = await User.findOneAndUpdate({ _id: req.user._id }, {
        //         $push: {
        //             favoriteBus: {
        //                 bus: new mongoose.Types.ObjectId(bus._id),
        //                 number: bus.number
        //             }
        //         }
        //     }, {
        //         new: true
        //     }).lean();
        //     delete updateUser.password
        //     res.json(updateUser)
        // } else {
        //     res.status(404);
        //     throw new Error('Bus does not exist!');
        // }
        const bus = await Bus.findById(req.params.id);
        if (bus) {
            const userId = req.user._id;
            const favoriteBus = {
                bus: new mongoose.Types.ObjectId(bus._id),
                number: bus.number
            };
            var updateUser;
            const user = await User.findById(userId);
            if (user.favoriteBus.some(bus => bus.bus.equals(favoriteBus.bus))) {
                updateUser = await User.findByIdAndUpdate(userId, {
                    $pull: { favoriteBus: { bus: favoriteBus.bus } }
                }, {
                    new: true
                }).lean();
            } else {
                updateUser = await User.findByIdAndUpdate(userId, {
                    $push: { favoriteBus: favoriteBus }
                }, {
                    new: true
                }).lean();
            }
            delete updateUser.password;
            res.json(updateUser);
        } else {
            res.status(404);
            throw new Error('Bus does not exist!');
        }
    })

    //  [GET - ROUTE: api/user/favorite] 
    getFavoriteBuses = asyncHandler(async(req, res) => {
        // console.log(userId)
        // Find the user by their id and populate the favoriteBus field
        const user = await User.findById(req.user._id).populate('favoriteBus.bus');

        if (!user) {
            res.status(404);
            throw new Error('User not found');
        }

        // Extract the buses from the favoriteBus field and send them as a response
        const favoriteBuses = user.favoriteBus.map(b => b.bus);
        res.json(favoriteBuses);
    });

    //  [POST - ROUTE: api/user/feedback/:id] - ID of bus
    sendRating = asyncHandler(async(req, res) => {
        let bus = await Bus.findById(req.params.id);
        const user = req.user._id;
        const { score, feedback } = req.body;

        if (!bus) {
            return res.status(404).json({ message: 'Bus not found!' });
        }
        const newRating = { score: Number(score), feedback, user };
        bus.rating.push(newRating);
        await bus.save();
        res.status(201).json({ message: 'Rating added successfully', rating: newRating });
    })
}

module.exports = new UserController;