React Chatty App
###Note:
please download both this app as well as the server for the app.
Install them in seperate files.
You can find the Chatty App at: https://github.com/MockAnon/boilerplate
You can find the server at:  https://github.com/MockAnon/Chatty_Server

### //Usage

###Clone Chatty App

```
git clone git@github.com:MockAnon/boilerplate.git chatty_app
cd chatty_app
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```


###Clone Server
```
In a folder seperate from Chatty App
git clone git@github.com:MockAnon/Chatty_Server.git chatty_server
cd chatty_server
npm start
```
```
The server will launch at http://localhost:3001 -- let it run in the background.
```


###Running Chatty App
```
Upon launch Chatty App will assign you a colour.
When a message is sent it will instantly update for all users on server.
Chat until your hearts content.
```

Note: You can also send .png image links over chatty app.

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

