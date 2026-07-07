# Vincere Media Works — iOS App

Native mobile app for **Vincere Media Works** — services, portfolio, pricing, and contact. Built with Expo for App Store distribution.

## Features

- **Home** — branding, services overview, pricing, website link
- **Services** — full service catalog with details
- **Portfolio** — style examples and capabilities
- **Contact** — email, website, Instagram links

## Requirements

- Node.js 18+
- [Expo account](https://expo.dev/signup) (free)
- [Apple Developer Program](https://developer.apple.com/programs/) — **$99/year** (required for App Store)
- Mac with Xcode (optional for local simulator; cloud builds use EAS)

## Run locally

```bash
cd vincere-media-works-app
npm install
npx expo start
```

Scan the QR code with **Expo Go** on your iPhone to preview.

## Publish to the Apple App Store

### 1. Apple Developer setup

1. Enroll at [developer.apple.com/programs](https://developer.apple.com/programs/)
2. Create an app in [App Store Connect](https://appstoreconnect.apple.com):
   - **Name:** Vincere Media Works
   - **Bundle ID:** `com.vinceremediaworks.app`
   - **SKU:** `vincere-media-works`
   - **Category:** Business or Photo & Video

### 2. EAS Build (cloud — no Xcode required)

```bash
npm install -g eas-cli
eas login
eas init          # links project to Expo; updates app.json projectId
eas build --platform ios --profile production
```

EAS builds your `.ipa` in the cloud. First build will prompt for Apple credentials (App Store Connect API key recommended).

### 3. Submit to App Store

```bash
eas submit --platform ios --latest
```

Or upload the `.ipa` manually in App Store Connect → TestFlight → App Store.

### 4. App Store listing (fill in App Store Connect)

| Field | Suggested content |
|-------|-------------------|
| **Subtitle** | Media Production & Brand Design |
| **Description** | Vincere Media Works delivers video production, brand design, social content, and websites for businesses and creators. Browse services, view portfolio styles, see pricing, and contact us — all from your phone. Media that wins. |
| **Keywords** | video, editing, logo, branding, social media, media production |
| **Support URL** | https://jimmythegod100.github.io/vincere-media-works-web/ |
| **Privacy Policy URL** | Your website or a simple privacy page (required) |

### 5. Screenshots

Capture from iPhone simulator or device:
- Home screen with logo
- Services list
- Portfolio
- Contact

Required sizes: 6.7" and 6.5" iPhone (App Store Connect shows exact dimensions).

## Project structure

```
App.tsx                 # Tab navigation
src/
  data.ts               # Business info, services, pricing
  theme.ts              # Red/black brand colors
  screens/              # Home, Services, Portfolio, Contact
assets/
  icon.png              # App icon (V mark)
  logo-hero.png         # Hero banner
```

## Bundle ID

`com.vinceremediaworks.app`

## Website

https://jimmythegod100.github.io/vincere-media-works-web/

## Notes

- App Store review typically takes 1–3 days
- You need a **privacy policy URL** before approval — add one to your website or create a `/privacy.html` page
- Update `eas.json` submit section with your Apple ID and Team ID before `eas submit`
