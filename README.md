# Becoditive-API
The official API of beCoditive with many endpoints like memes, animals, image manipulation, etc.

## Blocked Domains, Domain Extensions and Emails
As people don't spam our api key system and do not exploit our api keys,
We have a new system in our api which will block the use of some emails, domains and domain extensions
Mostly the temp mail service will be blocked, but if someone else doesn't follow our T&S their email or domain can be banned.

- [List of Blocked Domains](./blocked/blockeddomains.md) 

## Nodejs Module
If you are using nodejs and want to use our api it will be more easier to use it by your [Npm Package](https://www.npmjs.com/package/becoditive).<br>
We suggest not to use any other npm package for it until it is not offically annouced as your api key might be stole if you use some unknown package.

## How To Clone this Project It
First download the zip or clone it using ``git clone https://github.com/beCoditive/Becoditive-API.git``

Then Download all the required node_modules using -
```
npm install
```

Then rename `.env.example` to `.env` and edit it with your mongodb srv.

And to Run the API -
```
npm start
```

- Then the api will run on `http://localhost:5555`

To edit and host online you can use replit. 
This Project already has a .replit file configured!

you can change all the files and use it for your projects also.
But you have to give credits to `beCoditive`.

> Made By beCoditive ©2021

> Front End Made by [Aditya Jha](https://github.com/AdityaXJha)
