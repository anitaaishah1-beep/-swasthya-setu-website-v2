# Admin (Decap CMS) Setup — Swasthya Setu

This site uses **Decap CMS** (Git-based). Visit `/admin/` to log in and edit content once configured.

## Steps (GitHub backend)
1) Create a GitHub OAuth App (Settings → Developer settings → OAuth Apps):
   - Homepage URL: https://YOUR-SITE-URL
   - Authorization callback URL: https://YOUR-SITE-URL/admin/callback
2) Deploy a small OAuth proxy (e.g., `netlify-cms-oauth-provider`) or host on Fly.io.
3) Update `admin/config.yml`:
   - `repo: yourusername/yourrepo`
   - `base_url:` set to your OAuth proxy URL if you use one.
4) Commit & push. Open `/admin/` and authenticate with GitHub.

### Editing
- **Blog Posts**: creates files in `/posts` and you should add entries to `content/posts/index.json` (there’s a “Posts Index” editor to manage that list).
- **Gallery**: updates `content/gallery.json` and uploads images to `assets/uploads`.
- **Press**: manage press links and YouTube video IDs.
- **Languages**: edit `i18n/*.json` strings for the homepage.
