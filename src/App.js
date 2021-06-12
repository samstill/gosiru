import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import ForgotPassword from './pages/Forgotpassword';
import ProfileCard from './pages/profilecard';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={ProfileCard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NotFound} status={404} />
        </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
