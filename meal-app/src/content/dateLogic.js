function createDateController(initialDate = new Date()) {
  let currentDate = new Date(initialDate);

  return {
    nextDay() {
      currentDate.setDate(currentDate.getDate() + 1);
      return this.format();
    },
    prevDay() {
      currentDate.setDate(currentDate.getDate() - 1);
      return this.format();
    },

    format() {
      const weekday = currentDate.toLocaleString("en-US", { weekday: "short" });
      const month = currentDate.toLocaleString("en-US", { month: "short" });
      const date = currentDate.getDate();
      const year = currentDate.getFullYear();

      return `${weekday}, ${month} ${date}-${year}`;
    },
    formatFull() {
      return this.format();
    },
    getDBDate() {
      const date = currentDate.getDate();
      const year = currentDate.getFullYear();
      return `${date}${year}`;
    },
  };
}
export function getTodayFormatted() {
  const today = new Date();

  const weekday = today.toLocaleString("en-US", { weekday: "short" });
  const month = today.toLocaleString("en-US", { month: "short" }); // short month
  const date = today.getDate();
  const year = today.getFullYear();

  return `${weekday}, ${month} ${date}-${year}`;
}

export const getFullDaysName = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};
export default createDateController;
