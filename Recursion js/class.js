class user{
    constructor(username,email){
        this.username=username;
        this.email=email;

    }
    ency(){
        console.log(`**${this.email}1234`);
        return this.username
    }
    uppercase(){
        //console.log(`${this.username.toUpperCase()}`);
        return `${this.username.toUpperCase()}`
    }

}
const chai= new user("owasis","SMD@SMD")
chai.ency()
console.log(chai.uppercase())
const toUpp = new user("smd","o0@ha")
toUpp.ency()