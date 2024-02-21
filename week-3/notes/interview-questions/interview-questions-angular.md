# Angular

1.  What makes a “single page application” (SPA) different from a normal web page?

     - A single page application is a front-end app where everything for the entire application is loaded on first initial page load. The application then dynamically renders
    what views are necessary to be seen at a specific time. Generally this is faster and provides a cleaner UI experience than static pages since they have to load every time they're accessed. Disadvantages would be a slower initial load time and generally worse SEO.
    
2.  What are some features of the Angular framework?

    - Angular is a Component Based UI Framework, utilizes TypeScript for powerful static type checking. Built in support for routing/naviagation, handling http requests and it also has support for mobile (specifically Angular not AngularJS)
    
3.  How does TypeScript relate to JavaScript? What are the major benefits of using it over JavaScript?

    - TypeScript is a typed SUPERSET of JavaScript, meaning it includes all the features and functions of JavaScript but with additional functionality.
        - All javascript is valid typescript (This is what it means to be a superset)
        - Supports Strong and Static Typing
            - Strong: Means data types won't change depend on an operation (like implicit type conversion)
            - Static: Means data types are checked at compile time instead of runtime
                - JS is Weakly and Dynamically typed
        - Used to enfore compile-time type safety and make developers write better code
        - Must be transpiled into JS before it can be run in a browser
    
4.  List the data types of TypeScript

    - Datatypes from JS
        - String
        - Number
        - Boolean
        - Null
        - Undefined
        - Symbol
        - BigInt
    - TS specific datatypes
        - Any (Used to essentially avoid type check, any other type can go in here)
        - Never (Used to indicate that something should never return from a function (i.e. the function will always throw an exception))
        - Void (Used to denote that function returns nothing, same as in Java)
        - Arrays (Very similar to Arrays in JS, main difference is that now we can also use our strong typing on them to enforce one type of data inside them)
        - Tuples (Fixed length data structures where we define the datatype at each index. `let tuple: [string, boolean, number] = ["This is a string", false, 51]`)
        - Enums (Lists of constants, mainly used for String or number values (think status codes))
    
5.  How would you create a new Angular project?

    - `ng new app-name` Is the standard way to create a new angular application. Following Angular 17+, standalone mode is now default, so to follow some of the legacy applications we've used, we utilized a slightly different command: `ng new --no-standalone app-name`
    
6.  What is a component? How would you create one? List some other commands using the Angular CLI

    - A reusable block of code that self-contains information about its template (HTML), its style (CSS) and its functionality (TS)
        - Generates a selector which allows us to use that template wherever we desire just like another HTML tag (<login-page></login-page>)
    - `ng  generate component component-name` or `ng g c component-name`
    - Other commands that use the angular CLI
        - `ng serve --open` Bundles and opens a version of our application in the browser, typically on port 4200
        - `ng new app-name` Allows us to build a brand new angular application
        - `ng test` Allows us to start our test runner (karma) and run our tests
        - `ng build` Uses Webpack to build up our app and get it ready for distribution
        - Other `ng generate ` commands (services, pipes, guards, etc.)

7.  What files make up a component? What is the “spec” file used for?

    - component.TS (Controls functionality for our component)
    - component.HTML (Controls the basic template for our component)
    - component.CSS (Controls the styling for our component)
    - component.spec.ts (Spec.ts files house our tests for that specific piece and are used when we run `ng test`)
    
8.  List some decorators for Angular apps

    - Decorators are similar to annotations in Java, they're denoted with the `@` symbol and used in places where we want to change the functionality or provide metadata to angular itself
        - We can use these on class, module. methods, and fields
        - We can use multiple on them if we wanted
    - Common Angular Decorators
    - `@Component`
        - Used to mark a class as a component
        - Contains info about the selector, style, and css of the component itself (whether internal or external)
    - `@ngModule`
        - Used to denote a module in angular (group of related components)
        - Contains information about declarations (components/services/pipes/etc), imports (external modules we want to pull in),external service providers, and bootstrapping info (how do we package up the module)
    - `@Input`
        - Used to bind input information to a field in the component class.
        - The parent class will bind some info to this variable and allow it to flow from parent to child
    - `@Output`
        - The reverse of an @Input. It's used to mark an event emitter and allows the parent component to receive events and event objects from a child component
    - `@Injectable`
        - Used on services to denote that they can be injected into a component or class's constructor
    
    
