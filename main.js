async function fetchData() {
    const endpoint=await axios.get("https://restcountries.eu/rest/v2/name/belgie?fullText=true");
    console.log(endpoint);
    console.log(endpoint.data[0].name + " is situated in " + endpoint.data[0].subregion + ". " +
        "It has a population of " + endpoint.data[0].population + " people.");
    console.log("The capital is " + endpoint.data[0].capital) +".";
}

fetchData();

const mainpage = document.getElementById("mainpage");
const button = document.createElement("button");
button.textContent="search";
mainpage.appendChild(button);

