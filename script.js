// let str1 = 'Hello'

// let str2 = str1

// str1 = 'Hi'

// console.log (str1, str2);

// const group = ['Лена', 'Злата' ,'Оксана']
// const group2 = group

// const group2 = group.slice()

// console.log('group', group)

// const group2 = [].concat(group)

// const group2 =[...group]

// const group2 = Array.from(group)

// Array.from(group, (item) => ({group: {studentName: item, class: 'f1021'}}))

// const obj1 = {
//   name: 'Ilya',
//    phone: undefined,
//    info: job
// }

// const obj2 = {...obj1}

// obj1.phone = 333

// obj1.info.job = 'Back - End'

// console.log ('obj2', obj);

// const getCloneObject = { a, b ,c };

// Object.assign (getCloneObject, {a , b, c});

// console.log(getCloneObject);

// const getCloneObject = { big: "?", little: "?" };

// Object.assign(getCloneObject, { big: "?" });

// console.log(getCloneObject);

// let product = {
//   name: "John",
//   price: 30,
//   sold: false
// };

// let product2 = product;
// console.log(product2);

// function logPerson (obj) {
//   console.log (`${obj.name} работает ${obj.obj}`)
// }

// const person = {
//   name: 'Ilya',
//   job: 'Front'
// }

// logPerson(person)

// const person = {
//   name: 'Ilya',
//   job: 'Front',
//   phone: 333,

//   info: {job: 'Frontend'}
// }

// const {name, phone, info: {job= 'Front-end'}} = person
// console.log(name, phone, profession)

// let someArray = ['Tony', 'Stark', {name: 'Ilya', arr: ['text', 'text2']}]
// const [name, secondName, {name: firstName,}] = someArray
// console.log(name, secondName, firstName);

// let someArray = ["Tony", "Stark", { name: "Ilya", arr: ["text", "text2"] }, [1, 45, 2, 5] 'ect', 'max', 'min'],;
// const [name, secondName, { name: firstName, arr: [text1, text2],[,,one, two, five] }] = someArray;
// console.log(name, secondName, firstName);

// let someArray = ["Tony", "Stark", { name: "Ilya", arr: ["text", "text2"] }, [1, 45, 2, 5], 'ect', 'max', 'min'],;
// const [name, secondName, { name: firstName = 'NoName', arr: [text1, text2]} ,[, ,two = '333']] = someArray;
// console.log(name, secondName, firstName, text1, text2, two, five);

// const form = window.document.querySelector('form')

// form.addEventListener('submit', function (e) {
//   e.preventDefault()

//   const title = form.title.value
//   const comment = form.comment.value

//   console.log('title' , title)
//   console.log("comment", comment);

//   saveForm(title, comment)
// })

// function saveForm(data) {

//   const formData = {
//     date: new Date().toLocaleDateString(),
//     ...data
//   }
// }

// document.createDocumentFragment

// const arr = [ 'abba', 'anna', 'okko']{
//     function name(params) {

//        return ({'abba', 'anna', 'okko'})
//     }
// }
// console.log(arr, {});

// let arr = [ 'abba', 'anna', 'okko', 'big']

// function getPalindrom (arr)  {
//     return arr.filter((element, index) => element.toLowerCase() ===
//     arr[index].toLowerCase().split('').reverse().join(''))
// }
// console.log(arr, {});

// const obj = {
//   name: "Ilya",
//   mailto: "6370303@mail.ru",
//   password: "qwertasdfg1234",
// };

// let result ='https://itstep.by/?name = 'Ilya&mailto'

// const parswObjectToString = (obj) => {
//     let resultStr = ''
//     Object.entries(obj).reduce((acc: string ,[fieldKey: string , fieldName]) =>{
//         return `${acc}` + `${fieldKey}=${fieldName}&`
//     }, '?')

// }

// const createUrl = (str) => {
//     return
//  'https://itstep.by/${str}'}

// console.log(Object.keys(obj));

// const obj = {
//   name: "Ilya",
//   mail: "6370303@mail.ru",
//   password: "qwertasdfg1234",
// };

// let result = "https://itstep.by/?name=Ilya&mail";

// const parswObjectToString = (obj) => {
//   return Object.entries(obj).reduce((acc, [fieldKey, fieldName]) => {
//     return acc + `${fieldKey}=${fieldName}&`;
//   }, "?");
// };

// const createUrl = (str) => {
//   return "https://itstep.by/${str}";
// };

// let a = createUrl(parswObjectToString(obj));

// console.log(a);

// function foo (name, a) {
//   this.name = name;
//   this.aaa = a;

// }

// window.foo('name', 'aaaa')

// let obj = {
//      age: 39,
//      printAge: function () {
//          console.log(this.age)
//      }
// }

// obj.printAge()

// console.log(window.foo)

// const person = {
//     nameObj: 'PERSON'
//     firstName: 'Max',
//     secondName: 'Maximus',

//     printFullName: function (age) {
//         console.log('хэллоу ${this.nameObj} меня зовут ${this.firstName}-${this.secondName}')
//     }
// }

let pers = {
  nameObj: "jedi",
  Name: "yoda",
  age: 1579,
  friends: ["choobakka", "han solo"],
};

let starship = {
  nameObj: "ship",
  name: "sokol1000",
  model: "h1n1",
  year: 70397,
};

function printObject(obj) {
  console.log("Printing object name", obj);

  for (let key in this) {
    console.log(`[${key}]`, this[key]);
  }
}

printObject.call(pers, ["first person"]);
