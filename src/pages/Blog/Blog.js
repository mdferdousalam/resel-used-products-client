import React from 'react';
import UseTitle from '../../hooks/UseTitle';

const Blog = () => {
    UseTitle('Blog')
    return (
        <div>

            <div tabIndex={0} className="collapse collapse-arrow border mt-10 border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-primary  text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p className='text-justify  text-primary p-10'>The Four Kinds of React State to Manage
                        When we talk about state in our applications, it is important to be clear about what types of state actually matter. <br />

                        <strong >There are four main types of state you need to properly manage  React apps:</strong> <br />

                        <strong>
                            <em> Local state <br />
                                Global state <br />
                                Server state <br />
                                URL state</em> <br />
                        </strong>

                        Let's cover each of these in detail: <br />

                        <strong>Local (UI) state</strong> – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                        <br /> <strong> Global (UI) state</strong> – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global.

                        <br />  <strong>Server state</strong> – Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                        <br /> <strong>URL state</strong> – Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.

                        How to Manage Local State in React
                        Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.

                        useState is the first tool you should reach for to manage state in your components.

                        It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).


                        useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.

                        The benefit of useReducer is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than useState.

                        You can see the benefit of useReducer versus useState in this vote tracking example. All we have to do to update state is pass the callback function dispatch a string (which is then passed to the reducer) instead of the new state itself.

                        <br />
                        How to Manage Global State in React
                        Once you attempt to manage state across multiple components, things get a bit trickier.

                        You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.

                        What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.

                        To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.

                        To be clear: the Context API is not a state management solution. It is a way to avoid problems like props drilling (creating a bunch of props in components that don’t need it), but it is only helpful for reading state, not updating it.
                        The reason to not use Context for global state management lies in the way it works. The default behavior for Context is to re-render all children components if the value provided to it as a prop changes.

                        For example, it is bad practice to combine useReducer and useContext:

                        <br />

                        <br />  <strong>How to Manage Server State in React -</strong>
                        Server state can be deceptively challenging to manage.

                        At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.

                        What happens when there is a network error? Do I really need to hit my server every time my user visits the home page if the data hasn’t changed? Do I need to add useState and useEffect in every component I want to fetch my data?

                        To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border mt-10 border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-primary  text-xl font-medium">
                    How does prototype inheritance work?
                </div>
                <div className="collapse-content">
                    <p className='text-justify  text-primary p-10'>
                        How does prototype inheritance work?
                        Image result for How does prototypical inheritance work?
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border mt-10 border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-primary  text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p className='text-justify  text-primary p-10'>
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border mt-10 border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-primary  text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p className='text-justify  text-primary p-10'>
                        Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. <br />

                        Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively.  <br />

                        It's easier to learn Vue than angular and it reasonably takes the same amount of time and effort as learning react. Although some people argue that it's even easier to learn than react but that's of course subjective and varies from person to person. <br />


                        React documentation is slightly harder to read, which resulted in a slow ramp-up in comparison with Vue. js, mostly based on the extra effort to learn JSX. In summary, both are quite similar in their structure, but Vue. js is slightly easier to learn as it allows HTML and JSX. <br />


                        If your website needs to integrate complicated functionality like progressive, single-page, and native web apps, Angular is preferable over React. React, however, is a tool that excels at building UI components and can be applied to any application, even single-page apps.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;