import Users from './components/Users';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Team from './components/Team';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Users} />
            <Route path="/home" component={Users} />
            <Route path="/projects" component={Projects} />
            <Route path="/team" component={Team} />
            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
