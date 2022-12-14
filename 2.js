let obj = {
    firstName: "Alex",
    lastName: "Doe",
  }
  
  function checkIf (str, obj) {
      return (str in obj)
  }
  
  let result1 = checkIf ("firstName", obj); 
  let result2 = checkIf ("pseudonym", obj); 
  console.log (result1, result2); 