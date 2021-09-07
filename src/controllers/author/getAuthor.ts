import { Author, PrismaClient } from '.prisma/client';

const client = new PrismaClient();

export default async function getAuthor(id: string): Promise<Author | null> {
    const author = client.author.findUnique({
        where: {
            id,
        },
    });

    return author;
}
