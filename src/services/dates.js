export function returnDays(month, year) {
  let arr = [];
  for (let i = 1; i <= daysInMonth(month, year); i++) {
    arr.push(i);
  }
  return arr;
}
export function returnYears() {
  let arr = [];
  for (let i = 1900; i <= 2017; i++) {
    arr.push(i);
  }
  return arr;
}
export function returnMonth() {
  let arr = [];
  for (let i = 1; i <= 12; i++) {
    arr.push(i);
  }
  return arr;
}
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
var date = new Date();

export const currYear = date.getFullYear();
export const currMonth = date.getMonth() + 1;
export const currDay = date.getDate();
