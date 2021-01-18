'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("todos", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				alowNull: false,
				type: Sequelize.DATE
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING
			},
			list: {
				allowNull: false,
				type: Sequelize.STRING
			}
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("todos");
	}
}