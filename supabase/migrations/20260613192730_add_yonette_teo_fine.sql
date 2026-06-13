insert into public.guest_list (first_name, last_name)
select v.first_name, v.last_name
from (values
  ('Yonette', 'Fine'),
  ('Teo', 'Fine')
) as v(first_name, last_name)
where not exists (
  select 1 from public.guest_list g
  where lower(g.first_name) = lower(v.first_name)
    and lower(g.last_name) = lower(v.last_name)
);
