# Becoditive-API
The official API of beCoditive with many endpoints like memes, animals, image manipulation, etc.

## Blocked Domains, Domain Extensions and Emails
As people don't spam our api key system and do not exploit our api keys,
We have a new system in our api which will block the use of some emails, domains and domain extensions
Mostly the temp mail service will be blocked, but if someone else doesn't follow our T&S their email or domain can be banned.

- [List of Blocked Domains](./blocked/blockeddomains.md) 
- [List of Blocked Domain Extensions](./blocked/blockedExtensions.md)

## Versions

| beCoditive Versions | Status           | Support                     |
|---------------------|------------------|-----------------------------|
| v2.1.x              | In development   |          Code Only          |
| v2.0.0              | Current          |     Both(API and Code)      |
| v1.0.0              | Depreciated      | Code Only (Not Recommended) |


## Nodejs Module
If you are using nodejs and want to use our api it will be more easier to use it by your [NPM Package](https://www.npmjs.com/package/becoditive).<br>
We suggest not to use any other npm package for it until it is not offically annouced as your api key might be stolen if you use some unknown package.

## Setup
First download the zip or clone it using ``git clone https://github.com/beCoditive/Becoditive-API.git``

Then Download all the required node_modules using -
```
npm install
```

Then rename `.env.example` to `.env` and edit it with your mongodb srv.

To load Sample Data do - 
```
npm run loadsampledata
```

And to Run the API -
```
npm start
```

- Then the api will run on `http://localhost:5555`

To edit and host online you can use replit. 
This Project already has a .replit file configured!

you can change all the files and use it for your projects also.
But you have to give credits to `beCoditive`.

## Contributors 
<br><br>
<a href="https://github.com/beCoditive/beCoditive-API/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=beCoditive/beCoditive-API"/>
</a>
<br><br>


> Made By beCoditive ©2021

> Front End Made by [Aditya Jha](https://github.com/AdityaXJha)
