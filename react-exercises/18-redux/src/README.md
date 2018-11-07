# Connecting React to Redux

You will be connecting a presentational React compoents to the Redux store. To begin, install and start the application from this directory:

```shell
git pull origin upstream
cd react-exercises/18-redux/src/README.md
code .
yarn install
yarn start
```

When the application starts, you will see an error like this:

> Could not find "store" in either the context or props of "Connect(Todo)". Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to "Connect(Todo)".

Open _./index.js_ and follow the instructions. Once you import and connect Redux to the top-level component of your app, the error will go away. You should then see a Counter and Todo List on your screen.

You can complete the next two parts in any order:

- Open _src/components/Counter/CounterContainer.js_ and setup a container for the Counter that you see on your screen.
- Open _src/components/Todo/Todo.jsx_. Refactor the React component so that it will use the props being passed down from its container instead of in-component state.
