const { generateInstance } = require('./heroFactory');


test('Testing heroRepository.find method', () => {

  let expected = [{"age": 100, "id": 1, "name": "XuxaDaSilva", "power": "Ancient"}, {"id":2,"name":"Chapolin"}]

  return generateInstance().find().then(data => {
    expect(data).toStrictEqual(expected);
  });
});


test('Testing heroRepository.create method', () => {

  return generateInstance().create({ id: 2, name: 'Chapolin' }).then(data => {
    expect(data).toStrictEqual(data);
  });
});