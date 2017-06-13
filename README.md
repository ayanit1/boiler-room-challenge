Boiler Room Challenge
=====================

A simple web page that displays my favourite top 3 boiler sets built using a simple node server with and react.

My Approach
===========

Prior to this my knowledge in using React and node.js was very little. I aimed to make a simple application which I could make react make network request for a simple piece of text and then built it up, adding features constantly.

### User Stories
```
As a user,
so that I can see information on Albert's favourite boiler room sets,
I want to be able to output the title, artist and location of each one on a web page.

As a user,
so that I can see Albert's knowledge in react,
I want to have React make network requests for information on the simple node server.
```

Getting Started
===============

### Prerequisites
- Have node.js installed. For more information visit https://nodejs.org/en/download/

### Technologies Used
- Node.js
- Express
- React

### Installation
```
git clone git@github.com:ayanit1/boiler-room-challenge.git
cd boiler-room-challenge
npm install
```

### Running the ap
- run `NODE_ENV=production node_modules/.bin/babel-node --presets react,es2015 src/server.js`
- visit http://localhost:3000 and navigate through page

Improvements
============
- Because this is fairly new technology to me, a majority of code was spiked. I would explore the use of Jest and add testing.
- I am aware there may be some comments around. Normally I would remove, but it's to help my understanding.

Author
======
Albert Yanit
