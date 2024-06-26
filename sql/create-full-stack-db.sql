-- Database: full_stack_db

-- DROP DATABASE IF EXISTS full_stack_db;

CREATE DATABASE full_stack_db
    WITH
    OWNER = full_stack_user
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
