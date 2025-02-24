//array method

1.//tostring():= array of array to string to convert
// let num =[1,2,3 ,4,5,7];
// let b= num.toString()
// console.log("b=", typeof b);
// console.log("b=", b);

2.//join()= joins All the array element using a seperate 

// let c=num.join("_")
// console.log("c", typeof c);
// console.log("c", c);
// op:= 1_2_3_4_5_7

3.//pop() = array of last element delete

// let p=num.pop()//pop return the pop element
// console.log( num);
// console.log( num);
// console.log( num, p);

4.//push ()=> push method return the new array length

// let p=num.push(54,58, 60,61);
// console.log(num, p);

5.//shift()=> remove first element

// let p=num.shift()
//  num.shift()
//  num.shift()
// console.log( num);

6.//unshift()= add first element
// const xyz=['jan', 'feb','march',['01','02','03']]
// let p= num.unshift(78,65)
//  num.unshift(99)
//  num.unshift(xyz)
// console.log(num);

// 7.contact()=> array ne other array for merge
// let months =[10,20,30,40];
// let months2=[50,60,70,80,90];
// let newarray=months.concat(months2, months2);
// console.log(newarray);

// 8.is Array():- check is the array yes or no return the boolean value true ya to false

// const month = ['jan', 'feb', 'march'];
// const text=55;
// const result=Array.isArray(month);
// const result=Array.isArray(text);
// console.log("result:-",result);
// console.log(typeof month);

// 9.forEach():- array na har aek element ma function chalave
// const month1 = ['jan', 'feb', 'march'];

// console.log(month1);
// month1.forEach(myfun);
// function myfun(value , index , array){
//     console.log(index);
    
// }



// 10.Map()=> foreach ni jevu j hoi che har element ma loop chalave che and new array return   kare che
// const month = ['jan', 'feb', 'march'];
// const number = [10,20,30,40,50];


// const result= number.map((value , index)=>{
//      return value/10;
// })

// console.log(result);


//11.sort():- string che tene assending order ma convert kare //matlab alaphabet ma pehla che alpahabet avse ae
// unicode A=65 ,B=66, C=67, a=97 ,b=98, c=99 starting
// const month = ['Jan', 'Feb', 'March' , 'April'];
// const number = [10,20,100, 125,30,40,50];
// console.log(number);

// const result =month.sort();
// console.log(result);

// number.sort(function(a,b){
//  return a-b
// })
// console.log(number);


//12.reverce():- reverce method array  ne ultu kare

// const month = ['Jan', 'Feb', 'March' , 'April'];
// const number = [10,20,100, 125,30,40,50];

// month.sort().reverse().push('may')
// console.log(month);
// month.reverse()
// number.reverse()
// console.log(month);
// console.log(number);


// 13.toSorted():- return Array oringinal array change nahi thai 
// const month = ['Jan', 'Feb', 'March' , 'April'];
// console.log(month);

// const newarray =month.toSorted()
// console.log(newarray);

//14:- toReversed()
// const month = ['Jan', 'Feb', 'March' , 'April'];
// console.log(month);

// const newarray =month.toReversed()
// console.log(newarray);

// 15:- slice():- between the slice of give
// syntax:- month.slice(start , end index par karu hase taya sudhi j avse bakina remove thase);
// const month = ['Jan', 'Feb', 'March' , 'April' , 'May', "julay, 'Jan"];
// console.log(month);

// const newArray = month.slice(0,4);
// console.log(newArray);
//op:-[ 'Jan', 'Feb', 'March', 'April' ]

// 16:- splice():- add , delete kare then return delete
// syntax :- splice(kaya index par start karvu, ketla item delete karvu , delete thaya pachi taya add karvu hoi to )
// syntax :- spilce(1 , 2, "bansi" , "mahi", "sonu");

// const month = ['Jan', 'Feb', 'March' , 'April' , 'May', "julay, 'Jan"];
// month.splice(1,2,"bansi", "mahi" , "sonu");
//  const newArray= month.splice(1,2,"bansi", "mahi" , "sonu");
// console.log(month);
// console.log(newArray);
//op:-[ 'Jan', 'bansi', 'mahi', 'sonu', 'April', 'May', "julay, 'Jan" ]

