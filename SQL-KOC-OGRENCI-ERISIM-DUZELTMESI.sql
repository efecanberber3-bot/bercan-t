-- BER CAN'T — KOÇ ÖĞRENCİ ERİŞİM DÜZELTMESİ
-- Supabase > SQL Editor içinde bir kez çalıştırın.
-- Amaç: coach/admin rollerinin tüm öğrenci profillerini, günlük kayıtları,
-- ölçümleri, program atamalarını ve koç mesajlarını panelde görebilmesi.
-- Öğrenci rolündeki kullanıcılar yine sadece kendi verilerini görür.

create or replace function public.can_manage(target_user uuid)
returns boolean
language sql stable security definer
set search_path = public
as $$
  select coalesce(
    public.current_user_role() in ('coach','admin')
    or auth.uid() = target_user,
    false
  );
$$;

-- Mevcut öğrencilerde coach_id boş kalmış olabilir. Bu artık görünürlüğü engellemez.
-- Yine de ilk koçu varsayılan koç olarak atamak istersen aşağıdaki yorumlu sorguyu açabilirsin:
-- update public.profiles s
-- set coach_id = c.id
-- from (select id from public.profiles where role in ('coach','admin') order by created_at asc limit 1) c
-- where s.role = 'student' and s.coach_id is null;
