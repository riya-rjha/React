## Custom Hooks

Traditionally, in ReactJS we have two methods to display : By rendering props and by adding components. By the use of custom Hooks, we can make that a lot easier. Hooks are JS functions and they can pass information very easily. A custom hook starts with use and can call other Hooks as well.

## Points to remember
1. Don't call hooks inside a function, loop or nested loops. Only call hooks at the top level.
2. Call hooks from react function components.
3. Call hooks from custom hooks.

## Context API & useContext Hook
Context helps in passing data without use of props manually down at every level. It uses a provider to pass the value down without explicitly threading it into fragments. It is useful when making bigger applications and we want to avoid passing of props at many level. React Context API is the other word for Redux and to avoid the extensive dependency on prop drilling, we create a state provider that allows us to pass states anywhere within any file, by means of just accessing it from the top provider.

## Easy Peasy Redux
It is a library used for implementation of Redux that makes it easy peasy. It involves passing of components from one particular store, as in larger applications the passage of props and states becomes difficult. Thus, we also use redux to sometimes pass components from children to parents and the vice versa always takes place.

## Deployment of React Applications
There are two ways to deploy react applications : Netlify and gitHub pages. Following are the explanation of deployment of react apps in 10 points : 

1. To remove dependencies from package.json : Type npm uninstall @testing*3.. webvitals
2. Next step is to initialize a gitHub repo and add files into it.
3. Run the following commands after copying from github to initialize a local repository (Stored in PC)
* git remote add origin https://github.com/riya-rjha/repo_name
* git branch -M main
* git push -u origin main
4. On netlify : 
build command is :npm run build
publish directory : npm build
5. Hosting on gitHub pages : Go on terminal window 
npm i gh-pages -D (DEV DEPENDENCY)
6. On react homepage : "https://riya-rjha.github.io/react_repo_name"
7. On scripts tag : 'predeploy' : 'npm run build'
'deploy : 'gh-pages -d build'
8. push an existing repo from the command line 
9. npm run deploy (Deploys on github pages -> published)
10. Copy the link of react homepage and open in Google Chrome
