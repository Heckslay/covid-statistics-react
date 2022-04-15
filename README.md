# COVID-19 Statistics React SPA 🚀
## Introduction
This React app works together with my [Laravel Project](https://github.com/Heckslay/covid-statistics-laravel)
and provides a simple, auth-protected, Multilang UI tool to view COVID-19 statistical data. 
Total of three pages:
1. Login screen
2. Summary page with total data cards
3. Grid page with sort and search functionality

The task was done based on requirements available on this
[link](https://gist.github.com/giunashvili/279f4ae108501b30caae4c7486c8ba64).

## Installation

> npm install

and

> npm start

*P.S. Make sure Laravel backend server is running.

## Project Improvement Ideas
*Note: This was coded in a really time limited environment and doesn't show all best practices which I
support and am familiar with. Main goal was to provide a working PoC on time. Redux usage was omitted,
due to midweek development and a bit steep learning curve. 
(My main tech is Laravel and in React I used to use contexts to manage shared states) 😊 
Points I've made for myself by the end of V1 development:

1. Major refactor
2. Redux integration
3. Extract translation JSONs into separate files
4. Improved Auth management and routing
5. Typescript support
6. Cleaner syntax in general
7. Move translations and common functionality hooks to contexts
8. Move JWT headers setting function to a once called function to avoid code spamming



