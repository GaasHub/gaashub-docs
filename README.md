# GaasHub Documentation Site

The official documentation for [GaasHub](https://gaashub.com), built with [Docusaurus 3](https://docusaurus.io).

## Development

### Installation

```bash
npm install
```

### Local Development

```bash
npm run start
```

This starts a local development server at `http://localhost:3000`.

### Build

```bash
npm run build
```

The static files are generated in the `build` directory.

## Deployment

### Automated Deployment (Recommended)

This repository is configured with **GitHub Actions**. Any push to the `main` branch will automatically trigger a build and deploy to the `gh-pages` branch.

### Manual Deployment

If you need to deploy manually from your local machine:

```bash
GIT_USER=<your-github-username> npm run deploy
```

For SSH-based deployment:

```bash
USE_SSH=true npm run deploy
```

---

*For more information, refer to the [Docusaurus Deployment Documentation](https://docusaurus.io/docs/deployment).*
