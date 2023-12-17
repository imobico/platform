alter table "public"."addresses" drop constraint "addresses_pkey";

drop index if exists "public"."addresses_geo_index";

drop index if exists "public"."addresses_pkey";

drop table "public"."addresses";

create table "public"."property_addresses" (
    "id" bigint generated by default as identity not null,
    "location" geography(Point,4326) not null,
    "property" bigint not null
);


alter table "public"."property_addresses" enable row level security;

alter table "public"."properties" add column "address" bigint;

CREATE UNIQUE INDEX properties_address_key ON public.properties USING btree (address);

CREATE UNIQUE INDEX property_addresses_pkey ON public.property_addresses USING btree (id);

CREATE UNIQUE INDEX property_addresses_property_key ON public.property_addresses USING btree (property);

alter table "public"."property_addresses" add constraint "property_addresses_pkey" PRIMARY KEY using index "property_addresses_pkey";

alter table "public"."properties" add constraint "properties_address_fkey" FOREIGN KEY (address) REFERENCES property_addresses(id) not valid;

alter table "public"."properties" validate constraint "properties_address_fkey";

alter table "public"."properties" add constraint "properties_address_key" UNIQUE using index "properties_address_key";

alter table "public"."property_addresses" add constraint "property_addresses_property_fkey" FOREIGN KEY (property) REFERENCES properties(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."property_addresses" validate constraint "property_addresses_property_fkey";

alter table "public"."property_addresses" add constraint "property_addresses_property_key" UNIQUE using index "property_addresses_property_key";


