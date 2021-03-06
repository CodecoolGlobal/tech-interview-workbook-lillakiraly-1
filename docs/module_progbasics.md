# Programming Basics questions

## Computer science

### Data structures

#### ✅ What is the purpose of a list (array in some programming languages) data structure? Name some methods of it!

Lists are used to store multiple items in a single variable. List items are ordered, changeable/mutable, and allow duplicate values. List items are indexed, the first item has index [0]. 

List methods: 
- append() - adds an element at the end of the list, 
- pop() - removes an element from the end of the list or from the specified index, 
- reverse() - reverses the sorting order of the list

#### ✅ What is the difference between a list/array and a set?

A set is a collection which is unordered, unchangeable*, and unindexed, doesn't allow duplicate values, and can only contain immutable data types. While list items are ordered, changeable/mutable, allow duplicate values, and can contain any data types.

* *can't change the items' value in a set, however can add or remove from a set
#### ✅ What is the purpose and methods of a dictionary/map data structure?

The dictionary is a mutable data type. Dictionaries are indexed by keys, which can be any immutable type. Strings and numbers can always be keys. Tuples can be used as keys if they contain only strings, numbers or tuples; if a tuple contains any mutable object either directly or indirectly, it cannot be used as a key. A dictionary is a set of key-value pairs, with the requirement that the keys are unique (within one dictionary). The main operations on a dictionary are storing a value with some key and extracting the value given the key. It is also possible to delete a key-value pair with the del statement. If you store a value using a key that is already in use, the old value associated with that key is forgotten.

- ```copy()```:  returns a copy of the dicitonary
- ```items()```: returns a list containing a tuple for each key/value pair
- ```values()```: returns a list of all the values in the dictionary
- ```pop()```:  removes the element of the specified key

### Algorithms

#### ✅ Fibonacci sequences. Write a method (or pseudo code), that generates the Fibonacci sequences.
```Python
def create_fibonacci_sequence(n: int) -> int:
    if n < 0:
        print('Invalid input.')
        return
    elif n <= 1:
        return n
    
    else:
        return create_fibonacci_sequence(n-1) + create_fibonacci_sequence(n-2)
```

#### ✅ How do you find a max value in a list/array if you can’t use any built-in functions?

```Python
def find_max(numbers: list) -> int:
    max_num = 0
    for i in numbers:
        if i > max_num:
            max_num = i
    return max_num
```
#### ✅ How do you find the average of values in a list/array if you can’t use any built-in functions?

```Python
def find_average(numbers: list) -> int:
    number_of_list_items = len(numbers)
    sum_of_nums = 0
    for num in numbers:
        sum_of_nums += num

    return sum_of_nums / number_of_list_items
```

#### ✅ What do we call an *in-place* sort?

Sorting a list, in-place. Meaning not giving it's sorted outcome to any other variable at all, only modifying the order of the elements within the list.
```
list.sort()
```

#### ✅ Explain an algorithm which sorts a list!

A bubble-sort algorithm iterates through the given list, and compares each element's value to the next element's value. Given the list is to be sorted in ascending order, the algorithm switches the elements' places every time an element's value is greater than the value of the next element.

### Programming paradigms - procedural

#### ✅ What is the call stack?

At the most basic level, a call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).The call stack is primarily used for function invocation (call). Since the call stack is single, function(s) execution, is done, one at a time, from top to bottom. LIFO: When we say that the call stack, operates by the data structure principle of Last In, First Out, it means that the last function that gets pushed into the stack is the first to be pop out, when the function returns. In more detail: https://developer.mozilla.org/en-US/docs/Glossary/Call_stack , https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/


