# React Coding Challenge

You will be working be adding React Router to a custome shop app. The custome shop app will contain two pages:

1. A page where the user can select a custome category (e.g. men, women, girls and boys).

This page is represented by the _CustomeCategories_ component. The user will see this page when they type the following in the URL (you may need to substitute 3000 with your port number):

`http://localhost:3000/`

`http://localhost:3000/categories/`

2. A page that lists all the customes for a given category

This page is represented by the _Customes_ component. The user will see this page when they type the following in the URL, where you would replace _girls_ with the name of the category.

`http://localhost:3000/customes/girls`

## Getting Started

In your terminal or command line:

```shell
git pull upstream master
cd react-exercises/15-react-router/
yarn install
yarn start
```

You will need to edit each one of these in this exact order:

- src/index.js
- src/components/App.jsx
- src/components/CustomeCategories/CustomeCategories.jsx
- src/components/Customes/Customes.jsx

Each file will have comments describing what you need to do. You can use the files in _examples/14-react-router_ as examples. Another good resource is [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
