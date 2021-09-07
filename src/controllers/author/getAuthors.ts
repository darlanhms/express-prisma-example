import { Author, PrismaClient } from '.prisma/client';

const client = new PrismaClient();

export default async function getAuthors(): Promise<Array<Author>> {
    return client.author.findMany();
}
