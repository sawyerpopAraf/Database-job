function calculateAge(birthdayString) {
    const today = new Date();
    const birthDate = new Date(birthdayString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}


function fetchAnimalsByAge() {
    fetch('/animals/age', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const ageList = document.querySelector('.age-list');
        ageList.innerHTML = ''; 

        data.forEach(detail => {
            let row = document.createElement('div');
            row.className = 'row px-3 py-1 w-100';

            let animalsName = document.createElement('span');
            animalsName.className = 'col py-1 bg-light';
            animalsName.textContent = detail.Name

            let AgeSpan = document.createElement('span');
            AgeSpan.className = 'col py-1 bg-light';
            AgeSpan.textContent =calculateAge(detail.Birthday);

            row.appendChild(animalsName);
            row.appendChild(AgeSpan);
            
            ageList.appendChild(row);
        });
    })
   
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}

document.getElementById('animalsByAge').addEventListener('click', function() {
    fetchAnimalsByAge()
  
});

