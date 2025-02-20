const { differenceInHours, format } = require("date-fns");

const getFormattedDate = (date) => {
//   const currentDate = new Date();
//   const hoursDif = differenceInHours(date, currentDate);

  const formattedDate = format(date, "MM/dd/yyyy");

//   if (hoursDif <= 23) {
//     return hoursDif <= 1 ?
//     `${hoursDif} hour ago` : 
//     `${hoursDif} hours ago`;
//   } else {
    return `${formattedDate}`;
//   }
};

module.exports = { getFormattedDate };
