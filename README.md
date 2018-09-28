# Proofs of Concept

From Wikipedia:

> "Proof of concept (PoC) is a realization of a certain method or idea in order to demonstrate its feasibility, or a demonstration in principle with the aim of verifying that some concept or theory has practical potential."

## Purpose

As a single developer working on my own projects, without VC funding of any sort, nor dedicated engineering team to handle a complex architecture, developer performance and code maintainability are paramount. The purpose of these series of PoC is apply the concept of Acceptance Test Driven Development to my development process, and not only test my code, but also test the tools I will use to implement my code.

## Goal

I want to make an educated decision based on the result of said tests in order to pick the tools best suited for my project, instead of letting second hand opinions to drive my decision.

---

## Vue.js vs React

My first **PoC** consists of a series of basic performance tests to decide if I should use React or Vue frameworks for the application front-end infrastructure.

### Build target

For the purpose of this test, I will build the current mock contained in `mocks/courses` at the root of this project, using both Vue and React in order to compare the end result both in terms of performance metrics, but also subjective developer experience.

### Test-acceptance criteria

The chosen library/framework will be that which offers the best performance and developer experience according to the following criteria:

- Lesser JavaScript output chunks
- Build/test/reload/sync times
- Less convoluted project bootstrapping/setup
- Less convoluted code splitting implementation
- Overall personal development experience (from 1 to 10)
