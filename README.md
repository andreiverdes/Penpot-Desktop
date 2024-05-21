![Penpot Desktop](https://europe1.discourse-cdn.com/standard20/uploads/penpot/original/2X/b/bc6c290e4566bc12f8afa162bae80ffb20a7c7f5.jpeg)
> This is unofficial software

<a href="https://www.producthunt.com/posts/penpot-desktop?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-penpot&#0045;desktop" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=371642&theme=dark" alt="Penpot&#0032;Desktop - A&#0032;desktop&#0045;like&#0032;experience&#0032;for&#0032;Penpot | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54"/></a> <a href="https://notbyai.fyi"><img width="150" src="https://md.sudovanilla.org/images/written-by-human-not-by-ai-white.svg" alt="Written by Human, Not by AI"></a>

# Penpot Desktop
Penpot Desktop delivers a desktop-like experience for Penpot users with the additional of integrating tabs to conveniently traverse back and forth between projects. Offline support is available through the select your own instance option in settings, as well as the theme settings that may be applied to either the entire desktop app or simply the Penpot dashboard.

## Quick Links
Endusers:
 - [FAQ](https://sudovanilla.org/docs/penpot-desktop/FAQ.md)
 - Install [[Windows](https://sudovanilla.org/docs/penpot-desktop/install/WINDOWS.md), [Mac](https://sudovanilla.org/docs/penpot-desktop/install/MAC.md), [Linux](https://sudovanilla.org/docs/penpot-desktop/install/LINUX.md)]
 - [System Requirements](https://sudovanilla.org/docs/penpot-desktop/install/INSTALL.md#system-requirements)
 - [Changelog](https://sudovanilla.org/docs/penpot-desktop/CHANGELOG.md)

Developers:
 - [FAQ for Developers](https://sudovanilla.org/docs/penpot-desktop/FAQ-for-developers.md)
 - [Build Instructions](https://sudovanilla.org/docs/penpot-desktop/BUILD.md)

## Building
### Requirements
 - [NodeJS](https://nodejs.org/) v20
 - [Python](https://www.python.org/)
 - Supported OS:
    - Windows 10 or newer
    - macOS
    - Linux

### Install Packages
Before building anything, packages need to be installed first by your package manager, NodeJS should come with `npm` by default:
```bash
npm install
```

> Other package managers such as Yarn, PNPM, or Bun also work.

### Run Build
Once packages are installed, with no issues, you can run the build command:
```bash
npm run build
```