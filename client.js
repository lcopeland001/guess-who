console.log('Here are all the available people:', people);

$(document).ready(readyNow);

function readyNow(){
    console.log('ready now');
    addPicture();
}

function addPicture(){
    for(let pic of people) $('#picture-content').append(`
    <div> ${pic.profilePic}</div>
    `)
}

