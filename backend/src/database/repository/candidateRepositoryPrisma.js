const prisma = require('../../config/prismaClient');
const CandidateRepositoryInterface = require('./candidateRepositoryInterface');

class CandidateRepositoryPrisma extends CandidateRepositoryInterface {
    async findByEmail(email) {
     
        return prisma.candidate.findUnique({
            where: { email },
        });
    }

    async create(data) {
        return prisma.candidate.create({
            data,
        });
    }

    async update(candidateId, data) {
        return prisma.candidate.update({
            where: { id: candidateId },
            data,
        });
    }
}

module.exports = CandidateRepositoryPrisma;