
import {useEffect} from "react";
import {Switch,Route,Link,BrowserRouter, } from "react-router-dom"
import {AppBar,Toolbar, Button} from "@material-ui/core";
import {Home, Profile,Chats,Coffees }from "./routes"
import {store,persistor} from "./store";
import {Provider, useSelector,useDispatch } from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {SignUp,Login,ProfileDb } from "./pages"
import {PublicRoute} from "./hoks/withPublicRoutes";
import {PrivateRoute} from "./hoks/withPrivateRoutes";
import {getIsAuth} from "./store/user/reducers";
import {initAuthAction} from "./store/user/reducers";


const HW9 = () => {
    const dispatch=useDispatch();
    const isAuth=useSelector(getIsAuth)



    useEffect(() => {
        dispatch(initAuthAction);
    }, []);




    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <AppBar position={"static"}>
                    <Toolbar>


                        <Button as={Link} to="/" component={Link} color="inherit">
                            Home
                        </Button>
                        <Button to="/profile" component={Link} color="inherit">
                            Profile
                        </Button>
                        <Button to="/chats" component={Link} color="inherit">
                            Chats
                        </Button>
                        <Button to="/coffees" component={Link} color="inherit">
                            Coffee Break
                        </Button>
                        <Button to="/login" component={Link} color="inherit">
                           Login
                        </Button>
                        <Button to="/signup" component={Link} color="inherit">
                           Sign Up
                        </Button>
                        <Button to="/profiledb" component={Link} color="inherit">
                           Profile DB
                        </Button>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <PrivateRoute auth={isAuth} component={ProfileDb} path="/profiledb" />

                    <PublicRoute auth={isAuth} component={Login} path="/login" />

                    <PublicRoute auth={isAuth} component={SignUp} path="/signup" />

                    <Route component={Coffees} path="/coffees" />
                    <Route component={Chats} path="/chats" />
                    <Route  component={Profile} path="/profile"/>
                    <Route component={Home} path="/"/>

                </Switch>

            </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default HW9;