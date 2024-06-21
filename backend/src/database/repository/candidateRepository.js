const CandidateRepositoryPrisma = require('./candidateRepositoryPrisma');

class CandidateRepository {
    constructor(repository) {
        this.repository = repository;
    }

    async findByEmail(email) {
        return this.repository.findByEmail(email);
    }

    async create(data) {
        return this.repository.create(data);
    }

    async update(candidateId, data) {
        return this.repository.update(candidateId, data);
    }
}


/*
 Here you can update the repository to use a different database model or ORM
 For example, you can change the repository to use a different repository like 
 Sequalize and inside the constructor you can pass the Sequalize repository
 or a different database like MySQL 
*/
const candidateRepository = new CandidateRepository(new CandidateRepositoryPrisma());

module.exports = candidateRepository;