function confirmToDelete(animalId) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to delete this adoption?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteAdoption(animalId);
        }
    });
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
            Swal.fire(
                'Deleted!',
                'You have successfully deleted the adoption.',
                'success'
            ).then(() => {
                location.reload();
            });
        } else {
            Swal.fire(
                'Error',
                'Error occurred. Please try again.',
                'error'
            );
        }
    });
}
