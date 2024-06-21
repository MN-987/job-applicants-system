const mqService = require('../services/mqService');

async function publishEvent(eventType, data) {
    const message = JSON.stringify({ type: eventType, data });
    await mqService.publish('applicationQeue', message);
}

module.exports = { publishEvent };