// 変数numに1以上の正の数を代入
var num = 150;

// 1未満で再入力
if (num < 1) {
      console.log("１以上の数字を入れてください");
}
else if (num % 15 === 0) {
      console.log("3と5の倍数です");
}
// ÷3で余りゼロで3の倍数
else if (num % 3 === 0) {
      console.log("3の倍数です");
}
// ÷5で余りゼロで5の倍数
else if (num % 5 === 0) {
      console.log("5の倍数です");
}
// その他で数字表示
else {
      console.log(num);
}