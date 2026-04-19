const express = require('express');
const ledRoutes = require('./routes/ledRoutes');

const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Serviço ativo',
    data: {
      service: 'smart-led-webhook-api',
      status: 'ok',
      timestamp: new Date().toISOString()
    }
  });
});

app.use('/api', ledRoutes);

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: 'Rota não encontrada'
  });
});

app.use((err, req, res, next) => {
  console.error('Erro não tratado:', err);

  return res.status(500).json({
    success: false,
    message: 'Erro interno do servidor'
  });
});

module.exports = app;