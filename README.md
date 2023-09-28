# Cloud Engine
University of Auckland 2023 Semester 2 (CompSci 399) <br>
Cloud Engine (Team 16) with Project 7


## Frontend
...


## Backend

Install the dependencies:

```bash
$ npm install
```

Use this command to autogenerate swagger UI endpoint documentations and run server using nodemon for easier debugging.

```bash
$ npm run dev
```

Use this command to run backend server without swagger autogen nor nodemon.

```bash
$ npm run start
```
<br><br>
### Backend repository convention
| Component  | Component Description                                                       |
|------------|-----------------------------------------------------------------------------|
| config     | System & Env. Config                                                        |
| middleware | Middleware/sub-layer Functions                                              |
| models     | Mongo DB Schemas and Models                                                 |
| routes     | API Endpoint Definition                                                     |
| .env       | Environment Variable used for development (MONGODB_URI=\<LINK TO MONGO DB\> |
| server.js  | Server init file                                                            |

<br><br>
* This project uses swagger-autogen to autogenerate Swagger API documentation. <br>
  Refer https://github.com/swagger-autogen/swagger-autogen
* To request for more endpoints, please add on Google Docs ([LINK](https://docs.google.com/document/d/17WN8Kc6bYWCzGtmIO2jYf97FsPnhibPQsApwhysLr5o/edit)), following the template convention on the top of the document. <br>
  Note: Only members of Team 16 may access this document via university ID. 
