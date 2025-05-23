interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

const sumMajorCredits = (majorCredits: MajorCredits[]): number => {
  return majorCredits.reduce((acc, curr) => acc + curr.credits, 0);
};

const sumMinorCredits = (minorCredits: MinorCredits[]): number => {
  return minorCredits.reduce((acc, curr) => acc + curr.credits, 0);
};

const majorCredits: MajorCredits[] = [
  { credits: 3, brand: "Math" },
  { credits: 4, brand: "Science" },
  { credits: 2, brand: "Engineering" },
];

const minorCredits: MinorCredits[] = [
  { credits: 1, brand: "Art" },
  { credits: 2, brand: "History" },
];

console.log("Total Major Credits:", sumMajorCredits(majorCredits));
console.log("Total Minor Credits:", sumMinorCredits(minorCredits));
