# Practice HoSeL

Practice HoSeL is a simple web application designed for handling 1st BOD and 2nd BOD application forms.

## Features

- Personal Data form
- Primary ID collection
- Contact information
- Address information
- Employment information
- Lead ID input
- Draft save using browser localStorage
- Automatic draft restoration
- Responsive mobile layout
- Submit application function

## Project Structure

```
Practice-HoSeL/
│
├── index.html
├── app.js
├── manifest.json
├── README.md
├── icon-192.png
└── icon-512.png
```

## Setup

1. Put all files in one folder.
2. Open `index.html` in browser.
3. For PWA support, include:

```html
<link rel="manifest" href="manifest.json">
<script src="app.js"></script>
```

## Save Draft

Drafts are stored locally in browser localStorage.

Key used:

```
HoSeLDraft
```

Submitting the application automatically clears saved draft data.

## Notes

- Works on desktop and mobile browsers
- Camera upload supported using device camera
- Responsive layout included
