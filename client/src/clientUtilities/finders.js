
//FINDERS AND PARSERS

//determine if a string begins with any of an array of other strings
function doesThisStartWithOneOfThese(givenString, givenArray) {
  if (givenArray === undefined) {
    return false;
  }
  // console.log("givenString: ", givenString)
  // console.log("givenArray: ", givenArray)
  for (let value of givenArray) {
    if (givenString.toLowerCase().startsWith(value + ' ') && (value.length > 1) || givenString.toLowerCase() === value) {
      return true
    }
  }
  return false
}

function getOneOfTheseOffThat(givenArray, givenString) {
  for (let value of givenArray) {
    if (givenString.toLowerCase().startsWith(value) && (value.length > 1)) {
      return value
    } else if (givenString.split(" ")[0].toLowerCase() === value.toLowerCase()) {
      return value
    }
  }
  return false
}

//single value startWith() that tests for space or equal value
function startsWithOrIs(thing, stringy) {
  if (stringy.toLowerCase().startsWith(`${thing} `) || ((stringy.toLowerCase().startsWith(thing)) && (stringy.length === thing.length))) {
    return true
  }
  return false
}

//slice off any string from an array that is found at the beginning of another string
function takeTheseOffThat(these, that) {
  for (let thing of these) {
    if (that.toLowerCase().startsWith(thing)) {
      return that.slice(thing.length).trim();
    }
  }

  return that;
}

//see if a string is equal to any of the strings in an array
function doesThisEqualThat(thisThing, thatStuff) {
  for (let thatThing of thatStuff) {
    if (thisThing.toLowerCase().trim() === thatThing) {
      return true;
    }
  }
  return false;
}

//see if all the items in an array are the same
function allTheSame(arrayy){
  const distinctSet = new Set(arrayy);
  return (distinctSet.size === 1) ? true : false;
}

export default doesThisStartWithOneOfThese;

export {
  doesThisStartWithOneOfThese,
  startsWithOrIs,
  takeTheseOffThat,
  doesThisEqualThat,
  getOneOfTheseOffThat,
  allTheSame
}