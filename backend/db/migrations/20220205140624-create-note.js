'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Notes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING(100),
				defaultValue: 'Untitled',
			},
			content: {
				type: Sequelize.TEXT,
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
				},
			},
			notebookId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Notebooks',
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('now'),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('now'),
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Notes');
	},
};
