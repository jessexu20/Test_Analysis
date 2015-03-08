# Test_Analysis

## Test
### Unit Test & Coverage Report

	We are using the Homework 2(Test Generation) as our test sample, subject.js. Therefore we are using Istanbul as our tool to monitor the test coverage.
	The following are the results of Istanbul. We saved it into a test.txt file for the script to check the coverage in Analysis Section.
		node_modules/.bin/istanbul cover test.js
	=============================== Coverage summary ===============================
	Statements   : 100% ( 14/14 )
	Branches     : 100% ( 4/4 )
	Functions    : 100% ( 1/1 )
	Lines        : 100% ( 13/13 )
	================================================================================
	
### Improve testing coverage using constraint-based test generation
	We have used the constraint-based test generation method to automatically generate the test cases. The automatically generated test cases are stored in test.js file.
	The generated test cases will make the coverage to 100%. In order to automatically generate the test case. You can run the following command.
		node main.js
	However, if we change the code in subject.js without running this command. We can get the newly edited code's coverage simply by running
		node_modules/.bin/istanbul cover test.js
	to check whether the new code passed all the test cases.
## Analysis

### Run the static analysis tool JsHint on the source code 
	

#### Configure the options of JsHint

### Reject a commit if it fails a minimum testing criteria (less than 50% coverage of any kind in Coverage Report) and analysis criteria 