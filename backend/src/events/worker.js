const mqService = require('../services/mqService');
const candidateService = require('../services/candidateService');

async function startWorker() {
    await mqService.consume('applicationQeue', async (message) => {
        console.log('consume entered')
        const { type, data } = JSON.parse(message);
        if (type && data) {
            await candidateService.processEvent({type , data});
        }
        // Handle other event types as needed
    });
}

module.exports = { startWorker };
