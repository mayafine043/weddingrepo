# Maya & Nick — Wedding Website

Live site: https://mayafine043.github.io/weddingrepo/

---

## 1. Credentials

Your Supabase credentials are stored directly in `config.js` and committed to the repo. This is fine — the key is a publishable anon key, not a secret, and the database is locked down with RLS policies so guests can only submit data, not read anyone else's.

---

## 2. Supabase tables

Already created. Schema for reference:

**guests** — one row per person
- id, first_name, last_name, email (unique), phone, created_at

**addresses** — linked to guests
- id, guest_id, street_address, city, state, zip, created_at

**submissions** — catch-all log for every form on the site
- id, guest_id, form_name, data (JSON), created_at

To view submissions: Supabase dashboard → Table Editor → select table.

---

## 3. Swap the background photo

1. Add your photo to `assets/photos/` and name it `wedding-bg.jpg`
2. Commit and push — it will automatically appear as the background

To use a different filename, change this one line in `assets/css/style.css`:
```css
--bg-photo: url('../photos/wedding-bg.jpg');
```

---

## 4. Add a new page

1. Duplicate any file in `pages/` and rename it (e.g. `faq.html`)
2. Add a nav link in every page file:
```html
<a href="faq.html">FAQ</a>
```
3. Commit and push

---

## 5. Add a new form

Any new form writes to the `submissions` table with a unique `form_name`:

```js
const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

await client.from('submissions').insert({
  guest_id: null,
  form_name: 'song_request',
  data: { song: 'My Song', artist: 'The Artist' }
});
```

No schema changes needed — just use a new `form_name` string.

---

## 6. Deploy changes

```bash
git add .
git commit -m "Your message here"
git push
```

GitHub Pages rebuilds automatically. Changes are live in ~60 seconds.
