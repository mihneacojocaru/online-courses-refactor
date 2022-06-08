import React from 'react';
import Layout from './components/Layout';
import DetailsPage from './pages/DetailsPage';
import UpdatePage from './pages/UpdatePage'
import MainPage from './pages/MainPage';
import PageNotFound from './pages/PageNotFound';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AddNewCoursePage from './pages/AddNewCoursePage';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useStateContext } from './context/Context';



const App = () => {

  const {user} = useStateContext();

  return (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/details/:id" component={DetailsPage} />
                <Route path="/updateCourse/:id">
                    {user ? <UpdatePage/> : <Redirect to='/'/>}
                </Route>
                <Route path='/signIn'>
                    {user ? <Redirect to='/'/> : <SignInPage/>}
                </Route>
                <Route path='/signUp'>
                    {user ? <Redirect to='/'/> : <SignUpPage/>}
                </Route>
                <Route path='/newCourse' component={AddNewCoursePage} />
                <Route path="*" component={PageNotFound} />
                <Route path="/404Page" component={PageNotFound} />
            </Switch>
        </Layout>
    </Router>
  )
}

export default App