import { Link } from "react-router-dom";
const NotFound  = () => {
    return ( <div className="not-found"><h2>404 Oops! The page you are looking for does not exist.</h2><h1> <Link to="/" >[Go Home]</Link></h1></div> );
}

export default NotFound ;