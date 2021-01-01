---
layout: post
title: First Steps to Every Project
date: 2021-01-01
tags: tips tricks development project start
---

## First Steps to Every Project

These are useful steps to follow and think about when starting a new project. These are in no way 'gospel' but should be considered and implemented where it makes sense. These steps are adapted from Jason Weimann steps to work more generally with all software development instead of being specific to game development.

### Steps for ***every*** project

1. Set up source control
   * just `git init` and commit as you work on parts
   * if the project is longer consider using an online repository e.g. GitHub
2. Work on a plan.
   * Keep your new ideas accessible.
   * Keep track of what you have done and what still needs to be done.
   * Depending on the scope of the project you might consider a full project tracker like Jira, a Kanban board like Trello, or simply a physical todo list on your desk.
   * Software I like
        * GitHub issues for bug and feature tracking. GitHub Projects for a Kanban Board.
        * Notion for todo lists, Kanban board, uploading assets, etc.
3. Set up folder and file structure and organization
   * The exact structure depends on what type of project but keep things organized. It can be a pain to organize things late in a project.
4. Work on Vertical Slices and making a Minimal Viable Product
   * The goal is to have your app *always* usable. You never want to leave it in a broken state.
    * Working on a vertical slice ensures that the app meets expectations. Remember it may take multiple iterations to find the correct solution.

### Considerations for larger projects

1. Continuous Deployment and Continuous integration
    * It is a lot easier to get this set up at a beginning of a project than to implement it later.
    * This might be writing a couple shell script or using full feature CI/CD software.
    * The idea is to have a build process ready and easy so you can see and test often.
2. Set up tests and test often
    * It is a lot easier to set up unit tests at the beginning of the project and to keep it updated than it is to wait until later.
    * Play around in your built app often. Show it off to people, share progress with other people on Twitter and forums. Feedback is very important. This step is easier if you have CI/CD setup
3. Prototype and set up sandbox projects
    * If you are integrating a third-party plugin create a new project or copy your current project and test from there. 3rd-party plugins might not work as expected or require setting up your project in a certain way to work.
    * If you want to build a new feature it can make sense to build a prototype of it first separate from your main project to see if it will work well.

#### Credit

* [Adapted from Jason Weimann](https://www.youtube.com/watch?v=1f4mkY8jUdY)