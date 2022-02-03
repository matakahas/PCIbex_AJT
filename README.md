# PCIbex_AJT
This repository contains the code and data for a demo acceptability judgment experiment hosted on PCIbex (<a href="https://farm.pcibex.net/r/glqzxx/" target="_blank">link to demo</a>).
The experiment is equipped with the following features:
* Distributing participants evenly among the lists
* Randomizing the trial order within each list
* Displaying a preamble before the presentation of a sentence to be evaluated (the button to switch from the preamble to the test sentence appears with a 3-second delay)
* Displaying a question that checks if participants are actually reading the preamble (following some of the trials)
* Language background questionnaire with some of the questions mandatory to answer

## How to use
To recreate the demo experiment, create a new project on PCIbex, replace the `main.js` script with the one from this repository, and upload the stimuli csv file to "Resources." 

## Reference
I adapted the JavaScript code from the [Acceptability Judgment Task for PCIbex](https://github.com/a-nap/ajs_pcibex) repository.
