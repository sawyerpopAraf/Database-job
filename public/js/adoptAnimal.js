function confirmAdoption(animalId) {
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to adopt this animal?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, adopt it!'
    }).then((result) => {
        if (result.isConfirmed) {
            adoptAnimal(animalId);
        }
    });
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
            Swal.fire(
                'Adopted!',
                'You have successfully adopted the animal.',
                'success'
            ).then(() => {
                location.reload();
            });
        } else {
            Swal.fire(
                'Error',
                'Error adopting the animal. Please try again.',
                'error'
            );
        }
    });
}


