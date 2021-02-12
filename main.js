const button = document.getElementById("button");
button.addEventListener("click", fetchData());
const input = document.getElementById("input");
input.addEventListener("keyup", showData);

function showData(e) {
    const condition=e.keyCode===13;
    if (condition) {
        showResults();
    }
}

async function fetchData() {
    const endpoint=await axios.get("https://restcountries.eu/rest/v2/name/belgie?fullText=true");
    console.log(endpoint);
    console.log(endpoint.data[0].name + " is situated in " + endpoint.data[0].subregion + ". " +
        "It has a population of " + endpoint.data[0].population + " people.");
    console.log("The capital is " + endpoint.data[0].capital + ".");
    const result= endpoint.data[0].name + " is situated in " + endpoint.data[0].subregion + ". "
        + "It has a population of " + endpoint.data[0].population + " people."
    return result;
}

fetchData();

async function fetchCurrencies() {
   const endpoint=await axios.get("https://restcountries.eu/rest/v2/name/belgium?fullText=true");
    let string= "The capital is " + endpoint.data[0].capital + " and you can pay with ";
    const currencies= endpoint.data[0].currencies;
   for (const currency of currencies) {
       console.log(currency);
       if (currency === currencies[0]) {
           string = string + (currency.name) + "'s.";
       }
       else if (currency > currencies[0]) {
           string = string + " and " + (currency.name) + "'s."
       }
   }
   console.log(string);
   return string;
}

fetchCurrencies();

async function fetchLanguages() {
    const endpoint=await axios.get("https://restcountries.eu/rest/v2/name/belgium?fullText=true");
    let string="They speak ";
    const languages= endpoint.data[0].languages;
    for (const language of languages) {
        if (language===languages[0]) {
            string = string + language.name;
        }
        if (languages.length===2 && language === languages[1]) {
            string = string + " and " + language.name + ".";
        }
        if (languages.length > 2 && language !==languages[0] && language !== languages[languages.length-1]) {
            string = string + ", " + language.name;
        }
        if (languages.length > 2 && language === languages[languages.length-1]) {
            string = string + " and " + language.name + ".";
        }
    }
    console.log(string);
    return string;
}

fetchLanguages();

async function fetchFlag() {
    const endpoint=await axios.get("https://restcountries.eu/rest/v2/name/belgium?fullText=true");
    const flagItem = document.createElement("img");
    const country=endpoint.data[0];
    flagItem.setAttribute("src", country.flag);
    flagItem.setAttribute("id", "flag");
    return flagItem;
}

async function showResults() {
    const endpoint=await axios.get("https://restcountries.eu/rest/v2/name/belgium?fullText=true");
    const country=endpoint.data[0];
    const page=document.getElementById("mainpage");
    const result=document.createElement("p");
    result.setAttribute('style', 'white-space: pre;');
    result.textContent= country.name + "\n" + await fetchData() + "\n" + await fetchCurrencies() + "\n" + await fetchLanguages();
    page.appendChild(await fetchFlag());
    page.appendChild(result);
    console.log(page);
}


