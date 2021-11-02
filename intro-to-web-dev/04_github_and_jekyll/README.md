# Github And Jekyll

Today, we'll go more in-depth with how to use Github to collaborate on projects and how we can use static site generators like Jekyll to make websites!

## Table Of Contents

## Gitting Into Git

Last week, we covered how we could use git to clone into repositories in order to grab source code from other people.

This week, we'll cover how we can use Git to collaborate on large projects with people, and the cool features that come with it!

## Making Changes

Now that we've covered [how to "pull" code](https://github.com/uclaacm/teach-la-dev-training/tree/main/intro-to-web-dev/03_flexbox_grid#getting-example-code-with-github) from other repositories through the `git pull`, let's talk about how we can make changes and get started on collaborating!

### Github Issues

The [Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) tab of a repository is used to organize work within a project, and is a way to view a lot of the work that needs to be done on a project.

![issues](./images/issues.png)

Within an issue, you can view an overview of what needs to be done and a list of labels associated with it! If you feel like you want to tackle a problem, you can contact someone who's in charge of or a "maintainer' of the repository, and they'll assign an issue to you!

[anIssue](./images/anIssue.png)

### Branches

If you click on the [branches](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) section of a repository, you can see a list of a bunch of different versions of the code within the repository. Branches are a way for you to work on a new feature in isolation of all of the work that other people may be doing on a project at the same time!

The most important one is the "main" or "master" (default) branch of the repository.

### The Main Branch

The main branch is the one that is displayed whenever someone visits your repository, or the initial one when someone clones a repository.

### Checking Out And Making New Branches

For TeachLA's website, whenever you make a change and want to see it reflected on our "deployment" or how you can view teachla.uclaacm.com through a URL, you should merge changes into the main branch.

In order to isolate your work from other people's work, you can check out a new branch to look at your changes! If you're a collaborator on a repository (which you are if you accepted the ACM@UCLA github invite email!) you are able to make a new branch and start working on a change right away.

(If you are not a collaborator for a repository, you'll have to [fork the repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo) instead of creating a new branch directly!)

![branch](./images/branch.png)

To see a list of all the branches that exist, you can run

```sh
$ git branch
```

to see a list of all of the branches that you can change to.
To switch to another branch, you can run the

```sh
$ git checkout NAME_OF_BRANCH
```

which is the same as

```sh
$ git switch NAME_OF_BRANCH
```

to view another branch!

Before making a new branch, it's important that you always PULL the latest changes to a repository by running

```sh
$ git pull
```

so that you always get the most up-to-date version of the repository before changing branches!
The way that you can make a new branch is by running the

```sh
$ git checkout -b NAME_OF_BRANCH
```

command!
Let's break down what this command does. Git checkout tells git that you want to switch the version of code you are looking at to the one that's contained within the other branch, and the -b command tells git that you want to create a new branch that hasn't existed yet. This creates a new branch in git history that's based off of the branch that you were currently developing in.

From here, you can do all the development that you want from a new branch. However, if you look back at the repository that you're working on, you'll see that your branch can't be seen within the list of branches that already exist. Why is that?

## Pushing Your Changes

The reason why your changes haven't shown up yet is because all of the changes that you have made have only been on your "local machine" (the computer you're coding on!) as opposed to the "remote repository" which is the repository linked to the URL that you used to clone!

To view the status of your local repository, you can run

```sh
$ git status
```

to view the state of your local repository and how it compares to the remote repository.

```sh
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../03_flexbox_grid/index.css
        modified:   ../03_flexbox_grid/index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ./
```

### Staging and Git Add

Like it says, our files are not staged for changes yet. When we think that we are done with the changes we want to make and have our files tracked by git's version control system, we can run the

```sh
$ git add FILE_NAME_1 FILE_NAME_2
```

to tell git that we want to move these changes to the "staging area" and mark these files as marked for change. If at any time you realize that you didn't want to add a particular file, you can run

```sh
$ git reset HEAD -- path/to/file
```

which tells git that you want the file to look like the previous commit on the current branch you are on as opposed to the version of the file you just edited.

### Git Commit

