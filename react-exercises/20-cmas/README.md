# Redux Challenge - CMA Awards

You will be designing the state and building the redux part of a Country Music Awards (CMAs) voting portal.

Before doing anything, be sure to get the latest changes from git with `git pull upstream master`.

## Wednesday, Nov 14, 2018

[Watch a Video of the Prototype](https://www.screencast.com/t/1c0ejJFegjq)

The portal will have 4 screens:

1. A login screen. Members of the CMAs will receive a member ID and a PIN number in the mail, which they will then access the voting portal
2. A home screen, which will display all the voting categories and will have a "Let's get started" link.
3. The nominee page, where the user will vote for the nominee that they want to win an award. This screen will repeat for each category when the user clicks on the "Next" button.
4. A submit votes screen, where once finished voting, the user will click a button to send their votes to the Country Music Awards.

This will not be a part of today's assignment, but we will be adding the following API calls in the future. Plan for making these AJAX calls:

- A login call. This will need a member ID and pin number.
- An AJAX call to get the nominees. An example of how you can expect the data. An example of the expected response is _src/constants/categories.json_.
- An AJAX call to send a vote. To make this call, you will need to send the category number, the array index of the nominee, the member ID. See _src/constants/categories.json_.
- A call to complete the vote. This will need the member ID.

### Steps

Here are the steps to this this assignment:

- Before you write a single line of code, think about what your Redux actions are going to be and design the shape of your data. You will need to store the [CMAs' list of nominees](https://www.billboard.com/articles/columns/country/8472339/cma-awards-nominees-2018) in your state.

- In you terminal or git bash, type:

```shell
cd react-exercises/20-cmas
yarn install
```

- Open the file _src/constants/actionTypes.js_ and create your action types

- Open the file _src/actions.js_ and create your action creators.

- Open the file and write your reducer case statements in _src/reducer.js_.

You can write and run unit tests if you would like. A unit test file for the reducer, _test/reducer-test.js_, has already been created for you. You can run your tests with the debugger or command line. To run with the debugger, you must open Visual Studio Code from this folder.

```
code .
```

In your status bar on the bottom left, click on the play icon. Select "Mocha Tests" from the dropdown.

Or you can just run over command line:

```shell
yarn test
```
