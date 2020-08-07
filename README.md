
USER GUIDE AND NOTES
---------------
OS:

Wndows 10

Browser to run:

Chrome (recent version, actual used was Version 84.0.4147.105 (Official Build) (64-bit))

Dependencies:

Node
Visual Studio with C++ work add, and Python

GitHub URL: this is set to public availability

https://github.com/AnsharTwo/TestRepo

TO RUN:

Clone the above repsoitory.

git clone "https://github.com/AnsharTwo/TestRepo"


Go to the TestRepo folder via Windows CMD shell.

Run the following commands -


npm init -y

(install WebdriverIO CLI...) NOTE SET frameowrk to 'Mocha' if prompted

npm i --save-dev @wdio/cli

(set up configuration file...)

npx wdio config -y


It is recommended to increase the timeout parameter below. To do this open wdio.conf.js and edit by searching for 'timeout'. Increase to 
at least 180 seconds per timeout.


To run the test project - 


npx wdio wdio.conf.js userid password url domain

e.g.:

npx wdio wdio.conf.js theuser zappin3w mydomain.com

(above are fictitious credentials or domain. Password would be masked in a real-life situation. Note only specify the domain and not 
the full URL, and with no slashes.)

NOTE:
(I see the that URL, while passed though the CLI, is in the commit history and hard-coded on the browser.url call after the initial navigation 
to the site. But the user id and password should still be secure and not in the commits.)

For further reference setting up WebdriverIO see https://webdriver.io/docs/gettingstarted.html

All requriements of the exercise have been implemented, excepting one - the All Content and Featured Content news links were 
found to be problematical and not easy to distinguish in the time avialable. Therefore a test for global news content is performed, rather 
than tests for each type of news content. (the html overall featured some "testid" attributed elements, which were helpful to automation, 
but as is usually the case, the html could be made more automation-friendly. I have used some indexed elements to workaround this as 
a temporary measure for this exercise.)

I haven't implemented via the page object model due to the simplicity of the exercise. I've done such an implementation 
elsewhere over multiple roles in the past however e.g. Santander, Yoti.

The project has been tested by downloading after push and running with the above steps. Any questions or support 
please call 07460 281547 or eamail robert.tomsett@btinternet.co

Troubleshoot:

1. If the test times out (it shouldn't as I've increased timeout args), please open wdio.conf.js and increase timeouts e.g.

    mochaOpts: {
        ui: 'bdd',
        timeout: 150000
    },


2. Ensure during installation that 'Mocha' was selected as the framework. If in doubt, reinstall.
