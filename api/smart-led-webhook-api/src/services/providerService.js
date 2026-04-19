async function sendCommand({ device, action, value }) {
    const providerMode = process.env.PROVIDER_MODE || 'mock';
  
    if (providerMode === 'mock') {
      return simulateMockProvider({ device, action, value });
    }
  
    throw new Error(`Provider "${providerMode}" não implementado`);
  }
  
  async function simulateMockProvider({ device, action, value }) {
    return {
      provider: 'mock-provider',
      mode: 'mock',
      status: 'success',
      device,
      action,
      value: value ?? null
    };
  }
  
  module.exports = {
    sendCommand
  };