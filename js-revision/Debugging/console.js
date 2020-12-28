//Re-rendering - allows you to see what really gets re-rendered because it's highlighted with a green look then.
// Chrome => more tools => rendering enable paint flashing

//-------------------------
//Get you console log inside a object

const pin1 = "Vilnius"
const pin2 = "Auckland"
console.log({pin1, pin2})

//styling on console.log
console.log('%cPretty colors', 'background-color: turquoise; color: white; padding: 4px')


//console.group()
function pinData(obj){
  console.group('pinData');
  console.log('name: ', obj.name);
  console.log('lat: ', obj.lat);
  console.log('lng: ', obj.lng);
console.groupEnd();
}
pinData({name:"Preciuos", lat: 48.13, lng: 16.3434})

//pinData
//name:  Precious
//lat:  48.13
//lng:  16.3434


//---------------------------------
//1.
//use filter from the console to find the labels that you put on console.log(‘label: ‘ , x)


//-----------
//2.
const f = function(){
}

//--
//!Here you can't add anything directly
f = function(){ console.log('test')}
//Uncaught TypeError: Assignment to constant variable.
//--

//but you can add things to the prototype
f.prototype.add = function(){
}
console.log('f = ', f)
// f =  ƒ (){

// }
console.dir(f)//you can't use multiple arguments
// ƒ f()
// arguments: null
// caller: null
// length: 0
// name: "f"
// prototype: {add: ƒ, constructor: ƒ}
// __proto__: ƒ ()
// [[FunctionLocation]]: VM530:1
// [[Scopes]]: Scopes[2]

//-------------------

//3.When you open up a array before and after a modification, the internals are the same because of reference

let a = [1,2,3]

//before
console.log(a)
//use JSON methods to conserve the details of the arrays by the time of the console.log
console.log(JSON.parse(JSON.stringify(a)));

a.push(4)

//after
console.log(a)
console.log(JSON.parse(JSON.stringify(a)));

//--------------
//4. Create a table - Don't use console.log for big array with many objects 
console.table(a,['age','eyeColor'])

