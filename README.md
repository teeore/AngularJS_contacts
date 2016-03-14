# contactsApp_angularjs 
The Contacts App has been created using AngularJS.

To run:
-----------------
 clone repository.
 run 'grunt serve'. This will start a local server on port 9000. If there are any issues with running grunt, run 'npm install -g grunt-cli', first.
 
To test:
 -----------------
  If the grunt server is already running, hitting save on any js file will automatically run the test
  An alternate way is to open another terminal/cmd window and run 'grunt test'.
  The test runs in the terminal/cmd window (headless) and that's where the results are shown. It briefly opens a small chrome window that shows the test is running but closes when the test stops. 
  

  A few points
 ----------------
  On first run, the mockdata is loaded initially but subsequent saves are persisted in local storage. Added and deleted items are persisted. If all the items are deleted and the page reloaded, the mock data is again loaded.
  
  The initial download may take about a minute because I had to include the bower and npm files. On a regular build, the files will be minified and concatenated but since this is a test, I assumed you will want to see the actual minified files so I had to include all the build files.
