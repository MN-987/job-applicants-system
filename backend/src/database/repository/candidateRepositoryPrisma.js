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

    async update(candidateEmail, data) {
        return prisma.candidate.update({
            where: { email: candidateEmail },
            data,
        });
    }
}

module.exports = CandidateRepositoryPrisma;