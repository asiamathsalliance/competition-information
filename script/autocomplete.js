const sectionMap = {
  "Thai International Mathematical Olympiad (TIMO) Preliminary Round": "timo-pre",
  "Thai International Mathematical Olympiad (TIMO) Finals": "timo-finals",
  "Big Bay Competition Preliminary Round": "bigbay-pre",
  "Big Bay Competition Finals": "bigbay-finals",
  "Hong Kong International Mathematical Olympiad (HKIMO) Preliminary Round": "hkimo-pre",
  "Hong Kong International Mathematical Olympiad (HKIMO) Finals Round": "hkimo-finals",
  "World International Mathematical Olympiad (WIMO) Finals": "wimo-finals",
  "American Mathematics Competition (AMC 8)": "amc8",
  "American Mathematics Competition (AMC 10/12A)": "amc1012a",
  "American Mathematics Competition (AMC 10/12B)": "amc1012b",
  "American Invitational Mathematics Examination (AIME) II": "aime2",
  "Global English Olympiad of S.E.A (GELOSEA) Heats": "gelosea-heats",
  "Global English Olympiad of S.E.A (GELOSEA) Finals": "gelosea-finals",
  "International Math Olympiad of S.E.A (IMOCSEA)": "imocsea",
  "International Science Olympiad of S.E.A (IOSCEA)": "ioscea",
  "HXC Cup Preliminary Round": "hxc-prelim",
  "HXC Cup Finals": "hxc-finals",
  "Global Junior Math Aptitude Test (GJMAT)": "gjmat",
  "Global Junior Online Math Competition (GJOMC)": "gjomc",
  "Math Mastery Competition": "math-mastery",
  "Asia Mathematics Olympics (AMO) Heats": "amo-heats",
  "Asia Mathematics Olympics (AMO) Finals": "amo-finals",
  "World Mathematical Invitational (WMI) Preliminary Round": "wmi-pre",
  "World Mathematical Invitational (WMI) Finals": "wmi-finals",
  "Asia International Mathematical Olympiad (AIMO) Finals": "aimo-finals",
  "Spirit of Math Canadian Challenge": "spirit-math",
  "SOF English Olympiad": "sof-english",
  "SOF Math Olympiad": "sof-math",
  "SOF Science Olympiad": "sof-science",
  "Teeneagle Math Competition": "teeneagle-math",
  "Teeneagle English Olympiad": "teeneagle-english",
  "SIT STEM Competition": "sit-stem"
};


const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const searchBox = document.querySelector(".search-box");

inputBox.addEventListener("input", () => {
  const input = inputBox.value.trim().toLowerCase();

  if(input.length === 0){
    resultBox.style.display = "none";
    searchBox.classList.remove("active");
    return;
  }

  const keys = Object.keys(sectionMap);

  const result = keys.filter(key => key.toLowerCase().includes(input));

  display(result);
});

function display(result) {
  if(result.length === 0) {
    resultBox.style.display = "none";
    searchBox.classList.remove("active");
    return;
  }

  const content = result.map(item => `<li>${item}</li>`).join("");
  resultBox.innerHTML = `<ul>${content}</ul>`;
  resultBox.style.display = "block";
  searchBox.classList.add("active");

  // Click on any item
  resultBox.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      const name = li.textContent;

      // 1️⃣ Set input value
      inputBox.value = name;

      // 2️⃣ Hide dropdown
      resultBox.style.display = "none";
      searchBox.classList.remove("active");

      // 3️⃣ Scroll to corresponding section
      const sectionId = sectionMap[name];   // get the mapped section ID
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          const headerOffset = 40; // adjust this to match your header height
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });
}

document.addEventListener("click", (event) => {
  // Check if the clicked element is NOT inside the search box
  if (!searchBox.contains(event.target)) {
    resultBox.style.display = "none";
    searchBox.classList.remove("active");
  }
});

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    const input = inputBox.value.trim();
    if (!input) return;

    // Find the best matching key in sectionMap
    const keys = Object.keys(sectionMap);
    const match = keys.find(key => key.toLowerCase().includes(input.toLowerCase()));

    if (match) {
        const sectionId = sectionMap[match];
        const section = document.getElementById(sectionId);
        if (section) {
            const headerOffset = 40; // adjust for sticky header
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }
});
