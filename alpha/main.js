import './style.css';

import {outputgen } from'./Javascript/outputbased.js';
import { sortingalgo } from './Javascript/sort.js';
import { protocontent } from './Javascript/prototype1.js';
import { Uimaker } from './Javascript/UImaker.js';

const app = document.querySelector('#app');
let currentposition = 0;
const lengthobject = protocontent.length;

// Function to update the content and re-attach event listeners
const updateContent = () => {
  app.innerHTML = Uimaker.mixerr(protocontent[currentposition]);
  outputgen.IDlisten("higherchap", "click", tohigher);
  outputgen.IDlisten("lowerchap", "click", tolower);
};

// Callback function to go to the next content
const tohigher = () => {
  if (currentposition < lengthobject - 1) {
    currentposition++;
    updateContent();
  } else {
    console.log("this is the end line");
  }
};

// Callback function to go to the previous content
const tolower = () => {
  if (currentposition > 0) {
    currentposition--;
    updateContent();
  } else {
    console.log("this is the end line");
  }
};

// Initial content setup and event listeners attachment
updateContent();