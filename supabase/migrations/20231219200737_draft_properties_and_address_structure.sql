set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_property_address()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin
  RAISE LOG 'property address: %', new;
  RAISE LOG 'address id: %', new.id;
  RAISE LOG 'address property id: %', new.property;
  insert into public.property_addresses ("organization", "property")
  values (new.organization, new.id);

  update properties
  set address = new.id
  where id = new.property;

  return new;
end;



$function$
;


