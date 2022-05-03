import transformToCreationDate from "../../utils/CreationDate.util";

it("Transform date to format mm/dd", () => {
  const dateOne = new Date("2012.08.10");
  expect(transformToCreationDate(dateOne)).toBe("08/10");

  const dateTwo = new Date("Sat Dec 07 1974 03:44:09 GMT-0400");
  expect(transformToCreationDate(dateTwo)).toBe("12/07");

  const dateThree = new Date("01/28/2022 03:46:51 PM");
  expect(transformToCreationDate(dateThree)).toBe("01/28");
});
