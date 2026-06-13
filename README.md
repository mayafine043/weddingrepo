# Maya & Nick — Wedding Website

Live site: https://mayafine043.github.io/weddingrepo/

---

## 1. Credentials

Your Supabase credentials are stored directly in `config.js` and committed to the repo. This is fine — the key is a publishable anon key, not a secret, and the database is locked down with RLS policies so guests can only submit data, not read anyone else's.

---

## 2. Supabase tables

Already created. Schema for reference:

**guest_list** — the access control list (who is allowed to log in)
- id, first_name, last_name, created_at
- A name must exist here for that guest to get past the login page. Adding a row = granting someone access; removing one revokes it. This is separate from `guests` below, which only fills in once someone actually submits their details.

**guests** — one row per person
- id, first_name, last_name, email (unique), phone, created_at

**addresses** — linked to guests
- id, guest_id, street_address, city, state, zip, created_at

**submissions** — catch-all log for every form on the site
- id, guest_id, form_name, data (JSON), created_at

To view submissions: Supabase dashboard → Table Editor → select table.

---

## 3. Swap the background photo

The site currently uses `assets/photos/Chateau de Thauvenay Outdoor.jpg`. To change it:

1. Add your new photo to `assets/photos/`
2. Update this line in `assets/css/style.css` (line ~20) to point at the new filename:
```css
background-image: url('../photos/Chateau%20de%20Thauvenay%20Outdoor.jpg');
```
   Spaces in filenames must be written as `%20`.
3. Commit and push — the new background appears automatically.

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
