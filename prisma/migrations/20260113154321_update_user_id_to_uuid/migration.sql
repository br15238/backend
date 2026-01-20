/*
  Warnings:

  - The primary key for the `Todo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `title` on the `Todo` table. All the data in the column will be lost.
  - The `id` column on the `Todo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_pkey",
DROP COLUMN "title",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Todo_pkey" PRIMARY KEY ("id");
