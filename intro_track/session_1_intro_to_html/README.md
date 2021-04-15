# Introduction to HTML

Welcome to the course! We'll be starting of with the fundamental building blocks of web pages: HTML (It stands for HyperText Markup Language, if you cared to know). 

There are many ways to write a website, and here we'll be covering one of the simplest way you can make one. You can think of a website as composed of three things: the Content, the Appearances, and the Moving Parts. 

Each of these parts have their own way to be specified. The Content is specified by HTML, the Appearances by CSS, and the Moving Parts by Javascript. There are some overlap and and crossing lines, but this is the main functionality of each of these parts. We'll be starting off with learning to write the content of the site with HTML!

## Table of Contents
- [Lesson](#lesson)
- [Project](#project)

## Lesson
To learn about HTML, read all about what it is and the basic HTML tags you will need to know for this lesson from [this awesome write-up](https://github.com/uclaacm/learning-lab-crash-course-su20/blob/master/01-intro-html-css/README.md#html) Matt and Leo wrote. You only need to read the HTML section. We'll be getting to CSS next week, so don't worry about it yet. comm

You can follow along the write up and try out the tags yourself! Make a new file called `index.html` and double click on it to view it rendered in the browser.

## Project
We'll be making a beautiful personal website as the practice project for this course. By the end of it, you should have a wonderful site for you to show off to friends, family, and recruiters about yourself. For some examples of what these websites can look like (though this is just for inspiration, you can definitely do whatever your imagination wants):
- https://krashanoff.com/
- https://neerajsamtani.me/
- https://carolchen.me/ 
- https://nickelder.ca/ 
- https://www.strml.net/ 
- http://mihirmathur.com/ 

There are definitely a lot of different websites out there that you can make, some really flashy and cool, and some more minimalist. Note that some websites require more advanced web development knowledge that won't be covered in this course, such as using framesworks (such as Jekyll, Gatsby, Bootstrap, etc.) to do fancier things more easily. But there's still a lot you can do with just vanilla HTML, CSS, and JS. 

We'll be using GitHub Pages to publish our beautiful website, because it will be what is called a "static site". A "static site" means that there's no backend to the website, and it looks the same to everyone, because there's no need for user acccounts. There's a lot of ways to deploy a static site, such as using other services like AWS Amplify, Netlify, Heroku, etc. We'll be using Github Pages since it's free and really simple to use.

### Setup
We will need to set up a git repository in GitHub. So here's a quick crash course on using git in the terminal. (You are welcome to use GitHub Desktop if you'd like though!)

First, install [git](https://git-scm.com/)! It's a free, open source distributed version control system, which is a way to maintain different versions of a project and an easy way to collaborate on the same project. It's distributed, so the code is stored on multiple locations (anyone who grabs a copy of the project), and if we push it to GiHub, there would be a copy at GitHub too! 

If you're on Windows, be sure to install Git Bash, which will be the command line interface you'll be using. If you're on a Mac or Linux, you can just use the terminal.

Alright, let's get started! Let's make a folder and make it a git repository:
```shell
$ mkdir personal-website
$ cd personal-website
$ git init
```

We'll make a README (just like the one you're reading right now), to start off the repository.
```shell
$ echo "#My website" >> README.md
```

The `.md` extension specifies that the document is in Markdown, which is a way to easily write formatted text. The `#` in the front of the string makes "My website" a header in the document.

We can now see what changes we've made so far in the repository:
```shell
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        README.md

nothing added to commit but untracked files present (use "git add" to track)
```

So what this text is telling us is that we have made changes, but it's not going to be updated to the other copies of the project. To make it known to git that we want the changes to be updated, we need to "stage it". 
```shell
$ git add README.md
```
We can also do the following to add all changes we've made to staging.
```shell
$ git add * 
```

Now if we do:
```shell
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   README.md
```
we can see that the changes will be committed. Being committed means that we'll be creating a node in the git project history tree with the changes reflected in the history. But this message is just telling us that it will be a part of the commit, not that we have one. Let's actually make the commit:
```shell
$ git commit -m "Initial commit"
```
The `-m` argument is specifying a message for the commit. Now that we've created a repository and made our first change, we need to actually get it on GitHub!

Now, create an account on GitHub, and click create a repository named `YOUR_GITHUB_USERNAME.github.io`, where you replace `YOUR_GITHUB_USERNAME` with your github username in lowercase. Make it Public. And *do not* intialize with anything, since we're importing an existing repository (we created it on the command line!).

Let's follow the prompt to "push an existing repository from the command line":
```shell
$ git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.github.io
```

This connects your local repository to the GitHub. Finally, let's make the push!
```shell
$ git push -u origin master
```

We're all set! From now on, everytime you make some changes that you want to add to the repository, you will have to the following steps:
- Make changes
- Stage changes: `git add`
- Commit change: `git commit`
- Push changes: `git push`

### Write your website!
In the repository, create a new file called `index.html` and open it in your favorite text editor. Using the HTML tags we learned from this session, write up the text parts of your personal website! 

Here's a template to an HTML file to start you off:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <!-- This is where the head is! -->
    </head>
    <body>
        <!-- This is where the body is! -->
    </body>
</html>
```

If you don't know where to even begin, here's some key things you should probably include in a personal website:
- Name
- About/Bio
- Experiences/Portfolio/Projects
- Contact Info/Other links