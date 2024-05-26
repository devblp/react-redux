# React-Redux User Authentication

A simple user authentication project using React and Redux Toolkit.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This project is a simple React application that demonstrates user authentication using Redux Toolkit. The app includes basic form handling for user login and password input fields, and it uses Redux to manage the application's state.

## Features

- User authentication with Redux
- State management with Redux Toolkit
- Form handling in React

## Technologies Used

- React
- Redux Toolkit
- JavaScript
- HTML
- CSS

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/react-redux-auth.git
    ```
2. **Navigate to the project directory:**
    ```sh
    cd react-redux-auth
    ```
3. **Install the dependencies:**
    ```sh
    npm install
    ```

## Usage

To run the application locally, use the following command:

```sh
npm start
```

This will start the development server and open the application in your default web browser. You can then interact with the user login form and see the state management in action.

## Example Code
Here is a brief overview of the main files:

src/Store/Slices/Auth.js: Defines the auth slice with initial state and reducers.
src/Store/store.js: Configures the Redux store.
src/App.jsx: Main application component that connects to Redux and handles user input.
src/index.js: Entry point of the application that sets up the Redux Provider.

## Auth Slice (src/Store/Slices/Auth.js)
```sh
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    }
  }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
```

## Store Configuration (src/Store/store.js)
```sh

import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/Auth";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});

export default store;
```

## Main Application Component (src/App.jsx)
```sh
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './Store/Slices/Auth';

export default function App() {
  const tokens = "msdopewerpodsas231pasdjaskei3jsdkslsejfvmjsaZ";
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(login({ user: { ...user, [name]: value }, token: tokens }));
  };

  return (
    <div className="pg-mine">
      <div className="inputs">
        <input type="text" name="name" id="input-name" onChange={handleChange} />
        <input type="password" name="password" id="input-password" onChange={handleChange} />
      </div>
      <div className="log">
        <span>User: {user.name}</span>
        <span>Token: {token}</span>
      </div>
    </div>
  );
}
```

## Contributing

Contributions are welcome! If you have any improvements or new features to add, feel free to fork the repository and submit a pull request. Please make sure to follow the contribution guidelines.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

# Contact
If you have any questions or feedback, please feel free to reach out:

Email: [dev.sinanp@gmail.com](https://github.com/devblp)
GitHub: [devblp]()
LinkedIn: [SinaNasibparast]()