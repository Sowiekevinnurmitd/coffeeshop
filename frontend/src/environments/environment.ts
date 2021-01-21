/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-972bjgsj.eu', // the auth0 domain prefix
    audience: 'drinks', // the audience set for the auth0 app
    clientId: 'Zk9tN9FisQSf31x0q5xFJxXUpG61xS5f', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};


/*https://dev-972bjgsj.eu.auth0.com/authorize?audience=drinks&response_type=token&client_id=Zk9tN9FisQSf31x0q5xFJxXUpG61xS5f&redirect_url=http://localhost:8100'*/