const mainpage = document.getElementById("mainpage");
const button = document.createElement("button");
button.textContent="search";
mainpage.appendChild(button);

async function fetchData() {
    const endpoint=await axios.get("https://restcountries.eu/rest/v2/name/belgie?fullText=true");
    console.log(endpoint);
    console.log(endpoint.data[0].name + " is situated in " + endpoint.data[0].subregion + ". " +
        "It has a population of " + endpoint.data[0].population + " people.");
    console.log("The capital is " + endpoint.data[0].capital + ".");
}

fetchData();

async function fetchCurrencies() {
   const endpoint=await axios.get("https://restcountries.eu/rest/v2/name/germany?fullText=true");
    let string="The capital is " + endpoint.data[0].capital + " and you can pay with ";
    const currencies= endpoint.data[0].currencies;
   for (const currency of currencies) {
       console.log(currency);
       if (currency === currencies[0]) {
           string = string + (currency.name) + "'s";
       }
       else if (currency > currencies[0]) {
           string = string + " and " + (currency.name) + "'s"
       }
   }
   console.log(string);
   return string;
}

fetchCurrencies();


