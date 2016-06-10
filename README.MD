###Description
This is the React component UI Library Boiler Plate.

###Tech Stack
node.js + webpack + babel + react

###Installation
Run `npm install`

###Start Dev Server
`npm start`

###Npm Scripts Included
`npm start` - builds & watches the UMD. <br/>
`npm run build` - builds only the UMD file. File is exported as index.js in root for including as a Node Package. <br/>
`npm run build-min` - builds the UMD minified file and is exported as reactUMD.min.js in the root directory.

###File Structure (from root)
`src/components` - contains all components and each component is self contained in it's own directory. <br/>
`src/build.js` - is used for building the UMD files. index.js is used for the webpack-dev-server for testing. <br/>
`src/index.html` - used with the webpack-dev-server for testing <br/>
`src/scss` - contains global sass files & variables <br/>
`index.js` - main file for Node Package. <br/>
`server.js` - webpack-dev-server. Bundles to localhost:1337 <br/>
`webpack.config.js` - config file for building the UMD file <br/>
`webpack.dev.config.js` - config used for the webpack-dev-server <br/>

### Notes
Sass-loader process is based on https://www.bensmithett.com/smarter-css-builds-with-webpack/. <br/>
dummy Json seed data can be stored in seeds dir and loaded with webpack's json-loader. Just 'import' the json files.
