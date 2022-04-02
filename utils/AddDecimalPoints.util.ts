export default function addDecimalPoints(num: number) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
