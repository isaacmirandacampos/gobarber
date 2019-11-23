module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('appointments', 'canceled_at', {
      type: Sequelize.DATE,
      defaultValue: null,
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('appointments', 'canceled_at');
  },
};
