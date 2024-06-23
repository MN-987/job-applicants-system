class CandidateRepositoryInterface {
    async findByEmail(email) {
        throw new Error('Method not implemented');
    }

    async create(data) {
        throw new Error('Method not implemented');
    }

    async update(candidateId, data) {
        throw new Error('Method not implemented');
    }
}

module.exports = CandidateRepositoryInterface;