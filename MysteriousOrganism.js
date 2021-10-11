// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}



function pAequorFactory(specimenNum, dna) {
  return {
  specimenNum: specimenNum,
  dna: dna,
  mutate(dna) {
    const index = Math.floor(Math.random() * this.dna.length);
    const toChangeBase = this.dna[index];
    let altBases = ['A', 'T', 'C', 'G'];

    altBases.splice(altBases.indexOf(toChangeBase), 1);

    return this.dna[index] = altBases[Math.floor(Math.random() * 3)]
    },

  compareDNA(specimen2) {
    let count = 0;
    for (i = 0; i < this.dna.length; i++) {
      if (this.dna[i] === specimen2.dna[i]) {
        count += 1
      }
    }
    let percentEqual = Math.floor((count / this.dna.length) * 100);
    return `specimen #1 and specimen #2 have ${percentEqual}% DNA in common`
    },
  willLikelySurvive() {
    let cOrG = 0;
    for (let i = 0; i < this.dna.length; i++) {
      if (this.dna[i] === "C" || this.dna[i] === "G") {
        cOrG += 1
      };
    };
    if ((cOrG / this.dna.length) >= 0.6) {
      return true;
    } else {
      return false;
    }
  },
  }
}

let thirtySamples = [];
let sampleNum = 1;

do {
  let sample = pAequorFactory(sampleNum, mockUpStrand());

  if (sample.willLikelySurvive() === true) {
    thirtySamples.push([sample.specimenNum, sample.dna])
    sampleNum += 1;
  };
  
} while (sampleNum <= 30)

console.log(thirtySamples)
