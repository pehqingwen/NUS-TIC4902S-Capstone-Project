CREATE TABLE `users` (
  `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_email` VARCHAR(256) NOT NULL,
  `user_firstName` VARCHAR(45) NOT NULL,
  `user_lastName` VARCHAR(45),
  `user_address1` VARCHAR(256) NOT NULL,
  `user_address2` VARCHAR(256),
  `user_country` VARCHAR(45) NOT NULL,
  `user_ZIP` VARCHAR(256) NOT NULL,
  `user_countryCode` VARCHAR(256) NOT NULL,
  `user_contactNumber` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`user_id`)
);

CREATE TABLE `orders` (
  `order_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `order_totalCost` DECIMAL(10,2) UNSIGNED NOT NULL,
  `order_date` DATETIME NOT NULL,
  PRIMARY KEY (`order_id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
);

CREATE TABLE `order_products` (
  `order_product_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` INT UNSIGNED NOT NULL,
  `product_name` VARCHAR(256) NOT NULL,
  `product_price` DECIMAL(10,2) UNSIGNED NOT NULL,
  `quantity` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`order_product_id`),
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`)
);