const HeroRepository = require('./heroRepository');

test('Testing heroRepository.find method', () => {

  let heroRepository = new HeroRepository({
    file: './database/data.json'
  })

  let expected = [{"age": 100, "id": 1, "name": "XuxaDaSilva", "power": "Ancient"}, {"id":2,"name":"Chapolin"}]

  return heroRepository.find().then(data => {
    expect(data).toStrictEqual(expected);
  });
});


test('Testing heroRepository.create method', () => {

  let heroRepository = new HeroRepository({
    file: './database/data.json'
  })

  return heroRepository.create({ id: 2, name: 'Chapolin' }).then(data => {
    expect(data).toStrictEqual(data);
  });
});