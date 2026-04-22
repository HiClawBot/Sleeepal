# Sleeepal

Sleeepal is the public website repository for the SleeePal project, a local-first sleep assistance product exploring near-field active noise reduction around the pillow.

这个仓库当前只包含官网静态站内容，不包含桌面端、iOS、macOS 应用源码或构建产物。

## What This Repo Contains

- `index.html`: landing page
- `styles.css`: site styles
- `site.js`: site interactions and bilingual behavior
- `assets/`: brand logos and app icon assets

## Product Context

SleeePal is being developed around one narrow promise:

- create a quiet zone around the user's head, not the whole room
- keep processing local on device
- avoid user audio uploads
- make the system visible and explainable instead of a black box

## Local Preview

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Publishing

This repository is structured as a simple static website and can be deployed with GitHub Pages, Netlify, Vercel static hosting, or any basic web server.

## Main Project

The full SleeePal project also includes:

- a Python desktop application
- an iOS SwiftUI companion app
- a macOS SwiftUI shell
- protocol and product documentation

This website repository is the public-facing marketing surface for that broader product effort.

## License

MIT. See `LICENSE`.
