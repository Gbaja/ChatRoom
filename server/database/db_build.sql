BEGIN;

DROP TABLE IF EXISTS users, groups, user_groups, messages;

CREATE TABLE IF NOT EXISTS users(
    id serial PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    user_name TEXT UNIQUE NOT NULL,
    email VARCHAR(50),
    password VARCHAR(100),
    is_experts BOOLEAN DEFAULT false NOT NULL
);

CREATE TABLE IF NOT EXISTS groups(
    id serial PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    created_by_id INTEGER REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS user_groups(
    user_id INTEGER REFERENCES users(id),
    group_id INTEGER REFERENCES groups(id)
);

CREATE TABLE IF NOT EXISTS messages(
    id serial PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    group_id INTEGER REFERENCES groups(id),
    msg TEXT,
    time TIMESTAMPTZ
);

COMMIT;