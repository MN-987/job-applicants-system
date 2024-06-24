const candidateRepository = require('../database/repository/candidateRepository');
// const NotificationService = require('./notificationService');

class CandidateService {
    async createOrUpdateCandidate(data) {
        let candidate = await candidateRepository.findByEmail(data.data.email);
        if (candidate) {
            candidate = await candidateRepository.update(candidate.email, data.data);
        } else {
            candidate = await candidateRepository.create(data.data);
        }
        return candidate;
    }

    async processEvent(event) {
        const { type, data } = event;

        switch (type) {
            case 'candidate_application':
                console.log('Processing candidate application');
                await this.createOrUpdateCandidate(data);
                // await NotificationService.sendNotification(candidate.email, 'Your candidate aplication has been sent.');
                break;
            // Add more cases as needed for different event types
            default:
                console.log(`Unhandled event type: ${type}`);
        }
    }
}

 
module.exports =  CandidateService;
