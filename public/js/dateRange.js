
function fetchAnimalsByDate() {
    const dateFrom=prompt("Enter date from (YYYY-MM-DD):");
    const dateTo=prompt("Enter date to (YYYY-MM-DD):");
    fetch(`/animals/dateRange?from=${dateFrom}&to=${dateTo}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const detailsList = document.querySelector('.dateRange-list');
        detailsList.innerHTML = ''; 

        data.forEach(detail => {
            let row = document.createElement('div');
            row.className = 'row px-3 py-1 w-100';

            let nameSpan = document.createElement('span');
            nameSpan.className = 'col py-1 bg-light';
            nameSpan.textContent = detail.Name 

            let birthdaySpan = document.createElement('span');
            birthdaySpan.className = 'col py-1 bg-light';
            birthdaySpan.textContent = new Date(detail.Birthday).toLocaleDateString();

            row.appendChild(nameSpan);
            row.appendChild(birthdaySpan);
            
            detailsList.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}




document.getElementById('birthdayDateRange').addEventListener('click', function() {
    fetchAnimalsByDate();
    showOnlyContainer('dateRangeContainer');
});

