let inputs = document.querySelectorAll(".valor");

let url = "http://api.exchangeratesapi.io/v1/latest?access_key=87f79ab2572cb57738c45b3e8024b14a"

fetch(url)
  .then(r => r.json()) 
  .then(data => {
    document.querySelector("#COP").dataset.cambio = data.rates.COP;
    document.querySelector("#USD").dataset.cambio = data.rates.USD;
    document.querySelector("#JPY").dataset.cambio = data.rates.JPY;
    inputs.forEach(input => {
      input.value = input.dataset.cambio;   
    });
  })
  .catch(error => console.error(error) )


function valorModificado(input){
  let factor = input.value / input.dataset.cambio;

  inputs.forEach(input => {
    input.value = (input.dataset.cambio * factor).toFixed(2);   
  });

  
}