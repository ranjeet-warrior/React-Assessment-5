
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 >Higher Order Functions</h1>
        <ul type="disc">
          <li>A higher-order component(HOC) is an advanced technique in React for reusing component logic</li>
          <li>HOCs are not part of React API,They are a pattern that emerges from React's compositional nature</li>
          <li>a higher-order component is a function that takes a component and returns a new component</li>
        </ul>
       <h3>Reasons to use Higher-Order component:</h3>
       <ul type="disc">
        <li>Easy to handle</li>
        <li>Get rid of copying the same logic in every component</li>
       </ul>

       <h1>Pure Components</h1>
       <ul type="disc">
        <li>Pure Components in React are the components which do not re-renders when the value of state and props has been updated with same values</li>
        <li>PureComponent is Primarily Used for Performance Optimization</li>
        <li>We can use React.memo for transforming a component into pure component</li>
       </ul>
    
    </div>
  );
}

export default App;
