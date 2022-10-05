let human = {
  eyes: 2,
  nose: 1,
  ears: 2,
  limbs: 4
};

let male = {
  boneWeight: "more",
  height: "more",
  __proto__: human,
}

let female = {
  boneWeight: "less",
  height: "less",
  __proto__: human,
}

console.log(human);
console.log(male);
console.log(female);

console.log(`females have ${female.boneWeight} bone weight and have ${female.limbs} limbs`);

console.log(`males have ${male.eyes} eyes and ${male.nose} nose`);

console.log(Object.getPrototypeOf(female));

console.log(male.__proto__);