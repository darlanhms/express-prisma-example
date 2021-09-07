/*
  Warnings:

  - You are about to drop the column `authorId` on the `book` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_authorId_fkey";

-- AlterTable
ALTER TABLE "book" DROP COLUMN "authorId",
ADD COLUMN     "author_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
