echo '=========Deploy to Github Start========='

echo '\033[31mDeleting old page... \033[0m'
git branch -D gh-pages

git push origin :gh-pages

echo '\033[31mBuilding... \033[0m'
yarn build

echo '\033[31m \nCreating new page... \033[0m'
git checkout -b gh-pages

git add -f dist

git commit -m 'demo page'

git subtree push --prefix dist origin gh-pages

echo '=========Deploy to Github Finished========='

echo '\033[31m \nSwitching branch to master... \033[0m'
git checkout master