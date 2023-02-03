import { useReducer } from "react"
import form_Bg from "../../media/images/music.jpg"
import form_aside from "../../media/images/protection_personal.jpg"
import ForgotPass from "./ForgotPass"
import Login from "./Login"
import Register from "./Register"
import { FaUserCircle } from "react-icons/fa";
import { MdNoteAlt, MdLock } from "react-icons/md";

const Form = () => {

    const navState = {
        login: true,
        register: false,
        resetPassword: false,
    }

    const ACTION = {
        LOGIN: "login",
        REGISTER: "register",
        RESET_PASSWORD: "resetPassword",
    }

    const navReducer = (state, action)=>{
        switch (action.type) {
            case ACTION.LOGIN: {
                const login = state.login = true;
                const register = state.register = false;
                const resetPassword = state.resetPassword = false;
                return {
                    ...state,
                    login,
                    register,
                    resetPassword
                }
            }
                break;

            case ACTION.REGISTER: {
                const login = state.login = false;
                const register = state.register = true;
                const resetPassword = state.resetPassword = false;
                return {
                    ...state,
                    login,
                    register,
                    resetPassword
                }
            }
                break;

            case ACTION.RESET_PASSWORD: {
                const login = state.login = false;
                const register = state.register = false;
                const resetPassword = state.resetPassword = true;
                return {
                    ...state,
                    login,
                    register,
                    resetPassword,
                }
            }
                break;
        
            default:
                return navState;
                break;
        }
    }

    const [state, dispatch] = useReducer(navReducer, navState)

    console.log(state)

    return (
        <div className="form-div">
            <img className="form_Bg" src={form_Bg} alt={""}/>
            <div className="form-container">
                <div className="form-aside">
                    <div className="form-aside-img">
                        <img src={form_aside} alt="" />
                    </div>
                    <div className="form-aside-nav">
                        <button className={`login-nav ${state.login ? "active":""}`}
                            onClick={()=>dispatch({type: ACTION.LOGIN})}
                        >
                            <FaUserCircle
                                size={"2rem"}
                            />
                            <h4>Login</h4>
                        </button>

                        <button className={`reg-nav ${state.register ? "active":""}`}
                            onClick={()=>dispatch({type: ACTION.REGISTER})}
                        >
                            <MdNoteAlt
                                size={"2rem"}
                            />
                            <h4>Register</h4>
                        </button>

                        <button className={`forgot-pass-nav ${state.resetPassword ? "active":""}`}
                            onClick={()=>dispatch({type: ACTION.RESET_PASSWORD})}
                        >
                            <MdLock
                                size={"2rem"}
                            />
                            <h4>Forgot Password</h4>
                        </button>
                    </div>
                </div>
                <div className="form">
                    {state.login && <Login/>}
                    {state.register && <Register/>}
                    {state.resetPassword && <ForgotPass/>}
                </div>
            </div>
        </div>
    );
}
 
export default Form;