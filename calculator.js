const form = document.querySelector("#calcForm");
const totalAnnualCost = document.querySelector("#totalAnnualCost");
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

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

  switch (planSelected.value) {
    case "GO-Premier":
      totalAnnualCost.textContent = `$${numberWithCommas(
        (
          amountOfW2Employees_value.value * 0.6 * participantMultiplier +
          348
        ).toFixed(2)
      )}`;
      break;
    case "GO-Plus":
      totalAnnualCost.textContent = `$${numberWithCommas(
        (
          amountOfW2Employees_value.value * 0.6 * participantMultiplier +
          348
        ).toFixed(2)
      )}`;
      break;
    case "GO-Starter":
      totalAnnualCost.textContent = `$${numberWithCommas(
        (amountOfW2Employees_value.value * 0.6 * 9).toFixed(
          2
        )
      )}`;
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
