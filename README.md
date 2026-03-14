# Ivan Picó — Personal Website

This repository hosts the personal website for Ivan Picó.

What I did
- Replaced the repository content with the website files from `/Volumes/web/ivanpico_website`.
- Preserved the existing `CNAME` (www.ivanpico.com).
- Backup branch created on the remote: `backup-before-site-20260314`.

Published commit: `b2a199b` (message: "Replace site with personal website").

How to revert

1. Restore the previous site from the backup branch:

```bash
git fetch origin
git checkout master
git reset --hard origin/backup-before-site-20260314
git push --force origin master
```

Notes
- If you need a small edit or SEO updates, edit files in this repository and push to `master`.
- If you want the site served from a different branch (e.g. `gh-pages`), let me know.

Contact: ivan.pico.martin@gmail.com
