import Navigation from "../components/Navigation";
import {ReactComponent as Cons} from "../assets/svgs/construction.svg"

const About = () => {
    return ( 
        <div className="main">
            <Navigation />
            <div className="content" align="center">
                <h1>About us.</h1>
                <Cons width={100} height={100} />
                <h3> Work Under Construction! </h3> 
            </div>
        </div>
     );
}
 
export default About;
