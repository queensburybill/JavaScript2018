# Redux Challenge

You will be designing the state and building the redux part of a Country Music Awards (CMAs) voting portal.

## Design

[Watch a Video of the Prototype](https://www.screencast.com/t/1c0ejJFegjq)

The portal will have 4 screens:

1. A login screen. Members of the CMAs will receive a member ID and a PIN number, which they will then access the voting portal
2. A home screen, which will display all the voting categories and will have a "Let's get started" link.
3. The nominee page, where the user will vote for the nominee that they want to win an award. This screen will repeat for each category when the user clicks on the "Next" button.
4. A submit votes screen, where once finished voting, the user will click a button to send their votes to the Country Music Awards.

## Steps

Here are the steps to this this assignment:

1. Before you write a single line of code, think about what your Redux actions are going to be and design the shape of your data. You will needd to store the [CMAs' list of nominees](https://www.billboard.com/articles/columns/country/8472339/cma-awards-nominees-2018) in your state.

2. In you terminal or git bash, type:

```shell
yarn install
```

3. Open the file _src/constants/actionTypes.js_ and create your action types

4. Open the file _src/actions.js_ and create your action creators.

5. In the file _test/reducer-test.js_, write your unit tests, where you define your current state, an action and the expected new state.

6. Open the file and write your reducer case statements in _src/reducer.js_.

7. Run your run your tests with the debugger or command line. To run with the debugger, you must open Visual Studio Code from this folder.

```
code .
```

In your status bar on the bottom left, click on the play icon. Select "Mocha Tests" from the dropdown.

Or you can just run over command line:

```shell
yarn test
```
