Example is based on next tools:
1. UT Framework - Jasmine
2. Test runner - Karma
3. Coverage tool - KarmaCoverage
4. Report tool - JUnit

Example structure:
1. "js/object.js"  - javascript/jquery functionality
2. "js/tests/object.js" - unit tests for "js/object.js" file
3. "karma.conf.js" - Karma runner configuration file (can be changed on requirements)
4. "package.json" - list of dependencies

5. "coverage" directory - karmaCoverage results
6. "junit-report/report.xml" - JUnit report

Require to have installed "nodejs"

To install dependencies - npm install
To start tests - ./node_modules/karma/bin/karma start
