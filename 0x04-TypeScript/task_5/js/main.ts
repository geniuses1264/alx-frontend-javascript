// Define a unique "brand" for MajorCredits and MinorCredits
interface MajorCredits {
  credits: number;
  // The brand ensures nominal typing
  brand: "major";
}

interface MinorCredits {
  credits: number;
  brand: "minor";
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major"
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor"
  };
}
const major1: MajorCredits = { credits: 20, brand: "major" };
const major2: MajorCredits = { credits: 30, brand: "major" };

const minor1: MinorCredits = { credits: 10, brand: "minor" };
const minor2: MinorCredits = { credits: 5, brand: "minor" };

console.log("Major Total:", sumMajorCredits(major1, major2));
console.log("Minor Total:", sumMinorCredits(minor1, minor2));
