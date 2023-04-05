# JPND COGNITIVE BATTERY

For now, this README guides you through the process of installing a LOCAL version of the battery to run the EP task in the scanner.
Later on, it will provide more exhaustive explanations about the battery, including its online version.

## CONFIGURE YOUR COMPUTER

In order to run the experiment(s) locally, you'll need to install a few programs.
- MongoDB community edition (should work with most versions, currently using 6x)
- NodeJS (18.14.2 LTS)
- Chrome

Visual Code might be useful to debug, but it should not be strictly mandatory.

# Create the database

After installing MongoDB, you should have a program named MongoDBCompass.
Open it and connect to the local default.
Create a database named MRI. 
That's where the data will be stored (a JSON file is also generated at the end of each block but it is much safer to use a database to log data in a continuous fashion)

# Create a .env file

Clone the repo
CD in the 'multitask' folder
Create a file named .env and copy paste the following.

```
NODE_ENV='mri'
PORT=8080
MONGODB_URI='yourMongoDBconnectionstringhere'
SERIAL='COM4'
SERIAL_RATE='9600'
```

Adjust SERIAL to the port corresponding to your button box and serial rate to the appropriate value (might be something like 115200)

# Edit the app_fmri.js script (if needed)

Use whatever editor to edit app_fmri.js, which is our Nodejs server serving the experiment and dealing with some IO.
At the top you should see the following variable.

```
var serialInputs = {
  "a": Key.Left,
  "b": Key.Right,
  "c": Key.Down,
  "d": Key.Up,
}
```
Change "a", "b", "c", "d" for the letters that are sent by your button box. Do not change the right hand sides (ie. Key.Left, etc.)
NB: Whenever you pull the repo, you might need to redo this step, unless it becomes hardcoded properly.

# Edit the run_fmri.bat file

This little script allows to start the experiment automatically. 
Modify the first line so that it points to your multitask folder.

# Install packages

Open a command line (cmd) and cd to the multitask folder. Type the following

```
npm install
```

It will install all the packages you need to run the experiment. You need an Internet connection to perform this step.

# Now, you should be ready to go.

Just double-click on the run_fmri.bat and respond to the questions.
The fMRI implementation is not complete yet. DO NOT USE IT WITH REAL PARTICIPANTS FOR NOW.


