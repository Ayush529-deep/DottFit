CREATE TABLE dotfit.blogs (
  blog_id        VARCHAR(20) PRIMARY KEY
                 DEFAULT ('blog' || nextval('dotfit.blog_seq')),

  title          VARCHAR(255) NOT NULL,

  cover_image    TEXT,  -- image URL or file path

  content        TEXT NOT NULL,

  category       VARCHAR(100) NOT NULL,

  reading_time   INTEGER NOT NULL, -- minutes (example: 5)

  featured       BOOLEAN DEFAULT FALSE,

  published_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Latest / recent blogs (homepage, blog list)
CREATE INDEX idx_blogs_published_at
ON dotfit.blogs (published_at DESC);

-- Category-based filtering (Fat Loss, Strength, Nutrition)
CREATE INDEX idx_blogs_category
ON dotfit.blogs (category);

-- Featured blogs (homepage highlights)
CREATE INDEX idx_blogs_featured
ON dotfit.blogs (featured);


CREATE TABLE IF NOT EXISTS dotfit.admins
(
    admin_id character varying(20) COLLATE pg_catalog."default" NOT NULL DEFAULT ('user'::text || nextval('dotfit.user_seq'::regclass)),
    name character varying(150) COLLATE pg_catalog."default" NOT NULL,
    email character varying(150) COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    role character varying(50) COLLATE pg_catalog."default" NOT NULL,
    status boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT admins_pkey PRIMARY KEY (admin_id),
    CONSTRAINT admins_email_key UNIQUE (email)
)

-- Fast title search (optional but recommended)
CREATE INDEX idx_blogs_title_search
ON dotfit.blogs
USING GIN (to_tsvector('english', title));

-- Fast login & email lookup
CREATE INDEX idx_admins_email
ON dotfit.admins (email);

-- Filter by role (admin / staff / viewer)
CREATE INDEX idx_admins_role
ON dotfit.admins (role);

-- Active / inactive admins
CREATE INDEX idx_admins_status
ON dotfit.admins (status);

-- Recently created admins (admin panel)
CREATE INDEX idx_admins_created_at
ON dotfit.admins (created_at DESC);