![image](https://user-images.githubusercontent.com/71545633/166297417-67251f59-cbf6-4f03-8c31-c5fe1b8e0972.png)



#### ✅ What is “Stack overflow”?

A stack overflow is a programming error when too much memory is used on the call stack. A stack overflow occurs for example when there is a recursive function (a function that calls itself) without an exit point. The browser/hosting environment has a maximum stack call that it can accomodate before throwing a stack error. 

#### ✅ What are the main parts of a function?


![Screenshot from 2022-05-02 19-49-28](https://user-images.githubusercontent.com/71545633/166298709-1619f9a3-0ecd-459a-bef2-a2013a558f25.png)

def - (keyword) defines the function

function name - to identify the function - preferably a verb, describing what the function will do  when it's called

parameters (optional) - data that is passed into a function - inside function

function body - one or more valid (Python) statements

return (optional) - return a value from the function

arguments (optional) - data that is passed into a function - a value given to a function when it's called

### Programming languages - Python  
#### ✅ How do you use a dictionary in Python?

Dictionaries are used to store data values in key:value pairs.
A dictionary is a collection which is ordered* (since Python 3.7), changeable and do not allow duplicates.
Dictionary items are presented in key:value pairs, and can be referred to by using the key name.
```Python
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict["brand"])
```
--> will print: Ford

#### ✅ What does it mean that an object is immutable in Python?

Immutable Objects : These are of in-built types like int, float, bool, string, unicode, tuple. An immutable object can’t be changed after it is created.

Immutable objects are quicker to access and are expensive to change because it involves the creation of a copy.
Whereas mutable objects are easy to change.

More details:  Whenever an object is instantiated, it is assigned a unique object id. The type of the object is defined at the runtime and it can’t be changed afterwards. However, it’s state can be changed if it is a mutable object. To summarise the difference, mutable objects can change their state or contents and immutable objects can’t change their state or content.


#### ✅ What is conditional expression in Python?

Condition: An expression whose value is used as a condition. 

Expression1: An expression which is executed if the condition evaluates to a truthy value (one which equals or can be converted to true).

Expression2: An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).
```Python
<expression1> if <condition> else <expression2>
```
#### ✅ What are different types of arguments in Python?

- Default arguments: assign default value with ```=```
``` Python
def lilo_s_function(date_of_birth= 1999)
  pass
```
- Keyword arguments: assign values, disregarding argument positions

``` Python
def lilo_s_function(name= 'Lilo', age= 98, hobby= 'something')
  pass
  
lilo_s_function(age= 3, hobby= 'climbing', name= 'idc')
```

- Arbitrary Arguments: *args* If you do not know how many arguments that will be passed into your function, add a * before the parameter name in the function definition. This way the function will receive a **tuple of arguments**, and can access the items accordingly.
``` Python
def my_function(*kids):
  print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")
```

- Arbitrary keyword Arguments: *kwargs* If you do not know how many keyword arguments that will be passed into your function, add two asterisk: ** before the parameter name in the function definition. This way the function will receive a **dictionary of arguments**, and can access the items accordingly.

```Python
def my_function(**kid):
  print("His last name is " + kid["lname"])

my_function(fname = "Tobias", lname = "Refsnes")
```

#### ✅ What is variable shadowing? (context: variable scope)

Variable shadowing occurs when a variable defined in the inner scope has the same name as a variable in the outer scope.

In the inner scope, both variables’ scope overlap.
![image](https://user-images.githubusercontent.com/71545633/168414475-4e441922-21e9-4698-8d5d-69ff271da63d.png)

It's defined as when a variable "hides" another variable with the same name. So, when variable shadowing occurs, there are two or more variables with the same name, and their definitions are dependent on their scope (meaning their values may be different depending upon scope).

#### ✅ What can happen if you try to delete/drop/add an item from a List, while you are iterating over it in Python?

If you delete/drop an item from a list while iterating over it, the results will be inaccurate. Due to the changed contents (indices), the loop will skip some elements and/or end prematurely. - might result in IndexError

If we add to the list while iterating over it, it could result in an infinite loop.


#### ✅ What is the "golden rule" of variable scoping in Python (context: LEGB)? What is the lifetime of variables?

LEGB stands for:

- Local: Defined inside function/class.
- Enclosed: Defined inside enclosing functions (nested functions concept).
- Global: Defined at the uppermost level.
- Built-in: Reserved names in Python built-in modules.

LEGB is the hierarchy in which python looks for variables (and functions as well).

Variables have different lifetimes, depending on their definition. E.g. a local variable exists as long as the function (in which it is defined) is being executed.

The golden rule means that variables should only be accessible where they are used. Avoiding using global variables as much as possible is standard.

#### ✅ If you need to access the iterator variable after a for loop, how would you do it in Python?

I can simply use the iterator variable after the loop has ended.

#### ✅ What type of elements can a list contain in Python?

Lists can contain any built-in data type.

#### ✅ What is slice operator in Python and how to use?

Using a slice operator does not change the list in-place but creates a new object.

```list[start:end:step]``` -- Creates a new list from the elements between start and end(the end index is non-inclusive).

```list[:]``` -- Creates a new (independent) copy of the list. Modifying this list won't affect the original list.

```list[::-1]``` -- Reverses the list.

#### ✅ What arithmetic operators (+,*,-,/) can be used on lists in Python? What do they do?

The + operator concatenates two lists. In other words, it appends one list's elements to another's.

The * operator multiplies a list's elements by an integer.

The - and / operators are unsupported and result in an error.

#### ✅ What is the purpose of the in and not in membership operators in Python?

Membership operators are operators used to validate the membership of a value. 

It tests for membership in a sequence (such as strings, lists, or tuples).

- in: Evaluates to True if the specified object exists in the specified sequence, evaluates to False otherwise.

- not in: Reverse of the in operator.

#### ✅ What does the + operator mean when used with strings in Python?

The + operator concatenates two strings.
```Python
str1 = 'apple'
str2 = 'bottomjeans'

str3 = str1 + str2

print(str3)  --> prints 'applebottomjeans'
```

#### ✅ Explain f strings in Python?

```f"{variable}"```

Also called formatted string literals. 

It is a string literal that has an f at the beginning and curly braces containing expressions that will be replaced with their values. 

```Python
str1 = 'Yeah'
num = 77

print(f'Usher sings "{str1}" {num} times.')
```

#### ✅ Name 4 iterable types in Python!

- String
- List
- Tuple
- Dictionary


#### ✅ What is the difference between list/set/dictionary comprehension and a generator expression in Python?

The major difference between a list comprehension and a generator expression is that a list comprehension produces the entire list while the generator expression produces one item at a time.

Generator expression:
- Memory efficient: A normal function to return a sequence will create the entire sequence in memory before returning the result. This is an overkill, if the number of items in the sequence is very large. Generator implementation of such sequences is memory friendly and is preferred since it only produces one item at a time.
- Represent infinite stream: Generators are excellent mediums to represent an infinite stream of data. Infinite streams cannot be stored in memory, and since generators produce only one item at a time, they can represent an infinite stream of data.

```Python

#List comprehension
my_list = [x for x in range(3)]
print(my_nums) -> [0, 1, 2]

#Set comprehension
my_set = {x * 3 for x in range(3)}
print(my_set) -> {0, 3, 6}

#Dictionary comprehension
my_dict = {x: x * 3 for x in range(3)}
print(my_dict) -> {0: 0, 1: 3, 2: 6}
```

```Python
#Generator expression
generator = (x for x in range(3))
print(generator) -> <generator object <genexpr> at 0x7f246f89a1f0>

print(next(generator)) -> 0
print(next(generator)) -> 1
print(next(generator)) -> 2
print(next(generator)) -> StopIteration

#We can see above that the generator expression did not produce the required result immediately. 
#Instead, it returned a generator object, which produces items only on demand.
```


#### ✅ Does the order of the function definitions matter in Python? Why?

It won't change the result of the program. It can help the understanding of a code if it's ordered well. The calling of the functions is what matters. -> can't call a function before it's defined

```Python
printing() #will result in NameError

def printing():
    print('Hey there')

printing() #runs smoothly
```

#### ✅ What does unpacking mean in Python?

Unpack: tuples, lists, strings, sets(unordered), dictionaries -> iterables
```Python
a, b = (1, 2)

print(a) -> 1
print(b) -> 2

my_dict = {'num1': 123, 'num2': 456}
a, b = my_dict

print(a) -> 'num1'
print(b) -> 'num2'

a, b = my_dict.values()

print(a) -> 123
print(b) -> 456

#The * operator is known, in this context, as the tuple (or iterable) unpacking operator. 
#It extends the unpacking functionality to allow us to collect or pack multiple values in a single variable. 

a, *b, c = [1, 2, 3, 4, 5, 6]

print(a) -> 1
print(b) -> [2, 3, 4, 5]
print(c) -> 6

```

#### ✅ What happens when you try to assign the result of a function which has no return statement to a variable in Python?

```None``` is assigned as a result.

If there is no return statement (or just a return without an argument), an implicit ```return None``` is added to the end of a function.

## Software engineering

### Debugging

#### ✅ What techniques can you use while debugging a program in Python?

-  Asking other developers/mentors
-  Using print() statements
-  Adding test cases
-  Using the IDE's debugging tools
-  Rubberduck

#### ✅  What does step over, step into and step out mean while using the debugger?

 Step in: means that if there is a function call, it goes inside the function and you can see how the function is executing line by line till it returns and you go back to the next line right after the function call.

 Step over: means that if there is a function call, it just executes it like a black box and returns the result, but you cannot see how the function was executed.

 Step out: means that if you have Stepped in a function and now you want to skip seeing how the rest of the function is going to execute, you Step out and the function returns. Then, you go back to the next line, that is the line right after the function call.

#### ✅ How can you start to debug a program from a certain line using the debugger?

Add a breakpoint, then start debugging (press Fn + F5 -> Continue)

### Version control

#### ✅ What are the advantages of using a version control system?

You can record and follow every change throughout the project. Multiple people can work on the same code at the same time. If something goes wrong, you can always go back to a previous version.

- Collaboration
- Storing Versions (Properly)
- Restoring Previous Versions
- Understanding What Happened (commits)
- Backup

#### ✅ What is the difference between the working directory, the staging area and the repository in git?

- Working directory: where files that are not handled by git. These files are also referred to as "untracked files." 
- Staging area: where the files are, that are going to be a part of the next commit, which lets git know what changes in the file are going to occur for the next commit. 
- Repository: contains all of a project's commits.
![image](https://user-images.githubusercontent.com/71545633/169849503-c6b5b05a-147f-46fd-9790-e29b5c7e9be5.png)


#### ✅ What are remote repositories in git?

Remote repositories are versions of your project that are hosted on the Internet or network somewhere. You can have several of them, each of which generally is either read-only or read/write for you.

#### ✅ Why does a merge conflict occur?

A merge conflict is an event that takes place when Git is unable to automatically resolve differences in code between two commits.

A conflict arises when two separate branches have made edits to the same line in a file, or when a file has been deleted in one branch but edited in the other.

#### ✅ Through what series of commands could you put a new file into a remote repository connected to your existing local repository?

1. ```mv``` - move file to that repo
2. ```git add``` - add to repo
3. ```git commit```
4. ```git push```

#### ✅ What does it mean atomic commits and descriptive commit messages?

Atomic commits are what they sound like: atomic (very small). 
![image](https://user-images.githubusercontent.com/71545633/169848054-f3b8d54a-281a-405d-af48-5c7549270e5d.png)

Descriptive commit messages: When the commit messages are meaningful, concise and easy to read.
- You should understand what you were working on, just by reading the commit message
- Usually use present tense, like: remove unused imports, add hamburger menu for mobile ui


#### ✅ What’s the difference between git and GitHub?

Git is a distributed version control tool that can manage a development project's source code history, while GitHub is a cloud based platform built around the Git tool.

More details:
Git (global information tracker):

- A version control system used for tracking changes in source code during software development.
- Emphasis on speed, data integrity and support for distributed, non-linear workflows.
- Every change, or commit, has a unique ID (or hash) linked to its parent. Furthermore, you can create branches, which have a different history than your master branch, with their own commits; these can then be merged back into the master.

Github is a website used for hosting git repositories in the cloud (via the git protocol).

## Software design

### Clean code

#### ✅ What does clean code mean?

Code is clean if it can be understood easily – by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability.

#### ✅ What steps do we usually do during a clean code refactoring?

- First we need to try and understand the code.
- Write down ideas on how to improve the code - check for repeated code, ,dead code, bad variable names, global variables, magic numbers etc.
- Act on the notes, check that the code works the same way at every little change/step
- In the end, the code should be free of clutter, complexity and cleverness.

### Error handling

#### ✅ What is exception handling?

An exception is an error that happens during execution of a program. When that error occurs, Python generates an exception that can be handled, which avoids your program to crash.

#### ✅ What are the basics of exception handling in Python?

We use try-except blocks.

If the try block runs to failure, it jumps to the except block rather than crashing. The except block contains the logic that deals with the exception.

#### ✅ In which case should we catch an exception? Why?

We should catch only well defined, foreseeable exceptions to maintain flow control. Defining broader exceptions may cause the program to not work as expected.

#### ✅ What can/should we do with an exception in the ‘except’ block?

We should tell the program how to continue executing our code. E.g. to print a meaningful error message, or quit the programme if needed it.

#### ✅ What does the else and finally statement do in a try-except block in Python?

else block: Will be executed only if the code inside the try block doesn’t generate an exception.

finally block: Code is always executed, whether the program executed properly or it raised an exception.


## Software Development Methodologies

#### ✅ What is the main goal of a retrospective meeting?

A retrospective should take place after a peer review and before the next sprint planning. It is an opportunity for the team (Scrum Team?) to inspect itself and create a plan (with action items) for improvements to be enacted during the next sprint.

- What went well in the sprint?
- What could be improved?
- What will we commit to improve in the next sprint? Action items...

## Programming environment

### Unix

#### ✅ What is UNIX and what is Linux?

Unix is a is a multiuser and multitasking computer operating system. Nowadays UNIX is more like a trademark which means the family of operating systems. Linux is an open source operating system. Today there are a lots of versions of Linux and we call them distributions.

Both of them are operating systems, but UNIX was earlier, it is running in CLI(Command Line Interface, meaning there is "only a command line, no mouse or graphical elements, at all) Linux is one or more steps forward, it enables applications and the users to access the devices on the computer to perform some specific function.

Usage:

Unix: The UNIX can be used in internet servers, workstations, and PCs. Linux: Everyone. From home users to developers and computer enthusiasts alike. Linux OS can be installed on various types of devices like mobile, tablet computers.

#### ✅ What do we call the shell in Linux?

On most Linux systems a program called bash (which stands for Bourne Again SHell, an enhanced version of the original Unix shell program, sh , written by Steve Bourne) acts as the shell program.

More details: 
- The shell is a program that takes operations from the user and gives it to the OS.

- A shell provides a command line user interface for Unix-like operating systems. The shell is both an interactive command language and a scripting language, and is used by the operating system to control the execution of the system using shell scripts.

- GNU BASH / Bash (Bourne Again Shell). It's not part of the kernel, but it uses it to run itself. It is also called simply the terminal.

- Bash is a free Unix shell and command language. It is the default login shell for most Linux distros and macOS (up until Mojave).

- Bash is a command processor that runs in a text window where the user types commands that cause actions. Bash can also read and execute commands from a file (shell script).



#### ✅ What does root means in a Linux environment?

Root either means Root Directory, or in the case of privileges, it means administrator, or complete privilege with access to all commands in the OS.

More details: "root" is the user name or account that by default has access to all commands and files on a Linux or other Unix-like operating system. It is also referred to as the root account, root user and the superuser. Basically the "System Administrator" of Linux, from Windows.

#### ✅ How do you access your personal files in Linux?

Through the file browser of by the terminal with the "cd" command.

```cd home/<username>``` in terminal

It shows as ```~/```

#### ✅ How can you install an application in Linux?

You can use the software center (Ubuntu) or you can use commands in the terminal as well:

```sudo apt-get install <package name> ```

#### ✅ What is package management in Linux, what are repositories?

Package management is a method of installing, updating, removing, and keeping track of software updates from specific repositories (repos) in the Linux system.

DPKG: *Debian Package Management System. Installed in Debian based distributions. 
APT: A very popular, free, powerful package manager. Also installed in Debian based distributions. - works with Ubuntu’s Advanced Packaging Tool (APT) 


A Linux repository is a storage location from which your system retrieves and installs OS updates and applications.

#### ✅ How do you navigate in the filesystem with the command line?

```pwd```:  Print working directory.

```ls```:  List items.

```cd```:  Change directory.

#### ✅ What does the following commands do: mkdir, rm, cat, cp, touch?

```mkdir```:  Create/make new directory

```rm```:  Delete file or directory

```cat```:  Open file - reads data and gives its content as output

```cp```:  Copy file or directory

```touch```:  Create, change, and modify timestamps of a file

#### ✅ How can you look up what does a command do in Linux if you have no internet connection?

```man <command name>```

```<command name> --help```

#### ✅ What does the following commands do: head, tail, more, less?

```head```:  Print the first 10 lines of a file to standard output.

```tail```:  Print the last 10 lines of a file to standard output.

```more```:  View one screenful of text of a file at a time.

```less```:  Similar to more, but faster, and you can navigate through the file. Better for large files.

#### ✅ How do you download a file from internet using the terminal?

```wget <URL>```
