import { add, subtract, multiply, divide,  } from "./calculator";

test("add four to eightteen is twentytwo", () => {
  // Arrange
  const a: number = 4;
  const b: number = 18;
  const expected: number = 22;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract one from eight is seven", () => {
  // Arrange
  const a: number = 8;
  const b: number = 1;
  const expected: number = 7;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply five by three is fifteen", () => {
  // Arrange
  const a: number = 5;
  const b: number = 3;
  const expected: number = 15;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide ten by two is five", () => {
  // Arrange
  const a: number = 10;
  const b: number = 2;
  const expected: number = 5;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("devide by zero throws an error", () => {
  // Arrange
  const a: number = 10;
  const b: number = 0;

  // Assert
  expect(() => { divide(a, b) }).toThrow("Division by zero is not allowed.");
});