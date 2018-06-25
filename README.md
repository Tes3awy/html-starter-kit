# Documentation

You need to run `npm install` to install all dependencies. Then just run `npm run watch` and you're ready to start your project right away.

Once the dependecies are installed, and `npm run watch` is running in your terminal. Open `index.html` and save it, a `dist` folder will immediatly be created.

Carefully inspect `gulpfile.js`. It's well commented and you'll easily understand it.

This starter template is also optimized for RTL websites.

------
> Since empty directories cannot be commited. `dist` folder will be automatically generated once you save `index.html` file found in `src` directory.
------
The directory tree should be like this. Unless you want to change `src` and `dest` in all tasks in `gulpfile.js`.

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
