function generate(prefixes, nouns, suffixes){

  var prefix = getRandomElement(prefixes);
  var noun = getRandomElement(nouns);
  var suffix = getRandomElement(suffixes);

  return (prefix + " " + noun + " " + suffix).toUpperCase();
}

function getRandomElement(items){
  return items[Math.floor(Math.random()*items.length)];
}
