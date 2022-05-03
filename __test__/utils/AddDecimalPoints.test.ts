import addDecimalPoints from "../../utils/AddDecimalPoints.util";

it("Adds Decimal Points to Numbers each 3 digits", () => {
  expect(addDecimalPoints(1000)).toBe("1.000");

  expect(addDecimalPoints(34555)).toBe("34.555");

  expect(addDecimalPoints(99999999)).toBe("99.999.999");

  expect(addDecimalPoints(0)).toBe("0");

  expect(addDecimalPoints(10)).toBe("10");
});
