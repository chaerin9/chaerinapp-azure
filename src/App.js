import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router ,Route, Switch} from "react-router-dom";


import './components/component.css'
import Footer from './components/Footer';
var projectname = "내집마련의 꿈"

function App() {
  return (
    <div >
      <Router>

      <Navbar isloggedin = {projectname}  ></Navbar>
      <br /><br /><br />
          {/* <div className="full-container bg-light main-layout" style={{"backgroundColor":"#666"}}>
              <Switch>
             
                <Route exact path="/" component={Home}></Route>
            
         
              </Switch>
          </div> */}
        <Footer></Footer>
      </Router>
    </div>
    
  );
}
export default App 


