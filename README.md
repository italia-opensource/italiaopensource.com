# Italia Open Source website

The website for [Italia Open Source](https://italiaopensource.com) — the fully open-source platform
that discovers and explores Italy's tech innovations: open-source projects, tech communities,
partners and reports.

Built with the [harness-walle](https://github.com/FabrizioCafolla/harness-walle) Astro design
system. The catalog data is synced from
[awesome-italia-opensource](https://github.com/italia-opensource/awesome-italia-opensource).

## Development

Everything runs through `just` (see `just --list`):

```bash
just dev        # install deps + start the dev server → http://localhost:4321
just build      # production build (static, output in dist/)
```

Or directly with yarn: `yarn dev`, `yarn build`, `yarn lint`.

## Data sync

The `opensource` and `community` catalogs are Astro content collections
(`src/content.config.ts`) loaded from `src/content/data/*.json`, synced from the awesome repo.
The Partners page (`src/pages/partners/index.astro`) is a hand-maintained list, not synced data.

```bash
just sync-database                       # from the published awesome-italia-opensource (main)
just sync-database <ref> <local-path>    # from a local clone, offline
```

In CI the `Sync Database` workflow runs this on a `repository_dispatch` from the awesome repo and
opens a pull request with the updated data.

## Deploy

Deployed to **GitHub Pages** on every push to `main` (`.github/workflows/deploy.yml`), served on the
custom domain `italiaopensource.com`. No server-side infrastructure.

## Design system

`src/@walle/` is the managed harness-walle design system — do not hand-edit it; it is re-synced with
`just walle-update`. Your customizations live in `src/configs/` (branding, navbar, footer, theme),
`src/styles/`, `src/pages/`, `src/components/` and `src/content/`.

## License

See the `LICENSE` file.
