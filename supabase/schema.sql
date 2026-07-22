-- Personal Dashboard schema
-- Paste this into the Supabase SQL Editor and run it once.
-- Safe to re-run: uses if-not-exists / exception guards throughout.

do $$ begin
  create type task_category as enum ('general', 'running', 'cooking', 'selling');
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type meal_slot as enum ('breakfast', 'lunch', 'dinner');
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type listing_platform as enum ('vinted', 'ebay');
exception
  when duplicate_object then null;
end $$;

do $$ begin
  create type listing_status as enum ('draft', 'listed', 'sold', 'shipped');
exception
  when duplicate_object then null;
end $$;

create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  text text not null,
  category task_category not null default 'general',
  done boolean not null default false,
  due_date date,
  created_at timestamptz not null default now()
);

create table if not exists daily_focus (
  date date primary key,
  one_thing_text text not null
);

create table if not exists runs (
  id uuid primary key default gen_random_uuid(),
  date date not null,
  distance_km numeric not null,
  duration_seconds integer not null,
  notes text
);

create table if not exists goals (
  id uuid primary key default gen_random_uuid(),
  type text not null,
  target_value numeric not null,
  target_date date
);

create table if not exists meals (
  id uuid primary key default gen_random_uuid(),
  date date not null,
  slot meal_slot not null,
  dish_name text not null,
  notes text
);

create table if not exists grocery_items (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  checked boolean not null default false,
  added_from_meal_id uuid references meals(id) on delete set null
);

create table if not exists listings (
  id uuid primary key default gen_random_uuid(),
  item_name text not null,
  platform listing_platform not null,
  price numeric not null,
  status listing_status not null default 'draft',
  listed_date date,
  sold_date date
);

-- Row Level Security: single-user app, no user_id columns anywhere.
-- Every table is locked to authenticated sessions only — the anon/publishable
-- key is public in the client bundle, so RLS is what actually protects the data.
alter table tasks enable row level security;
alter table daily_focus enable row level security;
alter table runs enable row level security;
alter table goals enable row level security;
alter table meals enable row level security;
alter table grocery_items enable row level security;
alter table listings enable row level security;

do $$ begin
  create policy "authenticated full access" on tasks for all to authenticated using (true) with check (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "authenticated full access" on daily_focus for all to authenticated using (true) with check (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "authenticated full access" on runs for all to authenticated using (true) with check (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "authenticated full access" on goals for all to authenticated using (true) with check (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "authenticated full access" on meals for all to authenticated using (true) with check (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "authenticated full access" on grocery_items for all to authenticated using (true) with check (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "authenticated full access" on listings for all to authenticated using (true) with check (true);
exception when duplicate_object then null; end $$;
