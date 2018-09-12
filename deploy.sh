echo '=========Deploy to Github Start========='

echo 'Delete old page...'
git branch -D gh-pages

git push origin :gh-pages

echo 'Building...'
yarn build

echo 'Create new page...'
git checkout -b gh-pages

git add -f dist

git commit -m 'demo page'

git subtree push --prefix dist origin gh-pages

echo '=========Deploy to Github Finished========='

echo 'Switch branch to master'
git checkout master