# Redux Thunk Challenge - CMA Awards

Using Redux Thunk, you will be performing an AJAX call to send a vote and you will show the voting selection in the UI.

## Design

[Watch a Video of the Prototype](https://www.screencast.com/t/1c0ejJFegjq)

The portal will have 4 screens:

1. A login screen. Members of the CMAs will receive a member ID and a PIN number in the mail, which they will then access the voting portal
2. A home screen, which will display all the voting categories and will have a "Let's get started" link.
3. The nominee page, where the user will vote for the nominee that they want to win an award. This screen will repeat for each category when the user clicks on the "Next" button.
4. A submit votes screen, where once finished voting, the user will click a button to send their votes to the Country Music Awards.

## AJAX Requests

Here is the summary of the AJAX requests (so far):

| Method | URL                            | Example Request                        |
| ------ | ------------------------------ | -------------------------------------- |
| GET    | http://localhost:7000/nominees |                                        |
| POST   | http://localhost:7000/vote     | {"categoryId": "1", "nomineeIndex": 0} |

The `http://localhost:7000/nominees` AJAX request, which gets a list of categories and nominees, was demostrated in class.

The `http://localhost:7000/vote` AJAX request is cast when a user votes for a country artist or album. For this assignment, you will be working on integrating this request into Redux.

## Server

In order for you to work on this assignment, you will need to install and start the back-end CMA server. Starting from the root of the _JavaScript2018_ repository:

```shell
cd react-exercises/cma-server
yarn install
yarn start
```

You will need to have this server running when you are working on today's assignment.

## Redux Thunk Assignment

Before writing any code, I recommend you take a look at both the _src/services/api.js_ file and the _src/reducer.js_ file, which have been completed for you.

To get started, open a new terminal / git bash window from the root of the _JavaScript2018_ repository and type:

```shell
cd react-exercises/22-cmas-thunk
yarn install
yarn start
```

Open _src/constants/actionTypes.js_ and add the action types needed to make an AJAX call

The reducer has code already written for you, but the code was commented so that it wouldn't crash the app. Now that you have your action types, open _src/reducer.js_ and uncomment where needed.

Setup your AJAX action creators. Follow the instructions in _src/actions/votingActions.js_

Now you just need to update the UI so that it will both cast the users vote, display the results, and give feedback for AJAX errors. Open _src/components/Category/Category.jsx_ and read the instructions.

Note that you can simulate AJAX errors by stopping the server.
