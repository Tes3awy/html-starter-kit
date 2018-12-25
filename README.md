# Documentation

You need to run `npm install` to install all dependencies. Then just run `npm start` and you're ready to start your project right away.

Once the dependecies are installed, and `npm start` is running in your terminal. Open `index.html` and save it, a `dist` folder will automatically be created.

Carefully inspect `gulpfile.js`. It's well commented and can be easily understood.

This starter template is also optimized for RTL websites. All CSS files are also duplicated for RTL styles on save.

The directory tree should look like this. Unless you want to change `src` and `dest` in all tasks in `gulpfile.js`.

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
├── gulpfile.js
├── package.json
├── node_modules
└── README.md
```
