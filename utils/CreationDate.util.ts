export default function transformToCreationDate(_date: Date) {
  const date = new Date(_date);
  return [
    fillSingleNumbers(date.getMonth() + 1),
    "/",
    fillSingleNumbers(date.getUTCDate()),
  ].join("");
}

function fillSingleNumbers(num: number) {
  return num < 10 ? `0${num.toString()}` : num.toString();
}
