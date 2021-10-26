# Endpoints and Handlers

Hi there! I apologize for the lateness of this write-up. But here it is! In this lesson, we will go over what endpoints and handles are and how they are typically used.

## TL;DR

**Endpoints** are points in a backend that clients can connect to to perform some action or get some information from the backend server. **Handlers** perform the expected action. Together, they form the basic backbone of backend servers.

## Read More

### What are endpoints?
**Endpoints** are points in a backend that clients can connect to to perform some action or get some information from the backend server. They are the points of communications to and from the server. They are composed to two items: a **method** and a **URL**. 

The method is the type of request that you are making to the server. There are several different methods, but the common ones are the following:

- `GET`: retrieves an item
- `POST`: creates an item
- `PUT`: update an item
- `DELETE`: delete an item

Secondly, the URL is the address at which you would like the clients to request the action. Think of it as the special command that tells the server what you want, in the form of a URL. 

For example, `GET /users`
could be an endpoint that responds with a list of users, and `POST /users/create` would create a new record of a user with the information included in the body of the request. 

### What is a "body"?

In a HTTP request, there is a method, an URL, headers, and a body. The method and the URL together specify which endpoint the request is for. The headers specify information about the request, such as information about cookies. The body is where data is placed to pass to an endpoint. It is particularly used for `POST` AND `UPDATE` requests that usually require form data. 

There are different formats for the body. The most common is JSON. 

![HTTP Request Template](https://community.safe.com/servlet/rtaImage?eid=ka14Q000000slxk&feoid=00N30000006n8wU&refid=0EM4Q000001Loai)

### What is a handler?
A handler is simply the function that *handles* the request sent to the endpoint. It performs the action that is asked of the endpoint. 

### So how do I make an endpoint with a handler?

Typically, in any framework, you would need to first specify the handler, and then register the handler with a particular endpoint. 

Specifying a handler requires you to define a function that performs the action. Suppose that we want to have an endpoint that returns hello at the URL `/hello`. In Go, with the echo framework, it would look something like this:

```Go
func GetHello(cc echo.Context) error {
    return c.String(http.StatusOK, "hello!")
}
```

The handler `GetHello` takes in the context, an object that contains all the parameters and request body parsed out for us. Then, it just returns a string "hello!". The `http/StatusOK` is just specifying that the response is a code 200, meaning OK (no error. There are [other codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) you can return for different meanings).

Then, you need to register the handler with the server for a particular endpoint. For example, 

```Go
e := echo.New()
// stuff
e.GET("/hello", handler.GetHello)
```

Supposedly, `GetHello` is defined in the `handler` file. So we'd register `handler.GetHello` with the `/hello` URL using the `GET` method. 

And that's it! That's endpoints and handlers at their bare bones. 

However, this is rather boring. What if we want to request a hello for a specific person? Or update some information? That's where path parameters, query parameters, and form data comes in.

Path parameters is when you say that this particular part of the path can be anything, and we will save the content of that part into a variable.

For instance, we can have the endpoint `GET /users/:id`. The colon specifies that the part after `/users` is a path parameter. Anything put after `/users` is saved into a variable called `id`. So the request `GET /users/joebruin` would result in `joebruin` being saved to `id`. Note that if you try to request `GET /users/joebruin/goodbye`, you are requesting a different endpoint. This is because `/` is a special character and any instance of it sections the URL.

Query parameters are when you have `?` after an endpoint URL followed by the pattern `field1=value1&field2=value2&field3=value3` where there can be any number of pairs of fields and values. This type of endpoints get parsed as a map of the fields to values. The URL `/users?name=joebruin` would correspond to requesting data at the endpoint `/users` and with the query parameters as "name: joebruin", where joebruin can be any name. 

Path parameters and query parameters are generally used for `GET` and `DELETE` requests. 

Form data is generally used for `POST` and `UPDATE` requests, where a lot of data is expected. Form data is stored in the body. 

I encourage you to read about the way to use path parameters, query parameters, and form data in echo for Go [here](https://echo.labstack.com/guide/#path-parameters).
