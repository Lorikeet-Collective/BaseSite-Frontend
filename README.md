<!-- Header -->

<div align="center">
  <img src="images/logo.png" alt="Logo" width="80" height="80">
  <h3>Lorikeet Collective Frontend</h3>
  <span>v0.0.1 | <a href="https://github.com/Lorikeet-Collective/BaseSite-Frontend/blob/dev/CHANGELOG.md">Changelog</a></span>
</div>

<!-- Table of Contents -->

## Table-of-Contents

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running The Application](#running)
- [Testing](#testing)
- [Linting](#linting)
- [License](#license)
- [Notes](#notes)

<!-- About -->

## About The Project

This is the official Lorikeet Collective main website frontend.

<!-- Tech List -->

## Built With

<div align="center">

#### Languages

[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JSON](https://img.shields.io/badge/JSON-grey?style=for-the-badge&logo=json&logoColor=white)](https://www.json.org/json-en.html)

#### Frameworks

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-red?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)

#### Test Tools

[![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)](https://vitest.dev/)
[![Lighthouse](https://img.shields.io/badge/Google_Lighthouse-blue?style=for-the-badge&logo=lighthouse&logoColor=white)](https://developer.chrome.com/docs/lighthouse/overview)

#### Linter

[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

#### Tools

[![NPM](https://img.shields.io/badge/NPM-darkgreen?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

#### Protocols

[![Accessibility](https://img.shields.io/badge/Accessibility-%230170EA.svg?style=for-the-badge&logo=Accessibility&logoColor=white)](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
[![WCAG](https://img.shields.io/badge/WCAG-%23015A69.svg?style=for-the-badge&logo=WCAG&logoColor=white)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![SEO](https://img.shields.io/badge/SEO-brown?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

</div>

<!-- Prerequisites -->

## Prerequisites

- Follow the [Lorikeet Backend](https://github.com/Lorikeet-Collective/BaseSite-Backend) `README.md` file to get the associated backend up and running.
- Make sure your `.env` variables are set properly to connect to the backend.

> [!WARNING]
> If you have not received your `.env` variables, contact the Lead Engineer. The project will **_not_** work without them.

<!-- Installation -->

## Installation

_Use Node Package Manager in the install folder and run the following command to install dependencies:_

```sh
npm install
```

<!-- Running -->

## Running

The current available `NPM` scripts are:

- `dev` | run a dev server
- `build` | build the current project
- `start` | run a built project
- `lint` | check for linting errors

To run any of the above commands use this format in terminal:

```sh
npm run {command}
```

> [!IMPORTANT]
> Replace `{command}` with desired NPM script name.

<!-- Testing -->

## Testing

> [!NOTE]
> This section is under construction and subject to change.

### Vitest

Use **_Vitest_** to run and write various tests for general application functionality and stability.

### Usage

```sh
todo
```

### Accessbility

Google Lighthouse is used to audit our accessibility standards to meet the following:

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WCAG 3](https://www.w3.org/TR/wcag-3.0)

> [!NOTE]
> WCAG 3 will be implemented once the full release is available. Check here: [Status](https://www.w3.org/TR/wcag-3.0/#sotd)

## Linting

ESLint is used to verify code practices and syntax is being properly followed.

To use ESLint to check all files, run in project folder:

### Usage

```sh
npm run lint
```

<!-- License -->

## License

Distributed under the MIT License. See [LICENSE.txt](https://github.com/Lorikeet-Collective/BaseSite-Backend?tab=MIT-1-ov-file) for more information.

## Notes

> [!WARNING]
>
> #### A pull-request will be <code style="color:red;">auto-denied</code> under the following:
>
> - Linting must be verified with **_zero_** errors.
> - All test cases must be passed with **_zero_** errors.
> - Documentation must be relevant and updated to any changes presented.
> - Comment any code and update old comments to reflect changes.

Git commits will be prefixed with one of the following. Commit messages are in past tense:

- `fix` | Fix / Patch
- `create` | New Feature or Add-on
- `delete` | Removal of Code
- `temp` | Temp Change or Work Around
- `change` | Code Edit / Modification
- `perf` | Performance Change for Slow Code
- `sec` | Security Update / Change
- `dev` | Add Service / Tool to Dev Environment
- `prod` | Add Service / Tool to Production Environment
