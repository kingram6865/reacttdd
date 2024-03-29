# Notes while following along

[Youtube Playlist](https://www.youtube.com/watch?v=6t1tAyKaAKM&list=PLXXnezSEtvNMlfJFd1Z2wilxymcOaVl9Q&index=1)

This tutorial is FIVE years, 2 months old as of 2023-12-03. Some details are obsolete
- Enzyme is no longer used for React component testing.

## Unit and component tests
Josh uses 

- Jest and Mocha for unit tests although mocha is older.
- Enzyme for React components

Mocha-Chai-Sinon takes a bit of setup

Cypress and Jest is easier for beginners

- Josh has learned to do outside-in testing, End-to-end for the whole app and unit/component testing.

### Have to replace Enzyme for React component testing

All of [Livestream 1](https://www.youtube.com/watch?v=6t1tAyKaAKM&list=PLXXnezSEtvNMlfJFd1Z2wilxymcOaVl9Q&index=1) is tool setup and since the material is obsolete in terms of this aspect of tooling, we will be sidetracked to set up the alternative to Enzyme.

React is at version 18.* and Enzyme last worked with React v16.*

These are some resources found regarding this issue:
- [This resource (2023-01-26)](https://hackernoon.com/enzyme-is-dead-heres-how-you-can-migrate) helps devs migrate out of Enzyme.
- [Top alternatives to Enzyme](https://stackshare.io/enzyme/alternatives)
  |icon| Library|Notes|References
  |---|---|---|---
  ![](reacttestinglibrary.png)|[React Testing Library](https://github.com/testing-library/react-testing-library)|A simple and complete React DOM testing utility that encourage good testing.|<ul><li>[What Is React Testing Library?](https://www.youtube.com/watch?v=JKOwJUM4_RM)</li><li>[Testing In React Tutorial - Jest and React Testing Library](https://www.youtube.com/watch?v=JBSUgDxICg8)</li><li>[React Testing Tutorial with React Testing Library and Jest](https://www.youtube.com/watch?v=Flo268xRpV0)</li></ul>
  ![](mocha.png)|[Mocha](https://stackshare.io/mocha)
  ![](jasmine.png)|[Jasmine](https://stackshare.io/jasmine)
  ![](cypress.png)|[Cypress](https://stackshare.io/cypress)
  ![](jest.png)|[Jest](https://stackshare.io/jest)
  ![](chai.png)|[Chai](https://stackshare.io/chai)
  ![](sinonjs.png)|[SinonJS](https://stackshare.io/sinonjs)
  ![](protractor.png)|[Protractor](https://stackshare.io/protractor)

For this tutorial I am going to use [React Testing Libraray](https://testing-library.com/docs/react-testing-library/intro/)

```bash
yarn add --dev @testing-library/react
```

To use it with Jest we need:
```bash
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```

`babel.config.js`
```js
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
};
```

From the Jest [Testing React Apps]()https://jestjs.io/docs/tutorial-react page:

`Link.js`

```js
import {useState} from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default function Link({page, children}) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}
```

`test/unit/Link.spec.js`

```js
import renderer from 'react-test-renderer';
import Link from '../Link';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
```

Run
```bash
yarn unit
```

The results:
![yarn unit](./yarn_unit_output.png)

If using Jest 28 or later, jest-environment-jsdom package now must be installed separately.
```
yarn add --dev jest-environment-jsdom
```

jsdom is also no longer the default environment. You can enable jsdom globally by editing jest.config.js:

```js
 module.exports = {
+  testEnvironment: 'jsdom',
   // ... other options ...
 }
```

## Lint

```
yarn add --dev eslint eslint-config-codingitwrong
```

Note from [this stack overlow questions](https://stackoverflow.com/a/69557309/1418533):
The [babel-eslint parser](https://github.com/babel/babel-eslint) was deprecated in 2020.
This is the [current parser](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser)

CRLF issue: https://stackoverflow.com/a/66933780/1418533

```
yarn add --dev @babel/eslint-parser
```

https://stackoverflow.com/a/63177410/1418533

```
yarn add @babel/plugin-transform-class-properties --dev
```

Create babel.config.json As described [here](https://babeljs.io/docs/babel-preset-react)

```json
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", {"runtime": "automatic"}]
  ]
}
```

Without `{"runtime": "automatic"}` there will be an error:  `"ReferenceError: React is not defined"`

# Lessons

Completed #1 2023 12 03 2000
#2 2023 12 04 2000 PST

## Part 3: Refactor to Not Ugly

[React Materialize](https://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome)
Materialize CSS is [here](https://materializecss.com/)

Tests are more important to check behavior, not styling.

Some of the components have changed since the live stream (5 years is like a century in tech...)

Part 3 Completed 2024 01 01 1615 PST

## Part 4: CI and Cleanup (https://www.youtube.com/watch?v=JRZObgoLF7I)

Begin 2024 01 02 1930 PST
--- Distractions (LHH Lives, too much youtube, gaming)
Resume 2024 01 19 1500 PST
  Set up Circle CI config (12:09 of 59:09)