To add your staged changes to version control and have Git **actually** track those changes, you have to run the [commit](https://www.atlassian.com/git/tutorials/saving-changes/git-commit) command

```sh
$ git commit
```

which will take a snapshot of your local repository and save it inside the repository.

Git commit actually opens a text editor asking you for a commit message, where you put a brief description of what you are doing on the first line, separated by an empty line, and a more detailed description of what you did below, but you can just put a quick summary and combine it together by running

```sh
$ git commit -m "your short commit message"
```

to do it all on the command line without opening a text editor.

### Git Push

Even after doing this, your changes still won't show up online! That is because to have changes on your local repository pushed to the remote repository, you have to run the [git push](https://git-scm.com/docs/git-push) command.

By running

```sh
$ git push
```

(or setting upstream origin like it tells you to)
you can have all your changes shown up online to the remote repository and it is now there for the world to see!

### Merging

If you want to "merge" a branch into your current working branch, run

```sh
$ git merge NAME_OF_BRANCH
```

to merge the contents of the other branch into your current working branch.

Occasionally, you will run into merge conflicts within files, which means that the version of the file between the two branches you are merging have conflicting lines. You can make them agree within your text editor, choosing which version of the files you want to save when you merge though!

### Git Stash

If you have changes on your branch and it tells you that you need to store local changes before switching or if you want to store the state of your local repository without putting it online for any reason, you can use

```sh
$ git stash
```

to save the state of your repository with your local changes,
and

```sh
$ git stash apply
```

to recover them later!

## Approving Changes

Once you have pushed changes to your branch and can see them online, you can ask a repository's maintainer to merge them into the main branch and be reflected on the main site!

### Pull Request And Code Review

From your branch, you can make a pull request from your branch to the main branch. After someone reviews your code and changes (or extra tests to pass), they'll either approve it to be merged into the main branch, or they will ask for revisions and changes to be made before another review through a process called a **code review**.

## Jekyll

[Jekyll](https://jekyllrb.com) is a static site generator developed by the same people who made Github, and it's a great way to easily turn plain text into websites. As you can see by teachla's website [repository](https://github.com/uclaacm/teach-la-website), a lot of the content that goes into the websites come from various different sources, like markdown files, html files, and representation of data called YAML (yet another markup language haha), and the html files have this really weird looking {% %} stuff inside of it. Let's break down what exactly everything is!

### Liquid

[Liquid](https://jekyllrb.com/docs/liquid/) is a templating mini language that teach-la-website uses to generate templates for HTML sites. In plain HTML, you can't add in if statements, for loops, variables, or segments of other code. But Liquid lets you do just that! Liquid segments of code are denoted by {} or {% %} and let's go over how it's used within jekyll.

### Includes

Let's say that you wanted to add in a piece of HTML to multiple pages of a website. Instead of copy and pasting the same segment of HTML multiple times, Jekyll lets you [include](https://jekyllrb.com/docs/includes/) them into multiple files with the include syntax.

Let's say that I wanted to write a small piece of code that said "made with love by teachla" at the bottom of every page. Instead of copy and pasting this footer into every page, I can separate this footer into its own file within jekyll's `_includes` directory, and include it within each page that needs it!

```html
<footer>
  <p>made with love by tla</p>
</footer>
```

Within each page that wants the footer, I can simply write

```html
<div>the rest of the page</div>
{% include footer.html %}
```

which will include the footer that we wrote into our HTML file.

Within Liquid, the {% %} denotes liquid expressions that are separate from plain HTML.

### Layouts

However, if every page you wanted to make needs a footer, then instead of adding in to the bottom of each page, you can use layouts to describe how you want pages to look!

Layouts include extra stuff that you want within a page, and they all contain a
`{{content}}` section which denotes where you want all the content that uses the layout to go.

In our case, we can make a layout which uses our footer!

### Data

Data is represented in YAML format, which can be used throughout our entire website. Within files inside of our `_data` directory, we can access an object representation of it with `{{site.data.name_of_file}}` to use it within our ruby sites, and can iterate them through loops, ifs, first, etc!
(This will be finished soon!)

### Posts

Within posts, you can simply write out text in markdown, apply the layout that you want on the top, and you can see your page be converted from plain text into an HTML website using Liquid and Jekyll. Pretty cool!
