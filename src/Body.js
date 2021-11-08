import { HashRouter as Router } from 'react-router-dom';
import './Css/Body.css';
export default function Body() {
    const redirect = () => { window.location.replace("http://www.w3schools.com"); }

    return <Router><div className="Body">
        <form action="https://mrunkn.000webhostapp.com/PHP/Stud_Reg/StoreData.php" method="POST">
            <label>name        </label>  <input name='name' type="text"></input>
            <label>dob         </label>  <input name='dob' type="date"></input>
            <label>gender      </label>  <input name='gender' type="text"></input>
            <label>email       </label>  <input name='email' type="text"></input>
            <label>address     </label>  <input name='address' type="text"></input>
            <label>department  </label>  <input name='department' type="text"></input>
            <label>course      </label>  <input name='course' type="text"></input>
            <label>mobile      </label>  <input name='mobile' type="number"></input>
            <button type="submit" onClick={() => redirect}>Submit </button>
        </form>
    </div >
    </Router >
}







