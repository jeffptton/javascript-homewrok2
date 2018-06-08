class Music {
    // when an instance is called , the constructor method is run 
    constructor(name, genre) {
        // these are class properties 
        this._name = name;
        this._genre = genre;
        this._duration = 0;
    }
    get genre() {
        console.log(`I love listening to ${this._genre} in my car `);
        return this._genre;
     }
     incrementDuration(){
         this._duration++;
     }

    get name() {
        console.log(`My favorite music of all time is ${this._name}`);
    }
    listen(playTime){
        this._duration += playTime;
        console.log(`Because you listen to ${this._name} your playtime is now ${this._duration}`)
    }
}
var Jams = new Music("Tupac", "Rap");
Jams.genre;
Jams.name;

Jams.listen(100);



        class Bass extends Music {
            constructor(name, genre,volume){
                super(name,genre);
                this._voulme = volume;
            }
            get name(){
                console.log(`Every girl who went to college loves ${this._name} and his ${this._genre}.`);
                return this._name;
            }
             get genre(){
                 return this._genre;
             }
             get volume(){
                 return this._voulme;
             }

        }
        var rapper = new Bass ("Drake","Pop Style");
       rapper.name;