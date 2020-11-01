## Offline viewing sample for Autodesk Viewer
[![Viewer](https://img.shields.io/badge/Viewer-v7-green.svg)](https://forge.autodesk.com/en/docs/viewer/v6/developers_guide/overview/)

## Description
This repository demonstrates a self-contained Forge Viewer application, with all the necessary dependencies and resources hosted on your own server, independent of any Forge API endpoints.

Use cases of hosting the entirety of a Viewer application like this sample on your own instance include:
- To be able to view the model even if the client has no or limited networking access to the Forge API endpoints
- Boost loading times if the client experiences slow networking with Forge API endpoints
- To make your application self-contained and isolated from disruptions (though rare) to the Forge API

## [Live Demo](http://autodesk-forge.github.io/viewer-javascript-offline.sample/)

![](https://user-images.githubusercontent.com/10786558/45990588-9833a300-c0b3-11e8-9087-8f077baeb459.png)

## Setup
To replace the model (in extracted format .svf) to be viewed, change the value of `document` in `index.html`.
````javascript
var options = {
    'document' : './shaver/0.svf',
    'env':'Local'
    };
````

Run with Python: to start this application with Python 2.x, run below in the directory of your local clone:
````bash
python -m SimpleHTTPServer 8000
````

Run with NodeJS: to start this application with NodeJS 5+, run below in the directory of your local clone:
````bash
npx http-server -p 8000
````

Alternatively feel free to spin this sample up with your favorite web server (IIS/Kestrel/Tomcat/Apache/Nginx etc.) as it's 100% static.

Navigate to [http://localhost:8000](http://localhost:8000) on Chrome/Firefox/IE 11+/Safari/Opera to see the result.

## Written By
Zamfir Andrei-Paul & Dinu Alexandru & Baciu Andrei

## Thumbnail
![Thumbnail](/thumbnail.png)
