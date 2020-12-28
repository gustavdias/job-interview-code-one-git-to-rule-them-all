
//React Interview Questions and answers | Top Commonly Asked
//1. 
function clickHandle(e){

}
<div onClick={clickHandle}/>
//onClick is not a DOM event, it is a react wrapper around the actual DOM event

//2. Why do you need the wrapper?
//It handles events for different browsers
//Synthetic events are pooled
//there is a way to use native events

//-----------
//3. How event delegation works? / How does react handle events in a list element?
//It is a method of attaching event handlers not to the elements from which you actually want to handle events, but to a higher-level element/
//!event bubbling????
function delegation(){
<ul>
    <li onClick={}>1</li>
    <li onClick={}>2</li>
    <li onClick={}>3</li>
    <li onClick={}>4</li>
</ul>
}

//Instead of adding an event to each element, you can handle this at the parent level
//In react, it is done automatically.
//If you add a element to an element, it actually attaches that event at the document level

//---------
//4. List all the inbuilt hooks in react and their applications
//?Main Hooks
// useState
// useEffect (handle lifecycle methods)
// useRef (set a reference to a specific dome element)
// useContext (to set something globally, similar ot redux)

//? Other Hooks
// useReducer
// useCallback
// useMemo
// useImperativeHandle
// useLayoutEffect
// useDebugValue

//-------------

//5. What are the best practices using react hooks?
//follow the hooks rules

//!use linter and follow linter????
const[a,setA] = useState()
const[a,setB] = useState()
setA();
setB();
//if you do like this it will re-render 2x, so it is best to create one variable for and setA and SetB

useEffect(()=>{x=something},[])
//pass something as a dependency


//--------------
// 6. How often you should update react version?
// They want ot know your plan, to save a week for it
//---------

//!Common code on site tasks
//a) todo list app
//b) searchable dropdown with api
//c) deeply nested dropdown with api

//what is important UI or functionality 


//------------------------------

//!React Interview Questions and answers | Top Commonly Asked | Part -1

//1. Name Lifecycle Methods and their purpose
//there are 2 phases for the lifecycle: render and re-render
//React hooks has completely different lifecycle

//!render
//?constructor (runs just once to set the initial state - this.state = {}, after should use this.setState)
//?static getDerivedStateFromProps (replacement of componentWillReceiveProps)
//static method that runs after the constructor
//it has role in initial render and re-render phase
//job of the method is get derive state from the change in props
//static method because you don't want the user to access the "this" keyword directly inside the method
//because static methods are actually class method, not instance methods
//you can't directly setState using this.setState (protects you from doing mistakes)
//it returns newState or null
//rarely used

//?render
//mandatory, where you return your JSX
//you can't use setState here, or else you will go on a infinite loop

//?componentDidMount
//If you are using a 3rd party library 
//You use to notify that the dome is ready, so you cna make changes accordantly


//! Lifecycle Methods re-render

//?static getDerivedStateFromProps (same as on render)

//?shouldComponentUpdate
//is you setState as the same original state, you will have the same result
//Should you re-render? You can make the decision here.
//It will give you access to you previous state and new state, so you can compare them
//if true there is a re-render

//?render (the same)

//?getSnapshotBeforeUpdate (pre commit phase / replacing componentWillUpdate)
//mount really happens after this part
//if you need to do something just before it is mounted
//The reason for this method is that react introduced lazy loading (async rendering)
//ex.; user scrolls or change the size of do window - so you can remember it

//?componentDidUpdate (done)
//is the equivalent to componentDidMount

//!componentWillUnmount
//outside render and re-render 
//when component dies
//if you want ot do something just before it unmount


//----------------------------------
//!2. Why do you use arrow functions in react???

// on click handles: not a class method, but a class property


