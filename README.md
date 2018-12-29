# debtrack Style Guide

## Production

This style guide is hosted on Netlify (https://debtrack-styleguide.netlify.com/).

Every commit/push to the master branch triggers a build. Once the build (`npm run build`) is finished the `dist` directory is hosted.

## Development

* clone this repository

```bash=linux
git clone https://github.com/domgew/mmt-b2017-ws18-frontendstyle.git
```

* switch to the development branch

```bash=linux
git checkout development
```

* install all dependencies

```bash=linux
npm ci
```

* start the development server

```bash=linux
npm start
```

* start working in the `src` directory

* commit often (useful steps) and push

### How to Deploy

* pull all changes on the development branch
```bash=linux
git checkout development
git pull
```

* pull all changes on the master branch
```bash=linux
git checkout master
git pull
```

* merge the branches
```bash=linux
git checkout master
git merge development
```

* push the result to the remote repository and pull the new state
```bash=linux
git checkout master
git push
git pull
git checkout development
git pull
```
