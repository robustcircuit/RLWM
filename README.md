## INFORMATION

In order to run the experiment(s) locally, you'll need to install a few programs.
- MongoDB community edition (should work with most versions, currently using 6x)
- NodeJS (18.14.2 LTS)

Visual Code might be useful to debug, but it should not be strictly mandatory.

After installing MongoDB, you should have a program named MongoDBCompass.
Open it and connect to the local default.
Create a database named 'RLWMdb': it will run locally on your computer for debugging purposes

Clone the Github repo

CD in the 'RLWM' folder
If you want to run the task online for real you need to: 
1. modify the MONGODB_URI to match your connection string given by your online MongoDB cluster
2. switch NODE_ENV to 'production'

Type: npm install 
in the command line

Type: node app.js
in the command line

The task should be available at 
http://localhost:3000/RLWM

Not that I coded a different version of the value-recall block (as compared to original paper).
It is for now not included in the main JSPSYCH timeline.
