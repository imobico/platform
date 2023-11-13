set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_organization()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin
  RAISE LOG 'organization: %', new;
  RAISE LOG 'user id id: %', auth.uid();
  insert into public.organization_members (organization, "user")
  values (new.id, auth.uid());
  return new;
end;$function$
;

CREATE TRIGGER on_organization_created AFTER INSERT ON public.organizations FOR EACH ROW EXECUTE FUNCTION handle_new_organization();


