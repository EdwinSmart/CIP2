const insuranceCompaniesData = [
  {
    "name": "APA Insurance",
    "phoneNumber": "020-555-9876",
    "email": "info@apainsurance.com",
    "inpatientLimit": "Kshs 10,000",
    "outpatientLimit": "Kshs  5,000",
    "preAuthorizationServices": ["Surgery", "MRI", "Specialist Consultation", "Vitamin tests", "Pregnancy tests", "HIV test", "Covid-19 tests"],
    "businessSchemes": [
      {
        "name": "Church World Service",
        "coPay": "Kshs  200/=",
        "billingSystem": "Smart"
      },
      {
        "name": "Nairobi County Government",
        "coPay": "Kshs  300",
        "billingSystem": "Slade 360"
      }
    ],
    "icon": "APA.png" // Add the correct URL for the icon
  },
  {
    "name": "AAR Insurance",
    "phoneNumber": "555-1234",
    "email": "info@aarinsurance.com",
    "inpatientLimit": "Kshs 15,000",
    "outpatientLimit": "Kshs  7,000",
    "preAuthorizationServices": ["Hospitalization", "Physical Therapy"],
    "businessSchemes": [
      {
        "name": "Church World Service",
        "coPay": "Kshs  250",
        "billingSystem": "Direct Billing"
      },
      {
        "name": "Church World Kenya",
        "coPay": "Kshs  350",
        "billingSystem": "Smart"
      }
    ],
    "icon": "AAR.jpg" // Add the correct URL for the icon
  }
  // Add more insurance company data here...
];

function searchInsuranceCompanies() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  insuranceCompaniesData.forEach(company => {
    if (
      company.name.toLowerCase().includes(searchInput) ||
      company.phoneNumber.includes(searchInput)
    ) {
      const companyInfo = document.createElement("div");
      companyInfo.className = "company-info"; // Add a class to the company info container
      companyInfo.innerHTML = `
        <h2 class="company-name">${company.name}</h2>
        <img src="${company.icon}" alt="${company.name} Icon">
        <p>Phone Number: ${company.phoneNumber}</p>
        <p>Email: ${company.email}</p>
        <p>Inpatient Limit: ${company.inpatientLimit}</p>
        <p>Outpatient Limit: ${company.outpatientLimit}</p>
        <p>Services Requiring Pre-Authorization:</p>
        <ul>${company.preAuthorizationServices.map(service => `<li>${service}</li>`).join('')}</ul>
        <input type="text" class="search-schemes" placeholder="Search Schemes Under this insurance">
        <div class="scheme-results"></div>
      `;
      resultsDiv.appendChild(companyInfo);

      // Attach an event listener for scheme search
      const schemeInput = companyInfo.querySelector(".search-schemes");
      const schemeResultsDiv = companyInfo.querySelector(".scheme-results");

      schemeInput.addEventListener("input", () => {
        searchSchemes(company.businessSchemes, schemeInput.value, schemeResultsDiv);
      });
    }
  });
}

// Function to search for business schemes
function searchSchemes(schemes, query, resultsDiv) {
  resultsDiv.innerHTML = "";

  schemes.forEach(scheme => {
    if (scheme.name.toLowerCase().includes(query.toLowerCase())) {
      const schemeInfo = document.createElement("div");
      schemeInfo.innerHTML = `
        <h3>${scheme.name}</h3>
        <p>Co-Pay: ${scheme.coPay}</p>
        <p>Billing System: ${scheme.billingSystem}</p>
      `;
      resultsDiv.appendChild(schemeInfo);
    }
  });
}
