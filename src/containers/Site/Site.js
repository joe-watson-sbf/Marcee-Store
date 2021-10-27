import {Switch, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SingUp';
import Shop from './../Shop/Shop';
import Home from './../../components/Home/Home';
function Site() {
    return(
        <>
            <NavBar/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signin' exact component={SignIn} />
                <Route path='/signup' exact component={SignUp} />
                <Route path='/shop' exact component={Shop} />
                <Route path='/about' exact render={()=> <h1>About Us</h1>} />
                <Route path='/contact' exact render={ (props) => <h1>Contact Us</h1> } />
                <Route component={Home}/>
            </Switch>
        </>
    )
}

export default Site;