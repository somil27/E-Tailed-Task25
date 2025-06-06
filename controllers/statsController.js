exports.fetchDashboardStats = (req, res) => {
  res.json({
    teamSize: 5,
    activeProjects: 3,
    unreadAlerts: 12
  });
};