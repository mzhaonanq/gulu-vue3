#!/usr/bin/env bash
set -e
yarn build
cd dist
git init
git add -A
git commit -m "deploy"
git push -f git@github.com:mzhaonanq/gulu-vue3-website.git master:gh-pages
cd -