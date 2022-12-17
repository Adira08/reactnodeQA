import cc from "../images/cc.png";
import fc from "../images/fc.png";
import routingimp from "../images/routingimp.png";
import state from "../images/state.png";
import effect from "../images/effect.png";
import memo from "../images/memo.png";
import reducer from "../images/reducer.png";
import ref from "../images/ref.png";
import callback from '../images/callback.png'
import cleanup from '../images/cleanup.png'
import list from '../images/list.png'
import FormDataComponent from "./FormDataComponent";

function OneFile() {
  return (
    <div>
      <h1>React and its featuers</h1>
      <div className="answer">
        <p>
          <b>
            <u>React</u>
          </b>{" "}
          is a free and open-source front-end JavaScript library for building
          user interfaces based on UI components. It is maintained and developed
          by Meta in 2013.{" "}
        </p>
        <h3>
          <u>Featuers of React</u>
        </h3>
        <ol>
          <li>
            <b>
              <u>JSX : </u>
            </b>{" "}
            React use JSX which is Javascript XML, it helps to write HTML like
            syntax in javascript file which make it very easy to you.
          </li>
          <li>
            <b>
              <u>Components : </u>
            </b>
            React is all about components, In react we make reuseable components
            for all functions which contaits own logic and features.
          </li>
          <li>
            <b>
              <u>Virtual DOM : </u>
            </b>
            VDOM is a lightweight representation of real DOM. React use VDOM to
            compare the changes from real DOM and then only update the component
            which is changed which do not required to reload the pages and
            because of which it makes the app fast.
          </li>
          <li>
            <b>
              <u>One-Way Data Binding : </u>
            </b>
            ReactJS is designed in such a manner that follows unidirectional
            data flow or one-way data binding. The benefits of one-way data
            binding give you better control throughout the application.
          </li>
          <li>
            <b>
              <u>Performance : </u>
            </b>
            ReactJS is known to be a great performer. This feature makes it much
            better than other frameworks out there today. The reason behind this
            is that it manages a virtual DOM.
          </li>
          <li>
            <b>
              <u>Simplicity : </u>
            </b>
            ReactJS uses JSX file which makes the application simple and to code
            as well as understand. We know that ReactJS is a component-based
            approach which makes the code reusable as your need. This makes it
            simple to use and learn.
          </li>
        </ol>
      </div>

      <hr />

      <h1>Type of Components</h1>
      <div className="answer">
        <p>
          There two type of components <b>Class Component</b> and{" "}
          <b>Functional Components</b>
        </p>
        <div className="small">
          <div>
            <p>
              <b>Example of Class Components</b>
            </p>
            <img src={cc} alt="not" />
          </div>
          <div>
            <p>
              <b>Example of Functional Components</b>
            </p>
            <img src={fc} alt="not" />
          </div>
        </div>
        <h2>
          <u>Class Component VS Functional Component</u>
        </h2>
        <p>
          <b>
            <u>Class Component</u>
          </b>
        </p>
        <ul>
          <li>
            A class component requires you to extends from React.Component and
            creates a render function which retirn a react element.
          </li>
          <li>
            It must have the render() method returning the JSX which is
            syntactically similar to HTML.
          </li>
          <li>
            It also known as "Stateful component" as they implemet logic and
            state.
          </li>
          <li>
            React lifecycle method can be used inside the class component.
          </li>
          <li>
            Constructor are used in class component as it need to stored the
            data and initializes the state.
          </li>
        </ul>
        <p>
          <b>
            <u>Functional Component</u>
          </b>
        </p>
        <ul>
          <li>
            A functional component is just a plain javascript function that
            accepts props as an arguments & returns a react elements.
          </li>
          <li>There is no render method used in functional component.</li>
          <li>
            It is also known as stateless component as they simply accepts data
            abd display them in some form.
          </li>
          <li>
            React lifecycle methods cannot be used in the functional component.
          </li>
          <li>Constructors are not used in the functional compoenent.</li>
        </ul>
      </div>

      <hr />
      <h1>
        <u>Do you prefer function-based or class-based component and why ?</u>
      </h1>
      <div className="answer">
        <p>There are different reasons why functional components are better than class components for Reactjs development, and here are the most prominent ones:</p>
        <ol>
            <li>It is a simple JS function that simply returns HTML UI</li>
            <li>Accept properties in function and return HTML</li>
            <li>Functional gives the solution with or without using states</li>
            <li>No render method used</li>
            <li>Defined using arrow functions but can be created with the regular function keyword</li>
            <li>On the other hand, the class component has quite a complex UI logic. Also, it must have a render() method returning HTML.</li>
        </ol>
      </div>
      <hr />

      <h1>
        <u>React life Cycle</u>
      </h1>
      <div className="answer">
        <a
          href="https://www.w3schools.com/react/react_lifecycle.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Link for React life cycle
        </a>
      </div>

      <hr />

      <h1>
        <u>What does mean by state and its use in react?</u>
      </h1>
      <div className="answer">
        <p>
          A state is data conatiner in which we can store the data or
          information about the compoenent.
        </p>
        <p>
          <b>
            <u>Uses of States</u>
          </b>
        </p>
        <ul>
          <li>A state can be modified based on user action.</li>
          <li>
            Every time the state of an object changes,the react will re-rendered
            the component to the browser.
          </li>
          <li>The state of an object can store multiple properties.</li>
        </ul>
      </div>
      <hr />

      <h1>
        <u>What is JSX and why do we use it instead of js?</u>
      </h1>
      <div className="answer">
        <p>
          <u>
            <b>JSX</b>
          </u>{" "}
          is a XML-like syntax extension to ECMAScript (the acronym stands for
          JavaScript XML). Basically it just provides syntactic sugar for the
          React.createElement() function, giving us expressiveness of JavaScript
          along with HTML like template syntax.
        </p>
        <p>
          <u>
            <b>JSX or JavaScript XML</b>
          </u>{" "}
          is combines HTML and JavaScript, making the code easier to read and
          understandable for the user. JSX combines interactivity with markup
          rather than separating the two. It makes it easier to visualize DOM.
        </p>
        <p>
          We{" "}
          <u>
            <b>use JSX</b>
          </u>{" "}
          instead of JS because it make easier for user to make the react
          application as it is similar to HTML and also it make easier to read
          and update HTML code,thus functionality is easier to handlw with JSX.
        </p>
      </div>
      <hr />

      <h1>
        <u>What is package.json?</u>
      </h1>
      <div className="answer">
        <p>
          <b>
            Package.json = Metadata associated with project + All Dependencies
            with version + scripts
          </b>
        </p>
        <p>
          A package.JSON is JSON file that exists at the root of node project.
          It holds metadata relevant to the project and it is used for managing
          the projects version dependencies,scripts,version and whole a lot more
          for projects.
        </p>
      </div>
      <hr />

      <h1>
        <u>
          What is the Difference between react and react native? Which one is
          library or framework?
        </u>
      </h1>
      <div className="answer">
        <p>
          <u>
            <b>ReactJS</b>
          </u>
        </p>
        <ul>
          <li>React is used for creating websites, web apps, SPAs etc.</li>
          <li>React is a Javascript library used for creating UI hierarchy.</li>
          <li>
            It is responsible for rendering of UI components, It is considered
            as V part Of MVC framework.
          </li>
          <li>
            React’s virtual DOM is faster than the conventional full refresh
            model, since the virtual DOM refreshes only parts of the page, Thus
            decreasing the page refresh time.
          </li>
          <li>
            React uses components as basic unit of UI which can be reused this
            saves coding time.
          </li>
        </ul>
        <p>
          <u>
            <b>React Native</b>
          </u>
        </p>
        <ul>
          <li>
            React Native is a framework that is used to create cross-platform
            Native apps. It means you can create native apps and the same app
            will run on Android and ios.
          </li>
          <li>React native have all the benefits of ReactJS</li>
          <li>
            React native allows developers to create native apps in web-style
            approach.
          </li>
          <li>Front end developer can become mobile developer easily.</li>
        </ul>
      </div>
      <hr />

      <h1>
        <u>What is the package name you are using for routing?</u>
      </h1>
      <div className="answer">
        <p>React contains three different packages for routing. These are:</p>
        <ul>
          <li>
            <u>
              <b>react-router:</b>
            </u>{" "}
            It provides the core routing components and functions for the React
            Router applications.
          </li>
          <li>
            <u>
              <b>react-router-native:</b>
            </u>{" "}
            It is used for mobile applications. It contains the React Native
            bindings for React Router
          </li>
          <li>
            <u>
              <b>react-router-dom:</b>
            </u>{" "}
            It is used for web applications design. It contains the DOM bindings
            for React Router
          </li>
        </ul>
      </div>
      <hr />

      <h1>
        <u>Routing Implementation</u>
      </h1>
      <div className="answer">
        <img src={routingimp} alt="" />
      </div>
      <hr />

      <h1>
        <u>High Order Component in react js ?</u>
      </h1>
      <div className="answer">
        <p>
          Higher-order components or HOC is the advanced method of reusing the
          component functionality logic. It simply takes the original component
          and returns the enhanced component.
        </p>
        <p>
          <u>Syntax : </u>
        </p>
        <p>
          <b>
            const EnhancedComponent = higherOrderComponent(OriginalComponent);
          </b>
        </p>

        <p>Reason to use Higher-Order component:</p>
        <ul>
          <li>Easy to handle</li>
          <li>Get rid of copying the same logic in every component</li>
          <li>Makes code more readable</li>
        </ul>
        <a
          href="https://www.codingame.com/playgrounds/8595/reactjs-higher-order-components-tutorial"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link for Example
        </a>
      </div>
      <hr />

      <h1>
        <u>What is Diffing Algorithm?</u>
      </h1>
      <div className="answer">
        <p>
          when there is a update in the virtual DOM, react compares the virtual
          DOM with a snapshot of the virtual DOM taken right before the update
          of the virtual DOM. With the help of this comparison React figures out
          which components in the UI needs to be updated. This process is called
          diffing.
        </p>
      </div>
      <hr />

      <h1>
        <u>What is Reconciliation?</u>
      </h1>
      <div className="answer">
        <p>
          Reconciliation is the process through which React updates the DOM.
          When a component’s state changes, React has to calculate if it is
          necessary to update the DOM. It does this by creating a virtual DOM
          and comparing it with the current DOM.
        </p>
      </div>
      <hr />

      <h1>
        <u>What is Context api?</u>
      </h1>
      <div className="answer">
        <p>
          Context API is used to pass global variables anywhere in the code. It
          helps when there is a need for sharing state between a lot of nested
          components. <br />
          It is light in weight and easier to use, to create a context just need
          to call React.createContext(). <br />
          No need to install other dependencies or third-party libraries like
          redux for state management.
        </p>
        <p>
          It has two properties Provider and Consumer. The Provider acts as a
          parent it passes the state to its children whereas the Consumer uses
          the state that has been passed. <br />
          React.createContext() is all you need. It returns a consumer and a
          provider. Provider is a component that as it's names suggests provides
          the state to its children. It will hold the "store" and be the parent
          of all the components that might need that store. Consumer as it so
          happens is a component that consumes and uses the state.
        </p>
        <a
          href="https://www.w3schools.com/react/react_usecontext.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          example of useContext
        </a>
      </div>
      <hr />

      <h1>
        <u>Controlled and Uncontrolled components</u>
      </h1>
      <div className="answer">
        <a
          href="https://www.javatpoint.com/react-controlled-vs-uncontrolled-component"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </div>
      <hr />

      <h1>
        <u>React form and Store Data/ store form data</u>
      </h1>
      <div className="answer">
        <FormDataComponent />
        <a
          href="https://developmobileapplications.com/how-to-store-form-data-in-local-storage-using-reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link for code/ if not opening see the formdata file in vs code
        </a>
      </div>
      <hr />

      <h1>
        <u>Fetch Data From API using Fetch() and axios()</u>
      </h1>
      <div className="answer">
        <a
          href="https://www.geeksforgeeks.org/how-to-fetch-data-from-an-api-in-reactjs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fetch example
        </a>
        <br />
        <a
          href="https://www.freecodecamp.org/news/how-to-use-axios-with-react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Axios example
        </a>
        <p>
          <u>
            <b>Axios</b>
          </u>
        </p>
        <ul>
          <li>In Axios,the data is sent through data property.</li>
          <li>Axios has URL in request object.</li>
          <li>Axios's data contains the objects.</li>
          <li>Axios performs automatic transformation of JSON data.</li>
          <li>Axios alllow cancelling request & request timeout.</li>
        </ul>
        <p>
          <u>
            <b>fetch</b>
          </u>
        </p>
        <ul>
          <li>In fetch,the data is sent through body property.</li>
          <li>Fetch has no URL in request object.</li>
          <li>Fetch's body has to be stringified.</li>
          <li>
            Fetch is a two step process when handling with JSON data,first one
            is to make the actual request & second one is to call .json() method
            on the response.
          </li>
        </ul>
      </div>
      <hr />

      <h1>
        <u>Type of Exports in React JS / named and default export</u>
      </h1>
      <div className="answer">
        <a
          href="https://www.w3schools.com/react/react_es6_modules.asp#:~:text=There%20are%20two%20types%20of%20exports%3A%20Named%20and%20Default."
          target="_blank"
          rel="noopener noreferrer"
        >
          Link for example
        </a>
      </div>
      <hr />
      <h1>Difference between default export and named export?</h1>
      <div className="answer">
      <p>Named Exports:</p>
      <ul>
        <li>Named exports are useful to export several values.</li>
        <li>Named exports allow us to share multiple objects, functions or variables from a single file</li>
        <li>Named exports are imported with curly braces in various files and must be imported using the name of the object, function or variable that was exported.</li>
        <li>During the import, it is mandatory to use the same name of the corresponding object.</li>
      </ul>
      <p>Default exports</p>
      <ul>
        <li>Default exports are useful to export only a single object, function, variable.</li>
        <li>During the import, we can use any name to import.</li>
      </ul>
      <a href="https://betterprogramming.pub/understanding-the-difference-between-named-and-default-exports-in-react-2d253ca9fc22#:~:text=Exports%20without%20a%20default%20tag,are%20not%20React%2Dcentric%20ideas."  target="_blank"
          rel="noopener noreferrer">Example Link</a>
      </div>

      <hr />

      <h1>
        <u>Redux and its Principle</u>
      </h1>
      <div className="answer">
        <p>
          React-redux being a state management tool makes it easier to pass
          these states from one component to another irrespective of their
          position in the component tree and hence prevents the complexity of
          the application. <br />
          When a react application holds various components in need of state
          from other components it becomes difficult to realize where the state
          should reside among these components to make it easier to maintain.{" "}
          <br />
          React-redux provides a store which makes the state inside components
          easier to maintain. <br />
          Along with stores, react-redux introduces actions and reducers which
          work simultaneously with stores to make the state more predictable.
        </p>

        <p>
          <b>
            <u>Principle of Redux</u>
          </b>
        </p>
        <ul>
          <li>Redux is a Single Source of Truth</li>
          <li>The State is Read-only State</li>
          <li>The Modifications are Done with Pure Functions</li>
        </ul>
        <a
          href="https://www.geeksforgeeks.org/what-are-the-three-principles-that-redux-follows/"
          target="_blank"
          rel="noopener noreferrer"
        >
          principle and Example
        </a>
      </div>
      <hr />

      <h1>
        <u>How do you pass data from parent to child and child to parent?</u>
      </h1>
      <div className="answer">
        <a
          href="https://medium.com/@jasminegump/passing-data-between-a-parent-and-child-in-react-deea2ec8e654"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Both Parent to child and chile to parent
        </a>
      </div>
      <hr />

      <h1>
        <u>What is lazy loading in react ?</u>
      </h1>
      <div className="answer">
        <p>
          React has two native features that make it really simple and easy to
          implement lazy loading—React.lazy() and React.Suspense.
        </p>
        <p>
          <u>
            <b>Advantages of Lazy loading :</b>
          </u>
        </p>
        <li>
          <u>
            <b>Faster initial loading:</b>
          </u>{" "}
          By reducing the page weight, lazy loading a web page allows for a
          faster initial page load time.
        </li>
        <li>
          <u>
            <b>Less bandwidth consumption:</b>
          </u>{" "}
          Lazy-loaded images save data and bandwidth, particularly useful for
          individuals who don’t have fast internet or large data plans.
        </li>
        <li>
          <u>
            <b>Preserving system resources:</b>
          </u>{" "}
          Lazy loading conserves server and client resources by requesting just
          a fraction of components.
        </li>
        <li>
          <u>
            <b>Reduced work for the browser:</b>
          </u>{" "}
          When pictures are lazy-loaded, your browser does not need to process
          or decode them until they are requested by scrolling the page.
        </li>

        <br />
        <a
          href="https://www.tutorialspoint.com/lazy-loading-in-reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Example for lazy loading
        </a>
      </div>
      <hr />

      <h1>
        <u>Difference b/w Stateful and stateless Component</u>
      </h1>
      <div className="answer">
        <p>
          The literal difference is that one has state, and the other doesn’t.
          That means the stateful components are keeping track of changing data,
          while stateless components print out what is given to them via props,
          or they always render the same thing.
        </p>
        <p>
          <u>
            <b>Stateful component:</b>
          </u>
        </p>
        <ul>
          <li>
            A component that manages the state in class-based with state or
            functional with useState.
          </li>
          <li>
            In some component, the data keeps changing, for example, watching
            the cricket score etc.
          </li>
          <li>
            In most of the cases, the class-based components extend react
            component.
          </li>
          <li>Stateful components can use react life cycle hooks</li>
          <li>In stateful components it good to use the this instance</li>
        </ul>
        <p>
          <u>
            <b>Stateless component:</b>
          </u>
        </p>
        <ul>
          <li>A component that has no internal state management in it.</li>
          <li>
            Function components are simply functions that receive the props and
            return the JSX code.
          </li>
          <li>Stateless components can not use the react life cycle hooks</li>
          <li>
            Here need not to use this instance, they just receive the props as
            an argument
          </li>
        </ul>
      </div>
      <hr />

      <h1>
        <u>
          How do you switch one component to another, Conditional Rendering?
        </u>
      </h1>
      <div className="answer">
        <p>
          Way to Switch/Navigate from one page to another page ,Link, NavLink,
          Redirect Component ,history.push, history.replace Link Link is used to
          manage the navigation and it worked as an anchor tag. Check below code
          for the demonstration. import "Link" from 'react-router-dom'; ... ...
          About NavLink NavLink behaves the same as Link but in addition, it
          comes with a new attribute called “activeClassName” which helps us to
          add the class to the anchor tag when page url will match. import
          "NavLink" from 'react-router-dom';
        </p>
        <ul>
          <li>Routing</li>
          <li>Conditional rendering i.e, by using ternary operators</li>
        </ul>
        <a
          href="https://www.w3schools.com/react/showreact.asp?filename=demo2_react_conditionals_ternary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Example for onditional rendering
        </a>
      </div>
      <hr />

      <h1>
        <u>What is UseState Hook ?(Implementation)</u>
      </h1>
      <div className="answer">
        <p>
          The useState hook lets you add state to function components. By
          calling React.useState inside a function component, you create a
          single piece of state associated with that component. (every hook
          starts with the word “use”; a call to useState literally lets you “use
          state” in a function component)
        </p>
        <img src={state} alt="" />
      </div>
      <hr />

      <h1>
        <u>What is useEffect Hook ?(Implementation)</u>
      </h1>
      <div className="answer">
        <p>
          The useEffect Hook allows you to perform side effects in your
          components. <br />
          Some examples of side effects are: fetching data, directly updating
          the DOM, and timers. <br />
          useEffect accepts two arguments. The second argument is optional.{" "}
          <br />
          useEffect(function, dependency)
        </p>
        <img src={effect} alt="" />
      </div>
      <hr />

      <h1>
        <u>What is UseReducer Hook ?(Implementation)</u>
      </h1>
      <div className="answer">
        <p>The useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook <br />
when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized. <br />
The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.</p>
            <img src={reducer} alt="" />
      </div>
      <hr />

      <h1>
        <u>What is UseMemo Hook ?(Implementation)</u>
      </h1>
      <div className="answer">
        <p>The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. <br />
The useMemo Hook only runs when one of its dependencies update. This can improve performance. The useMemo and useCallback Hooks are similar.</p>
<img src={memo} alt="" />
      </div>
      <hr />

      <h1>
        <u>What is UseRef Hook ?(Implementation)</u>
      </h1>
      <div className="answer">
        <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br />
The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. <br />
These values are accessed from the current property of the returned object. <br />
The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.</p>
            <img src={ref} alt="" />
      </div>
      <hr />

      <h1>
        <u>Difference between callback and useCallback Hook ?</u>
      </h1>
      <div className="answer">
        <p>A callback is a function passed as an argument to another function. This technique allows a function to call another function. <br />
A callback function can run after another function has finished.</p>
<b>useCallback</b>
<p>The useCallback hook is used when you have a component in which the child is rerendering again and again without need. <br />
Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. <br />
This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>
<img src={callback} alt="" />
      </div>
      <hr />

      <h1>
        <u>What is Props Drilling Concept ?What is State Uplifting ?</u>
      </h1>
      <div className="answer">
        <b>Prop drilling</b>
        <p>Prop drilling is the process in a React app where props are passed from one part of a tree to another by going through other parts that do not need the data, but only help in passing it through the tree.</p>
        <b>State Uplifting</b>
        <p>As we know, every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. <br />
So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.</p>
      </div>
      <hr />

      <h1>
        <u>Difference between useEffect and useContext ?</u>
      </h1>
      <div className="answer">
        <b>useEffect</b>
        <p>It allows us to implement all of the lifecycle hooks from within a single function API. <br />
The useEffect Hook allows you to perform side effects in your components.</p>
        <b>useContext</b>
        <p>This hook allows us to work with React's Context API, which itself a mechanism to allow us to share data within it's component tree without passing through props.</p>
      </div>
      <hr />

      <h1>
        <u>Do you know about SEO ? Is it true that react js supports SEO support</u>
      </h1>
      <div className="answer">
         <ul>
            <li>Yes, I am familiar with SEO (Search Engine Optimization). SEO is the practice of improving the ranking of a website in search engine results pages (SERPs) to increase the visibility of the website to users.</li>
            <li>As for whether React supports SEO, the answer is generally yes. React is a JavaScript library for building user interfaces, and it does not inherently have any effect on SEO. However, it is possible to build a React application in a way that is SEO-friendly.</li>
            <li>One way to do this is to use server-side rendering (SSR), where the initial render of a React application is done on the server rather than the client. This allows search engines to index the initial HTML content of the application, improving the website's visibility in search results.</li>
            <li>It's also important to note that, while server-side rendering can improve SEO, it is not the only factor that affects a website's ranking in search results. There are many other factors that can influence a website's ranking, such as the quality and relevance of its content, the structure of its URLs, and the presence of keywords in the page's title and metadata.</li>
         </ul>
      </div>
      <hr />

      <h1>
        <u>clean up in useEffect</u>
      </h1>
      <div className="answer">
        <p>clean up function: this function gets executed when the component is unmounted from the screen. This is mostly used for memory leaks. <br />
Just like the name implies, the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up (arrange something in a neat and ordered way) our code before our component unmounts. <br />
When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.</p>
<p>The useEffect Hook is built in a way that we can return a function inside it and this return function is where the cleanup happens. <br />
The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.</p>
<img src={cleanup} alt="" />
      </div>
      <hr />

      <h1>
        <u>What is the use of useCallback and useMemo</u>
      </h1>
      <div className="answer">
        <b>useCallback</b>
        <p>The useCallback hook is used when you have a component in which the child is rerendering again and again without need. Pass an inline callback and an array of dependencies. <br />
useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.</p>
        <b>useMemo</b>
        <p>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. <br />
You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
      </div>
      <hr />

      <h1>
        <u>Why do we need keys in react list?</u>
      </h1>
      <div className="answer">
        <p>In React, a key is a special string attribute you should include when rendering a list of items. Keys help React identify which items have changed, are added, or are removed. This allows React to optimize the rendering of lists by minimizing the number of DOM operations required to update the list.</p>
        <img src={list} alt="" />
      </div>
      <hr />

      <h1>
        <u>What is memory leak and how to overcome?</u>
      </h1>
      <div className="answer">
        <p>A memory leak is a type of software bug that occurs when an application allocates memory for use but fails to release it properly when it is no longer needed. This can cause the application to use more and more memory over time, eventually leading to poor performance or even failure.</p>
        <p>In React, memory leaks can occur if a component is not properly unmounted when it is no longer needed. For example, if a component is rendering a subscription or timer that is not properly cleaned up when the component is unmounted, the memory used by that subscription or timer will not be released, causing a leak.</p>
        <p>To avoid memory leaks in React, it's important to make sure that any subscriptions or timers that you create are properly cleaned up when the component is unmounted. You can do this by using the <b>'useEffect'</b> hook with a cleanup function that cancels the subscription or clears the timer.</p>
      </div>
      <hr />
      <h1>
        <u>Explain reducer as pure function in redux</u>
      </h1>
      <div className="answer">
            <p>Reducers are a pure function in Redux. Pure functions are predictable. Reducers are the only way to change states in Redux. It is the only place where you can write logic and calculations. <br />
Reducer function will accept the previous state of app and action being dispatched, calculate the next state and returns the new object.</p>
      </div>
      <hr />

      <h1>
        <u>Why do we use redux thunk?</u>
      </h1>
      <div className="answer">
        <p>Redux Thunk is a middleware that allows you to write action creators that return a function instead of an action. This function can be used to perform asynchronous tasks, such as making network requests or dispatching actions based on the results of those requests. It's important to note that Redux Thunk is just one way to handle asynchronous actions in a Redux application.</p>
        <p>One reason to use Redux Thunk is to make it easier to handle asynchronous actions in a Redux application. Without Redux Thunk, you would need to use a separate library, such as redux-saga or redux-observable, to handle asynchronous actions. With Redux Thunk, you can handle asynchronous actions directly within your action creators, making it simpler to manage your application's state.</p>
      </div>
      <hr />

      <h1>
        <u>What is node.js?</u>
      </h1>
      <div className="answer">
      <p>Nodejs is an open source,cross-platform,javaScript runtime environment built on v8 javaScript engine.</p>
        <p><b><u>Featuers of Node :</u></b></p>
        <ul>
            <li>It is asynchronous in nature means when it receive another request it resolves it and make it available for for another request.</li>
            <li>It is event-driven and single-threaded which means server conatins a single thread i.e processed one after another.</li>
            <li>It has non-blocking properties like it does not block the execution process.</li>
        </ul>
      </div>
      <hr />

      <h1>
        <u>What is NPM?</u>
      </h1>
      <div className="answer">
        <ul>
            <li>NPM stands for the node package manager which is used for node dependency management.</li>
            <li>NPM gets installed with NodeJs installation.</li>
            <li>NPM uses nested dependencies, so we can use different versions of any module in our code.</li>
            <li>Note:NPM uses Nested dependencies mean that any dependency is again dependent on another dependency</li>
        </ul>
      </div>
      <hr />

      <h1>
        <u>What are the modules in Node.js?</u>
      </h1>
      <div className="answer">
      <p>In Node.js, Modules are the blocks of encapsulated code that communicate with an external application on the basis of their related functionality. <br />
Modules can be a single file or a collection of multiples files/folders.</p>
        <p><u>Modules are of three types:</u></p>
        <ul>
            <li><b><u>Core Modules/Internal modules : </u></b>Node.js has many built-in modules that are part of the platform and comes with Node.js installation. These modules can be loaded into the program by using the require function.</li>
            <li><b><u>Local Modules/Custom Modules : </u></b>Local modules are created locally in your Node.js application, Means a modules that calculates various operations.</li>
            <li><b><u>Third-Party Modules : </u></b>Third-party modules are modules that are available online using the Node Package Manager(NPM).These modules can be installed in the project folder or globally.</li>
        </ul>
      </div>
      <hr />

      <h1>
        <u>What is the purpose of the module.exports?</u>
      </h1>
      <div className="answer">
      <p>Module.exports is the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code. <br />

By module.exports, we can export functions, objects, and their references from one file and can use them in other files by importing them by require() method.</p>
<a href="https://www.tutorialsteacher.com/nodejs/nodejs-module-exports" target="_blank" rel="noopener noreferrer" >Example of Module.export</a>
      </div>
      <hr />
      <h1>What are the different types of HTTP requests?</h1>
      <div className="answer">
        <p>HTTP Stand for "Hyper Text Transfer Protocol" which specifies a collection of request methods to specify what action is to be performed on a particular resource.</p>
        <p><b>HTTP Request methods</b> are as mentioned below:</p>
        <ul>
            <li>GET: GET request is used to read/retrieve data from a web server. GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.</li>
            <li>POST:POST request is used to send data (file, form data, etc.) to the server. On successful creation, it returns an HTTP status code of 201.</li>
            <li>PUT: A PUT request is used to modify the data on the server.</li>
            <li>PATCH: PATCH is similar to PUT request, but the only difference is, it modifies a part of the data. It will only replace the content that you want to update.</li>
            <li>DELETE: A DELETE request is used to delete the data on the server at a specified location.</li>
        </ul>
        <a href="https://www.w3schools.com/nodejs/nodejs_http.asp" target="_blank"
          rel="noopener noreferrer">HTTP server Example</a>
      </div>

      <hr />
      <h1>
        <u>How do you import any module in Node.js</u>
      </h1>
      <div className="answer">
        <p>In Node.js, you can use the 'require' function to import a module. The 'require' function takes a string argument that specifies the module you want to import, and it returns an object that represents the module's exports.</p>
        <p><b><u>const fs = require('fs');</u></b></p>
      </div>
      <hr />

      <h1>Middleware in Node.js.</h1>
      <div className="answer">
        <ul>
            <li>Middleware are like general function which takes three parameters as request,response and next.</li>
            <li>These middleware are used to execute some function before the resposne is send back to the client.</li>
            <li>Middleware mostly get used for authentication if the API request is called from the client with proper user credentials or not.</li>
            <li>next() function is very important,after the end of each middleware we should execute the next() function so that the program execution can move w=either to next middleware or to main route.</li>
        </ul>
        <a href="https://github.com/Adira08/node_preparatio_day_3/blob/master/index.js" target="_blank"
          rel="noopener noreferrer"><b>Create a middleware which will be applicable to all the routes.</b></a>
      </div>

      <hr />

      <h1>Explain CORS?</h1>
      <div className="answer">
        <p>CORS Stands for "cross-rigin resource sharing". <br />
CORS is a mechanism by what data or any other resource of a site could be shared to a third party website when there is need.</p>
<a href="https://github.com/Adira08/node_preparatio_day_3/blob/master/index.js" target="_blank"
          rel="noopener noreferrer"><b>Implementation</b></a>
      </div>

      <hr />

      <h1>What is Express?how it helps you to create a backend application?</h1>
      <div className="answer">
        <p>Express is a popular web application framework for Node.js that provides a set of functions for creating web applications and APIs. It is designed to be lightweight, flexible, and easy to use, making it a popular choice for building back-end applications.<br />

It makes it easier to oragnize your application functionality with middleware and routing.</p>
        <a href="https://expressjs.com/en/starter/hello-world.html" target="_blank"
          rel="noopener noreferrer">Basic Express Server</a><br />
        <a href="https://expressjs.com/en/starter/basic-routing.html" target="_blank"
          rel="noopener noreferrer">Basic Express Routing</a>
      </div>

      <hr />

      <h1>Explain min 5 status codes gets used in Backend development?</h1>
      <div className="answer">
        <p>An HTTP status code is a message a website's server sends to the browser to indicate whether or not that request can be fulfilled.</p>
        <p><u>HTTP status codes are:-</u></p>
        <ul>
            <li>200:This is the standard "OK" status code for a successful request.</li>
            <li>400:This indicates the "BAD REQUEST" response status code means the server cannot or will not process the request due to something i.e preceived to be client error.</li>
            <li>01:This status code request occurs when authentication is required but has failed or not been provided.</li>
            <li>402:This status code request occurs for payment.The initial aim for creating this code was using it for digital payment system.</li>
            <li>403:The client does not have access rights to the content i.e it is unauthorised so the server is refusing to give the requested resource.</li>
            <li>404:A status code 404 occurs when the request is valid, but the resource cannot be found on the server.</li>
            <li>500:The status code 500 happens when the server cannot fulfill a request due to an unexpected issue.</li>
            <li>503:The status code 503 occurs when the server is not ready to handle the request and due to this give error of 503 as service unavialable.</li>
        </ul>
      </div>

      <hr />

      <h1>
        <u>Difference between HTTP and HTTPS</u>
      </h1>
      <div className="answer">
        <p>HTTPS is HTTP with encryption. The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses. As a result, HTTPS is far more secure than HTTP. A website that uses HTTP has http:// in its URL, while a website that uses HTTPS has https://. Some difference of http and https;</p>
      </div>
      <hr />

      <h1>
        <u>What are JWT tokens?</u>
      </h1>
      <div className="answer">
        <p>JSON Web Token (JWT) is a standard for creating tokens that assert some number of claims. These claims can be trusted because they are digitally signed. JWTs are often used to authenticate users.</p>
        <p>A JWT consists of three parts: a header, a payload, and a signature. The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA. The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. The third part of the token is the signature, which is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.</p>
      </div>
      <hr />

      <h1>
        <u>Socket and its implement</u>
      </h1>
      <div className="answer">
        p
        A socket is a endpoint of a bidirectional communication channel between two programs running on a network. Sockets are used to build networked applications and can be used to communicate over a variety of transport protocols, such as TCP or UDP.
      </div>
      <hr />

      <h1>
        <u></u>
      </h1>
      <div className="answer"></div>
      <hr />

      <h1>
        <u></u>
      </h1>
      <div className="answer"></div>
      <hr />
    </div>
  );
}

export default OneFile;
