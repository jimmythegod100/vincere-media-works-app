#!/usr/bin/env bash
# Deploy Expo web build to GitHub Pages (gh-pages branch)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REPO="${GITHUB_REPOSITORY:-jimmythegod100/vincere-media-works-app}"
BASE="/vincere-media-works-app"
WORK="/tmp/vmw-web-deploy-$$"

cd "$ROOT"
echo "[deploy] Exporting web build…"
npx expo export --platform web

echo "[deploy] Patching paths for GitHub Pages (${BASE})…"
rm -rf "$WORK"
cp -R dist "$WORK"
find "$WORK" -type f \( -name "*.html" -o -name "*.js" \) -exec sed -i '' \
  "s|\"/_expo|\"${BASE}/_expo|g; s|\"/assets|\"${BASE}/assets|g; s|\"/favicon|\"${BASE}/favicon|g" {} \;
touch "$WORK/.nojekyll"

echo "[deploy] Pushing to gh-pages…"
git fetch origin gh-pages 2>/dev/null || true
git checkout gh-pages 2>/dev/null || git checkout --orphan gh-pages
git rm -rf . 2>/dev/null || true
cp -R "$WORK"/. .
rm -rf "$WORK"
git add -A
git diff --staged --quiet && echo "[deploy] No changes." && git checkout main && exit 0
GIT_AUTHOR_NAME="jimmythegod100" GIT_AUTHOR_EMAIL="jimmythegod100@users.noreply.github.com" \
GIT_COMMITTER_NAME="jimmythegod100" GIT_COMMITTER_EMAIL="jimmythegod100@users.noreply.github.com" \
git commit -m "Deploy web app v1.1.0 [automated]"
GIT_COMMITTER_NAME="jimmythegod100" GIT_COMMITTER_EMAIL="jimmythegod100@users.noreply.github.com" \
git push -f origin gh-pages
git checkout main
echo "[deploy] Live: https://jimmythegod100.github.io${BASE}/"
