function calculateAge(birthDate) {
  const currentDate = new Date();
  const birthDateObj = new Date(birthDate);

  const ageInMilliseconds = currentDate - birthDateObj;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;

  const years = Math.floor(ageInDays / 365);
  const remainingDays = ageInDays % 365;
  const months = Math.floor(remainingDays / 30);
  const days = Math.floor(remainingDays % 30);

  return { years, months, days };
}

function validateDate() {
  const dayInput = document.querySelector(".day-input");
  const monthInput = document.querySelector(".month-input");
  const yearInput = document.querySelector(".year-input");

  const showYears = document.querySelector(".year-value");
  const showMonths = document.querySelector(".month-value");
  const showDays = document.querySelector(".day-value");

  const dayValue = dayInput.value;
  const monthValue = monthInput.value;
  const yearValue = yearInput.value;

  if (isNaN(dayValue) || isNaN(monthValue) || isNaN(yearValue)) {
    document.getElementById("result").textContent =
      "Invalid input. Please enter valid numbers for dayValue, monthValue, and year.";
  } else {
    if (isValidDate(yearValue, monthValue, dayValue)) {
      document.getElementById("result").textContent = "Valid date!";

      const birthDate = new Date(`${yearValue}-${monthValue}-${dayValue}`);

      const age = calculateAge(birthDate);

      showYears.textContent = age.years;
      showMonths.textContent = age.months;
      showDays.textContent = age.days;
    } else {
      document.getElementById("result").textContent =
        "Invalid date. Please enter a valid date.";
    }
  }
}

function isValidDate(yearValue, monthValue, dayValue) {
  if (
    yearValue < 1900 ||
    yearValue > 2099 ||
    monthValue < 1 ||
    monthValue > 12 ||
    dayValue < 1
  ) {
    return false;
  }

  const lastDayInMonth = new Date(yearValue, monthValue, 0).getDate();
  return dayValue <= lastDayInMonth;
}
