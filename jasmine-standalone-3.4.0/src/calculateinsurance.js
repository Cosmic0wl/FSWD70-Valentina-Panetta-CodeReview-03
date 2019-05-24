    function calculateInsurance(age, selectedCountry, horsePower) {
        var insurance = 0;
        if (selectedCountry == "austria") {
            insurance = (horsePower * 100) / age + 50;
        } else if (selectedCountry == "hungary") {
            insurance = (horsePower * 120) / age + 100;
        } else if (selectedCountry == "greece") {
            insurance = (horsePower * 150) / (age + 3) + 50;
        }
        return insurance;
    }
