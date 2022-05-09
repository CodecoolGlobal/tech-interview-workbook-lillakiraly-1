# Programming Basics questions

## Computer science

### Data structures

#### ✅ What is the purpose of a list (array in some programming languages) data structure? Name some methods of it!

##### Lists are used to store multiple items in a single variable. List items are ordered, changeable/mutable, and allow duplicate values. List items are indexed, the first item has index [0]. List methods: append() - adds an element at the end of the list, pop() - removes an element from the end of the list or from the specified index, reverse() - reverses the sorting order of the list

#### ✅ What is the difference between a list/array and a set?

##### A set is a collection which is unordered, unchangeable*, and unindexed, and doesn't allow duplicate values. While list items are ordered, changeable/mutable, and allow duplicate values.

#### !!!What is the purpose and methods of a dictionary/map data structure?

### Algorithms

#### Fibonacci sequences. Write a method (or pseudo code), that generates the Fibonacci sequences.
#### How do you find a max value in a list/array if you can’t use any built-in functions?
#### How do you find the average of values in a list/array if you can’t use any built-in functions?
#### What do we call an *in-place* sort?
#### Explain an algorithm which sorts a list!

### Programming paradigms - procedural

#### ✅ What is the call stack?

##### At the most basic level, a call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).The call stack is primarily used for function invocation (call). Since the call stack is single, function(s) execution, is done, one at a time, from top to bottom. LIFO: When we say that the call stack, operates by the data structure principle of Last In, First Out, it means that the last function that gets pushed into the stack is the first to be pop out, when the function returns. In more detail: https://developer.mozilla.org/en-US/docs/Glossary/Call_stack , https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/
##### ![image](https://user-images.githubusercontent.com/71545633/166297417-67251f59-cbf6-4f03-8c31-c5fe1b8e0972.png)



#### ✅ What is “Stack overflow”?

##### A stack overflow is a programming error when too much memory is used on the call stack. A stack overflow occurs for example when there is a recursive function (a function that calls itself) without an exit point. The browser/hosting environment has a maximum stack call that it can accomodate before throwing a stack error. 

#### ✅ What are the main parts of a function?


![Screenshot from 2022-05-02 19-49-28](https://user-images.githubusercontent.com/71545633/166298709-1619f9a3-0ecd-459a-bef2-a2013a558f25.png)

##### def - (keyword) defines the function
##### function name - to identify the function - preferably a verb, describing what the function will do  when it's called
##### parameters (optional) - data that is passed into a function - inside function
##### function body - one or more valid (Python) statements
##### return (optional) - return a value from the function
##### arguments (optional) - data that is passed into a function - a value given to a function when it's called

### Programming languages - Python  
#### How do you use a dictionary in Python?
#### What does it mean that an object is immutable in Python?
#### What is conditional expression in Python?
#### What are different types of arguments in Python?
#### What is variable shadowing? (context: variable scope)
#### What can happen if you try to delete/drop/add an item from a List, while you are iterating over it in Python?
#### What is the "golden rule" of variable scoping in Python (context: LEGB)? What is the lifetime of variables?
#### If you need to access the iterator variable after a for loop, how would you do it in Python?
#### What type of elements can a list contain in Python?
#### What is slice operator in Python and how to use?
#### What arithmetic operators (+,*,-,/) can be used on lists in Python? What do they do?
#### What is the purpose of the in and not in membership operators in Python?
#### What does the + operator mean when used with strings in Python?
#### Explain f strings in Python?
#### Name 4 iterable types in Python!
#### What is the difference between list/set/dictionary comprehension and a generator expression in Python?
#### Does the order of the function definitions matter in Python? Why?
#### What does unpacking mean in Python?
#### What happens when you try to assign the result of a function which has no return statement to a variable in Python?

## Software engineering

### Debugging

#### ✅ What techniques can you use while debugging a program in Python?

##### Asking other developers/mentors
##### Using print() statements
##### Adding test cases
##### Using the IDE's debugging tools
##### Rubberduck

#### ✅  What does step over, step into and step out mean while using the debugger?

##### Step in: means that if there is a function call, it goes inside the function and you can see how the function is executing line by line till it returns and you go back to the next line right after the function call.

##### Step over: means that if there is a function call, it just executes it like a black box and returns the result, but you cannot see how the function was executed.

##### Step out: means that if you have Stepped in a function and now you want to skip seeing how the rest of the function is going to execute, you Step out and the function returns. Then, you go back to the next line, that is the line right after the function call.



#### How can you start to debug a program from a certain line using the debugger?

### Version control

#### What are the advantages of using a version control system?
#### What is the difference between the working directory, the staging area and the repository in git?
#### What are remote repositories in git?
#### Why does a merge conflict occur?
#### Through what series of commands could you put a new file into a remote repository connected to your existing local repository?
#### What does it mean atomic commits and descriptive commit messages?
#### What’s the difference between git and GitHub?

## Software design

### Clean code

#### What does clean code mean?
#### What steps do we usually do during a clean code refactoring?

### Error handling

#### What is exception handling?
#### What are the basics of exception handling in Python?
#### In which case should we catch an exception? Why?
#### What can/should we do with an exception in the ‘except’ block?
#### What does the else and finally statement do in a try-except block in Python?

## Software Development Methodologies

#### What is the main goal of a retrospective meeting?

## Programming environment

### Unix

#### What is UNIX and what is Linux?
#### What do we call the shell in Linux?
#### What does root means in a Linux environment?
#### How do you access your personal files in Linux?
#### How can you install an application in Linux?
#### What is package management in Linux, what are repositories?
#### How do you navigate in the filesystem with the command line?
#### What does the following commands do: mkdir, rm, cat, cp, touch?
#### How can you look up what does a command do in Linux if you have no internet connection?
#### What does the following commands do: head, tail, more, less?
#### How do you download a file from internet using the terminal?
