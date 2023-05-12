const User = require('../models/userModel');

const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");
const asyncHandler = require('express-async-handler')


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
                roleUser,
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

    //  [PATCH - ROUTE: api/user/update/]  
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
}

module.exports = new UserController;