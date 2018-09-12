echo '=========Deploy to Github Start========='

echo 'Delete old pages'
git branch -D gh-pages

git push origin :gh-pages

echo 'Building...'
yarn build

echo 'Create new pages'
git checkout -b gh-pages

git add -f dist

git commit -m 'demo pages'

git subtree push --prefix dist origin gh-pages

echo '=========Deploy to Github Finished========='