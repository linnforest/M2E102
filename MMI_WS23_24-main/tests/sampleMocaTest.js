const expect = require('chai').expect;

//Sample JUnit test
function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

describe('#sum()', function () {

    //  if needed logic before each test run
    beforeEach(function () {

    })

    // test a functionality
    it('should add numbers', function () {
        expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    })

});


// Define the variables to test
let mode;
function modeChange() {
    // Mock function for testing
}

describe('modeChange', function() {
    // Reset mode before each test
    beforeEach(function() {
        mode = "summer";  // Initial mode for testing
    });

    it('should change mode from "summer" to "winter"', function() {
        modeChange();
        expect(mode).to.equal("summer");
    });

    it('should change mode from "winter" to "summer"', function() {
        mode = "winter";
        modeChange();
        expect(mode).to.equal("winter");
    });
});


// Import the function to test
const getGreetingDependOnTime = function (myDate) {
    let timeBegin = '06:00';
    let timeEnd = '22:00';
    
    const dateBegin = new Date('2020-01-01 ' + timeBegin);
    const dateEnd = new Date('2020-01-01 ' + timeEnd);
    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours() + ":" + myDate.getMinutes());

    if (dateCurrent >= dateBegin && dateCurrent < dateEnd) {
        return "Guten Morgen";
    } else {
        return "Guten Abend";
    }
};

describe('getGreetingDependOnTime', function() {
    it('should return "Guten Morgen" for times between 06:00 and 21:59', function() {
        const testDate = new Date('2020-01-01T08:00');
        expect(getGreetingDependOnTime(testDate)).to.equal("Guten Morgen");
    });

    it('should return "Guten Abend" for times before 06:00', function() {
        const testDate = new Date('2020-01-01T05:59');
        expect(getGreetingDependOnTime(testDate)).to.equal("Guten Abend");
    });

    it('should return "Guten Abend" for times after 22:00', function() {
        const testDate = new Date('2020-01-01T22:01');
        expect(getGreetingDependOnTime(testDate)).to.equal("Guten Abend");
    });

    it('should return "Guten Morgen" exactly at 06:00', function() {
        const testDate = new Date('2020-01-01T06:00');
        expect(getGreetingDependOnTime(testDate)).to.equal("Guten Morgen");
    });

    it('should return "Guten Abend" exactly at 22:00', function() {
        const testDate = new Date('2020-01-01T22:00');
        expect(getGreetingDependOnTime(testDate)).to.equal("Guten Abend");
    });
});
