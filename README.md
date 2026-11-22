# ariefpurnamamuharram.github.io

Personal academic website of **Arief Purnama Muharram**, based on the official [Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll template (light/dark theme, sticky header).

## Local development

```bash
bundle install
# Theme toggle / sticky-nav JS (also built in CI)
npx --yes uglify-js assets/js/plugins/jquery.greedy-navigation.js assets/js/_main.js assets/js/theme.js -c -m -o assets/js/main.min.js
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000). Use the sun/moon icon in the header to switch light/dark mode.

## Content map

| Path | Purpose |
|------|---------|
| `_config.yml` | Site settings, theme (`site_theme`), author sidebar |
| `_pages/about.md` | Homepage |
| `_pages/cv.md` | CV |
| `_publications/` | Publications |
| `_talks/` | Talks |
| `images/profile.jpg` | Profile photo |
| `files/` | Downloadable files |
