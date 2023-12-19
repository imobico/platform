alter table "public"."properties" add column "description" text;

alter table "public"."properties" add column "name" text;

alter table "public"."properties" add column "organization" bigint not null;

alter table "public"."properties" alter column "address" set not null;

alter table "public"."property_addresses" add column "city" text;

alter table "public"."property_addresses" add column "country" text;

alter table "public"."property_addresses" add column "district" text;

alter table "public"."property_addresses" add column "formatted" text;

alter table "public"."property_addresses" add column "housenumber" text;

alter table "public"."property_addresses" add column "lat" numeric;

alter table "public"."property_addresses" add column "lon" numeric;

alter table "public"."property_addresses" add column "organization" bigint not null;

alter table "public"."property_addresses" add column "postcode" text;

alter table "public"."property_addresses" add column "state" text;

alter table "public"."property_addresses" add column "street" text;

alter table "public"."property_addresses" add column "suburb" text;

alter table "public"."properties" add constraint "properties_organization_fkey" FOREIGN KEY (organization) REFERENCES organizations(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."properties" validate constraint "properties_organization_fkey";

alter table "public"."property_addresses" add constraint "property_addresses_organization_fkey" FOREIGN KEY (organization) REFERENCES organizations(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."property_addresses" validate constraint "property_addresses_organization_fkey";


