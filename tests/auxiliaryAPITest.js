const { expect } = require('chai');
const { celsiusToFahrenheit, fahrenheitToCelcius, getGreetingDependOnTime } = require('../public/js/auxiliaryAPI');

describe('celsiusToFahrenheit()', function () {
    it('should correctly convert Celsius to Fahrenheit', function () {
        expect(celsiusToFahrenheit(0)).to.equal(32);
        expect(celsiusToFahrenheit(100)).to.equal(212);
        expect(celsiusToFahrenheit(-40)).to.equal(-40);
    });

    it('should handle floating point numbers', function () {
        expect(celsiusToFahrenheit(37.5)).to.be.closeTo(99.5, 0.1);
    });
});

describe('fahrenheitToCelcius()', function () {
    it('should correctly convert Fahrenheit to Celsius', function () {
        expect(fahrenheitToCelcius(32)).to.equal(0);
        expect(fahrenheitToCelcius(212)).to.equal(100);
        expect(fahrenheitToCelcius(-40)).to.equal(-40);
    });

    it('should handle floating point numbers', function () {
        expect(fahrenheitToCelcius(99.5)).to.be.closeTo(37.5, 0.1);
    });
});

describe('getGreetingDependOnTime()', function () {
    it('should return "Guten Morgen" for morning times', function () {
        const morningTime = new Date('2020-01-01T07:30:00');
        expect(getGreetingDependOnTime(morningTime)).to.equal("Guten Morgen");
    });

    it('should return "Guten Abend" for evening times', function () {
        const eveningTime = new Date('2020-01-01T23:00:00');
        expect(getGreetingDependOnTime(eveningTime)).to.equal("Guten Abend");
    });
});
