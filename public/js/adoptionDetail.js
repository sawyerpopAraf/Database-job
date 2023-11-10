function fetchAdoptionDetailsAndUpdatePage() {
    fetch('/adoption', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const detailsList = document.querySelector('.adoption-details-list');
        detailsList.innerHTML = ''; 

        data.forEach(detail => {
            let row = document.createElement('div');
            row.className = 'row px-3 py-1 w-100';

            let userNameSpan = document.createElement('span');
            userNameSpan.className = 'col py-1 bg-light';
            userNameSpan.textContent = detail.UserName || 'N/A';

            let animalNameSpan = document.createElement('span');
            animalNameSpan.className = 'col py-1 bg-light';
            animalNameSpan.textContent = detail.Name;

            row.appendChild(userNameSpan);
            row.appendChild(animalNameSpan);
            
            detailsList.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}




document.getElementById('adoptionDetails').addEventListener('click', function() {
    fetchAdoptionDetailsAndUpdatePage();
});


