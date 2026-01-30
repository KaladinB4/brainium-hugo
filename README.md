# Brainium Hugo Site

Research-backed guidance for thinking with AI.

**Live Site**: https://brainium.ai  
**Repository**: https://github.com/KaladinB4/brainium-hugo

## Development

### Prerequisites
- Hugo (latest extended version)
- Git

### Local Development

```bash
# Start development server with drafts
hugo server -D

# Build for production
hugo --minify

# Clean build
rm -rf public && hugo --minify
```

Visit http://localhost:1313 to preview.

### Content Management

**Creating new content:**
```bash
hugo new content research/study-name.md
hugo new content essays/essay-name.md
hugo new content cognitive-tools/tool-name.md
```

**Content structure:**
- `content/research/` - Research articles
- `content/essays/` - Long-form essays
- `content/cognitive-tools/` - Tool guides
- `content/about/` - About pages

### Deployment

Pushing to the `main` branch automatically deploys to production via GitHub Actions.

```bash
git add .
git commit -m "content: Add new research article"
git push origin main
```

Check deployment status at: https://github.com/KaladinB4/brainium-hugo/actions

## Content Guidelines

- Use semantic commit messages: `content:`, `fix:`, `style:`
- Always test locally before pushing
- Include proper frontmatter (title, description, date, tags)
- Cross-link related articles
