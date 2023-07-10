const names = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const groupSize = 4;

// 1. calculate the lenght of names array for the for of loop
// 2. slice of 0 to groupSize and from sizeGroup to gS **gS

const printGroups = function(names, groupSize) {
  const numberOfGroups = Math.ceil(names.length / groupSize);

  for (let i = 0; i < numberOfGroups; i++) {
    const start = i * groupSize;
    const end = start + groupSize;
    const group = names.slice(start, end);
    console.log(`Group ${i + 1}: ${group.join(", ")}`);
  }
};

printGroups(names, groupSize);
