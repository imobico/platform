create type "public"."organization_types" as enum ('agent', 'agency', 'owner');

create table "public"."organizations" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "owner" uuid,
    "name" text,
    "type" organization_types not null
);


alter table "public"."organizations" enable row level security;

CREATE UNIQUE INDEX organizations_pkey ON public.organizations USING btree (id);

alter table "public"."organizations" add constraint "organizations_pkey" PRIMARY KEY using index "organizations_pkey";

alter table "public"."organizations" add constraint "organizations_owner_fkey" FOREIGN KEY (owner) REFERENCES users(id) not valid;

alter table "public"."organizations" validate constraint "organizations_owner_fkey";

create policy "Enable insert for authenticated users only"
on "public"."organizations"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."organizations"
as permissive
for select
to public
using (true);



