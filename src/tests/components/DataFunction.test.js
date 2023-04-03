import {
  kelvinToCelsius,
  timeConvert,
  getDay,
  dateFromTime,
  longDateFromTime,
} from "../../components/DataFunction";

describe("kelvinToCelsius", () => {
  test("converts 0 Kelvin to -273 Celsius", () => {
    expect(kelvinToCelsius(0)).toBe(-273);
  });

  test("converts 300 Kelvin to 26 Celsius", () => {
    expect(kelvinToCelsius(300)).toBe(27);
  });
});

describe("timeConvert", () => {
  test('converts 1616371624 to "08:33"', () => {
    expect(timeConvert(1616371624)).toBe("00:07");
  });

  test('converts 1616375736 to "01:15"', () => {
    expect(timeConvert(1616375736)).toBe("01:15");
  });
});

describe("getDay", () => {
  test('returns "Monday" for 1616371624', () => {
    expect(getDay(1616371624)).toBe("Monday");
  });
});

describe("dateFromTime", () => {
  test("returns the correct date for timestamp 1616427400000", () => {
    const timestamp = 1616427400000;
    const expectedDate = "22/03";
    const actualDate = dateFromTime(timestamp);
    expect(actualDate).toBe(expectedDate);
  });

  test("returns the correct date for timestamp 1616513800000", () => {
    const timestamp = 1616513800000;
    const expectedDate = "23/03";
    const actualDate = dateFromTime(timestamp);
    expect(actualDate).toBe(expectedDate);
  });
});

describe("longDateFromTime", () => {
  test('converts 1616371624 to "Monday, March 22, 2021"', () => {
    expect(longDateFromTime(1616371624)).toBe("Monday, March 22, 2021");
  });

  test('converts 1616457983 to "Tuesday, March 23, 2021"', () => {
    expect(longDateFromTime(1616457983)).toBe("Tuesday, March 23, 2021");
  });
});
