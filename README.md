# Template Documentation

You need to run `npm install` to install all dependencies. Then, just run `npm start` and you're ready to start your project right away.

Carefully inspect `gulpfile.js`. It's well commented and can be easily understood.

This starter template is also optimized for RTL websites. All CSS files are also copied for RTL styles on save.

The directory tree should look like this. Unless you want to change `src` and `dest` in the tasks in `gulpfile.js`.

> ## Update as of 18 Dec. 2020

Gulp 3 is outdated and no longer supported by Node.js 11.0.0 and above.

Add `npm-shrinkwrap.json` file to make Gulp v3.9.1 compitable with Node.js v11.0.0 and above.

```bash
│   .browserslistrc
│   .gitignore
│   gulpfile.js
│   index.html
│   npm-shrinkwrap.json
│   package.json
│   README.md
│   robots.txt
│
├───dist
│   └───assets
│       ├───css
│       │       .gitkeep
│       │
│       ├───images
│       │       .gitkeep
│       │
│       └───js
└───src
    ├───assets
    │   ├───css
    │   │       .gitkeep
    │   │
    │   ├───images
    │   │       .gitkeep
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
