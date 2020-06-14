// //Task 1)
// // document.write("Result","<br>")
// // var a=10
// // document.write("The value of a is: ",a,"<br><br>")

// // document.write("The value of ++a is: ",++a,"<br>")
// // document.write("Now the value of a is: ",a,"<br><br>")

// // document.write("The value of a++ is: ",a++,"<br>")
// // document.write("Now the value of a is: ",a,"<br><br>")

// // document.write("The value of --a is: ",--a,"<br>")
// // document.write("Now the value of a is: ",a,"<br><br>")

// // document.write("The value of a-- is: ",a--,"<br>")
// // document.write("Now the value of a is: ",a,"<br><br>")


// //Task 2)
// // var a=2,b=1;
// // document.write("a is ",a,"<br>","b is ",b,"<br>")
// // var result= --a - --b + ++b + b--;
// // document.write("result is",result)

// // --a; //by using pre decrement the value will get subtracted by 1 first resulting in a=1
// // --a - --b; //the value of a=1 will be subtracted by 0 coz of pre decrement in b resulting b=0 and now the total is 1
// // --a - --b + ++b; //now the value of b which is 0 now is pre incremented resulting in b=1 now total is 2
// // --a - --b + ++b + b--; //now the value of b=1 added resulting in total of 3

// //Task 3)
// // var a = prompt("Name");
// // document.write("Hello ",a," Welcome to my web")

// //Task 5)
// // var num = +prompt("enter a value")
// // for(var i=1;i<=10;i++){
// //     document.write(num," X ", i ,"=",num*i,"<br>")
// // }

// //Task 6)
// var sub1 = prompt("First Subject")
// var sub2 = prompt("Second Subject")
// var sub3 = prompt("Third Subject")
// var sub1m = +prompt("Subject 1 obtained marks")
// var sub2m = +prompt("Subject 1 obtained marks")
// var sub3m = +prompt("Subject 1 obtained marks")
// totalmarks1=100
// totalmarks2=100
// totalmarks3=100
// totalmarks=300
// document.write("Subject", " Total Marks"," Obtained Marks"," Percentage","<br>")
// document.write(sub1,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",totalmarks1,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",sub1m,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",sub1m/totalmarks1*100,"%","<br>")
// document.write(sub2,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",totalmarks2,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",sub2m,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",sub2m/totalmarks2*100,"%","<br>")
// document.write(sub3,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",totalmarks3,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",sub3m,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",sub3m/totalmarks3*100,"%","<br>")
// document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",totalmarks,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",sub1m+sub2m+sub3m,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",(sub1m+sub2m+sub3m)/totalmarks*100,"%")