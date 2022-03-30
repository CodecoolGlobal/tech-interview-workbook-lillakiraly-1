# Tech interview workbook

## What is this about?

Tech interview workbook is the basis of the preparation for the tech interview. We gathered questions you could expect on real tech interviews (and therefore on the trial tech interview in the advanced module).

During your Journey throughout Codecoool your job is to fill the answers in your own workbook. We believe that thinking about, and writing the the answers will help you to understand the material better than reading those in a book.

Questions are separated to modules. When finishing a module, the questions in the relavant module should be answered, **this is a prerequirement for a PA** (meaning you can't get a GO on a PA, if you haven't answered all the module level questions with a valid git history).

## How to work on this repo

You can use [this](https://classroom.github.com/a/bv-gRnai) link to clone the repo.

### Review process

This very workbook used to be in Google Docs in the very old times, where students collaboratively filled the answers. We believe that collaboration is a must, but we'd like to also increase the amount of personal work.

Collaboration should happen in the following way. In every module you have to find someone from the next module who'll review your modifications in your repository. People of the advanced module should find someone from the alumni, or someone from the module peers.

The workbooks development should happen in git branches, merging those with pull requests (people in the progbasics room should ask their peers, they already know what git branching is about). Review comments should happen through Github's code review functionality.

## About markdown (the format of questions and answers)

[Markdown](https://daringfireball.net/projects/markdown/) is a lightweight plain textual format to author documents.
You can have:
-   Sections
-   Code blocks
-   Tables
-   Listings

Actually even this document is written using markdown.  You can
check it out for examples by opening it in your favorite text
editor.

### Some examples

A table:

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

A codeblock with syntax highlighting:

```java
class BestClassEver {
    public static void main(String[] args) {
        // This will get me hired for sure!!!
        System.out.println("This is a great code block");
    }
}
```

## How to check your work on localhost

All you need is a static webserver.  (One which can serve files from
a root directory.  No logic is needed for the endpoints)

One easily available solution is the HTTP server embedded in python.
It can be started from the command line like this:

```sh
# For python 3
# This starts a webserver on localhost:8080
# Make sure to start it from this directory
python3 -m http.server 8080
```

If you've started the web server on port 8080
then you can open the page in your browser:
http://localhost:8080/#/ or http://0.0.0.0:8080/#/
