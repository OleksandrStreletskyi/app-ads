# Studio website

Static GitHub Pages website. Keep the same public paths when updating the design.

- `index.html`: homepage.
- `privacy.html` and `terms.html`: translated document overview pages.
- `privacy-policy.html` and `terms-details.html`: full documents used by Google Play. Styling is in `legal.css`.
- `app-ads.txt`: preserve independently of visual changes. The domain-root copy belongs to the separate `OleksandrStreletskyi.github.io` repository.
- `googled6f735b4c38b5481.html`: preserve Google verification file.

## Add another game

1. Add its screenshots to `assets/`.
2. Add the description and edition labels in each of the eight dictionaries in `content.js`.
3. Add an entry to `STUDIO_GAMES` in `games.js` with a unique `id`, title, subtitle, description index, cover, screenshot paths and the correct Google Play package IDs. The catalogue and galleries render from this list.
4. Review legal scope for that particular game. Adding a catalogue entry does not automatically extend the full policy or terms.
5. Run `node build.cjs` to refresh the static English fallback pages.
6. Preview home, language switching, mobile layout, galleries, store links and both legal documents before publication.

No third-party web fonts, analytics or advertising scripts are required. The supplied studio logo and background are local assets.

Game description sources, reviewed November 7, 2026:
- https://play.google.com/store/apps/details?id=com.AnomalyGameStudio.S.T.R.Y.K.E.R.ShadowWarDemo
- https://play.google.com/store/apps/details?id=com.AnomalyGameStudio.POLYZONAChernobylBunker
