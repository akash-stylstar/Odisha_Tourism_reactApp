# Odisha_Tourism App
Working Application - Deployed

- Odisha Tourism-html - working html/css/javascript project (contains assets)
- final(complete source code) - working react application
  - navigate to the folder
  - run 'npm install'
  - once the dependencies are installed run 'npm start'


 # Setup Components

- in src create components folder
- in the components create following files
  - Navbar.js
  - Hero.js
  - About.js
  - Services.js
  - Tours.j
  - Footer.js
- setup components with default export (snippet - rafce)
- carefully move the code from App.js into components (files)
  - hint - look for navbar, footer and section tags
- App.js should be empty
- import and render all components in App.js (try auto imports)
- result is going to be the same, it's just easier to manage the code
- again, it's just my preference to split up code in such way.
  You can split it up in any way that makes the most sense to you.


  ## Alternative Approach (optional)

- in components create PageLinks.js
- import pageLinks
- return the entire list and replace current setup in Navbar, Footer
- "gotcha"
  - the more "moving parts" you will have the harder it's going to be to manage
  - my personal preference, if possible just use data

## Challenge (optional)

- create more components (essentially, split up the code more)
- find all map methods and move elements to separate components
  - Tour.js
  - Service.js
  - SocialLink.js
  - PageLink.js
