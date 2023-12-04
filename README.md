# Namaste-React 
Epsisode-2
-------------
-------------
Episode -1
------------
------------

1.  npm
2.  npm init : Intialize package.json
3.  Package.json: Configuration of npm in json format
4.  Why we need package.json?
5.  Types of Dependecies
        --> Dev Dependency : Used in Development Phase
        --> Normal Dependency : Used in Production
6.  npm install -D parcel (install parcel as Dev Dependency)
7.  ^ & ~ Difference b/w caret and tilde
8.  2.6.2 --> Major.Minor.Patch
9.  ~version --> accept new patch version.
10. ^version --> accept minor & patch versions.
11. npm install
            --> node_modules
            -->package.lock.json
12. Package.json v/s Package.lock.json
13. Transitive Dependency : One dependency is depended on other dependencies 
                            e.g: Parcel is depended on other dependecies/packages
14. .gitignore

Episode-2
----------
----------
Igniting our App/ Hoisting the app on server
---------------------------------------------
1.  npx parcel index.html
    ==> Parcel creates a server for us on a given port where our app is running
2.  npx: execute a package
3.  npm: install a package
4.  npm install react
5.  npm i react-dom
6.  Modules in JS 
7. Parcel dependency
8. Prod build : npx parcel build index.html
9. Broserslist: Tell your app what all browsers you need to support.




Pracel dependency:
* Dev Build
* Local Server
* HMR(Hot Module Replacement)
* File Watching: File Watching Algorithm written in C++
  (Keep an eye on all files)
* Faster Build due to Caching
* Image Optimization
* Minification for Production Build
* Bundling
* Compressing
* Consistent Hashing
* Differential Bundling: Supports older browsers(Diff bundle for diff types of browser)
* Error Handling
* HTTPS support
* Tree Shaking: remove unused code
* Different dev and prod builds

Episode-3
----------
----------

React Components
------------------
1.Functional Component(New Way)
2.Class Component(Old Way)

Functional Component ==> It's a normal JS function that returns JSX piece of code i.e React Element.

Component Composition
-----------------------
Putting a React Component inside another React Component is called Component Composition.
aka "Nesting of React Components"

Cross Site Scripting(XSS)
--------------------------
--------------------------

Cross-site scripting (XSS) is a security exploit which allows an attacker to inject into a website malicious client-side code. This code is executed by the victims and lets the attackers bypass access controls and impersonate users.

1.How to prevent Cross-Site Scripting(XSS) attacks in React apps?

reference
https://www.linkedin.com/advice/3/how-do-you-prevent-cross-site-scripting-xss-attacks#:~:text=1%20Use%20JSX%20syntax,-One%20of%20the&text=This%20means%20that%20any%20potentially,exposes%20you%20to%20XSS%20risks.

2.What makes your code readable?

Not React but JSX is making your code readable.

3.Why we use arror functions?
=>Newer way
=>Industry Standard

Epsiode-4
----------
-----------
1.  UI design of Food cart App
2.  Inline Style

3. Props:==>
   --------
  Props are properties that are dynamically passes to a component.

  prop--> arguments to a function.

  assing prop to a component is similar to passing arguments to a function.

4.  Destructing on the fly
5. Object Destructing:
   ---------------------
   JavaScript Object Destructuring is the syntax for extracting values from an object property and assigning them to a variable. The destructuring is also possible for JavaScript Arrays.

  // assigning object attributes to variables
  const person = {
      name: 'Sara',
      age: 25,
      gender: 'female'    
      }

  // destructuring assignment
    let { name, age, gender } = person;

    console.log(name); // Sara
    console.log(age); // 25
    console.log(gender); // female

    Reference: https://www.programiz.com/javascript/destructuring-assignment

6.  Array.prototype.join()
7.  UI Layer + Data Layer= Frontend Application
8.  Config Driven UI
9. Passing Dynamic props to Component
10. Optional Chaining
11. Keys : 
    Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:







