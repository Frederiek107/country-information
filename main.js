async function fetchData() {
    const data=await axios.get("https://restcountries.eu/rest/v2/name/belgie?fullText=true");
    console.log(data);
}

fetchData();

const mainpage = document.getElementById("mainpage");
const button = document.createElement("button");
button.textContent="search";
mainpage.appendChild(button);

