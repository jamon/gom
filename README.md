# Gulf of Mexico Fixer Chrome/Firefox Extension

This Chrome/Firefox extension corrects the erroneous labeling of the "Gulf of Mexico" as the "Gulf of America" on that one map site.

Because that map site uses canvas to render, this requires patching canvas's text routines on the site, which requires jumping through a couple of hoops.  Unfortunately, it gets called with "Gulf of" and "America" separately, and this fix takes the naive approach of just matching on the whole string "America" which at a quick glance appears to work well enough without any major side effects.

## Installation Firefox
1. Clone or download this repository.
2. Open Firefox and go to about:debugging#/runtime/this-firefox.
3. Click on "Load Temporary Add-on".
4. Select the manifest.json file from your extension folder.

# Installation Chrome
1. Clone or download this repository.
2. Open Chrome and go to chrome://extensions.
3. Enable "Developer mode" (toggle is at the top right).
4. Click "Load unpacked" and select the folder containing your manifest.json and content.js files.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
