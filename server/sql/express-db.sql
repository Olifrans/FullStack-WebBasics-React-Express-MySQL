

-- Create table `post`
CREATE TABLE `olifrans-api`.`post` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `date_time` datetime NOT NULL 
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- SELECT table `post`
SELECT * FROM `olifrans-api`.post;


-- ALTER table `post`
ALTER TABLE `olifrans-api`.post
  ADD PRIMARY KEY (`id`);

  
-- AUTO_INCREMENT table `post`
ALTER TABLE `olifrans-api`.post
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;





-- Create table `users`
CREATE TABLE `olifrans-api`.`users` (
  `id` int(11) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` text NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- SELECT table `users
SELECT * FROM `olifrans-api`.users;


-- ALTER table `users`
ALTER TABLE `olifrans-api`.users
  ADD PRIMARY KEY (`id`);  

  
-- INSERT INTO table `users`
INSERT INTO `olifrans-api`.users (`id`, `email`, `password`) VALUES
(1, 'olifrans@gmail.com', 'admin123'),
(2, 'frans@gmail.com', 'admin123');


-- AUTO_INCREMENT table `users`
ALTER TABLE `olifrans-api`.users
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;







