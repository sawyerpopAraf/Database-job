function confirmToDelete(animalId) {
    var userConfirm = confirm("Are you sure you want to delete this adoption?");
    if (userConfirm) {
        deleteAdoption(animalId);
    }
}

function deleteAdoption(animalId) {
    fetch('/animals/drop/' + animalId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ animalId: animalId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("You have successfully deleted the adoption!");
            location.reload();
        } else {
            alert("Error ,Please try again.");
        }
    });
}