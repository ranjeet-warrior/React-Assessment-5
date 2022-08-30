
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 >Higher Order Functions</h1>
        <ul type="disc">
          <li>A higher-order component(HOC) is an advanced technique in React for reusing component logic</li>
          <li>HOCs are not part of React API,They are a pattern that emerges from React's compositional nature</li>
          <li>a higher-order component is a function that takes a component and returns a new component</li>
       // Example of Higher Order Functions :-
                  // "GlobalDataSource" is some global data source class ArticlesList extends React.Component {
                   constructor(props) {
                   super(props);
                 this.handleChange = this.handleChange.bind(this); this.state = {
                 articles: GlobalDataSource.getArticles(), };
                 } componentDidMount() {
                 // Listens to the changes added
                GlobalDataSource.addChangeListener(this.handleChange); }
                componentWillUnmount() {
      // Listens to the changes removed GlobalDataSource.removeChangeListener(this.handleChange);
               } handleChange() {
     // States gets Update whenver data source changes this.setState({
               articles: GlobalDataSource.getArticles(), });
               } render() {
               return ( <div>
            {this.state.articles.map((article) => ( <ArticleData article={article} key={article.id} />
            ))} </div>
            ); }
            }
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
       // Example of Pure Components :--
          import React from ‘react’;
          export default class Test extends React.PureComponent{
          render(){
          return <h1>Welcome to GeeksforGeeks</h1>;
    }
   }
    
    </div>
  );
}

export default App;
