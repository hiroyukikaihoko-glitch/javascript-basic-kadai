// 本日を取得　Mon Aug 17 2026 07:01:24 GMT+0900 (日本標準時)と表示
// const today = new Date();
// console.log(today);
// 本日を取得
const today = new Date();
// 年を取得
const year = today.getFullYear();
// console.log(year);
// 月を取得
// const month = today.getMonth();
// console.log(month);
// 月を取得+1
const month = today.getMonth() + 1;
// console.log(month);
// 日を取得
const day = today.getDate();
// console.log(day);

// 年月日を表示
console.log(year + "年" + month + "月" + day + "日");
