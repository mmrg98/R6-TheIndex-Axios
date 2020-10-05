## Setup

1. Fork the [repository](https://github.com/JoinCODED/RJS5-TheIndex-Axios)
2. Clone it.
3. `cd` into the project directory.
4. Install the required packages for the task.

```shell
$ yarn install
```

_5._ Install `axios`

```shell
$ yarn add axios
```

_6._ Run the project

```shell
$ yarn start
```

---

## Task

#### 1. Fetching All Authors

We've created a fancy API server that can be accessed at `https://the-index-api.herokuapp.com/api/`. Right now the data in our application is in an array called `authors` that lives outside the component:

1. Add an empty `authors` array to your state.
2. Send it to `AuthorList` as a prop. Everything should disappear from the page!
3. Import `axios` into `App.js`.
4. Use `axios` to make a `get` request from `https://the-index-api.herokuapp.com/api/authors/`. This request should happen **inside** `useEffect`.  
   (Make sure you're catching any errors!)
5. After *a-wait*ing for the request to finish, assign the array of data returned by the request to the `authors` in the state.  
   When you refresh your application, you should see a momentary pause while the data is being fetched then you should find some new authors in your application!
6. You can now delete the data import at the top of the file!  
   In fact, go ahead and delete the file `data.js` entirely. It's useless to us now. Our data is coming from the internet! Wooooow!

#### 2. Loading Screen

Right now our application is just completely blank while the data is being loaded. This is terrible UX!
If a user has a slow connection they could be staring at a blank screen for an extended period of time.

What we need is a temporary loading screen while the data is being fetched.

1. Give `App` a new `state` called `loading` and set it initially to `true`.
2. Set the `loading` property to `false` after the authors have been retrieved successfully.
3. Use `loading` to choose between rendering the `AuthorList` component OR JSX that indicates the page is loading. You can make this "loading" view as simple or as complex as you like.

#### 3. Fetching an Author

You've probably noticed that the `/api/authors/` endpoint returns an array of author objects like this:

```json
{
  "id": 4,
  "first_name": "Margaret",
  "last_name": "Atwood",
  "imageUrl": "someurl.com",
  "books": [19, 21, 18, 20]
}
```

The `books` array **only** contains the `id`s of the books, not the books themselves.

You can use this new endpoint to fetch a single author:

1. Change `selectAuthor` so that instead of updating `currentAuthor` directly, it makes an `axios` request to get the author from the detail URL. Use the returned author object to update the state.

2. Make sure you set the `loading` state to true **before** you make the request and set it back to `false` after the request is complete.

3. Now you can finish filling in the JSX in `BookRow` to show the book's author**s**.  
   (hint: you're going to need to `.map` over the book's authors to show all authors of a book)

The author details for a single author should look something like this:

![dragonmaster](https://imgur.com/xSOsXFt.png)

---

#### Submission

1.  Push your code.
