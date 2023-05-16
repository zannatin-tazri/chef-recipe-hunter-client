import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='m-5 p-5'>
            <h1>Difference between controlled and uncontrolled components</h1>
            <p><b>Controlled Components:</b> 
A controlled component is a form element whose value is controlled by the application's state. In other words, the state of the component is tied to the value of an associated state variable. When the user 
interacts with a controlled component, such as an input field or a select dropdown, the component's value is updated through event handlers that modify the underlying state.
In a controlled component, the state acts as the "single source of truth." Any time the user makes a 
change, the state is updated, and the component is re-rendered with the new value. This allows the 
application to have full control and knowledge of the current value of the component at all times. <br /> <br />
<b>Uncontrolled Components:</b> 
An uncontrolled component is a form element that manages its own state internally, without being directly controlled by the application's state. The component holds the state within itself and handles user input independently. When the user interacts with an uncontrolled component, such as an input field, the component manages its own state and keeps track of the current value internally.
In an uncontrolled component, the application does not have direct knowledge of the component's current value at all times. If the application needs to access the value, it must query the component for its current state when necessary.
</p>
<br /> <br />
<h1>How to validate react prop using PropType</h1>
<p>In React, you can use the PropTypes library to validate the props passed to a component. Here's how you can use PropTypes to validate React props: <br />

 1.<b>Install prop-types package:</b> First, make sure you have the prop-types package installed in your project. <br />
 2.<b>Import PropTypes:</b> In your component file, import the PropTypes module <br />
 3. <b>Define prop types:</b> Below your component's code, define the 
 prop types using the PropTypes object. <br></br>
 4. <b>Validate props:</b> React will automatically validate the props when the component is rendered. 
 If a prop doesn't match the defined prop type, a warning will be shown in the browser console. 
 For example, if you pass an invalid prop to MyComponent, such as a non-string value for name, a
  warning will be displayed.<br></br>
  Using PropTypes allows you to catch potential bugs or mistakes related to props passed to your 
  components, improving the reliability of your code. </p> <br /> <br />

 <h1>Tell us the diffrence between nodejs and expressjs</h1> 
 <p><b>Node.js:</b> 
Node.js is an open-source JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside of the browser, on the server-side. Node.js provides a non-blocking, event-driven architecture 
that makes it efficient and scalable for building network applications. <br />
<b>Express.js:</b> 
Express.js is a web application framework built on top of Node.js. It provides a set of features and tools for building web applications and APIs in a more structured and organized manner. Express.js simplifies the process of handling HTTP requests, 
routing, middleware integration, and other common web development tasks.</p> <br /> <br />

<h1>What is custom hook and why will you create custom hook?</h1>
<p>In React, a custom hook is a JavaScript function that allows you to reuse logic across multiple components. It is a way to extract common stateful logic or 
    side effects into a reusable function that can be used in different components.<br></br> <br />
    1.<b> Reusability:</b> Custom hooks promote code reusability. 
    If you find yourself duplicating code or using the same logic in multiple 
    components, you can extract that logic into a custom hook. This allows you to 
    write the logic once and reuse it in different components without duplicating the code. <br />

 2.<b> Abstraction:</b> Custom hooks can abstract complex logic, making it easier to understand and manage. 
 By encapsulating a specific piece of logic in a custom hook, you can provide a simple and intuitive interface
  for using that logic in your components. <br />

 3.<b> Composition:</b> Custom hooks allow you to compose multiple hooks together to create more complex behavior. 
 You can combine multiple hooks and create a new custom hook that 
 provides a higher-level functionality tailored to your specific needs. <br />

4.<b> Encapsulation:</b> Custom hooks enable you to encapsulate stateful logic or side effects in a self-contained unit.
 This helps keep your component code clean and focused on the UI concerns,
  while the custom hook handles the underlying logic. <br />
  
 5.<b> Testing:</b> Custom hooks can make your code more testable. Since hooks are just functions, you can easily write unit tests for your custom hooks without the need for rendering components.</p>
        </Container>
    );
};

export default Blog;