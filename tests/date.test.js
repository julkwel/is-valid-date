const isValidDate = require('../lib/index');

test("Is valid date via string date with format Y-m-d", () => {
    expect(isValidDate("2022-04-16")).toBeTruthy();
});

test("Is valid date via number Y", () => {
    expect(isValidDate('2022')).toBeTruthy();
});

test("Is valid date via number Y", () => {
    expect(isValidDate('22')).toBeFalsy();
});

test("Is valid date an empty object", () => {
    expect(isValidDate({})).toBeFalsy();
})
