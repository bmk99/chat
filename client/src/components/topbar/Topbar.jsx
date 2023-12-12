import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link ,useNavigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logout } from "../../apiCalls";

export default function Topbar() {
  const { user,dispatch } = useContext(AuthContext);
  // const { isFetching, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleLogout = () =>{
        logout(dispatch)
        navigate("/login")

  }

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Home</span>
        </Link>
      </div>
      
      <div className="topbarRight">
          <span className="topbarLink">{user.username}</span>

     
       
        <Link to={'/messenger'}>
          <button>
            Messenger
          </button>
        </Link>
        <div className="logout">
        <button onClick={handleLogout} >
        logout 
       </button>
        </div>
      
      </div>
    </div>
  );
}
