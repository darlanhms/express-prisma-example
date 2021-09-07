import { v4 as uuid } from 'uuid';
import { Author, PrismaClient } from '.prisma/client';

const client = new PrismaClient();

export default async function createAuthor(dto: Omit<Author, 'id'>): Promise<Author> {
    const author = await client.author.create({
        data: {
            id: uuid(),
            name: dto.name,
        },
    });

    return author;
}
