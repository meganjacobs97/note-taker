# Note Taker

# A fullstack note-taking application that features dynamically updated HTML, built with JavaScript and powered by JQuery. 

This application was built in order to familiarize myself with servers as well as to practice writing backend code for an existing frontend. 

Currently, the functionality allows the user to write, save, and delete notes. The application uses an express backend and saves/retrieves note data from a JSON file.

## Installation

To use this application, follow the link on the GitHub repository page. Otherwise, you can [click here](https://notetakerproj.herokuapp.com/notes). 

To run and develop the code for yourself, you can use an IDE such as [VS Code](https://code.visualstudio.com/). 

In order to use this application as intended, you must have Node.js installed. You can download it [here](https://nodejs.org/en/download/). Step-by-step installation instructions can be found [here](https://phoenixnap.com/kb/install-node-js-npm-on-windows). 

You must also install uniqid (for random ID generation) and Express (for running a server on your machine), which you can install by calling `npm init` and `npm install` from the command line. For more detailed information, check out the documentation for [Express](https://expressjs.com/) and [uniqid](https://www.npmjs.com/package/uniqid). 

## Usage 

To use the deployed application, simple click the "get started" button. From there, you can write notes and save them by clicking on the save icon. To delete a note, just click the trash icon. You can view notes by clicking on them from the sidebar. 

If you wish to run this application from your machine, run `node server.js` to get the server up and running. Then, open localhost:3000 in your browser. 

## Credits 

Built with [Bootstrap](https://getbootstrap.com/).

Original frontend code provided by [Trilogy Education Services](https://www.trilogyed.com/).

## License

MIT License

Copyright © 2020 Megan Jacobs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.