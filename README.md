# Template Documentation

You need to run `npm install` to install all dependencies. Then, just run `npm start` and you're ready to start your project right away.

Carefully inspect `gulpfile.js`. It's well commented and can be easily understood.

This starter template is also optimized for RTL websites. All CSS files are also copied for RTL styles on save.

The directory tree should look like this. Unless you want to change `src` and `dest` in the tasks in `gulpfile.js`.

> ## Update as of 18 Dec. 2020

Gulp 3 is outdated and no longer supported by Node.js 11.0.0 and above.

Add `npm-shrinkwrap.json` file to make Gulp v3.9.1 compitable with Node.js v11.0.0 and above.

```bash
├── src
│   ├── assets
│   │    ├── css
│   │    ├── images
│   │    ├── js
│   │    │   ├── app.js
│   ├── sass
│   │    │   ├── abstracts
│   │    │   ├── base
│   │    │   ├── components
│   │    │   ├── layout
│   │    │   ├── pages
│   │    │   ├── main.scss
│   └── index.html
├── dist
│   ├── assets
│   │    ├── css
│   │    ├── images
│   │    ├── js
│   └── index.html
├── .gitignore
├── robots.txt
├── gulpfile.js
├── package.json
├── node_modules
└── README.md
```
