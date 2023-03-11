const amountOfW2Employees_input = document.querySelector(
  "#amountOfW2Employees"
);
const amountOfW2Employees_value = document.querySelector(
  "#amountOfW2EmployeesValue"
);
const amountOfOwners_input = document.querySelector(
  "#amountOfOwners"
);
const amountOfOwners_value = document.querySelector(
  "#amountOfOwnersValue"
);
const amountOfHighEarners_input = document.querySelector(
  "#amountOfHighEarners"
);
const amountOfHighEarners_value = document.querySelector(
  "#amountOfHighEarnersValue"
);


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
