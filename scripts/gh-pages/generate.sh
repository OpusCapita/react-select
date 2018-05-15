#!/bin/sh

rm -rf .gh-pages-tmp lib &&
mkdir .gh-pages-tmp &&
node node_modules/webpack/bin/webpack.js --config ./webpack.docs.config.js --hide-modules &&
cp -R lib/* .gh-pages-tmp &&
cp -R www/index.html .gh-pages-tmp &&
cp -R .gitignore .gh-pages-tmp
