const containers = ['animalList', 'adoptionDetailsContainer', 'animalsByAgeContainer', 'dateRangeContainer'];

function showOnlyContainer(idToShow) {
    
    containers.forEach(function(id) {
        let container = document.getElementById(id);
        if (id === idToShow) {
            container.style.display = 'block';  
        } else {
            container.style.display = 'none';   
        }
    });
}

document.getElementById('all').addEventListener('click', function() {
    showOnlyContainer('animalList');
});

document.getElementById('adoptionDetails').addEventListener('click', function() {
    showOnlyContainer('adoptionDetailsContainer');
});

document.getElementById('animalsByAge').addEventListener('click', function() {
    showOnlyContainer('animalsByAgeContainer');
});


document.getElementById('birthdayDateRange').addEventListener('click', function() {
    showOnlyContainer('dateRangeContainer');
});