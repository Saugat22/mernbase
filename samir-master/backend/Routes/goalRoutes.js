const express = require('express');
const router = express.Router();
const {
  setGoals,
  getGoals,
  updateGoal,
  deleteGoal,
  stats_year,
  displayWins,
  averageGoal,
} = require('../Controller/goalController');

router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoal).delete(deleteGoal);
router.route('/stats/:year').get(stats_year);
router.route('/displayRecords/:wins').get(displayWins);
router.route('/averageGoalFor').get(averageGoal);

module.exports = router;
