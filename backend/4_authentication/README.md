# Authentication

In this lesson, we will be covering how to approach implementing authentication!

## TL;DR
Authentication can be implemented by keeping a database of users and sessions to track user accounts and logins. It can also be done by using SSO with a 3rd party, such as Google or Facebook, who will take care of the authenticating parts and just give you the information you need to associate a user with data.


## Read More
There are a couple of approaches to implement authentication. You can take charge of the password and verification yourself, or let a 3rd party take care of it. 

### DIY
To implement your own authentication, you need a users table/collection (I'll refer to it as just a table, even though you can use collections as well) in your database. It should have at the bare minimum an email field or some sort of unique identification for the account and a password field. Then, you would have a POST request to an endpoint to create a user, with a handler to add a new entry to the users table, and a POST request to another endpoint to login a user, with a handler to query the table for an user with the expected email and to check that the password is correct. 

However, you should not store the raw password. Instead, the password should be encrypted in the database. This way you're not exposing the password during transmission and in storage. You should use a 3rd party library to deal with the encryption and checking since you will most definitely not implement it correctly by yourself. 

Secondly, we need a sessions table that store whether or not a user is logged in. A session is a hash that contains information about who is logged in and other metadata. On the frontend, the session would be stored as a cookie so that when the user logins, the session is remembered across different pages. Whenever the frontend makes a request to an endpoint that requires the user to have logged in, the session cookie would be passed along and the backend can check if the session exists in the session table. If it does, then it can return the page or the user information. 

### SSO
These days, you often see "Sign in with __" on websites. These sites use Single-Sign On (SSO) to associate users with data. They let 3rd parties deal with authentication and only take care of the data. 

To achieve this, the general approach is to evoke the appropriate API call from the 3rd party on the frontend to trigger the Sign in pop up from the 3rd party. The 3rd party will then return a token and a profile ID. The profile ID is the assigned ID to the user account by the 3rd party. The token is a string that marks if the user is signed in. It's not exactly the same thing as a session, but it's similar. 

On the backend, whenever a user should be signed in, you'd check using the token and the 3rd party's API call to see if the user is signed in. You can associate the profile ID given with the data you want to store, as usual. That is all. SSO makes life a lot easier so that you don't have to deal with sessions or password security etc.
