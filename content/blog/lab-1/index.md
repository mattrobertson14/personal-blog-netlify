---
title: Lab 1 - Raspberry Pi Stop Light
date: "2019-09-16"
description: Lab 1 for IT441. In this lab, a stoplight is implemented using a Raspberry Pi and a breadboard.
---

# IT441 Stop Light 🚦

This is a simple stoplight implementation using a Raspberry Pi and GPIO pins. The objective of this service is to serve a web page, from which you can change which light (red, yellow, or green) is on at any given moment. There is also the ability to turn off the lights. The final action you can take from the frontend is that you can set the lights to _auto mode_. This will cause the lights to act similarly to a stoplight (i.e. red will turn on, after a few seconds green will turn on, after a few seconds yellow will turn on briefly warning the light will soon turn to red, and finally the light will turn red again). This cycle will continue until another light is turned on from the frontend or the lights are turned off by the frontend.

## Infrastructure 🔩

The implementation of this project is done entirely in JavaScript.

### Frontend 👋🏻

The frontend is built using [ReactJS](https://reactjs.org/). Furthermore, this app was built with the help of the `create-react-app` package from Facebook. Their documentation can be found [here](https://github.com/facebook/create-react-app). The following package was also used in this project to implement the frontend

* axios ([Documentation](https://github.com/axios/axios))

### Backend 💪🏻

The backend server is the meat of this project. It is where almost all of the logic is. It is what interfaces directly with the GPIO pins and what manages the cycling of the lights. The backend is built using [NodeJS](https://nodejs.org/en/). The API is built using the [ExpressJS Framework](https://expressjs.com/). The following packages also helped in creating the backend of this project

* express-promise-router ([Documentation](https://www.npmjs.com/package/express-promise-router))
* onoff ([Documentation](https://www.npmjs.com/package/onoff))
* path ([Documentation](https://www.npmjs.com/package/path))

---

**Disclaimer**
_This project was made for a class at Brigham Young University. This was a class assignment with certain parameters to be met. This is not a project that has a real life application in its current state. This code is also not meant for production and has not been fully optimized._
