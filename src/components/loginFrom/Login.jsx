import loginHeaderImage from "../../media/images/form_bg.jpg"
import { FaUserCircle } from "react-icons/fa";
import { MdLock } from "react-icons/md";

const Login = () => {
    return (
        <form action="" className="formContainer">
            <div className="formHeader">
                <img src={loginHeaderImage} alt="" />
            </div>
            <div className="formBody">
                <h1>Login</h1>
                <div className="formInputs">
                    <div className="input">
                        <div className="input_icon">
                            <FaUserCircle color="#9E9E9E"/>
                            <input type="text" placeholder="Enter Username"/>
                        </div>
                        <small>Username required</small>
                    </div>
                    <div className="input">
                        <div className="input_icon">
                            <MdLock color="#9E9E9E"/>
                            <input type="password" placeholder="Enter Password"/>
                        </div>
                        <small>Password required</small>
                    </div>
                    <div className="submitBtn">
                        <button>Submit</button>
                    </div>
                </div>
                <div className="alternativeLinks">
                    <span>Or sign-up with</span>
                    <button className="gmail">Google</button>
                </div>
            </div>
        </form>
    );
}
 
export default Login;