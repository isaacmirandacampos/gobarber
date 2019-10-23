module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn('appointments', 'canceled_at');
  },

  down: queryInterface => {
    return queryInterface.removeColumn('appointments', 'canceled_at');
  },
};