class react extends Component {
    state = {
        loggedIn: false
    }
    //!loginHandle is a class property, you don't need to define it inside a constructor because of react
    //if it was regular function (a function inside a function)
    //this points to loginHandle (without this you have to bind it to class)
    loginHandle = () =>{
        this.setState(prevState => ({
            loggedIn: !prevState.loggedIN
        }))
    }
    //render is a class method
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

//------------------

//3. How to prevent components from re-rendering?

//?shouldComponentUpdate()
//You can compare the states here nad make the decision (false stops the render)

//?React.PureComponent: with it you don't need(and should) shouldComponentUpdate
//it compares shallowly the previous and new state, if they are the same, it stops rendering
class react extends PureComponent {
//Just for class component


//?Rect.memo: for functional (or presentational components) components
//Memorization technique (input are the same, output are the same, not need to re-calculate the whole thing)
//

//-------------------------------------------------------------------
//!React Interview Questions and answers 2019 | Best Commonly Asked | Part -2

//!1. Explain Error Boundaries
//similar to JS try/catch block
<ErrorBoundaryComp>
<MyComp/>
</ErrorBoundaryComp>
//If there is a error with MyComp, ErrorBoundaryComp will catch
//special components that you use to wrap, it has special lifecycle hooks
//? static getDerivedStateFromError (similar to static getDerivedStateFromProps, but for errors)
//when you get the error, you catch and change the state accordantly
//you need a fallback component
//? componentDidCatch
//you can log the error

//-----------------
//!2. Best Lifecycle Method for making API calls?
// You want to make sure that your DOM is read, before you make the call.
// componentDidMount
//------------------
//! 3. Name some of the patterns that React uses
//?a) context-api pattern: 
// why use it? when you pass props into a deeply nested component
// It allows you to access this props
// you wrap you component with it
// you have a provider and a consumer

//? b) render props
// using children as functions. class components and inside of it all the other child components are functions

//? c) presentation component pattern
// It is a stateless functional components -
// a container component:t contain how things works, they are usually class components

//?Higher order component
//-----------
//!4. Why would you use react in your project?
//the decision has to be made based on the project itself
//how long will it take? Is there any big update for the tech that you wan to use?
//React is functional programing, good for JS programmer

//--------------
//! What is CSS-in-js pattern?
//CSS/Sass is global
//you can pass CSS as JS, inline CSS
//Material UI

//-----------------------------------------------------------------------
//React Interview Questions and answers 2019 | Best Commonly Asked | Part -3
//!1. why can't you update the state directly without setState()?

//setState() always triggers a the re-rendering of the component
//and makes a  copy of the state.

//Directly modifying the state To modified the state
//Does not re-render or makes a copy of the state to after modify it.

//-----------

//2. In how many ways can you conditionally render in react?

//1. 
if(isLiar){
    return <PantsOnFire/>;
}
return <YouAreOk/>;

//2.
{isLiar && 
<PantsOnFire/>
}

//3.
 {isLiar ? (
     <PantsOnFire/>
 ):(
     <YouAreOk/>
 )}

 //-----------

 //3. What is Fragments and why to use it?
 //Single child rule
<React.Fragment>
    <ChildA/>
    <ChildB/>
    <ChildC/>
</React.Fragment>
//  <></>
//Additional tags can create problems with CSS

//------------
//4. How to do code-splitting in react???

//When react code pass to the bundler, basically it creates a single bundle.
//If the bundle is too large, 
//In most cases user don't need the whole app, the only visit few pages.
//So you can split the code into multiple bundles with:
//! Dynamic Import (Lazy loading)

const LazyComp = React.lazy(() => import('./lazyComp'));
//you use react lazy to import a particular component which means
//this will be a separate bundle. You main app is loaded and all that is 
//under lazy loading will load asynchronously. 
//While it is loading, you have to provide a some sort of fallback component.
//which will render a loader or something so your code doesn't break.

//You provide a fallback component by using Suspense:

<Suspense fallback={<div>Loading...</div>}>
    <LazyComp/>
</Suspense>
//----------------
//!React Interview Questions and answers | Best Commonly Asked | Part -4

//5. How to optimize a React app?
//Ask them to describe the app, what does it do??
//Which version of react v16?
//What kind of performance issues does it have?
//slow? crashing? Bundle size is big??

//a) speed: profile tool app, find the bottlenecks (disable other plugins)
//you may be rendering components that are not supposed to be re-rendering
//You can stop components from update unnecessarily by using:
//!shouldComponentUpdate
//!PureComponent
//!React.memo

//b) big bundle: use React.lazy

//c)api slow

//d) using the wrong methods to update the state (think of immutability)

//e) assets loading slowly - CDN issue

//f) using class components when a functional is enough

//g) using bind instead of arrow functions (arrow func are faster)

//--------------------------------------------

//6. Explain Virtual DOM

//Update the DOM is expensive, make it faster and update as less as possible
//Any update happens through the change in state and props

//--------------------------------------------
//!7. Projects
//!Fix a error

//It can be:
//handlers are not bound properly to the class
//state may not be updating properly
//typos

//Ready the code first

//Ask questions, what is the purpose of it?

//!Add functionality 

//! Create a app from scratch (generally is a todo list)
//create-react-up
//arrow functions
//test cases in jest

//!Take home projects are a good example of how the job will look like

