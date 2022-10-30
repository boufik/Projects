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
  
  // Create a factory function for pAequor
  function pAequorFactory(num, DNABasesArray){
    return {
      specimenNum: num,
      dna: DNABasesArray,
      mutate(){
        let randomIndex = Math.floor(Math.random() * 15);
        let base = this.dna[randomIndex];
        let newBase = returnRandBase();
        while(base === newBase){
          newBase = returnRandBase();
        }
        // I will copy the dna array to new array
        let newDNA = this.dna.slice();
        newDNA[randomIndex] = newBase;
        return newDNA;
      },
      compareDNA(otherPAequor){
        let sum = 0;
        for(let i=0; i<15; i++){
          if(this.dna[i] === otherPAequor.dna[i]){
            sum += 1;
          }
        }
        console.log(`We compared the 2 DNA chains of pAequors with ids: ${this.specimenNum} and ${otherPAequor.specimenNum}.`);
        let percentage = (Math.round(10000 * sum / 15)) / 10000;
        console.log("We found out that these 2 pAequors samples are similar in the percentage of " + (100 * percentage) + "%.");
      },
      willLikelySurvive(){
        let sum = 0;
        for(let i=0; i<15; i++){
          if(this.dna[i] === 'C' || this.dna[i] === 'G'){
            sum += 1;
          }
        }
        if(sum / 15 >= 0.6){
          return true;
        }
        else{
          return false;
        }
      },
      complementaryStrand(){
        let complement = [];
        for(let i=0; i<15; i++){
          if(this.dna[i] === 'A'){
            complement.push('T');
          }
          else if(this.dna[i] === 'T'){
            complement.push('A');
          }
          else if(this.dna[i] === 'G'){
            complement.push('C');
          }
          else if(this.dna[i] === 'C'){
            complement.push('G');
          }
        }
        return complement;
      }
    };  // END OF RETURNED OBJECT
  }  // END OF FACTORY FUNCTION
  
  let dnaBases = mockUpStrand();
  let pAequor = pAequorFactory(1, dnaBases);
  let dnaBases2 = mockUpStrand();
  let pAequor2 = pAequorFactory(2, dnaBases2);
  console.log("pAequors:");
  console.log(pAequor);
  console.log(pAequor2);
  console.log();
  console.log("DNA chains of the 2 pAequors and the 2 mutations of them:");
  console.log(dnaBases);
  console.log(pAequor.mutate());
  console.log();
  console.log(dnaBases2);
  console.log(pAequor2.mutate());
  console.log();
  console.log("Compare the 2 DNAs:");
  pAequor.compareDNA(pAequor2);
  console.log();
  console.log("pAequor will likely survive? " + pAequor.willLikelySurvive());
  console.log("pAequor2 will likely survive? " + pAequor2.willLikelySurvive());
  
  // Now, I want to create 30 instances of pAequor object (using the pAequorFactory() function), that can survive in their natural environment
  pAequorArray = [];
  let counter = 0;
  while(pAequorArray.length < 30){
    counter++;
    let pAequorInstance = pAequorFactory(counter, mockUpStrand());
    if(pAequorInstance.willLikelySurvive() === true){
      pAequorArray.push(pAequorInstance);
    }
  }
  //console.log();
  //console.log(pAequorArray);
  
  // Now, the variable 'pAequorArray' includes the 30 specimens that survived
  console.log();
  console.log("Complementary DNA chains: ");
  console.log(pAequor.complementaryStrand());
  console.log(pAequor2.complementaryStrand());
  
  // Last task is to scan the array of pAequor instances and find the 2 most related instances
  let maxPercentage = 0;
  let maxI = 0;
  let maxJ = 0;
  for(let i=0; i<pAequorArray.length; i++){
    let instance1 = pAequorArray[i];
    for(let j=0; j<pAequorArray.length; j++){
      let instance2 = pAequorArray[j];
      if(i != j){  // In order to compare the different instances
        let sum = 0;
        for(let k=0; k<instance1.dna.length; k++){
          if(instance1.dna[k] === instance2.dna[k]){
            sum += 1;
          }
        }
        let percentage = sum / instance1.dna.length;
        if(percentage > maxPercentage){
          maxPercentage = percentage;
          maxI = i;
          maxJ = j;
        }  // END OF IF-CASE FOR 'MAX' VALUES
      }  // END OF IF-CASE THAT CHECKS THE DIFFERENT INSTANCES
    }  // END OF SECOND FOR-LOOP
  }  // END OF FIRST FOR-LOOP
  
  console.log();
  console.log();
  console.log("The 2 pAequors of the pAequorArray, that are the most related are those with ids: " + pAequorArray[maxI].specimenNum + " and " + pAequorArray[maxJ].specimenNum + ".");
  console.log("Max percentage = " + (100 * maxPercentage) + "%.");
  console.log("DNA Chain of pAequor with id = " + pAequorArray[maxI].specimenNum);
  console.log(pAequorArray[maxI].dna);
  console.log("DNA Chain of pAequor with id = " + pAequorArray[maxJ].specimenNum);
  console.log(pAequorArray[maxJ].dna);