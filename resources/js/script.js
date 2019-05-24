    var btn = document.getElementById("btn");
    var result = document.getElementById("result");


    function fetchData() {
        var name = document.getElementById("name").value;
        var age = Number(document.getElementById("age").value);
        var horsePower = Number(document.getElementById("horsepower").value);
        var countries = document.getElementById("countries");
        var selectedCountry = countries.options[countries.selectedIndex].value;
        if (isNaN(age)) {
            document.getElementById("result").innerHTML = "Age must be a number!";
        } else if (isNaN(horsePower)) {
            document.getElementById("result").innerHTML = "Horsepower must be a number!";
        } else {
            var insurance = calculateInsurance(age, selectedCountry, horsePower);
            document.getElementById("result").innerHTML = name + ", your insurance costs " + insurance.toFixed(2) + "€";
        }

    }


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


    btn.addEventListener("click", fetchData, false);