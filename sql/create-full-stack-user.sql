-- Role: full_stack_user
-- DROP ROLE IF EXISTS full_stack_user;

CREATE ROLE full_stack_user WITH
  LOGIN
  NOSUPERUSER
  INHERIT
  NOCREATEDB
  NOCREATEROLE
  NOREPLICATION
  PASSWORD 'changeme';
