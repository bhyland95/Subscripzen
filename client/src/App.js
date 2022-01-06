import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header/header';
import './App.css'

import Home from './pages/Home/Home';




import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import AddSub from './pages/AddSub';
import SubInfo from './pages/SubInfo/SubInfo'

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
            

              <Route  exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/addsub" component={AddSub} />
              <Route exact path="/SubInfo/:id" component={SubInfo} />



              <Route component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;