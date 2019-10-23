module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('appointments', 'canceled_id', {
      canceled_at: {
        type: Sequelize.DATA,
        allowNull: true,
        defaultValue: null,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'canceled_id', {
      canceled_id: {
        type: Sequelize.INTERGER,
        allowNull: true,
        defaultValue: null,
      },
    });
  },
};
