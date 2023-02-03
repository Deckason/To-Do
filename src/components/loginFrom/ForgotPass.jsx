import ForgotPassHeaderImage from "../../media/images/conversation.jpg"
import { FaUserCircle } from "react-icons/fa";

const ForgotPass = () => {
    return (
        <form action="" className="formContainer">
            <div className="formHeader formForgotHeader">
                <img src={ForgotPassHeaderImage} alt="" />
            </div>
            <div className="formBody">
                <h1>Verify Email</h1>
                <div className="formInputs">
                    <div className="input">
                        <div className="input_icon">
                            <FaUserCircle color="#9E9E9E"/>
                            <input type="email" placeholder="email"/>
                        </div>
                        <small>Email required</small>
                    </div>
                    <div className="submitBtn">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
 
export default ForgotPass;