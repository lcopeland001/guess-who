console.log('Here are all the available people:', people);

$(readyNow);

function readyNow(){
    console.log('ready now');
    addPictures();
    
    $(document).ready(randomPerson);
}

function addPictures(){
    console.log('in addPictures');
    for(let pic of people) {
    $('#picture-content').append(`
    <div class="profile-pictures> 
    <img src="https://github.com/${pic.githubUsername}.png?size=250" alt="Profile image of ${pic.name}">
    </div>
    `)
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function randomPerson(){
    console.log('in randomPerson');
        for( let i=0; i<people.length; i+=1){
             
            let num = randomNumber(0,(people.length-1));
            let random = people[num];
            $('#random-person').text(`
            Click on: ${random.name}
            `);
        }
    }

