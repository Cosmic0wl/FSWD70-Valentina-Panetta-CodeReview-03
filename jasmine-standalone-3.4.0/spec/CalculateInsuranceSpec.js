// TEST 1
describe("Calculate insurance for Austria with horsepower 100 and age 30", function(){
    it("should return 383.33", function() {
        expect(calculateInsurance(30,"austria",100)).toEqual((100*100)/30+50);
    });
});

//TEST 2
describe("Calculate insurance for Hungary with horsepower 100 and age 30", function(){
    it("should return 500", function() {
        expect(calculateInsurance(30,"hungary",100)).toEqual((100*120)/30+100);
    });
});

//TEST 3
describe("Calculate insurance for Greece with horsepower 100 and age 30", function(){
    it("should return 504.54", function() {
        expect(calculateInsurance(30,"greece",100)).toEqual((100*150)/(30+3)+50);
    });
});

