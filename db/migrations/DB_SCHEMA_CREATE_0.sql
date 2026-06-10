DROP TABLE IF EXISTS `reviews`;
DROP TABLE IF EXISTS `product_category`;
DROP TABLE IF EXISTS `categories`;
DROP TABLE IF EXISTS `products`;


CREATE TABLE `products`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(150) NOT NULL,
    `description` TEXT NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `price` DECIMAL(4, 2) NOT NULL,
    `slug` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `products` ADD UNIQUE `products_name_unique`(`name`);
ALTER TABLE
    `products` ADD UNIQUE `products_slug_unique`(`slug`);
    
CREATE TABLE `categories`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `slug` VARCHAR(255) NOT NULL,
    `label` VARCHAR(50) NOT NULL,
    `description` TEXT NOT NULL,
    `image` VARCHAR(255) NOT NULL
);

ALTER TABLE
    `categories` ADD UNIQUE `categories_slug_unique`(`slug`);
ALTER TABLE
    `categories` ADD UNIQUE `categories_label_unique`(`label`);
    
CREATE TABLE `reviews`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `product_id` BIGINT UNSIGNED NULL,
    `slug` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `vote` TINYINT UNSIGNED NOT NULL,
    `likes` BIGINT NOT NULL DEFAULT 0,
    `date` DATETIME NOT NULL
);

ALTER TABLE
    `reviews` ADD INDEX `reviews_product_id_index`(`product_id`);
ALTER TABLE
    `reviews` ADD UNIQUE `reviews_slug_unique`(`slug`);
    
CREATE TABLE `category_product`(
    `product_id` BIGINT UNSIGNED NOT NULL,
    `category_id` BIGINT UNSIGNED NOT NULL,
    PRIMARY KEY(`product_id`, `category_id`)
);

ALTER TABLE
    `category_product` ADD CONSTRAINT `category_product_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE;
ALTER TABLE
    `reviews` ADD CONSTRAINT `reviews_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `products`(`id`) ON DELETE SET NULL;
ALTER TABLE
    `category_product` ADD CONSTRAINT `category_product_category_id_foreign` FOREIGN KEY(`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE;
    
ALTER TABLE
	`products` ADD COLUMN `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE
	`products` ADD COLUMN `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;