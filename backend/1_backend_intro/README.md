# Intro to Backend

Hello hello! In this course, we will be learning about the magic of backend web development. Firstly, the course does not require any frontend experience, though some concepts may overlap. The course is split into two sections: a TL;DR section meant to be a quick conceptual overview of a backend topic and a Read More section that goes into more details about the topic. Use this readme as you see fit for what you want to get out of it. By the end of the full Read Everything Course, you should be able to write a basic backend server in Go, and even apply the same concepts to other languages and frameworks.

## TL;DR

Backends serves as the connection thread between the frontend, the database, and external services for a web app. It performs the heavyduty processing of data or actions before giving only the necessary and lightweight information back to the frontend to use. It is also used for authentication or database serving, which may not be safe or easy to do on a client browser. 

## Read More

### So Why Do We Need Backends?
You might be thinking, if we have been building all these Learning Labs at Teach LA with only a React frontend, why would we ever need a backend?

Well. Yes and no. While some web pages work perfectly with just a frontend, other web pages and web apps require a backend to function. For example, if we need to store anything that would be too much for a client, we'd want a backend server to save the data and serve what's necessary. If our website needs to preprocess the data from the database or from an external API, it might be too slow and inefficient to preprocess in the browser. We'd use a backend server that is powerful enough to do the computation quickly and serve the beautifully packaged information to the client. If we need authentication, we'd also want a backend to process that within the security of a backend server. Basically, we would want a backend for **Storage, Speed, and Security**.

### What Do Backends Do Exactly?

Here's a graphic from Google that helps illustrates this:
![Fullstack Graphic](https://thelead.io/wp-content/uploads/2020/03/full-stack-blueprint.jpg)

This is the typical structure of a fullstack web application. Let's ignore the left column for now. 

Firstly, we have a frontend that could be build in React, Angular, vanilla HTML/CSS/JS, or some other framework/tech stack. That is the interface users interact with. Where information and data is displayed. 

We have a databse that stores data that is required by the web app to function. We might also have some external services that we want to query from.

Our backend in the middle serves as the support and glue between all other components. Think of it as the frontend is the stage of a play where the show is performed, and the backend is the backstage where all the costume change and preparation is done. It could be built using all sorts of frameworks and technology, including Express.js (Node.js) and Flask/Django (Python). You can also build it in various other languages like Rust, PHP, and Go! All it does is interface with the database (whether hosted locally or cloud-based), query APIs, and do any necesarry computation before sending the required information to the frontend. 

That's it for this week! Next week, we'll dive right into Requests, Responses, and RESTful APIs.


