require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const accountRoutes = require('./routes/accountRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const statsRoutes = require('./routes/statsRoutes');
const logger = require('./middleware/logger');

const app = express();
app.use(express.json());
app.use(logger);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

app.use('/api/account', accountRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/stats', statsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
