const answers = require(`./answers`);

test('describe works', () => {
  expect(answers.describeAge()).toBe('This works!')
});

answers.describeAge();
