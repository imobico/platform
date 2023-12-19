alter table "public"."properties" alter column "address" drop not null;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_property()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin
  RAISE LOG 'property: %', new;
  RAISE LOG 'organization id: %', new.organization;
  insert into public.property_addresses ("organization", "property")
  values (new.organization, new.id);
  return new;
end;$function$
;

CREATE OR REPLACE FUNCTION public.handle_new_property_address()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin
  RAISE LOG 'property address: %', new;
  RAISE LOG 'address id: %', new.id;
  RAISE LOG 'address property id: %', new.property;
  insert into public.property_addresses ("organization", "property")
  values (new.organization_id, new.id);

  update properties
  set address = new.id
  where id = new.property;

  return new;
end;



$function$
;

CREATE OR REPLACE FUNCTION public.handle_new_organization()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin
  RAISE LOG 'organization: %', new;
  RAISE LOG 'user id id: %', auth.uid();
  insert into public.organization_members ("organization", "user")
  values (new.id, auth.uid());
  update users
  set is_onboarded = true
  where id = auth.uid();
  return new;
end;$function$
;

CREATE TRIGGER on_property_created AFTER INSERT ON public.properties FOR EACH ROW EXECUTE FUNCTION handle_new_property();

CREATE TRIGGER on_property_address_created AFTER INSERT ON public.property_addresses FOR EACH ROW EXECUTE FUNCTION handle_new_property_address();


