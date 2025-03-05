const { differenceInHours, differenceInMinutes, format } = require("date-fns");

const getFormattedDate = (date) => {
  date = new Date(date);
  const currentDate = new Date();
  const hoursDif = differenceInHours(currentDate, date);
  const minutesDif = differenceInMinutes(currentDate, date);

  const formattedDate = format(date, "MM-dd-yyyy");

  if (hoursDif <= 24) {
    return hoursDif < 1
      ? `${minutesDif} minutes ago`
      : hoursDif == 1
      ? `${hoursDif} hour ago`
      : `${hoursDif} hours ago`;
  } else {
    return `${formattedDate}`;
  }
};

module.exports = { getFormattedDate };
