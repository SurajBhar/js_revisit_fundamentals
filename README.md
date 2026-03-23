# JavaScript Tutorials

This repository is a small browser-based JavaScript practice repo. The HTML files live in `pages/` and the JavaScript files live in `scripts/`.

## Current Structure

```text
.
├── pages/
│   ├── index.html
│   └── strings.html
├── scripts/
│   ├── script.js
│   └── strings.js
├── README.md
└── .codex/
    └── STATE.md
```

## How It Works

- Open an HTML file from `pages/` in the browser.
- Each page loads its matching JavaScript file from `scripts/`.
- Because the HTML files are inside `pages/`, the script path must go up one level first.

Examples:

- `pages/index.html` uses `../scripts/script.js`
- `pages/strings.html` uses `../scripts/strings.js`

## Script Tag Pattern

Recommended pattern:

```html
<head>
  <script defer src="../scripts/script.js"></script>
</head>
```

This works well because:

- the relative path is correct from the HTML file location
- `defer` waits until the HTML is parsed before running the script
- the browser can open the file directly with `file://` for simple practice cases like this repo

## Notes

- The JavaScript output for this repo is mainly visible in the browser console.
- If you later use modules, `fetch()`, or other features that are stricter under `file://`, use a local server instead of opening the files directly.
