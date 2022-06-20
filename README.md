### Visit the live version bbards.com www.bbards.com

## Table of Contents

- [Installation Requirements](#Installation)
- [Environment Variables](#Environment)
- [GIT](#GIT)
- [BACKEND API](#API)

## Tech Stack

- **Server:** Node, Express

- **DB:** Mongodb driver

- **Node:**

- **Docker:**

- **Nginx:**

## Installation

### Install with npm. In the project directory, you can run:

###Backend

```javascript
  npm install
  npm run dev
```

###Client

```javascript
  yarn install
  yarn start
```

## Environment

To run this project, you will need to add the following environment variables to your .env file

```bash
   dbURI=mongodb://localhost:27017
```

```bash
   with Docker
   dbURI=mongodb://mongo:27017
```

```bash
   secret=secret
```

## GIT

- Checkout a new branch in your repo, using the key at the beginning of the branch name. For example:

```bash
   git checkout -b FE#1
```

- When committing changes to your branch, use the key at the beginning of your commit message.

```bash
   git commit -m  "feat(FE#1): some message"
```

- Branching and merging For example:

```bash
  git checkout master
```

```bash
  git merge FE#1
```

- Commits types For example:

```bash
  git commit -m  "feat(FE#1): some message"
```

```bash
  git commit -m  "fix(FE#1): some message"
```

```bash
  git commit -m  "refactor(FE#1): some message"
```

## API

```javascript
{
    email: STRING,
    name: STRING,
    isAuthenticated: BOOLEAN,
    authToken: STRING,
    dateAdded: DATE,
    lastLoggedIn: DATE,
    logOutDate: DATE,
    authorizationToken: STRING,
}
```
