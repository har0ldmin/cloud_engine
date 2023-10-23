# Cloud Engine
University of Auckland 2023 Semester 2 (CompSci 399) <br>
Cloud Engine (Team 16) with Project 7

**Project Timeline on Jira**:
<br>
[Visit Cloud Engine JIRA board](https://aucklanduni-smin289.atlassian.net/jira/software/projects/T16/boards/2)

![JIRA Image](/frontend/public/images/jira.png)
<br><br>

## What is Cloud Engine?
Cloud Engine is a cloud management platform that allows users to manage their cloud resources from different cloud providers in one place. It provides a user-friendly interface for users to manage their cloud resources, such as creating, deleting, and updating cloud resources. It also provides a dashboard for users to monitor their cloud resources.

## Why Cloud Engine?
 Cloud Engine is a cloud management platform that offers a unified interface for managing cloud resources from different cloud providers. It simplifies the management process by providing a minimalistic approach to using cloud services. Additionally, Cloud Engine provides a user-friendly interface for managing cloud resources, such as creating, deleting, and updating cloud resources. It also offers live chat with the service team and AI chat to get useful information at any time. With Cloud Engine, users can easily manage their cloud resources and keep track of them through the dashboard for monitoring cloud resources. Overall, Cloud Engine is a reliable and efficient cloud management platform that simplifies the management of cloud resources.

## How to use Cloud Engine?
### Use Case 1 : New Business Startup
**Situation**: A startup company is unsure which cloud services they need to get started.

**Action**: They visit Cloud Engine. Based on their specific needs, Cloud Engine recommends a suite of services and provides comparisons between Google, AWS, and Azure.

**Result**: The startup can manage these recommended services directly through Cloud Engine. This saves them time and reduces complexity in their initial setup process.
### Use Case 2 : Multi-cloud Management
**Situation**: An established business uses multiple cloud providers for different aspects of their operations but struggles with managing them separately.

**Action**: They use Cloud Engine's unified management interface to control all its services from different providers in one place.

**Result**: This streamlines their operations and improves efficiency by providing a single point of control for all cloud-based resources.
### Use Case 3 : Service Transition
**Situation** : A company wants to transition from one cloud service provider to another but isn't sure how the services compare or how to manage the transition.

**Action** : Using Cloud Engine, they can see a side-by-side comparison of similar offerings from different providers and get recommendations for comparable services.

**Result** : Once they decide on the new service(s), they can initiate and manage the transition directly within Cloud Engine, making it easier to switch between providers while ensuring continuity of operations.

<br>

## Frontend

### Technologies Used
The Cloud Engine backend server was built with:

* HTML
* CSS
* Javascript

### Acknowledgement
This project uses the following dependencies:

   - `"chocolat": "^1.1.0"` : This is a dependency for the project that is not commonly used in Node.js development. It is likely a custom package created by the project team.
   - `"cookie-parser": "~1.4.4"` : This is a middleware that parses cookies attached to the client request object. It populates the req.cookies object with the parsed cookies.
   - `"debug": "~2.6.9"` : This is a debugging utility for Node.js. It provides a simple way to add debug statements to your code and control their output. 
   - `"express": "^4.18.2"` : This is a popular Node.js web application framework. It provides a robust set of features for building web applications, including routing, middleware, and templating. 
   - `"morgan": "~1.9.1"` : This is a middleware that logs HTTP requests and responses. It is useful for debugging and monitoring.
   - `"nodemon": "^3.0.1"` : This is a utility that monitors changes to your Node.js application and automatically restarts the server when changes are detected. It is useful for development. 
   - `"nunjucks": "^3.2.4"` : This is a templating engine for Node.js. It provides a powerful and flexible way to generate HTML, XML, and other markup languages. 


### Prerequisites
1. To install the dependencies for the frontend of the Cloud Engine project, you need to navigate to the frontend directory by running the command cd frontend in your terminal. 

```bash
    cd frontend
```

2. Once you are in the frontend directory, you can install the required dependencies by running the command npm install. This will install all the necessary packages and dependencies required for the frontend of the project.

```bash
    npm install
```

3. Afterwards, you can start the client-side server by running the command **npm run dev**. 

```bash
    npm run dev
```

4. The respond of the server will be shown in the terminal as below:

```bash
    > newfrontend@0.0.0 dev
    > nodemon --ext js,html,css,png,jpg ./bin/www

    [nodemon] 3.0.1
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,html,css,png,jpg
    [nodemon] starting `node ./bin/www`
```

After the final stage, you are now ready to start the client-side server. 

### Getting Started
By entering the URL **http://localhost:3000/** in your browser, you can view the frontend of the Cloud Engine project.

### Future Enhancement
* Responsive design for mobile devices and mmultiple web browsers.
* Provide more instances from different providers.
* Live chat with the actual service team. Further enhanced storage and additional APIs are needed to make this function successful.
* Implementing a new API in **Dashboard -> My Profile** to save the edited profile data. Also the storage can be further enhanced for user's profile picture and chatting history.
* Implementing **dates** in the APIs for instances, so that we can distinguish the data by dates and use them as dynamic data for the graph in the dashboard page. 


<br><br>

<br><br>

## Backend

### Technologies Used

The Cloud Engine backend server was built with:

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Javascript][Javascript.js]][Javascript-url]
* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
### Dependencies

  With following dependencies:

