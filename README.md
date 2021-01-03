# Starter Kit Documentation

First, you need to run `npm install` to install all dependencies. Then, just run `npm start` and you're ready to start your project right away. Once you save `index.html`, and `dist` directory will be created automatically.

Carefully inspect `gulpfile.js`. It's well commented and can be easily understood.

This starter kit is also optimized for RTL websites. All CSS files are also copied for RTL styles on save.

The directory tree should look like below. Unless you want to change `src` and `dest` in Gulp tasks.

```bash
│   .browserslistrc
│   .gitignore
│   gulpfile.js
│   index.html
│   LICENSE
│   npm-shrinkwrap.json
│   package.json
│   README.md
│   robots.txt
│
└───src
    ├───assets
    │   ├───css
    │   │       .gitkeep
    │   │
    │   ├───images
    │   │       favicon.png
    │   │
    │   └───js
    │           app.js
    │
    └───sass
        │   main.scss
        │
        ├───abstracts
        │       _functions.scss
        │       _mixins.scss
        │       _placeholders.scss
        │       _variables.scss
        │
        ├───base
        │       _animations.scss
        │       _base.scss
        │       _typography.scss
        │
        ├───components
        │       _buttons.scss
        │
        ├───layout
        │       _footer.scss
        │       _header.scss
        │       _navigation.scss
        │
        └───pages
                _home.scss
```
---

> ## Update as of 18 Dec. 2020

Gulp 3 is outdated and is no longer maintained nor supported by Node.js 11.0.0 and above.

Added `npm-shrinkwrap.json` file to make Gulp v3.9.1 compatible with Node.js v11.0.0 and above.

After you run `npm install`, `npm-shrinkwrap.json` will be modified. **DON'T TOUCH IT**.

## Changelog

### 03 January 2021

1. Updated packages to the latest and compatible with Gulp 3.
2. Updated BrowserSync options.
3. Removed `gulp-imagemin` package and task.
4. Removed `gulp-notify` package.
5. Updated `.gitignore`.
6. Added a default favicon.

---

## TODO

- [ ] Update to Gulp 4.