let a =[
    {
      "_id": "5fbf951fc238e412c0d3635d",
      "index": 0,
      "guid": "6744806e-519c-4102-9208-30b6f20e07a0",
      "isActive": true,
      "balance": "$2,938.27",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "green",
      "name": "Arlene Parrish",
      "gender": "female",
      "company": "TELEQUIET",
      "email": "arleneparrish@telequiet.com",
      "phone": "+1 (992) 582-2504",
      "address": "108 Ocean Court, Cedarville, Vermont, 4283",
      "about": "Eu laborum anim sint ut Lorem ea cillum esse sunt anim exercitation. Ad Lorem consectetur est veniam id anim et in proident quis ut labore. Laboris deserunt ex non aliquip.\r\n",
      "registered": "2014-10-31T12:11:10 -03:00",
      "latitude": 37.11462,
      "longitude": -21.939144,
      "tags": [
        "labore",
        "in",
        "ad",
        "occaecat",
        "sit",
        "ea",
        "quis"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Catalina Day"
        },
        {
          "id": 1,
          "name": "Hudson Lang"
        },
        {
          "id": 2,
          "name": "Carlson Mcmillan"
        }
      ],
      "greeting": "Hello, Arlene Parrish! You have 6 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5fbf951f501a1b31e3dfac22",
      "index": 1,
      "guid": "3c3e2988-3073-4277-a0ed-91c2a04004c4",
      "isActive": true,
      "balance": "$1,931.63",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "brown",
      "name": "Inez Cervantes",
      "gender": "female",
      "company": "OPTICON",
      "email": "inezcervantes@opticon.com",
      "phone": "+1 (875) 542-3941",
      "address": "304 Osborn Street, Klagetoh, Iowa, 6063",
      "about": "Qui ad dolor in id. Commodo officia nulla fugiat anim minim officia elit ullamco enim magna dolore ipsum. Commodo id tempor proident sint do nisi labore ipsum sunt anim sit sunt veniam consectetur. Aliquip aliqua pariatur fugiat veniam mollit exercitation anim fugiat consequat irure est ullamco culpa aliquip. Officia do consequat voluptate ex et nulla dolor cupidatat occaecat cillum in occaecat do aliquip. Mollit ullamco reprehenderit ullamco sit nulla ullamco veniam sunt amet labore enim fugiat id. Excepteur deserunt voluptate cupidatat sit eu sit deserunt ullamco et nisi.\r\n",
      "registered": "2015-08-06T07:32:27 -03:00",
      "latitude": 52.537702,
      "longitude": 27.921125,
      "tags": [
        "non",
        "deserunt",
        "non",
        "duis",
        "aliquip",
        "dolore",
        "amet"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Moses Estrada"
        },
        {
          "id": 1,
          "name": "Adele Kennedy"
        },
        {
          "id": 2,
          "name": "Beatrice Knight"
        }
      ],
      "greeting": "Hello, Inez Cervantes! You have 1 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5fbf951f8ec785d10c893980",
      "index": 2,
      "guid": "a20257f5-4874-4c3f-ad09-5b103a5db423",
      "isActive": true,
      "balance": "$2,150.32",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "brown",
      "name": "Elinor Richards",
      "gender": "female",
      "company": "SUSTENZA",
      "email": "elinorrichards@sustenza.com",
      "phone": "+1 (882) 442-2027",
      "address": "760 Dahl Court, Salvo, Guam, 8623",
      "about": "Do officia anim eiusmod ea cillum reprehenderit ea. Elit dolore laborum occaecat id laborum eiusmod ea aliquip do eu. Irure irure adipisicing id amet occaecat consequat excepteur. Labore ad laborum nisi mollit cillum qui fugiat esse aliqua Lorem labore. Consequat tempor elit consectetur quis cupidatat sit quis tempor culpa.\r\n",
      "registered": "2020-03-06T07:58:01 -03:00",
      "latitude": 65.093524,
      "longitude": 72.721705,
      "tags": [
        "tempor",
        "aliquip",
        "dolor",
        "quis",
        "proident",
        "sint",
        "velit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Brigitte Shields"
        },
        {
          "id": 1,
          "name": "Hinton Padilla"
        },
        {
          "id": 2,
          "name": "Kelsey Monroe"
        }
      ],
      "greeting": "Hello, Elinor Richards! You have 7 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5fbf951f81cbd52d1b6d0806",
      "index": 3,
      "guid": "47fafb09-f5f5-4dd4-b692-8e1dc1d4a7da",
      "isActive": true,
      "balance": "$2,657.22",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "blue",
      "name": "Battle Baker",
      "gender": "male",
      "company": "SYBIXTEX",
      "email": "battlebaker@sybixtex.com",
      "phone": "+1 (907) 424-3263",
      "address": "271 Jaffray Street, Kapowsin, New Hampshire, 5888",
      "about": "Occaecat exercitation enim exercitation qui do officia ex cillum incididunt officia. Exercitation ut tempor Lorem mollit ipsum deserunt id duis commodo ea et ullamco deserunt ad. Dolore elit magna esse dolore id qui irure culpa Lorem nisi laboris proident. Enim qui sint sint minim Lorem reprehenderit deserunt incididunt exercitation minim. Incididunt mollit esse id in occaecat velit mollit reprehenderit tempor duis anim in proident. Quis amet nisi irure mollit aliqua elit cupidatat ut dolore voluptate quis cupidatat. Excepteur laborum ut ipsum aute pariatur reprehenderit esse anim veniam et reprehenderit adipisicing aute commodo.\r\n",
      "registered": "2016-02-07T08:30:50 -03:00",
      "latitude": 80.326251,
      "longitude": 5.852246,
      "tags": [
        "est",
        "nulla",
        "Lorem",
        "sunt",
        "exercitation",
        "commodo",
        "sunt"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Angeline Barnes"
        },
        {
          "id": 1,
          "name": "Bertha Dixon"
        },
        {
          "id": 2,
          "name": "Davenport Marquez"
        }
      ],
      "greeting": "Hello, Battle Baker! You have 1 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5fbf951f18cba89a6e621fe3",
      "index": 4,
      "guid": "4903c668-6ccb-472d-8dd4-93c2e0d4d53e",
      "isActive": true,
      "balance": "$2,325.31",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "green",
      "name": "Graham Maldonado",
      "gender": "male",
      "company": "FOSSIEL",
      "email": "grahammaldonado@fossiel.com",
      "phone": "+1 (956) 508-3593",
      "address": "481 Mermaid Avenue, Bowie, Idaho, 2981",
      "about": "In ad laboris ullamco aliquip esse ea laborum veniam enim eu non culpa. Mollit aliquip consectetur aute laboris non eiusmod do. Id voluptate veniam ut ea aliqua nostrud et. Proident cupidatat voluptate enim sunt fugiat sint adipisicing cupidatat culpa. Incididunt cillum ipsum do voluptate sit aliqua ex reprehenderit minim et excepteur eiusmod. Laborum adipisicing pariatur aliqua eu officia proident cupidatat. Cupidatat excepteur velit mollit ad consequat voluptate cillum nostrud ea.\r\n",
      "registered": "2019-10-15T11:40:54 -03:00",
      "latitude": -32.894574,
      "longitude": -164.369737,
      "tags": [
        "sint",
        "in",
        "Lorem",
        "nulla",
        "deserunt",
        "ex",
        "labore"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Penny Roy"
        },
        {
          "id": 1,
          "name": "Buck Harris"
        },
        {
          "id": 2,
          "name": "Tamra Harper"
        }
      ],
      "greeting": "Hello, Graham Maldonado! You have 7 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5fbf951f23582266fd72fa32",
      "index": 5,
      "guid": "fa3c628b-3e95-4747-bd18-fc99fa21e976",
      "isActive": true,
      "balance": "$1,104.34",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "blue",
      "name": "Charlene Huff",
      "gender": "female",
      "company": "COMTRACT",
      "email": "charlenehuff@comtract.com",
      "phone": "+1 (861) 565-2585",
      "address": "529 Lynch Street, Maury, Virginia, 2176",
      "about": "Commodo enim voluptate quis sunt fugiat id eu duis. Nisi non deserunt aliqua ex id adipisicing sunt irure voluptate magna. Exercitation nulla pariatur magna qui aute est. Amet aliqua minim dolor consectetur pariatur pariatur qui commodo duis cupidatat commodo.\r\n",
      "registered": "2015-03-29T10:08:19 -03:00",
      "latitude": 78.607433,
      "longitude": 5.004884,
      "tags": [
        "cupidatat",
        "est",
        "occaecat",
        "tempor",
        "fugiat",
        "aute",
        "consequat"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Mcclain Rodgers"
        },
        {
          "id": 1,
          "name": "Allen Dale"
        },
        {
          "id": 2,
          "name": "Serrano Shepard"
        }
      ],
      "greeting": "Hello, Charlene Huff! You have 2 unread messages.",
      "favoriteFruit": "apple"
    }
  ]

//----------------
//5. How long does it take to run a function
//! console.time() console.timeEnd()

console.time('st')
console.time('something else')
setTimeout(()=>{
    console.timeEnd('st')

},5000);
console.timeEnd('something else')
// something else: 0.1630859375 ms
// st: 5000.451904296875 ms

//------------------
//6. How to stop the execution on console.log
//!debugger

let a = 1;

let b = 2;

debugger;

//---------------------
//7. Looking inside a live website

// click on the element
// Ctrl + p
//search for it, ex. .js
//got to source
//click on {} on the bottom left cornner to beatify it.