// 17:- tospliced():- main array ne change nahi kare  return kare new array
// const month = ['Jan', 'Feb', 'March' , 'April' , 'May', "julay, 'Jan"];
// console.log(month);
// month.toSpliced(0,1)
// console.log(month);
//  const newArray =month.toSpliced(0,1)
//  console.log(newArray);
 
 //18:- indexOf():- je value api ae teno index number print karine avse and je value apiae array ma nahi hoi to -1 op avse
 //indeof:- left to right search kare
//  const month = ['Jan', 'Feb', 'March' , 'April' , 'May', "julay, 'Jan"];

//  const index = month.indexOf("April")
//  month.splice(3,1)
//  console.log(index);
//  console.log(month);
 //op:3

//19:- listIndexOf():- right to left search kare
// const month = ['Jan', 'Feb', 'March' , 'April' , 'May', "julay, 'Jan"];
//  const index =month.lastIndexOf("March")
// console.log(month);
// console.log(index);

//20:keys():= array nu index hoi tene array banavine iteractive object banavinie return kare index number batavse
// const month = ['Jan', 'Feb', 'March' , 'April' , 'May', "julay", "iwuoia"];
// const list = month.keys()

// for(let x of list)
// {
//     console.log(x);
    
// }
// console.log(list);

//21:- values():- index nahi lese aeni value ne store karine list ma  store kari dese

// const month = ['Jan', 'Feb', 'March' , 'April' , 'May', "julay", "iwuoia"];
// const list= month.values()
// for(let value of list )
// {
//     console.log(value);
    
// }

//22:- entries()= key or value ni pair banaine ane ano array banavi dese

// const month = ['Jan', 'Feb', 'March' , 'April' , 'May', "julay", "iwuoia"];

//  const list =month.entries()

//  for(let value of list)
// {
//     console.log(value);
    
// }

//23:every():- value retrun kare boolean value return kare true ya false all positive avse toj true thase


// const number=[10,40,30,20,82,90];

// const result =number.every((value)=>{
//  return value>0;
// })
// console.log(result);

//op:-true

//24 some():- every method jevu j kam kare che but aema all positive hoi toj true avse some ma all data mathi aek condition true thai jai to true thai jase 

// const number=[10,-40,-30,20,-82,90];

// const result = number.some((value)=>{
//    return value>0;
// })
// console.log(result);


//25 filter():- array na element par loop chalave  aemathi value ne filter kare jemethi value ne select karine new array store kari dese


// const number=[10,-40,-30,20,-82,90];

// const result = number.filter((value)=>{
//     return value>0;
// })
// console.log(result);


//26 find()= aek condition hase ae condition ne koi pan element pass kari de che to first element true hase te element return kari dese agar bahda nagative hoi to undefind avse

// const number=[-10,40,30,60,80];


// const result= number.find((x)=>{
//    return x>0;

// })

// console.log(result);

//27 findindex():- find() method jevu j kam karse but index define karse


// const number=[-10,-20,-30,40];
// const result = number.findIndex((x)=>{
//  return x>0;
// })

// console.log(result);


//28 findlast():- right to left find value apse;

// const number=[10,20,40,120,110];
// const result = number.findLast((x)=>{
//     return x>0;
// })
// console.log(result);


//29 includes():- boolean value return karave value ne match karve aeni under value cheke ni value hase to true return karse serching nu kam kare

// const number=[10,20,30,40,50,60,70,80];
// const result = number.includes(110);
// console.log(result);

//30: tostrig():- array na formate ma hoi to string ma convert kare


// const month = ['Jan', 'Feb', 'March' , 'April' , 'May', "julay", "iwuoia"];

// console.log(typeof month.toString());
// op:-Jan,Feb,March,April,May,julay,iwuoia


//31:from():- array ne string ma karone to from method string ne array ma convert kare

// const text="iuehiwu"
//    const newArray=Array.from(text);
//    console.log(newArray);
   

// op:-[
//     'i', 'u', 'e',
//     'h', 'i', 'w',
//     'u'
//   ]

