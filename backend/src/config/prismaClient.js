// singleton pattern to create a single instance of the PrismaClient

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma;
