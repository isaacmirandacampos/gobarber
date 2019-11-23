module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn(
      'appointments',
      'canceled_id',
      'canceled_at'
    );
  },

  down: queryInterface => {
    return queryInterface.renameColumn(
      'appointments',
      'canceled_at',
      'canceled_id'
    );
  },
};
