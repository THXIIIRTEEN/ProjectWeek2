const http = require('http');
const {
    defaultRouteController, 
    mainRouteController, 
    gameRouteController,
    voteRouteController
} = require('./controllers');

const PORT = 3005

// для пулл реквеста

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;
        case "/game":
            gameRouteController(res);
            break; 
        case "/vote":
            voteRouteController(req, res);
            break;        
        default:
            defaultRouteController(res, url);
            break;  
    }
});

server.listen(PORT); 

// комментарий