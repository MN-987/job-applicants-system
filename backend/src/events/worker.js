const mqService = require('../services/mqService');
const candidateService = require('../services/candidateService');

async function startWorker() {
    const service=new candidateService();
    await mqService.consume('applicationQeue', async (message) => {
        console.log('consume entered')
        const { type, data } = JSON.parse(message);
        if (type && data) {
            await service.processEvent({type , data});
        }
    });
}

module.exports = { startWorker };
