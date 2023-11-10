
function updateSpecies(id){
    newSpecies = prompt("Update species")
    fetch('/species/update/'+id,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id, newSpecies: newSpecies})
     })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("You have successfully updated the species!");
                location.reload();
            } else {
                alert("Error updating the species. Please try again.");
            }
        });
}

function deleteSpecies(id){
    var userConfirm=confirm("Are you sure you want to delete this species?")
    if(userConfirm){
        fetch('/species/delete/'+id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({id: id})
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("You have successfully deleted the species!");
                location.reload();
            } else {
                alert("Species already in used and cannot be deleted.");
            }
        });
    }}

function updateTemperament(id){
    var temp = prompt("Update temperament")
    fetch('/temperament/update/'+id,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id, temp: temp})
     })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("You have successfully updated the temperament!");
                location.reload();
            } else {
                alert("Error updating the temperament. Please try again.");
            }
        });

}

function deleteTemperament(id){
    var userConfirm=confirm("Are you sure you want to delete this temperament?")
    if(userConfirm){
        fetch('/temperament/delete/'+id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({id: id})
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("You have successfully deleted the temperament!");
                location.reload();
            } else {
                alert("Temperament already in used and cannot be deleted.");
            }
        });
    }}
