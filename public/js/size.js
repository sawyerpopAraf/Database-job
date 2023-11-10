function fetchnumberOfPerSize(){
    var size = prompt("Enter the size (choose between small, medium, large):");
    
    fetch(`/animals/size?size=${size}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("The number of animals of size " + size + " is " + data[0].Number
        );
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}

document.getElementById('size').addEventListener('click', function() {
    fetchnumberOfPerSize();
   
})