import Navigation from "../components/Navigation";
import {ReactComponent as Cons} from "../assets/svgs/construction.svg";
const Home = () => {
    return ( 
        <div className="main">
            <Navigation />
            <div align="center">
                <Cons width={100} height={100} />
                <h3> Work Under Construction! </h3>      
            </div>
        </div>
     );
}
 
export default Home;