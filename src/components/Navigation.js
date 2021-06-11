import "./navigation.css";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../assets/svgs/logo.svg";

const Navigation = () => {
    return ( 
        <div className="nav">
            <nav>
                <ul>
                    <li ><Link to="/"><Logo className="logo" width={70} height={70}/></Link></li>
                    <div className="alignment">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Team Login</Link></li>
                    </div>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navigation;