-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    birthdate date NOT NULL,
    notification_preference character varying(255) COLLATE pg_catalog."default" NOT NULL,
    biography character varying(1024) COLLATE pg_catalog."default" NOT NULL,
    terms_agreed boolean NOT NULL DEFAULT false,
    newsletter_subscribed boolean NOT NULL DEFAULT false,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_uk UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to full_stack_user;
