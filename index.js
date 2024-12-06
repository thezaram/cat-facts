const req = new XMLHttpRequest();

req.open("GET", "https://catfact.ninja/facts");
req.responseType = "json";
let counter = 0;
req.onload = function () {
  if (req.status === 200) {
    const catFactBtn = document.getElementById("catfact-btn");
    const catFact = document.getElementById("catfact");
    const responseData = req.response;
    
    
    const catFacts = responseData;

    catFactBtn.addEventListener("click", function () {
      catFact.textContent = catFacts.data[counter].fact;
      counter += 1;
      if (counter == 10) {
        counter = 0;
      }
    });
    
  } else {
    console.error("Request failed with status:", req.status);
  }
};

req.send();
