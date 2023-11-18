# React
## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ReactJS

This repository gives a basic insight of the basic to advanced uses and functionalities of ReactJS. React is a frontEnd framework in which Vite has been used in this repo as a front end tool. It constitutes of good amount of uses and knowledge of reactJS which any front end developer would require before creating websites.

## Installation Process
Connect VS Code to gitHub and on terminal run the following commands : 
1. npm create vite@latest
2. React_Project_Name
3. react_project_name
4. JavaScript
5. Framework - ReactJS
6. cd "React_Project_Name"
7. npm install
8. npm run dev (To run on local host)
9. Ctrl+C (To stop local host)

Vite is a frontend tool that is fast unlike the old CRE. Use vite for activated and fast programming.

## Different commands to use on terminal 
1. React-icons : npm i react-icons --save-prod (Saving as a production dependency)
2. Router : npm i react-router-dom -S
3. Date & Time : npm i date-fns -S
4. Axios API : npm i axios -S
5. Launching JSON Server : npx json-server -p 3500 -w DataFile/data_file.json

## Documentations 
1. Custom Hooks : https://legacy.reactjs.org/docs/hooks-custom.html
2. ReactJS Icons : https://react-icons.github.io/react-icons/
3. React npm Packages : https://www.npmjs.com/
4. Reacr Hooks : https://nikgraf.github.io/react-hooks/

## Version 6 API Axios Commands
1. import {Switch} from 'react-router-dom' : import {Routes} from 'react-router-dom'
2. import {useHistory} from 'react-router-dom : import {useNavigate} from 'react=router-dom'
3. history.push('/') : navigate('/'); {const navigate = useNavigate()}
4. In main.jsx File : <Routes>
                           <Route path="*" element={<App />} />
                           {/* Component = {Element} - element = {Component} */}
                      </Routes>
