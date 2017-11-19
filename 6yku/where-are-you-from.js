// https://www.codewars.com/kata/where-are-you-from/train/javascript

// Description:

// If smile67 asks me: "Where are you from?" I will answer him: "I am from China." Because I'm different from his nationality. If crazyYuyang asks me: "Where are you from?" I will answer him: "I am from HeNan." Because both I and he are Chinese, but we come from different provinces.

// Give you two objects: you and me:

// you={Country:"AA", Province:"BB", City:"CC", Town:"DD", Street:"EE"}
// me ={Country:"AA", Province:"BB", City:"XX", Town:"YY", Street:"ZZ"}
// Then, you ask me a question:

// If the question is "Where are you from?"
// You should compare you and me, from country to street.
// The result should be the first diffrent place of me.

// result === "I am from XX."

// If no deffrence, the answer is:
// "Same as you."
// ------------------------------------------------------------------------
// If the question is "What (country/province/city/town/street) are you from?"
// You should compare the (country/province/city/town/street)
// between you and me.

// If you and me come from the same place, the answer is:
// "Same as you."

// If not, the answer is:
// "I am from ???."    ---> ??? is the place.
// ------------------------------------------------------------------------
// If the question is invalid (not in the above two formats)
// the answer is:
// "What are you saying?"
// Examples

// you={Country:"AA", Province:"BB", City:"CC", Town:"DD", Street:"EE"}
// me ={Country:"AA", Province:"BB", City:"XX", Town:"YY", Street:"ZZ"}

// fromWhere(you,me,"Where are you from?") === "I am from XX."

// fromWhere(you,me,"What country are you from?" === "Same as you."

// fromWhere(you,me,"What city are you from?" === "I am from XX."

// fromWhere(you,me,"What street are you from?" === "I am from ZZ."

// fromWhere(you,me,"How are you?" === "What are you saying?"

// fromWhere(you,me,"What university are you from?" === "What are you saying?")


// you={Country:"AA", Province:"BB", City:"CC", Town:"DD", Street:"EE"}
// me ={Country:"AA", Province:"BB", City:"CC", Town:"DD", Street:"EE"}

// fromWhere(you,me,"Where are you from?") === "Same as you."

// SOLUTION

function fromWhere(you, me, question) {
  if (question === 'Where are you from?') {
    for (const prop in me) {
      if (me[prop] !== you[prop]) return `I am from ${me[prop]}.`;
    }
    return 'Same as you.';
  }
  const whichPlace = question.replace(/What /, '').split(' ')[0];
  const whichPlaceKey =
    whichPlace.slice(0, 1).toUpperCase() + whichPlace.slice(1);
  return you[whichPlaceKey] === undefined
    ? 'What are you saying?'
    : you[whichPlaceKey] === me[whichPlaceKey]
      ? 'Same as you.'
      : `I am from ${me[whichPlaceKey]}.`;
}