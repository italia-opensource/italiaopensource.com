# Contributing to Italia Open-Source

## How to Contribute

- **🚀 I want to add my project or community**: fork [awesome-italia-opensource](https://github.com/italia-opensource/awesome-italia-opensource) and follow its [contributing guidelines](https://github.com/italia-opensource/awesome-italia-opensource/blob/main/CONTRIBUTING.md)
- **🤝 I want to become a Community Partner**: see [how to become a partner](https://italiaopensource.com/partners/how-to)
- **❓ I have a question:** [Open an Issue](https://github.com/italia-opensource/italiaopensource.com/issues/new?template=QUESTION.yml)
- **🐛 I found a bug:** [Open an Issue](https://github.com/italia-opensource/italiaopensource.com/issues/new?template=BUG_REPORT.yml)
- **💡 I have an idea:** [Open an Issue](https://github.com/italia-opensource/italiaopensource.com/issues/new?template=FEATURE_REQUEST.yml)
- **💻 I want to code (or improve documentation):** see [Contributing Code](#contributing-code) section

## Adding a Project or Community

Projects and communities aren't edited on this repo — they live as JSON files in
[awesome-italia-opensource](https://github.com/italia-opensource/awesome-italia-opensource), and this
site syncs from there automatically. To add or update one:

1. Fork `awesome-italia-opensource`
2. Add a JSON file (kebab-case, named after your entry) under `awesome/opensource/data/` or
   `awesome/communities/data/`
3. Open a PR — title `feat(opensource): added Name` or `feat(communities): added Name`

**Open-source project** — [full schema](https://github.com/italia-opensource/awesome-italia-opensource/blob/main/scheme/opensources.json):

```json
{
  "name": "Test",
  "repository_platform": "github",
  "repository_url": "https://www.github.com/test/name-of-repo",
  "site_url": "https://www.test.com",
  "type": "tool",
  "description": "lorem ipsum",
  "license": "GPL-3.0",
  "tags": ["python", "aws"]
}
```

`name`, `repository_platform`, `repository_url`, `type`, `license` and `tags` are required (max 20
tags). `type` and `license` must be one of the enums in the schema.

**Community** — [full schema](https://github.com/italia-opensource/awesome-italia-opensource/blob/main/scheme/communities.json):

```json
{
  "name": "Test",
  "url": "https://url",
  "type": "Event",
  "platform": "Discord",
  "description": "lorem ipsum",
  "tags": ["tech", "aws"],
  "events_type": ["Meetup", "Hackathon"]
}
```

`name`, `url`, `type`, `platform`, `tags` and `events_type` are required. `type`, `platform` and
`events_type` must be one of the enums in the schema.

## Contributing Code

> ⚠️ **Important:** If you're looking to add a new feature, please check if a feature issue exists or create one before starting development.

When you've identified an issue and you want to work on it here's how you can get started:

1. Fork the repo
2. Setup project
   - If you're using VS Code: open the project in devcontainer mode
   - Or, set up your local env with `just setup`
3. Add your changes
4. Test your changes using `just yarn test` and `just dev` to make sure everything still works
5. Commit & push your changes (we suggest using a feature or fix branch)
6. Open a PR to get your changes merged

### With Dev Container (Recommended)

1. Requirements: `Docker >=24`
2. Open the project in Visual Studio Code
3. Install the Dev Containers extension
4. Reopen in container when prompted
5. Website automatically starts at [http://localhost:4321](http://localhost:4321)

### Without Dev Container

1. **Requirements**

   | pkg    | version                                              |
   | ------ | ---------------------------------------------------- |
   | Docker | `>=24`                                               |
   | Node   | `>=24`                                               |
   | Yarn   | `4.x` (via [Corepack](https://yarnpkg.com/corepack)) |

2. **Setup the project:**

   ```bash
   just setup
   ```

3. **Start development server:**

   ```bash
   just dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:4321](http://localhost:4321)

### Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator, on [harness-walle](https://github.com/FabrizioCafolla/harness-walle)
- **Styling**: CSS with custom properties
- **Icons**: Astro Icon with Font Awesome
- **Content**: Astro content collections, synced from [awesome-italia-opensource](https://github.com/italia-opensource/awesome-italia-opensource) via `just sync-database`
- **Deployment**: GitHub Pages

### Project Structure

```text
├── src/
│   ├── @walle/          # Managed design system (layouts, components, styles, utils)
│   ├── components/      # Project-specific components
│   ├── configs/         # App/navbar/footer configs
│   ├── content/         # Content collections (synced data + curated posts)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Website pages (routes)
│   ├── styles/          # Global styles
│   └── utils/           # Helpers and interfaces
├── public/               # Static assets (fonts, images)
├── scripts/               # Automation scripts (sync-database, @walle CLI)
├── .devcontainer/          # Dev container setup
├── .husky/                 # Git hooks
├── astro.config.mjs        # Astro configuration
├── eslint.config.js        # ESLint configuration
├── package.json             # Dependencies/scripts
├── justfile / justfile.project  # Task runner
├── LICENSE                   # License
├── CODE_OF_CONDUCT.md        # Code of conduct
└── CONTRIBUTING.md           # This file
```

### PR Guidelines

- Keep PRs focused on a single feature/fix
- Include tests for new functionality
- Update documentation if needed
- Ensure all CI checks pass

### Code Style Guidelines

- Follow existing code patterns and conventions
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Follow the project's ESLint configuration

## Join our Community

[![LinkedIn](https://img.shields.io/badge/Linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/italia-open-source)

### [CODE OF CONDUCT](CODE_OF_CONDUCT.md)
