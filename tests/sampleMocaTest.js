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
    it('should return 0 for an empty array', function () {
        expect(sum([])).to.equal(0);
    });
    
    it('should return the correct sum for negative numbers', function () {
        expect(sum([-1, -2, -3])).to.equal(-6);
    });
    
    it('should handle an array with a single element', function () {
        expect(sum([10])).to.equal(10);
    });
    

});