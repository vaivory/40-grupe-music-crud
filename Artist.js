class Artist {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.songs = [];
        this.price = 0;
        this.balance = 0;
    }
    intro() {
        return `Hi, my name is ${this.name} and I am a musician!`;
    }
    songPrice(songPrice) {
        this.price = songPrice / 100;
        return `${this.name}'s price per song is ${this.price} ${this.currency}`;
    }
    addSong(songName) {
        let newSong = {};  //sukurem Dainos objekta
        newSong.name = songName;
        newSong.playCount = 0;
        this.songs.push(newSong); //idedam objekta i masyva
    }
    playlist() {
        let list = `${this.name}'s playlist: \n====================\n`

        for (let i = 0; i < this.songs.length; i++) {
            //  console.log(this.songs[i]);
            list += `${i + 1}. ${this.songs[i].name} (${this.songs[i].playCount}) \n`;

        }
        return list;


    }
    playSong(songIndex) {

        //console.log('A',this.songs[index]);
        this.songs[songIndex].playCount++;  //pagrojam daina kuri stovi index vietoj masyve ir su playAccount paskaiciuojam kiek kartu pagrota
        this.balance += this.price;
        return `Playing song: ${this.songs[songIndex].name}.`;
    }
    fortune() {
        return `Total lifetime wealth of ${this.name} is ${this.balance.toFixed(2)} ${this.currency} right now!`
    }
}

export { Artist }