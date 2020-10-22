const answers = require(`./answers`);

// Question 1
test('Question 1: hello', () => {
  expect(answers.hello('Carmen')).toBe("Hello, Carmen!");
  expect(answers.hello('Devonte')).toBe("Hello, Devonte!");
  expect(answers.hello('Reuben Ogbonna')).toBe("Hello, Reuben Ogbonna!");
});

// Question 2
test('Question 2: logEvenNumbers should log to the console', () => {
  global.console = { log: jest.fn() };
  answers.logEvenNumbers();
  expect(global.console.log).toHaveBeenCalledWith(2);
  expect(global.console.log).toHaveBeenCalledWith(4);
  expect(global.console.log).toHaveBeenCalledWith(6);
  expect(global.console.log).toHaveBeenCalledWith(50);
}); 

// Question 2
test('Question 2: logEvenNumbers should return "Why is 6 afraid of 7?"', () => {
  expect(answers.logEvenNumbers()).toBe("Why is 6 afraid of 7?");
}); 

// Question 3
test(`Question 3: findProduct`, () => {
  expect(answers.findProduct(5, 7)).toBe(35);
  expect(answers.findProduct(15, 10)).toBe(150);
  expect(answers.findProduct(25.75, 42)).toBe(1081.5);
});

// Question 4
test('Question 10: multisum', () => {
  expect(answers.multisum(17)).toBe(61);
  expect(answers.multisum(21)).toBe(102);
});

// Question 5
test('Question 5: stringy', () => {
  expect(answers.stringy(6)).toBe("XOXOXO");
  expect(answers.stringy(9)).toBe("XOXOXOXOX");
  expect(answers.stringy(4)).toBe("XOXO");
  expect(answers.stringy(7)).toBe("XOXOXOX");
});
