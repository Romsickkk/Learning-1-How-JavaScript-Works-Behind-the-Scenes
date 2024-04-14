function calcAge(birthYear) {
  const age = 2024 - birthYear;
  console.log(firstName);
  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1990 && birthYear <= 2010) {
      var zoomer = true;
      //Creating new variable with same name as other scopes variable
      const firstName = "Gevor";

      // Reassigning other scopes variable
      output = "New oputput";

      const str = `Oh, and you'r a zoomer, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(zoomer);
    console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Roma";
calcAge(1999);
