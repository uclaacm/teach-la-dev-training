# Intro to Backend

* [Link to video of the last talk I gave](https://www.youtube.com/watch?v=kwy4U0980Eg)
* [Some slides to accompany](https://docs.google.com/presentation/d/1kvo8d2qLvx4pVm7T6aNCNGPPsBWgTQjZIiLRT6wPgOk/edit?usp=sharing)

What we've been doing up until now is learning skills that build out our **frontend** toolkit. However, like an angler fish, frontend development is the beautiful light that obscures the beast that is often the backend.

Have you ever wanted to build a messaging app, or something with storage that persists beyond localstorage, or something that requires communication between clients? Then you need a backend! In this talk, we will answer the following questions:
* Why do we need a backend?
* Variety in the backend - why is it neat to work on?
* What are some common backend frameworks and patterns?
* How can I build a backend?
* How can I make my backend work with my frontend?

By the end of this talk, you'll be able to think at a high level about the partitioning of a webapp, and write your own fullstack application.

## Table of Contents

* [Table of Contents](#table-of-contents)
* [Why bother?](#why-bother)
* [Why is it cool?](#why-is-it-cool)
    * [The language we want to work in](#the-language-we-want-to-work-in)
    * [The framework, libraries we want to use](#the-framework-libraries-we-want-to-use)
    * [Implementation details, optimization](#implementation-details-optimization)
* [Backend Vocabulary](#backend-vocabulary)
    * [Requests, responses](#requests-responses)
    * [HTTP Methods](#http-methods)
    * [Endpoints](#endpoints)
    * [RESTful](#restful)
    * [GraphQL](#graphql)
* [Common Backend Frameworks](#common-backend-frameworks)
* [Building a basic backend](#building-a-basic-backend)
* [Now what?](#now-what)
* [Things that you should check out](#things-that-you-should-check-out)

## Why bother?

So why do we even need a backend? There are very clearly [some APIs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) that let us store information for our webapp locally, and we can make requests to other APIs with [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) -- why bother with writing our own backend?

Let's pretend we're writing our own messaging service, or a maps service, or really anything that passes around a large amount of data and/or secure data. We want to make sure that our service is difficult to break into. This immediately explains why we might want a backend.
* Security: it would be dangerous to validate credentials on the client side. This would mean sending credentials over the internet, and leaving them unencrypted on the clientside at some point.
* Storage: it would be inefficient to store images and whathaveyou in the browser. Think about what the point of YouTube is!
* Speed & partitioning: imagine if all the suggestions for Google Maps were computed on your own computer. How slow would it be? What's more, imagine how much more code that would put in your webapp that should be focused on making the raw data presentable.

Hopefully these questions shed some light on why we might want a backend for our webapp: we have some data that we need to keep elsewhere, access elsewhere, or some functionality that isn't guaranteed by a client system. What's more, we want to partition the webapp so that the heavy lifting is kept away from the aesthetics.

## Why is it cool?

You may have noticed that one of the points in the lesson breakdown asks "why is it neat to work on?".

One of the main reasons that the person who wrote this README enjoys working on the backend is that there are a lot more ways of doing something. Of course, there are certain things that will always adhere to a particular standard, such as CORS or password hashing and encryption, but for the most part, working in the backend leaves the developer spoiled for choice. We can choose the...
* language we want to work in -- not just JavaScript
* framework, libraries we want to use -- if any at all!
* implementation details of every endpoint
* way we structure our endpoints
* way we optimize functionality for our intended client or end-user

### The language we want to work in

Your backend can be written in any language that you see fit. Now of course there are a few languages that may feel a little counterintuitive to write a backend in (I'm [looking](https://github.com/edicl/hunchentoot) [at](http://bknr.net/html/home.html) [you](https://github.com/evrim/core-server), [LISP](https://www.cliki.net/web%20framework)), but for the most part, you can use whichever language you are most comfortable with. For our lesson, though, we will be using JavaScript simply to adhere to the rest of our lesson.

### The framework, libraries we want to use

As with CSS frameworks, static site generators, and JS webapp frameworks, we can choose the libraries and framework that we wish to use for the backend. There are no wrong decisions in the general case, here. If you made a mistake, it will be in the context of your particular project.

### Implementation details, optimization

Since we are the ones working all the heavy-lifting behind the scenes, we need to make our code performant and airtight. If there are any bugs on the backend, they will propagate directly to the frontend. Likewise, if there are any slowdowns on our end, they will get shot straight out to the frontend as well over layers of network communication. It is our job as a backend developer to ensure that the code we write is effective and snappy.

## Backend Vocabulary

When talking about the backend, there's a lot of terms that you'll hear thrown around. Let's define some of the big ones.

### Requests, responses

All communication on what we know as the Internet is done over HTTP.

When a client asks for some sort of information from your server, it is done using an HTTP **request**. An HTTP request has a few key parts, but the big ones are the method, URL, headers, and body.
* Method: differentiates requesting a particular resource for reading, or requesting a particular resource for creation.
* URL: the path of the resource.
* Headers: information about the request to help make sense of the...
* Body: a collection of zero or more bytes with information about the request.

When your server writes something back to the client, it is done with an HTTP **response**. These have the structure as the request that produces them. They can indicate errors or provide information on success. This is done through use of HTTP status codes.

### HTTP Methods

We have only spoken about basic HTTP requests that `GET` information from a page so far, but consider, what if we wanted to send some information to a server? Obviously, there must be a way of doing this, since we see that responses from servers -- refer to [the previous lesson](../15-async-js/README.md) -- often have a body. Then it should follow logically that we can send information in the body of our request, too, right?

Enter HTTP methods, of which there a few that will be of significance for this README:
* `GET`: used to get information from a resource
* `POST`: used to create information at a resource
* `PUT`: used to update information at a resource
* `DELETE`: used to, well, delete information from a resource

These are the suggested use cases for these HTTP methods. Of course, you can use these methods however you want, but this is poor practice.

Information about what the request wishes to do is transmitted via its body. This is usually JSON, but you can use a handful of other formats:

```json
// POST /user
{
    "name": "Leo",
    "description": "Hi"
}
```

A body is not allowed in the request when making `GET` requests. Instead, we pass it information in the form of query parameters. If you ever are on a website whose URL is something like `https://mycoolsite.com/cars?limit=25`, it is a `GET` request where you are telling the server that you only need to see the first 25 cars on the current page.

### Endpoints

Specific combinations of a method and a URL on our server compose an endpoint, which is where requests are sent to "call a function" on our server, then receive a "return code" in the form of a response.

### RESTful

[Representation State Transfer (REST)](https://en.wikipedia.org/wiki/Representational_state_transfer) and its implementation -- RESTful -- services are a class of server that meet a handful of criteria, as defined [here](https://restfulapi.net/) and [here](https://en.wikipedia.org/wiki/Representational_state_transfer):
* **Client-server**: separate the user concerns from the data storage concerns
* **Stateless**: there should not be any context between the server and the client preserved between requests
* **Cacheable**: responses must define themselves to be cacheable or not
* **Uniform interface**:
    * Resource identifications are in requests
    * Each request should provide enough information to explain how to manipulate the piece of data
    * Each message should have enough information to explain how to process it
    * A client should be able to use its results to eventually discover all the resources it needs
* **Layered system**: a client cannot tell if it is connected directly to our server or via intermediary
* **Code on demand (optional)**: transferring executable code may be desirable

What this means is that if you provide the client a stateless web interface meeting these specifications, then regardless our implementation, the client will know how to work with our data based on server responses.

### GraphQL

If you have to get and retrieve data, and not a whole lot else, consider structuring your backend in accordance with [GraphQL](https://graphql.org/). For a teaser of what things look like on a GraphQL backend:

```json
// Request
// POST /pokemon
{
    pokemon(name: "Ditto") {
        id
        name
    }
}

// Response
{
    "data": {
        "pokemon": {
            "name": "Ditto",
            "id": 132
        }
    }
}
```

Requests are structured in the form of queries modeled after the objects they expect in response. While we won't focus much on this API structure, it is worth investigating!

## Common Backend Frameworks

Since we're going to be working with JavaScript, we will use one of the more popular backend frameworks out there: **express**.

However, if you want to experiment with writing a backend in another language, it is just as easy! Here are a few examples of servers and libraries based on language:
* JavaScript: [express](https://expressjs.com/)
* C++: [beast](https://github.com/boostorg/beast), [restinio](https://github.com/Stiffstream/restinio), [proxygen](https://github.com/facebook/proxygen)
* Go: [echo](https://echo.labstack.com/), [gin](https://github.com/gin-gonic/gin)

This said, you actually don't need to use a framework if you don't want to. If you want to remain sane, you really just need a web server and a couple of handlers. It is possible to write a backend completely free of dependencies, just bear in mind that things will get complicated fast.

## Building a Basic Backend

In this part of the talk, I'll walk you through how we can build a basic """"fullstack"""" application entirely within the Node ecosystem. It will consist of a simple frontend that allows the developer to check whether their requests are actually being passed through to the backend properly.

# Now what?

The main goal of this backend is to cover **how to apply the concepts we learned** and **how to connect it to our frontend**. Some future extensions that you might want to add, if interested, are things like live updates. If we wanted to add likes to messages and have clients update live, we could use something like a websocket-based API, or expose a subscriptions-based event API.

Play around with adding extra endpoints to your basic message board backend. How can we delete a message? How can we modify one?

You can (and should) also add validation of types passed to each endpoint.

You can also add fields to the data types and realize why building a backend quick and dirty is not the wisest decision.

## Things that you should check out

Obviously I'm not going to be able to talk about everything in an hour, nor is this tutorial going to be of a great deal of use without supplementary resources. Here are some terms that you should **really know** and think about when writing a backend in the real world:
* Databases, relational versus non-relational (document-based): do I need an Excel sheet or an Object database?
* Atomicity: what happens when multiple people operate on the same resource at the same time?
* Hashing, salting; password security: how do we keep our passwords secure, even if someone gets their hands on them?
* Packet loss, recovery: what happens when we lose packets on a stateful backend? What if the backend goes down altogether? How do we recover?

Here are some resources to help demystify those terms I just threw out:
* [The Java tutorial's definition of atomicity](https://docs.oracle.com/javase/tutorial/essential/concurrency/atomic.html)
* [MongoDB](https://www.mongodb.com/), a non-relational, document-based database
* [PostgreSQL](https://www.postgresql.org/), a relational, industry-standard database
    * This said, it is falling off in popularity these days.
* [Auth0 blog post on how passwords should be stored](https://auth0.com/blog/hashing-passwords-one-way-road-to-security/)
