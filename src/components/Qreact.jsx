import cc from '../images/cc.png';
import fc from '../images/fc.png';
import FormDataComponent from './FormDataComponent';


function Qreact() {
  return (
    <div>
      <h1>React and its featuers</h1>
      <div className="answer">
        <p><b><u>React</u></b> is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained and developed by Meta in 2013. </p>
        <h3><u>Featuers of React</u></h3>
        <ol>
          <li><b><u>JSX : </u></b> React use JSX which is Javascript XML, it helps to write HTML like syntax in javascript file which make it very easy to you.</li>
          <li><b><u>Components : </u></b>React is all about components, In react we make reuseable components for all functions which contaits own logic and features.</li>
          <li><b><u>Virtual DOM : </u></b>VDOM is a lightweight representation of real DOM. React use VDOM to compare the changes from real DOM and then only update the component which is changed which do not required to reload the pages and because of which it makes the app fast.</li>
          <li><b><u>One-Way Data Binding : </u></b>ReactJS is designed in such a manner that follows unidirectional data flow or one-way data binding. The benefits of one-way data binding give you better control throughout the application.</li>
          <li><b><u>Performance : </u></b>ReactJS is known to be a great performer. This feature makes it much better than other frameworks out there today. The reason behind this is that it manages a virtual DOM.</li>
          <li><b><u>Simplicity : </u></b>ReactJS uses JSX file which makes the application simple and to code as well as understand. We know that ReactJS is a component-based approach which makes the code reusable as your need. This makes it simple to use and learn.</li>
        </ol>
      </div>

      <hr />

      <h1>Type of Components</h1>
      <div className="answer">
        <p>There two type of components <b>Class Component</b> and <b>Functional Components</b></p>
        <div className="small">
        <div>
        <p><b>Example of Class Components</b></p>
        <img src={cc} alt="not" />
        </div>
        <div>
        <p><b>Example of Functional Components</b></p>
        <img src={fc} alt="not" />
        </div>
        </div>
        <h2><u>Class Component VS Functional Component</u></h2>
        <p><b><u>Class Component</u></b></p>
        <ul>
          <li>A class component requires you to extends from React.Component and creates a render function which retirn a react element.</li>
          <li>It must have the render() method returning the JSX which is syntactically similar to HTML.</li>
          <li>It also known as "Stateful component" as they implemet logic and state.</li>
          <li>React lifecycle method can be used inside the class component.</li>
          <li>Constructor are used in class component as it need to stored the data and initializes the state.</li>
        </ul>
        <p><b><u>Functional Component</u></b></p>
        <ul>
          <li>A functional component is just a plain javascript function that accepts props as an arguments & returns a react elements.</li>
          <li>There is no render method used in functional component.</li>
          <li>It is also known as stateless component as they simply accepts data abd display them in some form.</li>
          <li>React lifecycle methods cannot be used in the functional component.</li>
          <li>Constructors are not used in the functional compoenent.</li>
        </ul>
      </div>

      <hr />

      <h1><u>React life Cycle</u></h1>
      <div className="answer">
        <a href="https://www.w3schools.com/react/react_lifecycle.asp"> Link for React life cycle</a>
      </div>

      <hr />

      <h1><u>What is Diffing Algorithm?</u></h1>
      <p>when there is a update in the virtual DOM, react compares the virtual DOM with a snapshot of the virtual DOM taken right before the update of the virtual DOM.
With the help of this comparison React figures out which components in the UI needs to be updated. This process is called diffing.</p>

<hr />

      <h1>What is Reconciliation?</h1>
      <p>Reconciliation is the process through which React updates the DOM. When a component’s state changes, React has to calculate if it is necessary to update the DOM. It does this by creating a virtual DOM and comparing it with the current DOM.</p>

      <hr />
       
      <h1>What is package.json</h1>
      <div className="answer">
        <p><b>Package.json = Metadata associated with project + All Dependencies with version + scripts</b></p>
        <p>A package.JSON is JSON file that exists at the root of node project. It holds metadata relevant to the project and it is used for managing the projects version dependencies,scripts,version and whole a lot more for projects.</p>
      </div>

      <hr />

      <h1>UseState Hook, USeEffect Hook, UseMemo Hook, UseReducer Hook </h1>
      <div className="answer">
        <a href="https://aditya-react-interview-prep.netlify.app/Daythree"> link for all Hooks questions</a>
      </div>

      <hr />
      <h1>React Router all question</h1>
      <div className="answer">
        <a href="https://aditya-react-interview-prep.netlify.app/Daytwo">Routers and its implimentations</a>
      </div>

      <hr />

      <h1>High Order Component in react js ?</h1>
      <div className="answer">
      <p>Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.</p>
      <p><u>Syntax : </u></p>
      <p><b>const EnhancedComponent = higherOrderComponent(OriginalComponent);</b></p>

      <p>Reason to use Higher-Order component:</p>
      <ul>
        <li>
            Easy to handle
        </li>
        <li>
        Get rid of copying the same logic in every component
        </li>
        <li>
        Makes code more readable
        </li>
      </ul>
      <a href="https://www.codingame.com/playgrounds/8595/reactjs-higher-order-components-tutorial">Link for Example</a>
      </div>

      <hr />

      <h1>What is Context api?</h1>
      <div className="answer">
        <p>
        Context API is used to pass global variables anywhere in the code. It helps when there is a need for sharing state between a lot of nested components. <br />
It is light in weight and easier to use, to create a context just need to call React.createContext(). <br />
No need to install other dependencies or third-party libraries like redux for state management.
        </p>
        <p>
        It has two properties Provider and Consumer. The Provider acts as a parent it passes the state to its children whereas the Consumer uses the state that has been passed. <br />
React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
        </p>
        <a href="https://www.w3schools.com/react/react_usecontext.asp">example of useContext</a>
      </div>

      <hr />

      <h1>Controlled and Uncontrolled components</h1>
      <div className="answer">
        <a href="https://www.javatpoint.com/react-controlled-vs-uncontrolled-component">Link</a>
      </div>

      <hr />
      
      <h1>React form and Store Data</h1>
      <div className="answer">
        <a href="https://developmobileapplications.com/how-to-store-form-data-in-local-storage-using-reactjs">Link for Example</a>
        <FormDataComponent />
      </div>

      <hr />

      <h1>Fetch Data From API</h1>
      <div className="answer">
        <a href="https://www.geeksforgeeks.org/how-to-fetch-data-from-an-api-in-reactjs/">LInk for example</a>
      </div>

      <hr />
      <h1>Type of Exports / named and default export</h1>
      <div className="answer">
        <a href="https://www.w3schools.com/react/react_es6_modules.asp#:~:text=There%20are%20two%20types%20of%20exports%3A%20Named%20and%20Default.">Link for example</a>
      </div>

      <hr />

      <h1>Redux and its Principle</h1>
      <div className="answer">
        <p>React-redux being a state management tool makes it easier to pass these states from one component to another irrespective of their position in the component tree and hence prevents the complexity of the application. <br />

When a react application holds various components in need of state from other components it becomes difficult to realize where the state should reside among these components to make it easier to maintain. <br />
React-redux provides a store which makes the state inside components easier to maintain. <br />
Along with stores, react-redux introduces actions and reducers which work simultaneously with stores to make the state more predictable.</p>

        <p><b><u>Principle of Redux</u></b></p>
        <ul>
            <li>Redux is a Single Source of Truth</li>
            <li>The State is Read-only State</li>
            <li>The Modifications are Done with Pure Functions</li>
        </ul>
        <a href="https://www.geeksforgeeks.org/what-are-the-three-principles-that-redux-follows/">principle and Example</a>
      </div>

      <h1>===============================================</h1>

      <h1>What is node.js?</h1>
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
      <h1>What is NPM?</h1>
      <div className="answer">
        <ul>
            <li>NPM stands for the node package manager which is used for node dependency management.</li>
            <li>NPM gets installed with NodeJs installation.</li>
            <li>NPM uses nested dependencies, so we can use different versions of any module in our code.</li>
            <li>Note:NPM uses Nested dependencies mean that any dependency is again dependent on another dependency</li>
        </ul>
      </div>

      <hr />

      <h1>What are the modules in Node.js?</h1>
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

      <h1>What is the purpose of the module.exports?</h1>
      <div className="answer">
        <p>Module.exports is the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code. <br />

By module.exports, we can export functions, objects, and their references from one file and can use them in other files by importing them by require() method.</p>
<a href="https://www.tutorialsteacher.com/nodejs/nodejs-module-exports">Example of Module.export</a>
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
      <a href="https://betterprogramming.pub/understanding-the-difference-between-named-and-default-exports-in-react-2d253ca9fc22#:~:text=Exports%20without%20a%20default%20tag,are%20not%20React%2Dcentric%20ideas.">Example Link</a>
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
        <a href="https://www.w3schools.com/nodejs/nodejs_http.asp">HTTP server Example</a>
      </div>

      <hr />

      <h1>Explain CORS?</h1>
      <div className="answer">
        <p>CORS Stands for "cross-rigin resource sharing". <br />
CORS is a mechanism by what data or any other resource of a site could be shared to a third party website when there is need.</p>
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

      <h1>What is Express?how it helps you to create a backend application?</h1>
      <div className="answer">
        <p>Express is a small framework that sits on the top of nodejs wehb server functionality to simplicity its APIs and add helpful features. <br />

It makes it easier to oragnize your application functionality with middleware and routing.</p>
        <a href="https://expressjs.com/en/starter/hello-world.html">Basic Express Server</a>
        <a href="https://expressjs.com/en/starter/basic-routing.html">Basic Express Routing</a>
      </div>

      <hr />

      <h1>Implementation of</h1>
      <div className="answer">
        <a href="https://github.com/Adira08/node_preparatio_day_3/blob/master/index.js"><b>How do you create a simple Express.js application?</b></a> <br />
        <a href="https://github.com/Adira08/node_preparatio_day_3/blob/master/index.js"><b>Implementation of all types of exports in backend applications.</b></a> <br />
        <a href="https://github.com/Adira08/node_preparatio_day_3/blob/master/index.js"><b>Implement CORS.</b></a> <br />
        <a href="https://github.com/Adira08/node_preparatio_day_3/blob/master/index.js"><b>Create a middleware which will be applicable to all the routes.</b></a>
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
        <a href="https://github.com/Adira08/node_preparatio_day_3/blob/master/index.js"><b>Create a middleware which will be applicable to all the routes.</b></a>
      </div>

      <hr />
      <h1>What are JWT tokens?</h1>
      <div className="answer">
        <ul>
            <li>To achieve authentication in the APIs, we use JWT tokens.</li>
            <li>They stand for JSON Web Tokens.</li>
            <li>When any user logs-in by giving its username and password, then we will receive the username and password in the request body of the API.</li>
            <li>Then using username and password we will create one token and assign it to the user.</li>
            <li>Then whenever this user will be calling any API, then this token will be passed from front-end application, then from backend application we will verify this token is valid or not.</li>
            <li>This is how we can achieve authentication in the APIs using JWT tokens.</li>
        </ul>
      </div>

      <hr />

      <h1>Hashing in Node js </h1>
      <div className="answer">
        <p>It is use to encript the sensetive information like passwords <br />
        we use "hash.digest([encoding])"</p>
      </div>

      <hr />

      <h1>What is Sockets</h1>
      <div className="answer">
        <p>Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server.</p> <br />
        <a href="https://socket.io/docs/v3/#:~:text=Socket.IO%20is%20a%20library,be%20also%20run%20from%20Node.">Extra example</a>
      </div>
      <br />
      <br />
      <br />
      <br />




    </div>
  )
}

export default Qreact

