import { Author, PrismaClient } from '.prisma/client';

const client = new PrismaClient();

export default async function getAuthorWithBooks(id: string): Promise<Author | null> {
    return client.author.findUnique({
        where: {
            id,
        },
        include: {
            books: true,
        },
    });
}
