/*
  Warnings:

  - You are about to drop the column `indicated_name` on the `indications` table. All the data in the column will be lost.
  - Added the required column `indicated_email` to the `indications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `indications` DROP COLUMN `indicated_name`,
    ADD COLUMN `indicated_email` VARCHAR(191) NOT NULL,
    ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `users` ALTER COLUMN `updated_at` DROP DEFAULT;
