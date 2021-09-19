import { v4 as uuid } from 'uuid';
import { Book, PrismaClient } from '.prisma/client';

const client = new PrismaClient();

export default async function createBook(dto: Omit<Book, 'id'>): Promise<Book> {
    return client.book.create({
        data: {
            id: uuid(),
            name: dto.name,
            description: dto.description,
            authorId: dto.authorId,
            gender: dto.gender,
        },
    });
}
