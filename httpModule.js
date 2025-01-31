import http from 'http';
import fs from 'fs';

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader('Content-Type','text/html');
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>About Page</h1> <p>This is about page response from server...</p>');
    }else if (req.url == '/favicon.ico') {
      res.statusCode = 204;
      res.end();
    } else {
    //   res.hammad();
      res.statusCode = 400;
      res.end('<h1>Page Not Found</h1> <p>This page is not available on this server</p>');
    }   
})
    
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})