- `"@google-cloud/compute": "^4.0.1”` : Google Cloud client library for Node.js.
- `"aws-sdk": "^2.1450.0”` : AWS SDK for Javascript, providing AWS related services for the server.
- `"bcrypt": "^5.1.1"` : A library that helps password hashing.
- `"cookie-parser": "^1.4.6"` : Parse Cookie header and populate `req.cookie` with an object keyed by the cookie
- `"cors": "^2.8.5”` : Middleware that can be used to enable CORS with various options
- `"dotenv": "^16.3.1”` : Loads environment variable from a `.env` file into `process.env.`
- `"express": "^4.18.2”` : A minimal and flexible Node.js web application framework providing a robust set of features for building web applications.
- `"express-validator": "^7.0.1”` : An Express middleware for server-side data validation.
- `"jsonwebtoken": "^9.0.1”` :
- `"mongoose": "^6.12.0”` : MongoDB object modeling tool designed to work in an asynchronous environment with a promised-based API.
- `"nodemailer": "^6.9.4”` : Send emails from Node.js server.
- `"otp-generator": "^4.0.1”` : It helps to generate One Time Passwords.
- `"swagger-autogen": "^2.23.5”` : It is used to automatically generate Swagger documentation for Express.js APIs
- `"validator": "^13.11.0”` : A library of string validator and sanitizers.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Getting Started

As the current version of the backend server has several security and deployment issue, the backend has not be deployed online. This section provides instructions on how to get the project up and running on the local environment for development and testing purpose.

### Prerequisites

Before getting started, ensure the local device have met the following requirements:

