let bandInfo;

// Put your code here
const greta = {
    name: 'Greta Van Fleet',
    nationality: 'USA',
    genre: 'Rock',
    members: 4,
    formed: 2012,
    split: false,
    albums: {
        album_1: {
            released: 2017,
            name: 'From The Fires'
        },
        album_2: {
            released: 2018,
            name: 'Anthem Of The Peaceful Army'
        },
        album_3: {
            released: 2021,
            name: "The Battle at Garden's Gate"
        }


    }

}
bandInfo = `${greta.name} is an ${greta.nationality} ${greta.genre} band formed in ${greta.formed}. Their first album ${greta.albums.album_1.name} came out in ${greta.albums.album_1.released}. `;

// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
/* vocal: 'Josh Kiszka',
guitar1: 'Jake Kiszka',
bass:'Sam Kiszka',
drums: 'Danny Wagner',
} */