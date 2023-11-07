function calculateAge(birthDate) {
  const currentDate = new Date();
  const birthDateObj = new Date(birthDate);

  const years = currentDate.getFullYear() - birthDateObj.getFullYear();
  const birthMonth = birthDateObj.getMonth();
  const currentMonth = currentDate.getMonth();
  let months = currentMonth - birthMonth;
  const currentDay = currentDate.getDate();
  const birthDay = birthDateObj.getDate();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let days = currentDay - birthDay;
  if (days < 0) {
    const prevMonthLastDay = new Date(
      currentDate.getFullYear(),
      currentMonth,
      0
    ).getDate();
    days += prevMonthLastDay;
    months -= 1;
  }

  return { years, months, days };
}

function validateDate() {
  const dayInput = document.querySelector(".day-input");
  const monthInput = document.querySelector(".month-input");
  const yearInput = document.querySelector(".year-input");

  const showYears = document.querySelector(".year-value");
  const showMonths = document.querySelector(".month-value");
  const showDays = document.querySelector(".day-value");

  const dayError = document.querySelector(".day-error");
  const monthError = document.querySelector(".month-error");
  const yearError = document.querySelector(".year-error");

  const dayValue = dayInput.value.trim();
  const monthValue = monthInput.value.trim();
  const yearValue = yearInput.value.trim();

  const currentYear = new Date().getFullYear();

  console.log(currentYear);

  if (dayValue === "") {
    dayError.textContent = "This field is required";
  } else {
    dayError.textContent = "";

    if (!isNumber(dayValue) || dayValue < 1 || dayValue > 31) {
      dayError.textContent = "Must be a valid day";
    } else {
      dayError.textContent = "";
    }
  }

  if (monthValue === "") {
    monthError.textContent = "This field is required";
  } else {
    monthError.textContent = "";

    if (!isNumber(monthValue) || monthValue < 1 || monthValue > 12) {
      monthError.textContent = "Must be a valid month";
    } else {
      monthError.textContent = "";
    }
  }

  if (yearValue === "") {
    yearError.textContent = "This field is required";
  } else {
    yearError.textContent = "";

    if (!isNumber(yearValue) || yearValue < 1900 || yearValue > currentYear) {
      yearError.textContent = "Must be a valid year";
    } else {
      yearError.textContent = "";
    }
  }

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
  const currentYear = new Date().getFullYear();
  if (
    yearValue < 1900 ||
    yearValue > currentYear ||
    monthValue < 1 ||
    monthValue > 12 ||
    dayValue < 1
  ) {
    return false;
  }

  const lastDayInMonth = new Date(yearValue, monthValue, 0).getDate();
  return dayValue <= lastDayInMonth;
}

function isNumber(str) {
  const regex = /^[+-]?\d+(\.\d+)?$/;

  return regex.test(str);
}
