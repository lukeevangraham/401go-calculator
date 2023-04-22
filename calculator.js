// ALL MY SELECTORS
const form = document.querySelector("#calcForm");
const totalAnnualCost = document.querySelector("#totalAnnualCost");
const costAfterTaxCredits = document.querySelector("#costAfterTaxCredits");
const amountOfW2Employees_input = document.querySelector(
  "#amountOfW2Employees"
);
const amountOfW2Employees_value = document.querySelector(
  "#amountOfW2EmployeesValue"
);
const amountOfOwners_input = document.querySelector("#amountOfOwners");
const amountOfOwners_value = document.querySelector("#amountOfOwnersValue");
const amountOfHighEarners_input = document.querySelector(
  "#amountOfHighEarners"
);
const amountOfHighEarners_value = document.querySelector(
  "#amountOfHighEarnersValue"
);
const planSelected = document.querySelector("#planSelected");
const willOfferAutoEnrollment = document.querySelector(
  "#willOfferAutoEnrollment"
);
const currentlyOffers401k = document.querySelector("#currentlyOffers401k");

// FORMAT OUR NUMBERS
function numberWithCommas(x) {
  if (x > 999) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else return x;
}

// RESPOND TO SLIDER INPUT FOR NUMBER OF EMPLOYEES
amountOfW2Employees_input.addEventListener("input", (e) => {
  amountOfW2Employees_value.textContent = e.target.value;
});

// RESPOND TO SLIDER INPUT FOR NUMBER OF OWNERS
amountOfOwners_input.addEventListener("input", (e) => {
  amountOfOwners_value.textContent = e.target.value;
});

// RESPOND TO SLIDER INPUT FOR NUMBER OF HIGH EARNERS
amountOfHighEarners_input.addEventListener("input", (e) => {
  amountOfHighEarners_value.textContent = e.target.value;
});

// RESPOND TO FORM CHANGES
form.addEventListener("change", (e) => {
  let participantMultiplier = 9;

  const employeesEntered = Number(amountOfW2Employees_input.value);
  const highEarnersEntered = Number(amountOfHighEarners_value.value);
  let totalCost;

  const calculateTaxCredits = () => {
    employeesEntered <= 50 &&
    highEarnersEntered < employeesEntered &&
    currentlyOffers401k.checked == false &&
    willOfferAutoEnrollment.checked === true
      ? (costAfterTaxCredits.textContent = "$0.00")
      : (costAfterTaxCredits.textContent = totalCost);

    totalAnnualCost.textContent = totalCost;
  };

  if (employeesEntered > 50) {
    if (employeesEntered <= 100) {
      participantMultiplier = 8;
    } else if (employeesEntered <= 200) {
      participantMultiplier = 7;
    } else if (employeesEntered <= 300) {
      participantMultiplier = 6;
    } else if (employeesEntered <= 400) {
      participantMultiplier = 5;
    } else if (employeesEntered <= 500) {
      participantMultiplier = 4;
    }
  }

  // IF NOT OFFERING AUTO-ENROLLMENT WARN THEM
  let insertedContent = document.querySelector(".insertedContent");
  willOfferAutoEnrollment.checked === false
    ? document
        .querySelector("#autoEnrollment")
        .insertAdjacentHTML(
          "afterend",
          `<div class='insertedContent'>Auto-enrollment will be required in the future and you can miss out on thousands of dollars by turning it off.  We strongly recommend setting up automatic enrollment.</div>`
        )
    : insertedContent
    ? insertedContent.parentNode.removeChild(insertedContent)
    : null;

  // HANDLE THE SOLO K PLAN (Just one or zero employees, one or two owners (spouse could count as an owner))
  const handleSoloKPlan = (callback) => {
    if (employeesEntered <= 1 && amountOfOwners_value.value <= 2) {
      totalAnnualCost.textContent = "$200.00";
      costAfterTaxCredits.textContent = "$200.00";
    } else {
      callback();
    }
  };

  // UPDATE TOTAL ANNUAL COST AND COST AFTER TAX CREDITS BASED ON SELECTED PLAN
  switch (planSelected.value) {
    case "GO-Premier":
      let calculatePremier = () => {
        totalCost = `$${numberWithCommas(
          (
            amountOfW2Employees_value.value * 0.6 * participantMultiplier +
            348
          ).toFixed(2)
        )}`;

        calculateTaxCredits();
      };

      handleSoloKPlan(calculatePremier);

      break;
    case "GO-Plus":
      let calculatePlus = () => {
        totalCost = `$${numberWithCommas(
          (
            amountOfW2Employees_value.value * 0.6 * participantMultiplier +
            348
          ).toFixed(2)
        )}`;

        calculateTaxCredits();
      };

      handleSoloKPlan(calculatePlus);
      break;
    case "GO-Starter":
      let calculateStarter = () => {
        totalCost = `$${numberWithCommas(
          (amountOfW2Employees_value.value * 0.6 * 9).toFixed(2)
        )}`;

        calculateTaxCredits();
      };

      handleSoloKPlan(calculateStarter);
      break;

    default:
      break;
  }
});

document.querySelector("#calcForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(
    "current 401(k): ",
    document.querySelector('input[name="current401k"]:checked').value
  );

  console.log(
    "past 3 years 401(k): ",
    document.querySelector('input[name="past3Years401k"]:checked').value
  );

  console.log(
    "will offer auto-enrollment: ",
    document.querySelector('input[name="willOfferAutoEnrollment"]:checked')
      .value
  );

  console.log("# of W2 Employees: ", amountOfW2Employees_input.value);
  console.log("# of Owners: ", amountOfOwners_input.value);
  console.log("# of High Earners: ", amountOfHighEarners_input.value);
});
