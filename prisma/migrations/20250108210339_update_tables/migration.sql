/*
  Warnings:

  - Added the required column `value` to the `indications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `indications` ADD COLUMN `value` DOUBLE NOT NULL;
