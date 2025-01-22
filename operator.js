// arithmetic operators
// + - * / % ++ --

// let a = 5
// let b = 3

// console.log(a+b);
// document.write(a+b);
// console.log(a-b);
// document.write(a-b);
// console.log(a*b);
// document.write(a*b);
// console.log(a/b);2
// document.write(a/b);
// console.log(a%b);
// document.write(a%b);
// console.log(a++);
// document.write(a++);
// console.log(a--);
// document.write(a--);


let a =10
let b = 5
b-=30
document.write(a);
a+=30
document.write(a,'<br>');
document.write(b,'<br>');

// relational operators
// == === != > < >= <=
let x = 5
let y = 3

console.log(x==y);
document.write(x==y,'<br>');
console.log(x===y);
document.write(x===y,'<br>');
console.log(x!=y);
document.write(x!=y,'<br>');
console.log(x>y);
document.write(x>y,'<br>');
console.log(x<y);
document.write(x<y,'<br>');
console.log(x>=y);
document.write(x>=y,'<br>');
console.log(x<=y);
document.write(x<=y,'<br>');

//ternary operator
let age = 18
let voteable = (age<18) ? "Too young":"Old enough"
console.log(voteable);
document.write(voteable,'<br>');



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Java Script Practice</title>
    <script>
      let a = 3;
      let b = 5;

      console.log(a + b);
      console.log("hii");
      console.log(${a} + ${b} = ${a + b});
      console.log(${a} - ${b} = ${a - b});

      // JavaSript Operators
      // 1. Arithmetic Operators

      let d = 5;
      let e = 3;
      console.log(d + e);
      console.log(d - e);
      console.log(d * e);
      console.log(d / e);
      console.log(d % e);
      console.log(d ** e);
      // 2. Assignment Operators
      let f = 5;
      let g = 3;
      f += g;
      console.log(f);
      f -= g;
      console.log(f);
      f *= g;
      console.log(f);
      f /= g;
      console.log(f);
      f %= g;
      console.log(f);
      f **= g;
      console.log(f);
      // 3. Comparison Operators
      let h = 5;
      let i = 3;

      console.log(h == i);
      console.log(h != i);
      console.log(h > i);
      console.log(h < i);
      console.log(h >= i);
      console.log(h <= i);

      // 4. Logical Operators
      let j = 5;
      let k = 3;
      console.log(j == 5 && k == 3);
      console.log(j == 5 || k == 3);
      console.log(!(j == 5 && k == 3));
      // 5. Type Operators
      let l = 5;
      let m = "5";
      console.log(l == m);
      console.log(l === m);
      console.log(l != m);
      console.log(l !== m);
      // 6. Bitwise Operators
      let n = 5;
      let o = 3;
      console.log(n & o);
      console.log(n | o);
      console.log(n ^ o);
      console.log(~n);
      console.log(n << o);
      console.log(n >> o);
      console.log(n >>> o);
      // 7. Conditional (Ternary) Operator
      let p = 5;
      let q = 3;
      let r = p > q ? "p is greater than q" : "q is greater than p";
      console.log(r);
      // 8. Comma Operator
      let s = 5;
      let t = 3;
      let u = (s++, t++);
      console.log(s);
      console.log(t);
      console.log(u);
      // 9. Unary Operator
      let v = 5;
      let w = 3;
      console.log(+v);
      console.log(-w);
      console.log(++v);
      console.log(--w);

      // Ternary operator
      let age = 18;
      let status = age >= 18 ? "adult" : "minor";
      console.log(status);

      //promt
      let name = prompt("Enter your name");
      console.log(name);
    </script>
  </head>
  <body>
    <h1>Java Script Practice</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nobis
      in illum pariatur voluptatum eos voluptate repellat modi accusamus,
      commodi aliquam dicta mollitia eveniet doloremque fugiat consequatur!
      Perspiciatis, modi beatae?
    </p>
  </body>
</html>