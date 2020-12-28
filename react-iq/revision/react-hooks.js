//!React Hooks Interview Questions and answers | Top Commonly Asked

const { useDebugValue } = require("react")
const { render } = require("react-dom")

//1. What is React Hooks?
//Hooks are functions that lets you 'Hook into' React state and lifecycle features from function components.

//Before Hooks: React was using Class (OOP)

//With Hooks you are replacing classes with functions, so you need a way to provide 
//state and lifecycle features.
//?If you have a functional programming you can use closure to persist with data 
//and use hooks which allows you to create those life cycle.

//------------------------
//2. Why react hooks
//Instead of classes, you use functions

//no more complex lifecycle methods

//Simpler code. No more mapStateToProps, mapDispatchToProps with redux.
//use uSelector???? and use dispatch

//-------------------
//!3.Rules of react Hooks
//Only call hooks at the top level
//Don't call hooks inside loops, conditions, or nested functions
//Call hooks from React Components or Custom Hooks

//----------

//4. Map lifecycle class methods to lifecycle hooks
//There are hooks equivalent for every single class method

//Stages of lifecycle
//In hooks you cna have multiple useEffects (for each prop you can have one useEffect)

//?Initial render
getDerivedStateFromProps
useEffect(()=>{},[prop1,prop2])

componentDidMount
useEffect(()=>{},[])


//?Updates
getDerivedStateFromProps
useEffect(()=>{},[prop1,prop2])

shouldComponentUpdate()
useMemo()

ComponentDidUpdate //like componentDidMount
useEffect(()=>{})

getSnapshotBeforeUpdate
// custom Hook to hold previous state
//ex.: to remember the scroll position

//?Unmount
useEffect(()=> {return()=> {cleanup}},[])
//instead of just executing a function, there is a return state


//?Error Boundary

getDerivedStateFromError()
componentDidCatch()

//With hooks this methods are not available

//----------------------

//!5. Upgrade Class Project to Hooks Project
//Upgrade react, react-dom versions on package.json
//automation test
//?Update code one route at a time (because you can have a class component in hook project)
//? this.state => sueState
//? lifecycle events => useEffect
//----------------------
//6. How to debug Hooks?

//Inspector
// console.log, debugger statements
// React Developer Tool (chrome plugin)
// useDebugValue

//---------------------

//7. Coding Exercise

//