- Installed Node.js and npm. It can be verified using following command
    
    ```bash
    $node --version
    $npm --version
    ```
    
    If Node.js or npm (which comes with Node.js) does not exist on your local device visit [https://nodejs.org](https://nodejs.org/)
    
    Or use MacOS homebrew:
    
    ```bash
    $brew install node
    ```
- Retrieved Access, Secret Access and Session Token for AWS Software Development Kit. Click following link:
    
    [University of Auckland AWS Account Portal](https://uoa-sso.awsapps.com/start#/)
    
    For further step by step explanation visit : 
    
    [Step by step AWS credential guide](https://www.notion.so/AWS-credential-7ae58c0c18b0478289b8e6bdab716a75?pvs=21)

### Installing

To install Cloud Engine backend server,

1. Clone the repository:
    
    ```bash
    git clone https://github.com/uoa-compsci399-s2-2023/capstone-project-team-16.git
    ```
    
2. Navigate into the backend directory:
    
    ```bash
    cd backend
    ```
    
3. Install the dependencies:
    
    ```bash
    $npm install
    ```
    
4. Add environment variables:
    
    Create a `.env` file in the backend directory and add environmental variable
    
    ```bash
    PORT=3001
    MONGODB_URI="DATABASE-CREDENTIAL"
    SERVICE="SMTP-Email-provider"
    EMAIL="Host-Email"
    PASSWORD="Email-password"
    
    [AWS Access and Secret access Key -- Personal account]
    ACCESSKEY="Access-Key"
    SECRETACCESSKEY="Secret-Access-Key"
    
    [AWS Access and Secret access Key -- University account]
    aws_access_key_id="Access-Key"
    aws_secret_access_key="Secret-Access-Key"
    aws_session_token="Session-Key"
    
    GOOGLE_APPLICATION_CREDENTIALS="./routes/GCP/key.json"
    ```
    
5. Three different options to start the server
    - Use this command to start the server without debugging mode
        
        ```bash
        $npm start
        ```
        
    - Use this command to autogenerate swagger UI endpoint documentations and start the server using nodemon for easier debugging.
        
        ```bash
        $npm run dev
        ```
        
    - Use this command to start the server without swagger autogen nor nodemon.
        
        ```bash
        $npm run start
        ```

<br><br>

<br><br>

## Deployment

### Service Provider
Cloud Engine has been deployed online using a free deployment service,
[Vercel](https://vercel.com/dashboard) <br>

### Deployment Repository
[Backend ONLY](https://github.com/521minsu/cloud-engine) <br>
[MONOREPO](https://github.com/521minsu/cloud-engine2) <br>
  *NOTE*: Only members of Team 16 may access these repositories.

### Deployed URL
*NOTE*: It is a deployment version of the website that is not completely finished, so we will be deploying again later. 
<br>
[https://cloudengine.vercel.app/](https://cloudengine.vercel.app/)

<br>

## Future plans

### Wider range of service and providers

The most immediate enhancement would be expanding the number of integrated cloud services from various providers. AWS and GCP offer many more services beyond EC2, RDS, and Compute Engine that we could potentially add to our platform - such as AWS S3 for storage or AWS Lambda for serverless computing. Moreover, broadening our scope beyond just AWS and GCP would significantly enhance the versatility of our system. Cloud providers like Microsoft Azure, IBM Cloud, Oracle Cloud Infrastructure, or Alibaba Cloud each have unique service offerings that could cater to various user needs. We can ensure that our system remains relevant while providing comprehensive cloud management solutions by continuously adding new features from these different providers over time based on user feedback and industry trends.

### Terraform and Pulumi SDKs

Apart from using SDKs from cloud providers, we found a declarative approach to infrastructure management. A Terraform and Pulumi SDKs provides a centralised approach to manage cloud instances across a multitude of providers. In future release, we could replace our current SDKs with centralised Terraform or Pulumi SDK to simplify our operation process.

### Acknowledgement
This project uses swagger-autogen to autogenerate Swagger API documentation. <br>
Refer https://github.com/swagger-autogen/swagger-autogen

For more information on backend routes to access server [API Reference ](https://www.notion.so/API-Reference-021092557cf34812b5d46b723408e77f?pvs=21) [Ongoing]
<br><br>

To request for more endpoints, please add on Google Docs ([LINK](https://docs.google.com/document/d/17WN8Kc6bYWCzGtmIO2jYf97FsPnhibPQsApwhysLr5o/edit)), following the template convention on the top of the document. <br>
  Note: Only members of Team 16 may access this document via university ID. 


[Javascript.js]: https://img.shields.io/badge/javascript-000000?style=for-the-badge&logo=javascript
[Javascript-url]: https://www.javascript.com
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=expressdotjs
[Express-url]: https://expressjs.com


