const { expect } = require("chai");

const path = require("path");
const fs = require("fs");

const people = require("../../exercises/06-for-of-loop/people.json");
// console.log("people", people);

const {
  createCsvString
} = require("../../exercises/06-for-of-loop/for-of-loop");

describe("forOfLoop.js ", () => {
  it("testing createCsvString", function(done) {
    const result = createCsvString(people);
    const outputPath = path.resolve(
      __dirname,
      "./../../exercises/06-for-of-loop/output.csv"
    );
    // The line here is writing your string to a CSV file
    fs.writeFile(outputPath, result, err => {
      if (err) console.log("Could not write file to", outputPath);
      expect(result).to.equal(
        '"Name","Gender","Location","DOB"\n"Georgia Wagner","female","Skookumchuck, VA","1977-02-26"\n"Meredith Holt","female","Coltman, WV","1957-09-22"\n"Cora Bradley","female","Fairland, GA","1995-07-19"\n"Carol Scott","female","Two Brooks, WI","1973-08-17"\n"Vincent Silva","male","Brookhaven, DC","1959-07-30"\n"Clifton Armstrong","male","Cimarron, WA","1971-10-08"\n"Deanna Stanley","female","Morgan Mill, OK","1971-04-20"\n"Sidney Walker","male","Scottsville, KS","1987-01-05"\n"Guillermo Gross","male","Del Rey Oaks, RI","1998-05-31"\n"Daniel Steele","male","Martins Corner, TX","1963-07-09"\n"Brett Jimenez","male","East Waterford, ME","1958-05-06"\n'
      );
      done();
    });
  });
});
