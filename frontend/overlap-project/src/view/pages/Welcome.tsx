import { useLocation, useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();
    const location = useLocation();
  const { email } = (location.state as any) || {"ffgfgf":String};

    const handleEditOrDeleteAccount = () => {
        navigate("/EditOrDeleteAccount", { state: { email } });
      };
      console.log(email)

    return (
        <div>
            <div>
                <h1>Welcome {email} to my site!</h1>
                <p>You've successfully connected</p>
            </div>
            <div className="edit-or-delete--account">
                Edit or delete account <button onClick={handleEditOrDeleteAccount}>Edit or delete Account</button>
            </div>
        </div>
    );
};

export default Welcome;