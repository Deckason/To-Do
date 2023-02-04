import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Welcome Home</h1>
            <Link to={"/form"}>FORM</Link>
        </>
    );
}
 
export default Home;