# Vincere Media Works — iOS App

Native mobile app for **Vincere Media Works** — services, portfolio, pricing, and contact. Built with Expo.

## Live preview (free — no install)

**Web app:** https://jimmythegod100.github.io/vincere-media-works-app/

Works in any browser. On iPhone: open link → Share → **Add to Home Screen**.

## Features (v1.1)

- **Home** — branding, services, how-it-works, pricing with features
- **Services** — full catalog with emoji icons on web
- **Portfolio** — style examples
- **Contact** — email/website/Instagram + in-app inquiry form (FormSubmit on web)
- **PWA** — installable from browser
- **Auto-deploy** — GitHub Actions pushes web build to gh-pages on every main push

## Run locally

```bash
npm install
npx expo start        # QR code → Expo Go on iPhone
npx expo start --web  # Browser preview
```

## Deploy web (manual)

```bash
npm run deploy:web
```

## App Store (iOS)

Requires Apple Developer ($99/yr) + EAS Build:

```bash
npm install -g eas-cli
eas login && eas init
eas build --platform ios --profile production
eas submit --platform ios --latest
```

Privacy policy: https://jimmythegod100.github.io/vincere-media-works-web/privacy.html

## Repo

- App: https://github.com/jimmythegod100/vincere-media-works-app
- Website: https://github.com/jimmythegod100/vincere-media-works-web
