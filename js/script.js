// Fetch data from the NHTSA API
const response = fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json");

// Handle the response asynchronously
response
    .then(function(response) {
        return response.json(); // Parse JSON asynchronously
    })
    .then(function(Data) {
        NhtsaData(Data); // Call the function to display NHTSA data
    })
    .catch(function(error) {
        console.error("Error fetching data:", error); // Log any errors
    });

// Function to display NHTSA data
function NhtsaData(apiData) {
    // Get the element where data will be displayed
    const element = document.getElementById('NHTSA API');
    element.innerHTML = ''; // Clear previous data

    // Loop through the API data and create HTML elements to display it
    apiData.Results.forEach(item => {
        const listItem = document.createElement('div');
        // Add Bootstrap grid classes to the created element
        listItem.classList.add("col-sm-6","col-md-4","col-lg-4","col-xl-4");
        listItem.innerHTML = `
            <div class="card h-100">
                <div class="card-title">${item.Name}</div>
                <div class="card-body">
                    <div class="card-text">
                        <p>Country: ${item.Country}</p>
                        <p>Manufacturer ID: ${item.Id}</p>
                        <p>createdOn: ${item.CreatedOn}</p>
                        <p>DateAvailableToPublic: ${item.DateAvailableToPublic}</p>
                        <p>VehicleType: ${item.VehicleType}</p>
                        <p>WMI: ${item.WMI}</p>
                    </div>
                </div>
            </div>`;
        element.appendChild(listItem); // Append the created element to the container
    });
}
