let twitter = {
    name : "nikita40",
    content : "Educational",
    likes : 1000,
    reposts : 6,
    tags : ["Apna College", "nikita40" , "code"]
};

console.log(twitter);
console.log(twitter.name);
console.log(twitter["name"]);
console.log(twitter.likes);
console.log(twitter["likes"]);
console.log(twitter.reposts);
console.log(twitter.tags);

let unlike = "likes";
console.log(twitter.unlike);
console.log(twitter[unlike]);

//update
twitter.content = "Comedy";
console.log(twitter.content);
console.log(twitter);

// add
twitter.gender = "female";
console.log(twitter);

//delete
delete twitter.likes;
console.log(twitter);


//objects of objects

let student = {
    nikita : {
        class : "online",
        city : "Kopargaon"
    },
    manasi : {
        class : "TechFocus",
        city : "baramati"
    },
    harshal : {
        class : "C2W",
        city : "Something"
    }
}

console.log(student.nikita);
console.log(student.manasi);
console.log(student.harshal);

console.log(student.nikita.class);
console.log(student.manasi.city);
console.log(student.harshal.class);




