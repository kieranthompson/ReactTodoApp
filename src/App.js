import React from 'react';
import Header from './components/Header/Header';
import CreateToDo from './components/CreateToDo/CreateToDo';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossorigin="anonymous"
        />

        <Header />
        <CreateToDo />
      </div>
    );
  }
}

export default App;
