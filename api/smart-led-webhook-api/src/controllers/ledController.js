const ledService = require('../services/ledService');

async function handleLedAction(req, res, next) {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Body da requisição não enviado ou vazio'
      });
    }

    const { device, action, value } = req.body;

    const result = await ledService.executeAction({ device, action, value });

    return res.status(200).json({
      success: true,
      message: 'Ação executada com sucesso',
      data: result
    });
  } catch (error) {
    if (error.statusCode) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message
      });
    }

    return next(error);
  }
}

async function getDevices(req, res, next) {
  try {
    const devices = ledService.listDevices();

    return res.status(200).json({
      success: true,
      message: 'Dispositivos listados com sucesso',
      data: devices
    });
  } catch (error) {
    return next(error);
  }
}

async function getSupportedActions(req, res, next) {
  try {
    const actions = ledService.listSupportedActions();

    return res.status(200).json({
      success: true,
      message: 'Ações suportadas listadas com sucesso',
      data: actions
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  handleLedAction,
  getDevices,
  getSupportedActions
};