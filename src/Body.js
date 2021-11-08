import { HashRouter as Router, Redirect, Route } from 'react-router-dom';
import Users from './Users';
import AdminAuth from './AdminAuth';
import './Css/Body.css';
export default function Body() {
    return <div className="Body">
        <Router>
            <Redirect to="/User"></Redirect>
            <Route exact path="/User" > <Users /> </Route>
            <Route exact path="/AdminAuth" > <AdminAuth /> </Route>
        </Router >
    </div >
}

