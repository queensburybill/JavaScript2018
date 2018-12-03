# Redux Promise Challenge - CMA Awards

Using Redux Promise, you will be performing an AJAX call to complete voting and you will show the voting selection in the UI.

## Design

[Watch a Video of the Prototype](https://www.screencast.com/t/1c0ejJFegjq)

The portal will have 4 screens:

1. A login screen. Members of the CMAs will receive a member ID and a PIN number in the mail, which they will then access the voting portal
2. A home screen, which will display all the voting categories and will have a "Let's get started" link.
3. The nominee page, where the user will vote for the nominee that they want to win an award. This screen will repeat for each category when the user clicks on the "Next" button.
4. A submit votes screen, where once finished voting, the user will click a button to send their votes to the Country Music Awards.

## AJAX Requests

Here is the summary of the AJAX requests:

| Method | URL                            | Example Request                           |
| ------ | ------------------------------ | ----------------------------------------- |
| POST   | http://localhost:7001/signin   | {"memberId": "asdf", "pinNumber": "1234"} |
| GET    | http://localhost:7001/nominees |                                           |
| POST   | http://localhost:7001/vote     | {"categoryId": "1", "nomineeIndex": 0}    |
| POST   | http://localhost:7001/complete |                                           |

We went over the `http://localhost:7001/signin` AJAX request in class. You can use this is an example for Redux promise.

You will be working on the `http://localhost:7001/complete` AJAX request for this assignment. When the user is ready to finish voting, they will click on a "Complete and send my votes to the CMAs" link. That link makes this request.

## Server

In order for you to work on this assignment, you will need to install and start the back-end CMA server. Starting from the root of the _JavaScript2018_ repository:

```shell
cd react-exercises/cma-server
yarn install
yarn start
```

You will need to have this server running when you are working on today's assignment.

## Redux Promise Assignment

Before writing any code, I recommend you take a look at the _src/reducer.js_ file, which has been completed for you.

To get started, open a new terminal / git bash window from the root of the _JavaScript2018_ repository and type:

```shell
cd react-exercises/23-cmas-promise
yarn install
yarn start
```

Create a function in _src/services/api.js_ that will make an AJAX request when the user would like to finish with voting.

Open _src/constants/actionTypes.js_ and add the action types needed to make an AJAX call.

The reducer has code already written for you, but the code was commented so that it wouldn't crash the app. Now that you have your action types, open _src/reducer.js_ and uncomment where needed.

Setup your AJAX action creator. Follow the instructions in _src/actions/votingActions.js_

Setup the container component (_src/components/CompleteVoting/CompleteVotingContainer.js_) so that the CompleteVoting.jsx component can have the pieces of state and actions that it needs.

Now you just need to update the UI so that it will both compelete the user's voting, display feedback when successful, and give feedback for AJAX errors. Open _src/components/CompleteVoting/CompleteVoting.jsx_ and read the instructions.

Note that you can simulate AJAX errors by stopping the server.
