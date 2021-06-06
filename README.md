# REACT PROJECT

### My dependencies

- @testing-library/jest-dom
  - [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)
- @testing-library/react
  - [https://github.com/testing-library/react-testing-library](https://github.com/testing-library/react-testing-library)
- @testing-library/user-event
  - [https://github.com/testing-library/user-event](https://github.com/testing-library/user-event)
- axios
  - [https://github.com/axios/axios](https://github.com/axios/axios)
- jwtdecode
  - [https://github.com/auth0/jwt-decode](https://github.com/auth0/jwt-decode)
- lodash
  - [https://github.com/lodash/lodash](https://github.com/lodash/lodash)
- prop-types
  - [https://github.com/facebook/prop-types](https://github.com/facebook/prop-types)
- react-cookie
  - [https://github.com/reactivestack/cookies/tree/master/packages/react-cookie](https://github.com/reactivestack/cookies/tree/master/packages/react-cookie)
- react-hook-form
  - [https://github.com/react-hook-form/react-hook-form/](https://github.com/react-hook-form/react-hook-form/)
- react-redux
  - [https://github.com/reduxjs/react-redux](https://github.com/reduxjs/react-redux)
- react-router-dom
  - [https://github.com/ReactTraining/react-router](https://github.com/ReactTraining/react-router)
- redux
  - [https://github.com/reduxjs/redux](https://github.com/reduxjs/redux)
- redux-saga
  - [https://github.com/redux-saga/redux-saga](https://github.com/redux-saga/redux-saga)

### My devDependencies

- eslint
- eslint-config-airbnb
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- http-proxy-middleware
- prettier

### Folder structure

```bash
src
|
├── assets
│   ├── file11.png
│   └── file12.png
├── components
│   ├── your-component.js
│   └── index.js
├── constants
│   ├── your-constant.js
│   └── index.js
├── hooks
│   ├── your-hooks.js
│   └── index.js
├── layout
│   ├── your-layout.js
│   └── index.js
├── pages
│   ├── your-page.js
│   └── index.js
├── redux
│   auth
│   |  ├── action.js
│   |  └── reducer.js
|   |  ├── saga.js
|   |  └── type.js
│   ├── actions.js
|   ├── index.js
|   ├── reducers.js
|   └── sagas.js
|
├── routes
│   ├── private.js
│   └── index.js
├── styles
│   base
│   |  ├── _app.css
│   |  └── _home.css
│   abstract
|   |
|   components
|   |
|   utilities
|   |
|   index.css
|
├── theme
│   └── colors.js
|   ├── index.js
|
|
├── utils
│   ├── auth.js
│   └── request.js
|   ├── index.js
|
└── App.js
└── App.test.js
└── index.js
└── logo.svg
└── reportWebVitals.js
└── setupProxy.js
└── setupTests.js
|
.env
|
.eslintrc.json
|
.gitignore
|
.prettierrc
|
package.json
|
README.md
|
yarn.lock
```

### Setup Development

- first, clone this repository

```bash
$ git clone https://github.com/usamahbass/my-reactapp-setup.git your-app
$ cd your-app
$ yarn install
```

- open **your-app** in your IDE and add .env file with contents like this and put in your api.

```bash
REACT_APP_API_URL=your api here
```

- go to file setupProxy.js, and by default like this

```js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/v1', // your version or front yout path api , empty if not available
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL, // your env name
      changeOrigin: true,
    }),
  );
};
```
You can rename env with the name env and version with your version.

