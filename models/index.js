import { SIGQUIT } from 'constants';

const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/tripplanner', {
    logging: false
});

const Place = db.define('place', {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequlize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL),
        allowNull: false
    }
});

const Hotel = db.define('hotel', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.FLOAT, //what does FLOAT do?
        validate: {
            min: 0,
            max: 100
        },
        allowNull: false
    },
    amenities: {
        type: Sequlize.STRING,
        get(){
            return this.getDataValues("amenities").split(",")
        },
        allowNull: false
    }
});

const Activity = db.define('activity', {
    name: {
        type: Sequelize.STRING,
    },
    age_range: {
        type: Sequelize.STRING
    }
})

const Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING
    },
    cuisine: {
        type: Sequelize.STRING,
        get(){
            return this.getDataValues("restaurant").split(",")
        }
    },
    price: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
        }
})