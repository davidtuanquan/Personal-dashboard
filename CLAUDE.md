# Personal Dashboard — Build Spec

## What this is
A personal life dashboard covering daily tasks/focus, running, cooking, and Vinted/eBay selling. Single user (David), accessible from phone and laptop via a shared URL, installable as a PWA on mobile.

## Stack
- **Frontend:** Vite + React (single-page app, no Next.js — no routing/SEO complexity needed)
- **Database + Auth:** Supabase (Postgres, free tier)
- **Hosting:** Vercel (free tier, deploy from GitHub)
- **Mobile:** PWA — manifest + icons, installs to home screen, no app store

## Layout
- **Laptop:** left sidebar nav (Home, Tasks, Running, Cooking, Selling)
- **Mobile:** bottom tab bar, same five destinations
- Same components and data, just repositioned by breakpoint — don't build two separate UIs
- **Home view:** today's "one thing," plus a compact summary pulled from each module (next run, this week's meals, active listings, open tasks due today)

## Database schema

### `tasks`
| field | type | notes |
|---|---|---|
| id | uuid, pk | |
| text | text | |
| category | enum | general / running / cooking / selling |
| done | boolean | default false |
| due_date | date | nullable |
| created_at | timestamp | default now() |

### `daily_focus`
| field | type | notes |
|---|---|---|
| date | date, pk | one row per day |
| one_thing_text | text | |

### `runs`
| field | type | notes |
|---|---|---|
| id | uuid, pk | |
| date | date | |
| distance_km | numeric | |
| duration_seconds | integer | pace derived, not stored |
| notes | text | nullable |

### `goals`
| field | type | notes |
|---|---|---|
| id | uuid, pk | |
| type | text | e.g. "5k_time" |
| target_value | numeric | |
| target_date | date | nullable |

### `meals`
| field | type | notes |
|---|---|---|
| id | uuid, pk | |
| date | date | |
| slot | enum | breakfast / lunch / dinner |
| dish_name | text | |
| notes | text | nullable |

### `grocery_items`
| field | type | notes |
|---|---|---|
| id | uuid, pk | |
| name | text | |
| checked | boolean | default false |
| added_from_meal_id | uuid | nullable, fk → meals.id |

### `listings`
| field | type | notes |
|---|---|---|
| id | uuid, pk | |
| item_name | text | |
| platform | enum | vinted / ebay |
| price | numeric | |
| status | enum | draft / listed / sold / shipped |
| listed_date | date | nullable |
| sold_date | date | nullable |

Selling module summary stats (items sold this month, revenue, avg. sell time) are computed from `listings` at query time — not stored separately.

## Auth
Supabase Auth, single user, email + password or magic link. No public sign-up flow needed.

## Build approach
Build the full app in one pass: Supabase project + schema, Auth, Vite/React app with all four modules (Tasks, Running, Cooking, Selling) plus the Home view, deployed to Vercel, with PWA manifest/icons and responsive nav (sidebar on laptop, bottom tabs on mobile) included from the start.

## Explicitly out of scope
- Garmin / any external run-tracking integration
- Recipes table / meal plan templates
- Training plan structure for running beyond a single goal target
- Multi-user support of any kind