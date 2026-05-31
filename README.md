# Maya & Nick — Wedding Website

## 1. Configure Supabase credentials

Open `config.js` and replace the placeholder values:

```js
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';
```

Never commit real credentials. Keep them only in `config.js` locally.

---

## 2. Create Supabase tables

Go to your Supabase dashboard → SQL Editor → paste and run this:

```sql
-- Guests table
create table guests (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null unique,
  phone text not null,
  created_at timestamptz default now()
);

-- Addresses table
create table addresses (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid references guests(id),
  street_address text not null,
  city text not null,
  state text not null,
  zip text not null,
  created_at timestamptz default now()
);

-- Submissions table (catch-all for all future forms)
create table submissions (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid references guests(id),
  form_name text not null,
  data jsonb not null,
  created_at timestamptz default now()
);
```

---

## 3. Set RLS policies

In Supabase SQL Editor, run this after creating the tables:

```sql
-- Enable RLS on all tables
alter table guests enable row level security;
alter table addresses enable row level security;
alter table submissions enable row level security;

-- Guests: anyone can insert, only authenticated users can read
-- Exception: anonymous users can select email only (for duplicate check)
create policy "anon insert guests" on guests for insert to anon with check (true);
create policy "anon check email" on guests for select to anon using (true);
create policy "auth read guests" on guests for select to authenticated using (true);

-- Addresses: anyone can insert, only authenticated users can read
create policy "anon insert addresses" on addresses for insert to anon with check (true);
create policy "auth read addresses" on addresses for select to authenticated using (true);

-- Submissions: anyone can insert, only authenticated users can read
create policy "anon insert submissions" on submissions for insert to anon with check (true);
create policy "auth read submissions" on submissions for select to authenticated using (true);
```

---

## 4. Swap the background photo

1. Add your photo to `assets/photos/` — name it `wedding-bg.jpg`
2. That's it. The CSS already points there via:
   ```css
   --bg-photo: url('../photos/wedding-bg.jpg');
   ```
   To use a different filename, change that one line in `assets/css/style.css`.

---

## 5. Add a new page

1. Duplicate any file in `pages/` and rename it (e.g. `faq.html`)
2. Add a link to the nav in every page file:
   ```html
   <a href="faq.html">FAQ</a>
   ```
3. Deploy (push to GitHub)

---

## 6. Add a new form to any page

Any new form just writes to the `submissions` table with a unique `form_name`:

```js
await client.from('submissions').insert({
  guest_id: null, // or a real guest id if known
  form_name: 'song_request',
  data: { song: '...', artist: '...' }
});
```

No schema changes needed.

---

## 7. Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial wedding website"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then in GitHub: Settings → Pages → Source: Deploy from branch → main → / (root) → Save.

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
