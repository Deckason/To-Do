import registerHeaderImage from "../../media/images/travels_stand.jpg"
import { FaUserCircle } from "react-icons/fa";
import { MdLock } from "react-icons/md";

const Register = () => {
    return (
        <form action="" className="formContainer">
            <div className="formHeader formRegisterHeader">
                <img src={registerHeaderImage} alt="" />
            </div>
            <div className="formBody">
                <h1>Register</h1>
                <div className="formInputs">
                    <div className="input">
                        <div className="input_icon">
                            <FaUserCircle color="#9E9E9E"/>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <small>Username required</small>
                    </div>
                    <div className="input">
                        <div className="input_icon">
                            <FaUserCircle color="#9E9E9E"/>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <small>Username required</small>
                    </div>
                    <div className="input">
                        <div className="input_icon">
                            <MdLock color="#9E9E9E"/>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <small>Password required</small>
                    </div>
                    <div className="input">
                        <div className="input_icon">
                            <MdLock color="#9E9E9E"/>
                            <input type="password" placeholder="Confirm Password"/>
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
 
export default Register;