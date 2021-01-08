# Starter Kit Documentation

## Table of Contents
1. [Important Update](#update-as-of-18-dec-2020)
2. [Changelog](#Changelog)
3. [TODO](#TODO)

---

First, you have to run `npm install` to install all dependencies. Then, run `npm run copy-assets`, Finally, run `npm start` and you're ready to start your project right away. Once you save `index.html`, a `dist` directory will be created automagically :sparkles:.

Carefully inspect `gulpfile.js`. It's well commented and can be easily understood.

This starter kit is also optimized for RTL websites. All CSS files are also copied for RTL styles on `*.scss` files save.

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

Gulp 3 is outdated and is no longer maintained nor supported by Node.js 11.0.0 or later.

Added `npm-shrinkwrap.json` file to make Gulp v3.9.1 compatible with Node.js v11.0.0 or later.

After you run `npm install`, `npm-shrinkwrap.json` will be modified. **DON'T TOUCH IT**!

## Changelog

### 03 January 2021

1. Updated packages to the latest and compatible with Gulp 3.
2. Updated BrowserSync options.
3. Updated `.gitignore`.
4. Added a default favicon.
5. Added `normalize.css`.
6. Removed `gulp-imagemin` package and task.
7. Removed `gulp-notify` package.

---

## TODO

- [ ] Update the kit to Gulp 4.

> Feel free to create a [Pull Request](https://github.com/Tes3awy/html-starter-kit/pulls) and update the kit to Gulp 4.