9.  What is the lifecycle of a component? List some lifecycle hooks

    - Lifecycle of a component describes all of the different stages a component goes through from creation to deletion. It has some lifecycle methods that are called at each step of the process that we can "hook" into and add our own functionality
    - Lifecycle Hooks
        - Constructor (inject in external services)
        - ngOnInit (to allow us to initialize values after the component has been constructed)
        - Look at W2D5 notes to review the other ones
    
10. What is a directive and what are the different types?
    - Used to manipulate or change elements rendered on the DOM
    - Structural Directives (Used to dynamically render components on the DOM)
        - ngFor (Render a component for each element of an iterable list)
        - ngIf (Used to render a component based off the status of a conditional)
    - Attribute Directives (Used to style components dynamically on the DOM)
        - ngClass (Used to add/remove CSS classes based off some conditional)
        - ngStyle (Used to add/remove CSS based off some conditional)
    
11. What is a pipe? A service?

    - Pipe
        - A Pipe is used for transformation of data in a component's template/html
            - Common pipes include: uppercase, lowercase, titlecase, currency, data, async
    - Service
        - An external piece of code that can be injected into multiple unrelated components
        - Used for HTTP requests or for holding data/methods many components would want to access
        - Injected using the components constructors
    
12. How would you create a custom pipe? What about a service?

    - `ng generate pipe pipe-name`
    - `ng generate service service-name`
    
13. How does dependency injection work in Angular?

    - Constructor Injection is used for injection of services/external tools into a component
    - Angular has a built-in Injector which creates the services as singleton instances (meaning there is only ever 1 in existence), and injects that same instance into any component that requires it
    
15. How have you used the HttpClient? What methods does it have and what do they return?

    - How to get/use the HttpClient service in a component/service
        - Import the HttpClient Module in the app module
        - Inject the HttpClient itself through the constructor
        - We can call the specific method to send the appropriate Http Request
    - What are the different methods?
        - .get() for a GET request
        - .post() for a POST request
        - .put() for a PUT request
        - .delete() for a DELETE request
        - Every request implicity returns an Observable (we can specify type by using generics) which must be subscribed to to actually use the result
    
16. What is an Observable? What’s the difference between it and a Promise?

    - Observables are used in Angular to handles async operations (http requests, events, literals)
    - Observables represent a STREAM of values whereas Promises typically represent one single value
        - With observables the subscriber functionality will be called EVERY time it receives a value/response, whereas a promise will only happen once
        - We use the .subscribe method for an observable to become an observer and take some action every time we receive information
    
17. What forms of data binding does Angular support? Explain the syntax for each

    - One-Way data binding (component to view)
        - String interpolation (used to pull variables/ expressions from the component and inject them as text into the view/template/html) uses {{expression}}
        - Event Binding (binding a function in the TS page to some event on the HTML page) uses `(click)="someFunction()"` to denote
        - Property Binding (binding an attribute on an HTML element to some variable in the TS page)
    - Two-Way data binding (component to view and view to component)
        - Used to essentially take in user input and do some operations with it, uses `[(ngModel)]`

18. What does Webpack do for your ng project?

    - Webpack is used in the building phase of our application so it bundles all of our angular members together and generates essentially a single HTML/CSS/JS group of files to be run in the browser and contains all the info for our Angular app
    - `ng build` will do this build step and place the files in a dist folder, `ng serve --open` will build the files and render them on the web dynamically
    
19. How would you implement routing in your project?

    - Routing / navigation is important in our angular app since it controls what components we see in the view at any one time
    - We can set it up by importing the AppRoutingModule in our AppModule and then defining the routes in the app-routing.module.ts file
    
20. What is an EventEmitter and when would you use one?

    - EventEmitters are used for sending custom events from a child component to a parent component so there is data flow in both directions if necessary
    - Use the `@Output` decorator when defining an event emitter and then can use Event binding on the parent component to listen for that specific event and do some operation
    
21. How would you run your unit tests for an Angular project?

    - `ng test` will open the Karma test runner which will attempt to run our tests as they are defined (using the Jasmine framework) and will create a browser-like representation of the tests suite itself and show off the test results
