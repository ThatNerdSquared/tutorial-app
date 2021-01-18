"use strict"
module.exports = (sequelize, DataTypes) => {
    let todo = sequelize.define("todo", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        list: {
            allowNull: false,
            type: DataTypes.STRING
        }
    })
    return todo
}