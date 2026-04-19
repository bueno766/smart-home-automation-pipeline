function info(message, data = null) {
    console.log(JSON.stringify({
      level: 'info',
      message,
      data,
      timestamp: new Date().toISOString()
    }));
  }
  
  function error(message, data = null) {
    console.error(JSON.stringify({
      level: 'error',
      message,
      data,
      timestamp: new Date().toISOString()
    }));
  }
  
  module.exports = {
    info,
    error
  };