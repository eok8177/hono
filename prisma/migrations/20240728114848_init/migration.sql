-- CreateTable
CREATE TABLE `users` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL DEFAULT 'user',
    `name` VARCHAR(255) NULL,
    `active` BOOLEAN NOT NULL DEFAULT false,
    `locale` VARCHAR(4) NULL DEFAULT 'en',
    `timezone` VARCHAR(100) NULL DEFAULT 'Europe/Kyiv',
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `users_email_unique`(`email`),
    INDEX `users_email_index`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posts` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `preview` TEXT NULL,
    `text` LONGTEXT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
