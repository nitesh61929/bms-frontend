## Development server

Define admin and app in host file. E.g: sudo nano /etc/hosts. Add hosts to localhost like:
127.0.0.1 local.admin.ownant.com
127.0.0.1 local.app.ownant.com

Run 'yarn' command to install the packages

Copy environment.ts file and create environment.dev.ts.
Run `yarn start:dev-admin` for an admin dev server. Navigate to `http://local.admin.ownant.com:4203/`.
Run `yarn start:dev-app` for an admin dev server. Navigate to `http://local.app.ownant.com:4204/`.
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running unit tests code coverage

Run `ng test --code-coverage`. This will generate coverage folder in root directory.
Open index.html in browser.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Required VSCODE extensions

https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials

## Code Formatting tool

Prettier https://prettier.io/

## Shared settings and extension

reference: https://itnext.io/settings-sync-with-vs-code-c3d4f126989

GitHub Gist: 4463fc0058cd17911b54edb8c5379e09

# Report generation

- `npm run compodoc` (compodoc -p tsconfig.json)
- `npm run compodoc-serve` (compodoc -s tsconfig.json)
