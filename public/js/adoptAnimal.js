function confirmAdoption(animalId) {
    var userConfirm = confirm("Are you sure you want to adopt this animal?");
    if (userConfirm) {
        adoptAnimal(animalId);
    }
}

function adoptAnimal(animalId) {
    fetch('/animals/adopt/' + animalId, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ animalId: animalId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("You have successfully adopted the animal!");
            location.reload();
        } else {
            alert("Error adopting the animal. Please try again.");
        }
    });
}

