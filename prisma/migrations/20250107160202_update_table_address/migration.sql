/*
  Warnings:

  - You are about to drop the column `address` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `neighborhood` on the `addresses` table. All the data in the column will be lost.
  - Added the required column `number` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `addresses` DROP COLUMN `address`,
    DROP COLUMN `neighborhood`,
    ADD COLUMN `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `number` VARCHAR(191) NOT NULL,
    ADD COLUMN `street` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `order` MODIFY `updatedAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);
