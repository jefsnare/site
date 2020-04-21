---
title: Productive Git workflow
description: Using Git productive in your workflow
date: 2017-07-29
tags:
  - git
layout: layouts/post.njk
---
Working with Git can be a frustration, but also a lot of fun and is very productive and fast. Using the power of aliases and using an effective workflow, the version history is organized and there are hardly conflicts in the code.
If you didn’t worked with Git before I recommend this crash course learning the basics of Git.
In this article I describe my simple but effective Git workflow I’ve used many times for side projects and recently almost on daily base.

Before we get started we add some aliases to git config.
`git config --global -e` and add the following to the file;

```bash
[alias]
    co = checkout
    ci = commit
    st = status
    br = branch
    hist = log --pretty=format:\\\"%h %ad | %s%d [%an]\\\" --graph --date=short\n\t\tcurrent-branch = rev-parse --symbolic-full-name --abbrev-ref HEAD
    release = \"!sh -c \\\"git checkout release && git merge origin/master && git push origin release\\\" -\"
    feature = \"!sh -c \\\"git checkout master && git checkout -b $1\\\"\"
    live = \"!sh -c \\\"git checkout live && git merge origin/release && git push origin live\\\"\"
    pt = \"!sh -c \\\"git push origin release && git push origin release --tags\\\"\"
```

These aliases may come handy and are shortcuts to prevent typing that much.
Let’s create a Git project and initialize some things. We start with git init to initialize an empty Git repository.
Then we create the workflow branches we needed;

```bash
git branch release 
git branch live
```

Now we have the correct branches for development.

### Live branch

This is the branch were live code should be. No developer and no release code should be committed in here. Only hotfixes for the live environment are allowed. In most cases the live branch contains merge commits and tag (version) numbers.
More about tag (version numbers later).

### Release branch

The release branch contains code which could be release, this branch mostly used for staging environments or CI/Testing tools for testing the build before releasing. I use it to collect code for a release and merge the release branch to live.

### Master branch
The master branch is the main branch of development. I use it for testing the merged code that was coming from feature branches. Sometimes I do commit in the master branch and that’s fine. Also that’s fine working with multiple people in the master branch. Conflicts can occur but also that’s fine but to prevent this I use feature branches.

### Feature branches
In this workflow I use ‘feature branches’. For example, if you are developing a feature ‘contactform’ you could create a branch ‘contactform’ or use a project management tool issue number ‘JIRA-122’ or ‘BASECAMP-987’ etc. A feature branch can be created by using the git new branchname alias earlier created. These feature branches are branched off the master branch. Create a feature branch 'contactform', git feature contactform.

### Merge feature branch into master
When I completed the development in the feature branch I can merge this into the master branch. Make sure the branch is pushed before merging into master.

```bash
git push origin branchname 
git checkout master 
git merge branchname 
git push origin master
```

Confirm the merged commits by using git hist or git log and push!
That's it, now your code is merged into the master branch.

### Releasing code
Preparing code into the release branch is noting more than merging the master branch into the release branch. In the aliases we’ve added to the git config we can execute the following command; git release.
This command is checking out the release branch, merges the master branch and pushes the release branch.

### Putting it live
After the release is collected in the release branch we can merge the release branch into live. Also for this flow I’ve prepared a git alias (defined at the top of this post. Wit the git live the release is merged into live and can be deployed.

### git tags
It’s easy to use git tag for versioning releases or live versions. I use tags in the release branch and tag them if they are complete to deploy to live.
With git tag you could add a tag to the current commit / state. A tag can contain v1.2.3 or contactform or foo-bar. Tags can be anything. But I use them to track versions in the release branch so I create a tag with the following commands;

```bash
git release 
git tag v.1.9.4 
git pt
```

git pt is an alias for git push and git push --tags. Now I can track release versions in Git, if there are any bugs I can easily checkout specific release versions and start investigate.