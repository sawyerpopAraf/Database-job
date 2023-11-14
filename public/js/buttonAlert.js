function animalNotAdoptedAlert() {
    Swal.fire('This animal has not been adopted yet.');
}

function adminOnly() {
    Swal.fire('You are not authorized')
}

function numberOfAnimalPerSize(){
    Swal.fire('Only admin have access')
}

function alreadyAdoptedAlert() {
    Swal.fire('This animal has already been adopted.');
}

function loginToAdoptAlert() {
    Swal.fire('You must be logged in to adopt an animal.');
}