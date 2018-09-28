# JavaScript Proofs of Concept

From Wikipedia:

> "Proof of concept (PoC) is a realization of a certain method or idea in order to demonstrate its feasibility, or a demonstration in principle with the aim of verifying that some concept or theory has practical potential."

## Purpose

As a single developer working on my own projects, without VC funding of any sort, nor dedicated engineering team to handle a complex architecture, developer performance and code maintainability are paramount. The purpose of these series of PoCs is apply the concept of [**Acceptance Test Driven Development**](https://en.wikipedia.org/wiki/Acceptance_test%E2%80%93driven_development) to my development process, and not only test my code, but also test the tools I will use to implement my code, and the overall development process.

## Goal

I want to make an educated decision based on the result of said tests in order to pick the tools best suited for my project, instead of letting second hand opinions to drive my decision.

---

## Vue.js vs React

My first **PoC** consists of a series of basic performance tests to decide if I should use **React** or **Vue** frameworks for the application front-end infrastructure.

### Build target

For the purpose of this test, I will build the current mock contained in [https://amypellegrini.github.io/jptv-mocks/courses/](https://amypellegrini.github.io/jptv-mocks/courses/) (mobile view only) at the root of this project, using both Vue and React in order to compare the end result both in terms of performance metrics, but also subjective developer experience.

### Test-acceptance criteria

The chosen library/framework will be that which offers the best performance and developer experience according to the following criteria:

- Lesser JavaScript output chunks
- Build/test/reload/sync times
- Less convoluted project bootstrapping/setup
- Less convoluted code splitting implementation
- Overall personal development experience (from 1 to 10)

### Continuous Integration

Once some basic benchmark metrics are acquired, the next step is to build **CI** tests in order to evaluate said metrics continuously and monitor how these strategies scale over time while ensuring that certain performance standards are always met as the codebase evolves.
