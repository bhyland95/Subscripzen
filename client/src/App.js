import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import './App.css'

import Home from './pages/Home/Home';



import Subs from './pages/Subscriptions/subs';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import AddSub from './pages/AddSub/AddSub';
import SubInfo from './pages/SubInfo/SubInfo'
import Landing from './pages/LandingPage/LandingPage';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {



  return (

    <ApolloProvider client={client}>

      <Router forceRefresh={true}>
        <div className="">



          <div className="">
            <Switch>

              <Route exact path="/sublist" component={Subs} />
              <Route exact path="/" component={Landing} />

              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/addsub" component={AddSub} />
              <Route exact path="/SubInfo/:id" component={SubInfo} />



      
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;