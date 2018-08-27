import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Calendar from './components/calendar/'
import ToDo from './components/todo/'



class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }


  render() {
    return (
      <div className='App'>

        <BrowserRouter>
          <div>
            <Switch> 
              <Route exact path='/calendar'
                component={({match}) => <Calendar  />}
              />
              {/* <Route exact path="/todo" 
                component={({match}) => <ToDo 
                  match={match}
                  forecastData={this.state.forecastData}
                  setUrl={this.getInitialLocation.bind(this)}
                  loadLocationForecast={this.setLocation.bind(this)}
                />}
              /> */}
              <Route path='/calendar/:id' component={ToDo} />
            </Switch>   
          </div>
        </BrowserRouter>        
      </div>
    );
  }
}

export default App;
