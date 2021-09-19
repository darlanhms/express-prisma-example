import { Book, PrismaClient } from '.prisma/client';

export default async function getBooks(): Promise<Array<Book>> {
    return new PrismaClient().book.findMany({
        include: {
            author: true,
        },
    });
}
