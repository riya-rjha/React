## Custom Hooks

Traditionally, in ReactJS we have two methods to display : By rendering props and by adding components. By the use of custom Hooks, we can make that a lot easier. Hooks are JS functions and they can pass information very easily. A custom hook starts with use and can call other Hooks as well.

## Points to remember
1. Don't call hooks inside a function, loop or nested loops. Only call hooks at the top level.
2. Call hooks from react function components.
3. Call hooks from custom hooks.

## Context API & useContext Hook
Context helps in passing data without use of props manually down at every level. It uses a provider to pass the value down without explicitly threading it into fragments. It is useful when making bigger applications and we want to avoid passing of props at many level.s