# Receipt Processor Plus 2
This is an extended version of the receipt challenge using a Flask Python Backend

## How to run
First ensure that docker desktop is open and running

Navigate to the terminal and the root directory of the project, and run:

```$ docker-compose up```

Then, open Postman and first try to post a receipt at http://127.0.0.1:8080/receipts/process

Take the id returned, and enter it into the following url to get the points of said receipt: 
http://127.0.0.1:8080/receipts/:id/points where :id is the id retrurned