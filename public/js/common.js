function updateSpecies(id) {
    Swal.fire({
        title: 'Update species',
        input: 'text',
        inputLabel: 'New species name',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            fetch('/species/update/' + id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id, newSpecies: result.value })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    Swal.fire('Updated!', 'You have successfully updated the species!', 'success').then(() => {
                        location.reload();
                    });
                } else {
                    Swal.fire('Error', 'Error updating the species. Please try again.', 'error');
                }
            });
        }
    });
}

function deleteSpecies(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to delete this species?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch('/species/delete/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    Swal.fire('Deleted!', 'You have successfully deleted the species!', 'success').then(() => {
                        location.reload();
                    });
                } else {
                    Swal.fire('Error', 'Species name belong to an animal in store, can not be deleted', 'error');
                }
            });
        }
    });
}


function updateTemperament(id) {
    Swal.fire({
        title: 'Update Temperament',
        input: 'text',
        inputLabel: 'New Temperament',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            fetch('/temperament/update/' + id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id, temp: result.value })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    Swal.fire('Updated!', 'You have successfully updated the temperament!', 'success').then(() => {
                        location.reload();
                    });
                } else {
                    Swal.fire('Error', 'Error updating the temperament. Please try again.', 'error');
                }
            });
        }
    });
}


function deleteTemperament(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to delete this temperament?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch('/temperament/delete/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    Swal.fire('Deleted!', 'You have successfully deleted the temperament!', 'success').then(() => {
                        location.reload();
                    });
                } else {
                    Swal.fire('Error', 'Temperament already in use and cannot be deleted.', 'error');
                }
            });
        }
    });
}
