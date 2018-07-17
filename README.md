## Adding it as an extension:

first you'll need to start a https://github.com/netbeast/bitrise-log-extractor server with "npm start" in the port 3000. Resulting in localhost:3000, otherwise you'll have to change the code to fit your ip:port combination.

-Firefox

Open "about:debugging" in Firefox, click "Load Temporary Add-on" and select any file in your bitrise-log-extractor/firefox directory.

-Chrome


1. Open the Extension Management page by navigating to chrome://extensions. The Extension Management page can also be opened by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
3. Click the LOAD UNPACKED button and select the extension directory.
4. Load Extension


Ta-da! The extension has been successfully installed.

And next to the bitrise details you'll see a "Check log" button, which will automatically launch the webpage with the requested information

https://imgur.com/a/b7pM5DN

