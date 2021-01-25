document.getElementById("button").onclick = function(){
    document.getElementById("text").innerHTML = "ini jadi text yang bakal berubah";
    document.getElementById("button").style.display = "none";
}

{
    let y = 10;
    const x = "hello";
    console.log(x+y);
    let myName = 'Caleb';
}

let person = {
    name: "Caleb",
    age: 93,
    favFood: "Pizza",
    fun: function(){
        console.log("wtf");
    }
}

console.log(person.favFood);

let now = new Date();
let grades = [30, 30, 20, 12]

{
    let myName = "Gare";
    myName = myName.toUpperCase();
    console.log(myName);
}

{
    let nilai = 1241235;
    let y = "10";
    y = Number.parseInt(y);
    console.log(nilai + y)
}

{
    var input = Number(prompt("masukin angka desimal: "));
    console.log(input + " indecimal to binary ", + input.toString(16))
}

{
    function user(name){
        this.name = name;
    }

    let me = new user("gare");
    console.log(me);
}