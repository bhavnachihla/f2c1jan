const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];


  // 1. Print Developers
  function printDeveloper() {
    data.forEach(item=>item.profession=="Developer"?console.log(item):null);
  }

   // 2. Add Data
   function addData() {
    let name = prompt("enter your name");
    let age = prompt("enter your age");
    let profession = prompt("enter your profession");
    data.push({
        name,
        age,
        profession,
    });
    console.log("updated data",data);
  }