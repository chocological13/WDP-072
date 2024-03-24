// Display Countries
const urlCountry = 'https://covid-193.p.rapidapi.com/countries';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cde8958a76mshf39865d680f2f73p1a7ea8jsn2c5550be4c25',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
};

try {
    fetch(urlCountry, options)
        .then(response => response.json())
        .then(result => {
            // console.log(result);
            result.response.forEach(country => {
                const markup = `<option>${country}</option>`;
                document.querySelector('#countrySelection').insertAdjacentHTML('beforeend', markup);
            });
        })
        .catch(error => {
            console.error(error);
        });

} catch (error) {
    console.error(error);
}

// Function to fetch data
async function fetchData() {
    // Hide container
    document.getElementById('placeholderContainer').style.display = 'none';

    // Get the selected country from the dropdown
    const selectedCountry = document.getElementById('countrySelection').value;

    // Set URL
    const urlData = `https://covid-193.p.rapidapi.com/statistics?country=${selectedCountry}`;
    const optData = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cde8958a76mshf39865d680f2f73p1a7ea8jsn2c5550be4c25',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    // Ref the HTML element to display data
    const showDate = document.getElementById('showDate');
    const totalTests = document.getElementById('totalTests');
    const showCountry = document.getElementById('showCountry');
    const newCases = document.getElementById('newCases');
    const activeCases = document.getElementById('activeCases');
    const critCases = document.getElementById('critCases');
    const totalCases = document.getElementById('totalCases');
    const recoveredCases = document.getElementById('recoveredCases');
    const totalDeaths = document.getElementById('totalDeaths');
    const dataContainer = document.getElementById('dataContainer');
    
    try {
        const response = await fetch(urlData, optData);
        const result = await response.json();
        // console.log(result);

        if (result.response.length > 0) {
            const data = result.response[0];

            // Check if the data fields are null, and if so, display a default message
            const checkTotalTests = (data.tests.total !== null) ? data.tests.total : 'N/A';
            const checkNewCases = (data.cases.new !== null) ? data.cases.new : 'N/A';
            const checkActiveCases = (data.cases.active !== null) ? data.cases.active : 'N/A';
            const checkCriticalCases = (data.cases.critical !== null) ? data.cases.critical : 'N/A';
            const checkRecoveredCases = (data.cases.recovered !== null) ? data.cases.recovered : 'N/A';
            const checkTotalCases = (data.cases.total !== null) ? data.cases.total : 'N/A';
            const checkTotalDeaths = (data.deaths.total !== null) ? data.deaths.total : 'N/A';

            // Update the content of HTML element
            showDate.textContent = `Current data as of ${data.day}`;
            totalCases.innerHTML = `
                <h3 class="display-1" editable="inline">${checkTotalCases}</h3>
                <div><b>Total Cases</b></div>
            `;
            showCountry.textContent = `Real-time statistics for ${data.country}, including active cases, total cases, recoveries, and deaths.`;
            newCases.innerHTML = `
            <div class="lc-block"><span class="display-4" editable="inline"><b>${checkNewCases}</b></span>
				<div editable="rich">New Cases</div>
			</div>
            `;
            activeCases.innerHTML = `
            <span class="display-4" editable="inline"><b>${checkActiveCases}</b></span>
				<div editable="rich">
					<p>Active Cases </p>
				</div>
            `;
            critCases.innerHTML = `
            <span class="display-4" editable="inline"><b>${checkCriticalCases}</b></span>
				<div editable="rich">Critical Cases</div>
            `;
            totalTests.innerHTML = `
            <span class="display-4" editable="inline"><b>${checkTotalTests}</b></span>
				<div editable="rich">
					<p>Total Tests</p>
				</div>
            `;
            recoveredCases.innerHTML = `
            <span class="display-4" editable="inline"><b>${checkRecoveredCases}</b></span>
			<div editable="rich">Recovered Cases</div>
            `;
            totalDeaths.innerHTML =
            `<div class="lc-block"><span class="display-4" editable="inline"><b>${checkTotalDeaths}</b></span>
				<div editable="rich">Total Deaths</div>
			</div>`
            dataContainer.innerHTML = `
                <p>Country: ${data.country}</p>
                <p>Population: ${population}</p>
                <p>Active Cases: ${activeCases}</p>
                <p>Critical Cases: ${criticalCases}</p>
                <p>Recovered Cases: ${recoveredCases}</p>
                <p>Total Cases: ${totalCases}</p>
                <p>Total Death: ${totalDeaths}</p>
                <p>Data as of: ${data.time}</p>
            `;
        } else {
            dataContainer.innerHTML = `<p>Data not available for ${selectedCountry}</p>`;
        }
    } catch (error) {
        console.error(error);
    }

}

// Function to fetch history
async function fetchHistory() {

    // Get the selected country from the dropdown
    const selectedCountry = document.getElementById('countrySelection').value;

    // Set URL Data
    const urlHistory = `https://covid-193.p.rapidapi.com/history?country=${selectedCountry}`;
    const optHistory = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cde8958a76mshf39865d680f2f73p1a7ea8jsn2c5550be4c25',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    // Ref the HTML data to show elements
    const exData = document.getElementById('exData');

    try {
        const response = await fetch(urlHistory, optHistory);
        const result = await response.json();
        console.log('outer result', result);

        exData.innerHTML = `
        <div class="container">
            <select id="dateAvailable">
            <option selected>Select date</option>
            </select>
                <button>Get History Data</button>
        </div>
        `

        // Ref HTML
        // const dateAvailable = document.getElementById('dateAvailable');

        console.log('length', result.response.length);

        result.response.forEach(index => {
            const markup = `<option>${index.day}</option>`;
            document.querySelector('#dateAvailable').insertAdjacentHTML('beforeend', markup);
        });

        // if (result.response.length > 0) {
        //     for (var i = 0; i < result.response.length; i++) {
        //         const index = result.response[i]
        //         console.log('resDay', index.day);

        //         dateAvailable.innerHTML = `
        //             <option>${index.day}</option>
        //         `;
        //     }
        // //     const data = result.response[0];

        // //     // Check if the data fields are null, and if so, display a default message
        // //     const population = (data.population !== null) ? data.population : 'N/A';
        // //     const checkNewCases = (data.cases.new !== null) ? data.cases.new : 'N/A';
        // //     const checkActiveCases = (data.cases.active !== null) ? data.cases.active : 'N/A';
        // //     const checkCriticalCases = (data.cases.critical !== null) ? data.cases.critical : 'N/A';
        // //     const checkRecoveredCases = (data.cases.recovered !== null) ? data.cases.recovered : 'N/A';
        // //     const checkTotalCases = (data.cases.total !== null) ? data.cases.total : 'N/A';
        // //     const checkTotalDeaths = (data.deaths.total !== null) ? data.deaths.total : 'N/A';
            

        // //     // Update HTML elements
        // //     exData.innerHTML = `
        // //     <p>New Cases: ${checkNewCases}</p
        // //     <p>Active Cases: ${activeCases}</p>
        // //     <p>Critical Cases: ${criticalCases}</p>
        // //     <p>Recovered Cases: ${recoveredCases}</p>
        // //     <p>Total Cases: ${totalCases}</p>
        // //     <p>Total Death: ${totalDeaths}</p>
        // //     <p>Data as of: ${data.time}</p>
        // // `;
        // } else {
        //     exData.innerHTML = `<p>Data not available for</p>`;
        // }

    } catch (error) {
        console.error(error)
    }
}