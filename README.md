# Next Google Search Book :book:

The ***Next Google Search Book*** is a project based on Next.js library. It's just a prototype


# Installation :floppy_disk:

To run this project you need [node](https://nodejs.org/en/) at least in version 18 (best idea is to use node 20) and [npm](https://www.npmjs.com/). First, install all necessary dependencies:

      npm i


To start your workspace, you should enter:

      npm run dev


Project is ready at this address:

    http://localhost:3000



<!-- # Used technologies and argumentation :toolbox: -->

# Linux (WSL2) - Linux subsystem for Windows.

Linux improved performance during work and is a more professional operating system

# Next.js

According to the [react documentation](https://react.dev/learn/start-a-new-react-project), using THE `npx create-react-app` command is not a recommended solution.
This framework allows for the creation of an internal API and also eliminates the need to worry about future SEO.
#### That's not the only one of its advantages! :smile:

# Eslint and Prettier plugins
They allow for better code control and also make working on the project easier

#### In reference to this, scripts have been added to check the correctness of the code structure and automatically correct it. To use them, enter the following commands:

`npm run prettier:check`
`npm run prettier:fix`
< for prettier check

`npm run lint`
`npm run lint:fix`
< for lint check 

# Github actions

It enables even more precise quality checks of our code and prevents merging into the main branch if there are issues

# Typecheck and Typescript

TypeScript is one of the most commonly used tools for developers, which allows for even better improvement of the quality of our code.
In addition, an action has been added that uses the 'typecheck' script to verify the correctness of types and values assigned in our code.

# MantineUI library (newest version)

I chose the MantineUI library because it allows for easy and quick styling of components. It also includes modals and a notification system, which makes it easier to display errors to the user.

MantineUI also provides hooks, such as pagination and the ability to introduce responsiveness to the page. Another significant advantage is the icon library it uses.

I was debating between `TailwindCSS` and `MantineUI`, but I have more experience with the Mantine library :smile:

# Axios

Axios was the best solution for handling requests. It's also a good idea, especially for larger projects, to use the `useQuery` library in conjunction with it.

  #### Optimization:
  According to [Google Books Api](https://developers.google.com/books/docs/v1/performance?hl=pl) I used specific queries to fetch only the data that I needed for the page.

# Atomic design

Atomic design was implemented for ease of use with so few components. They are not broken down into the smallest units, but the project didn't require a large amount of code, and everything remains clear

# Jest

To run tests, you should use the command:

`npm run test` or `npm run test:watch`

Only two tests have been implemented due to a lack of time. As another tool `The GPT chat` was very helpful for testing.

Jest is using in 5.16.5 version because of Typescript bug. 

# Merging and commits

As a working mode, all commits were merged and squash into one. For the purpose of this task, commits were left as comments.
<br/>
<br/>
<br/>



# IMPORTANT
## Tiles with books may become misaligned 
Due to a lack of time, tiles may become misaligned with overly long titles or an excessive amount of code. 

## RWD functionality in not implemented 
The application does not support widths below 450/520 pixels. The application could use tools built into the Mantine UI library, but all computer screens and some tablets will be able to handle it for now

## usePagination hook 
Mantine has the built-in usePagination hook. However, to further optimize the application and the desire to showcase more of my own code, I created a custom usePagination hook :smile:

<br/>
<br/>
<br/>

# CONCLUSION

## Setup
- React or other framework :heavy_check_mark:
- Typescript :heavy_check_mark:

## Searchbar
- On query :heavy_check_mark:
- Display book basic informations :heavy_check_mark:

## Tests
- Jest :heavy_check_mark:
- Two tests (hope it's ok, that's my Achilles' heel :laughing:) :heavy_check_mark:

## Errors
- Show user communicates :heavy_check_mark:
- Handle query error :heavy_check_mark:

## Design
- Basic MantineUI :heavy_check_mark:

## Extra
- Pagination :heavy_check_mark:
- Sort :heavy_check_mark:

# HOPE YOU ENJOYED! :smile: