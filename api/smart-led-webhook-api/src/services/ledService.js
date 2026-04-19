const providerService = require('./providerService');
const logger = require('../utils/logger');

const availableDevices = ['led_sala'];
const supportedActions = ['turn_on', 'turn_off', 'set_brightness', 'set_color'];

function createError(message, statusCode) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

function validatePayload({ device, action, value }) {
  if (!device || !action) {
    throw createError('Os campos device e action são obrigatórios', 400);
  }

  if (!availableDevices.includes(device)) {
    throw createError('Dispositivo inválido ou não cadastrado', 404);
  }

  if (!supportedActions.includes(action)) {
    throw createError('Ação não suportada', 400);
  }

  if (action === 'set_brightness') {
    if (typeof value !== 'number' || value < 0 || value > 100) {
      throw createError('Para set_brightness, value deve ser um número entre 0 e 100', 400);
    }
  }

  if (action === 'set_color') {
    const hexRegex = /^#([A-Fa-f0-9]{6})$/;

    if (typeof value !== 'string' || !hexRegex.test(value)) {
      throw createError('Para set_color, value deve ser uma cor hexadecimal válida, ex: #FF0000', 400);
    }
  }
}

async function executeAction({ device, action, value }) {
  validatePayload({ device, action, value });

  const providerResult = await providerService.sendCommand({ device, action, value });

  const response = {
    device,
    action,
    value: value ?? null,
    provider: providerResult.provider,
    providerMode: providerResult.mode,
    status: providerResult.status,
    timestamp: new Date().toISOString()
  };

  logger.info('Ação executada na LED', response);

  return response;
}

function listDevices() {
  return availableDevices;
}

function listSupportedActions() {
  return supportedActions;
}

module.exports = {
  executeAction,
  listDevices,
  listSupportedActions
};