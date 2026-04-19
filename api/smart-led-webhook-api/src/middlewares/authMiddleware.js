function authMiddleware(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    const expectedApiKey = process.env.API_KEY;
  
    if (!apiKey) {
      return res.status(401).json({
        success: false,
        message: 'API key não informada'
      });
    }
  
    if (!expectedApiKey) {
      return res.status(500).json({
        success: false,
        message: 'API key não configurada no servidor'
      });
    }
  
    if (apiKey !== expectedApiKey) {
      return res.status(403).json({
        success: false,
        message: 'API key inválida'
      });
    }
  
    return next();
  }
  
  module.exports = authMiddleware;