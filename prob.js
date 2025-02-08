// you are tasked with building a system to check whether a person is eligible to vote or not.
// The person must be 18 years old and above to be eligible to vote.
// if the person is citizen of the country, then he/she is eligible to vote.
// if the person is not a citizen but has passed the citizenship test, then he/she is eligible to vote.
// if the person is under 18 years old, then he/she is not eligible to vote.


function isEligibleToVote(age, isCitizen, hasPassedCitizenshipTest) {
  if (age >= 18 && isCitizen) {
    return true;
  } else if (age >= 18 && hasPassedCitizenshipTest) {
    return true;
  } else {
    return false;
  }
}


console.log(isEligibleToVote(17, true, true)); 