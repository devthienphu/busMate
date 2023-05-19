const db = require('./config/db');
const bcrypt = require("bcryptjs");

const User = require('./models/userModel');
const Bus = require('./models/busModel');
const PassengerBus = require('./models/passengerBusModel');
const Feedback = require('./models/feedbackModel');
const Report = require('./models/reportModel');
const Ticket = require('./models/ticketModel');

var users = require('./data/user.js');
var buses = require('./data/bus.js');
var passengerBus = require('./data/passengerBus.js');

// For .env access
require("dotenv").config();

// Connect to DB
db.connect();

const importData = async() => {
    try {
        const newUsers = await Promise.all(users.map(async(user) => {
            var salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
            return user;
        }));

        await User.deleteMany();
        await Bus.deleteMany();
        await PassengerBus.deleteMany();
        await Report.deleteMany();
        await Feedback.deleteMany();
        await Ticket.deleteMany();

        const importedUsers = await User.insertMany(newUsers);
        const importedBuses = await Bus.insertMany(buses);
        const importedPassengerBus = await PassengerBus.insertMany(passengerBus)
            // Create reports for some of the users
        const reports = [{
                user: importedUsers[0]._id,
                content: "Bus was late"
            },
            {
                user: importedUsers[0]._id,
                content: "Driver was rude"
            },
            {
                user: importedUsers[1]._id,
                content: "Conductor was helpful"
            },
            {
                user: importedUsers[1]._id,
                content: "Drive so fast"
            }
        ];
        const feedback = [{
                user: importedUsers[0]._id,
                content: "Good service"
            },
            {
                user: importedUsers[0]._id,
                content: "Bus was dirty"
            },
            {
                user: importedUsers[1]._id,
                content: "Driver was friendly"
            }
        ];
        const tickets = [{
                user: importedUsers[0]._id,
                passengerBus: importedPassengerBus[0]._id,
                state: 'Pending'
            },
            {
                user: importedUsers[0]._id,
                passengerBus: importedPassengerBus[0]._id,
                state: 'Pending'
            },
            {
                user: importedUsers[1]._id,
                passengerBus: importedPassengerBus[1]._id,
                state: 'Pending'
            }, {
                user: importedUsers[1]._id,
                passengerBus: importedPassengerBus[1]._id,
                state: 'Pending'
            }
        ]

        await Feedback.insertMany(feedback);
        await Report.insertMany(reports);
        await Ticket.insertMany(tickets);
        console.log("Sucessfully imported data in database!");
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};
const destroyData = async() => {
    try {
        await User.deleteMany();
        await Bus.deleteMany();
        await PassengerBus.deleteMany();
        await Feedback.deleteMany();
        await Report.deleteMany();
        await Ticket.deleteMany();

        console.log("Sucessfully destroyed data in database!");
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}