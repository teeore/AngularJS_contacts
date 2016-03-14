# contactsApp_angularjs 
The Contacts App has been created using AngularJS.

## To run: 
 - clone repository
 - run 'npm install' (node has to be installed already). Ignore 'unmet dependencies' warnings. There was not enough time to update my npm modules but it will not affect the application.
 - run 'bower install'. If bower is not installed, run 'npm install -g bower' first.
 - run 'npm install -g grunt-cli'
 - run 'grunt serve'. This will start a local server on port 9000
 -----------------------------

 ## To test: 
  - If the grunt server is already running, hitting save on any js file will automatically run the test
  - An alternate way is to open another terminal/cmd window and run 'grunt test'
  - The test runs in the terminal/cmd window (headless) and that's where the results are shown. It briefly opens a small chrome window that shows the test is running but closes when the test stops. 
   -----------------------------

   ## A few points
   - On first run, the mockdata is loaded initially but subsequent saves are persisted in local storage. Added and deleted items are persisted. If all the items are deleted and the page reloaded, the mock data is again loaded.
