Quick Overview of CI/CD
I honestly didn’t know about any of this until my internship last summer, and I was really confused about all of these things since I’d never learned it. I think it’s a great thing to get exposure to esp since it’s so important in work

Anyone heard of CI/CD? Does anyone want to take a guess at what it is?
So CI/CD stands for
Continuous Integration and Continuous Deployment
The Continuous Integration part is speeding up the developer workflow and integrating code changes cleanly
This includes things like: tests and linting
Continuous Deployment is about deploying your product smoothly, and not having to do it manually. 
It’s like the difference between zipping your repository every time and uploading it to AWS versus deploying the website changes whenever you commit to the main branch

So I’ll go over a bit of Continuous Integration first
Continuous Integration
Tests
EG in `App.test.js`
```
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/add a new food/i);
  expect(linkElement).toBeInTheDocument();
});
 
```
And from our `package.json`, we have a test script
```
"test": "react-scripts test",
```

So we can run `npm run test` which will run all of our tests.
At larger companies and stuff, they will often enforce, for instance, 90% of all lines to have test coverage. For LL’s however, we will likely not really have tests, thought the editor is currently working on increasing test coverage.
Linting
Does anyone know what linting is?
It’s what it sounds like! It’s like cleaning up code to a specific set of standards
Like having 2 spaces for every tab
Like using only single quotations instead of double quotes
Just simple styles like that to keep all the code consistent

We use 2 things for linting mainly
`eslint` for javascript/typescript linting
`stylelint` for css/scss linting

Stylelint setup is basically the same as eslint setup, so we’ll only show eslint setup.

First, create a `.eslintrc.js` file, we will be taking it from this eslintrc.js.

Then we can create an `.eslintignore` file to specify files to skip linting https://github.com/uclaacm/TeachLAFrontend/blob/master/.eslintignore. 

Next, let’s add eslint dependencies to the project into `package.json` https://github.com/uclaacm/TeachLAFrontend/blob/44a84a49d2987ffcc47b14df1c3bf994662f0c81/package.json#L58-L65 
Npm install to save new dependencies

Finally, let’s make a script to lint inside of `package.json`
`    "lint": "eslint \"**/*.js\"",	`
Attempt Linting
Run `npm run lint` and we’ll see that a bunch of errors popped up. We can either choose to manually resolve them, or we can attempt to fix things automatically. 

Append `--fix` to the end of our linting, so we can add to our `package.json`
`    "lint-fix": "eslint \"**/*.js\" --fix",	`

Now let’s run `npm run lint-fix`

A lot of things have been fixed! There are still errors, but we will just comment the rules that cause errors out + add rules to ignore errors in the interest of time. 

This is repeated for stylelint and errors shouldn’t normally just get ignored.
Continuous Deployment
Netlify
A great deployment site for static sites, it also does other things such as hosting serverless functions, but we won’t get into that.

What we want to do is that for every commit we push to main, we will automatically push it online.

Take a look at the provided video for this part! (TODO: INSERT TIME)

Tools for CI/CD
Well that’s kinda cool right, but what if we made it so that you had to pass all tests and linting in order to push? We can do that!
There are several big tools for CI/CD, which I’ll name a few for exposure
Travis CI
Git Actions
Jenkins
Heroku

I’ll dive into Git Actions a little since it’s really easy to set up.
Git Actions
Check out video for this part! We will setup making sure repo 
builds properly before PR passes
Passes tests
Passes linting
Otherwise checks will fail (TODO: add video time)