//32:- copuwithin():- Array ni under array element ne copy kare
// syntax:- copywithin((3 parameter le , kaya index par copy karine lvavau che , je index copy karvu hoi ae, kayasudhi karcu che)

// const month = ['Jan', 'Feb', 'March' , 'April' , 'May', "julay", "iwuoia"];
// console.log(month);

// month.copyWithin(1,4,5 )
// console.log(month);

//33:- valueof():- aej array ene return karine apse

// const month = ['Jan', 'Feb', 'March' , 'April' , 'May', "julay", "iwuoia"];
// console.log(month);

// const result=month.valueOf()
// console.log(result);

//34:- prototype():- remove kare element ne

//this:-ont kare che method ne
//Array :-javascrit ni library mathi avse che class
// const month = ['Jan', 'Feb', 'March' , 'April' , 'May', "julay", "iwuoia"];
// Array.prototype.removeAll = function(){
//     while(this.length !==0)
//     {
//         this.pop();
//     }
// }
// console.log(month);
// month.removeAll()
// console.log(month);

//op:- [
//   'Jan',    'Feb',
//   'March',  'April',
//   'May',    'julay',
//   'iwuoia'
// ]
// []

//35:- reduce():- for each jevu but third value nahi levu pade 2 value thai jase

// const number=[10,20,30,40,50,5];

// const sum = number.reduce((total,value)=>{
//     console.log(total, value);
//     return total+value
// })
// console.log(sum);

// op:-10 20
// 30 30
// 60 40
// 100 50
// 150 5
// 155

//36:- reduceRight():- reduce jevu j che but aa reduceRight right to left chalse ultu sum karse

// const number=[10,20,30,40,50,5];

// const sum = number.reduceRight((total,value)=>{
//     console.log(total, value);
//     return total+value
// })
// console.log(sum);

// op:- 
// 5 50
// 55 40
// 95 30
// 125 20
// 145 10
// 155


//37:fill():- agar koi value fill karavi che to current array ni uper anathi kari sakiae chiae  2 paramaert avse kayathi start fill karvu che ending point kaya sudhi lai javu che

// const number=[10,20,30,40,50,5];

// number.fill("x", 1,4);
// console.log(number);

// console.log(number);
// op:-[ 10, 'x', 'x', 'x', 50, 5 ]

//38:- flat():- koi nested array hoi aetle ke array ni under array  array ne merge kari nakhe

// const number=[10,20,30,40,50,5 , [1,2,3,4]];
// console.log(number);
// const num=number.flat();
// console.log(num);

// op:- 
// [ 10, 20, 30, 40, 50, 5, [ 1, 2, 3, 4 ] ]
// [ 10, 20, 30, 40, 50, 5,  1,  2,  3,  4]

// const number=[10,20,30,40,50,5 , [1,2,3,4,['a','b','c']]];
// console.log(number);
// const num=number.flat(2);
// console.log(num);

// op:-
// [ 10, 20, 30, 40, 50, 5, [ 1, 2, 3, 4, [ 'a', 'b', 'c' ] ] ]
// [10,  20, 30, 40, 50,  5, 1,   2,  3,  4,  'a', 'b','c']

//39: flatMap():- simple array hoi sum method yanikii value ne multiple and addition karvu hoi to aena mate

// const number=[10,20,30,40,50,5];
// console.log(number);

// const num=number.flatMap((value)=>[
//  value, value*2
// ])

// console.log(num);
// op:-
// current value:-[ 10, 20, 30, 40, 50, 5 ]
// op:-[10, 20, 20, 40,  30,60, 40, 80, 50, 100,5, 10]

//40 at():- koi pan value ne joiae index threw koi show karavu che element 

// const number=[10,20,30,40,50,5];
// console.log(number);
// const num= number.at(1);
// console.log(num);
// op:-
// [ 10, 20, 30, 40, 50, 5 ]
// 20


//41:- of():- koi pan list hoi argument ni array ma conver kare


const num=Array.of('bansi', 'pari','sonu');
console.log(num);
// op:-[ 'bansi', 'pari', 'sonu' ]

//node array.js