CREATE TABLE swaps ( 
    address VARCHAR(60) PRIMARY KEY, 
    swapid VARCHAR(80) NOT NULL,
    tokenwanted VARCHAR(80) NOT NULL, 
    amount INT NOT NULL, 
    tokentraded VARCHAR(80) NOT NULL,
    tamount INT NOT NULL
);

CREATE TABLE viral (
    address VARCHAR(60) PRIMARY KEY,
    amount INT NOT NULL
);