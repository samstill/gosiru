import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import ForgotPassword from './pages/Forgotpassword';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <AuthProvider>
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/signup" component={Signup} />
          </AuthProvider>
          <Route component={NotFound} status={404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
