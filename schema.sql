CREATE DATABASE IF NOT EXISTS recycling_selection;
USE recycling_selection;

CREATE TABLE candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    experience INT,
    skills TEXT
);

CREATE TABLE evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT,
    crisis_management INT,
    sustainability INT,
    team_motivation INT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);

CREATE TABLE rankings (
    candidate_id INT PRIMARY KEY,
    total_score INT,
    rank_position INT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);

DELIMITER $$

CREATE TRIGGER update_rankings
AFTER INSERT ON evaluations
FOR EACH ROW
BEGIN
    DECLARE total INT;
    SET total = NEW.crisis_management + NEW.sustainability + NEW.team_motivation;

    INSERT INTO rankings (candidate_id, total_score)
    VALUES (NEW.candidate_id, total)
    ON DUPLICATE KEY UPDATE total_score = total;
END $$

DELIMITER ;
