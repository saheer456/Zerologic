// Phase 8-14 Lessons: Data Structures, Strings, Files, Exceptions, Modules, OOP, Exam Prep

export const phase8to14Lessons = [
    // ============ PHASE 8: DATA STRUCTURES ============
    {
        id: 'lists-intro',
        phase: 8,
        title: 'Lists - Introduction',
        mentalModel: {
            analogy: 'A list is like a shopping list where you can add, remove, or change items',
            explanation: 'Just like a paper list, Python lists hold multiple items in order. You can add to them, cross things off, or change what is written.',
        },
        whyItExists: {
            problem: 'Sometimes you need to store many related values, not just one.',
            solution: 'Lists store multiple values in a single variable, keeping them ordered.'
        },
        plainEnglish: {
            explanation: `A list is a collection of items in order.

Key characteristics:
- Ordered: items have positions (index)
- Mutable: can change after creation
- Can mix types: [1, "hello", True]
- Created with square brackets []`,
            keyPoints: [
                'Use [] to create lists',
                'Items separated by commas',
                'Index starts at 0',
                'Can hold any type'
            ]
        },
        syntax: {
            code: `fruits = ["apple", "banana", "cherry"]

# Access by index (starts at 0)
print(fruits[0])  # apple
print(fruits[1])  # banana

# Negative index = from end
print(fruits[-1])  # cherry`,
            lineExplanations: [
                'Create a list',
                '',
                'First item is index 0',
                'Second item',
                '',
                '-1 means last item'
            ]
        },
        commonMistakes: [
            {
                wrong: 'fruits = ["a", "b", "c"]\nprint(fruits[3])',
                correct: 'fruits = ["a", "b", "c"]\nprint(fruits[2])',
                explanation: 'Index out of range! 3 items have indexes 0, 1, 2. There is no index 3.'
            }
        ],
        microPractice: [
            {
                type: 'predict-output',
                question: 'nums = [10, 20, 30]; print(nums[1])',
                answer: '20',
                hints: ['Index 1 is the SECOND item']
            }
        ]
    },
    {
        id: 'list-methods',
        phase: 8,
        title: 'List Methods',
        mentalModel: {
            analogy: 'List methods are like tools for managing your list',
            explanation: 'append = add at end, remove = take out, sort = organize. Each method is a specific tool.',
        },
        whyItExists: {
            problem: 'You need ways to add, remove, and modify list items.',
            solution: 'List methods provide easy ways to manipulate lists.'
        },
        plainEnglish: {
            explanation: `Common list methods:

append(x) - Add x to end
insert(i, x) - Add x at index i
remove(x) - Remove first x
pop() - Remove & return last
pop(i) - Remove & return at index i
sort() - Sort in place
reverse() - Reverse in place
len(list) - Get count of items`,
            keyPoints: [
                'append() adds to end',
                'pop() removes from end',
                'sort() changes the list',
                'len() gives count'
            ]
        },
        syntax: {
            code: `nums = [3, 1, 4]
nums.append(5)     # [3, 1, 4, 5]
nums.sort()        # [1, 3, 4, 5]
nums.remove(3)     # [1, 4, 5]
last = nums.pop()  # last=5, nums=[1,4]
print(len(nums))   # 2`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Which method adds to the END of a list?',
                options: ['insert()', 'append()', 'add()', 'push()'],
                correctIndex: 1,
                hints: ['Think: append = add to end']
            }
        ]
    },
    {
        id: 'tuples',
        phase: 8,
        title: 'Tuples - Immutable Lists',
        mentalModel: {
            analogy: 'A tuple is like a sealed package - you can look inside but cannot change contents',
            explanation: 'Once created, a tuple cannot be modified. It is read-only.',
        },
        whyItExists: {
            problem: 'Sometimes you need data that should never change.',
            solution: 'Tuples are immutable - they prevent accidental modifications.'
        },
        plainEnglish: {
            explanation: `Tuples are like lists but immutable (unchangeable).

Created with () parentheses
Examples: (1, 2, 3) or ("x", "y")

Why use tuples?
- Protect data from changes
- Faster than lists
- Can be dictionary keys`,
            keyPoints: [
                'Use () parentheses',
                'Cannot add/remove/change items',
                'Access same as lists [index]',
                'Immutable = unchangeable'
            ]
        },
        syntax: {
            code: `coords = (10, 20)

print(coords[0])  # 10
print(coords[1])  # 20

# This will ERROR:
# coords[0] = 50  # TypeError!`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What happens if you try to change a tuple item?',
                options: ['It changes', 'Nothing happens', 'TypeError', 'Creates new tuple'],
                correctIndex: 2,
                hints: ['Tuples are immutable']
            }
        ]
    },
    {
        id: 'dictionaries',
        phase: 8,
        title: 'Dictionaries',
        mentalModel: {
            analogy: 'A dictionary is like a real dictionary - look up a word (key) to find its meaning (value)',
            explanation: 'Instead of index numbers, you use keys (names) to find values.',
        },
        whyItExists: {
            problem: 'Lists only use numbers as indexes. What if you want named access?',
            solution: 'Dictionaries use keys (any name) to store and retrieve values.'
        },
        plainEnglish: {
            explanation: `Dictionaries store key-value pairs.

Created with {} curly braces
Format: {key: value, key: value}

Keys must be unique
Keys can be strings, numbers, tuples
Values can be anything`,
            keyPoints: [
                'Use {} curly braces',
                'key: value format',
                'Access by key, not index',
                'Keys must be unique'
            ]
        },
        syntax: {
            code: `student = {
    "name": "Ali",
    "age": 20,
    "grade": "A"
}

print(student["name"])  # Ali
student["age"] = 21     # Update
student["city"] = "NYC" # Add new`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: 'd = {"a": 1, "b": 2}; print(d["b"])',
                answer: '2',
                hints: ['Access by key name']
            }
        ]
    },
    {
        id: 'sets',
        phase: 8,
        title: 'Sets',
        mentalModel: {
            analogy: 'A set is like a bag of unique marbles - no duplicates allowed',
            explanation: 'Sets automatically remove duplicate values. Great for finding unique items.',
        },
        whyItExists: {
            problem: 'Sometimes you need only unique values, no duplicates.',
            solution: 'Sets store only unique values and provide fast membership testing.'
        },
        plainEnglish: {
            explanation: `Sets are unordered collections of unique items.

Created with {} or set()
No duplicates allowed
No index access (unordered)
Great for: unique values, membership test`,
            keyPoints: [
                'No duplicates',
                'Unordered (no index)',
                'Fast membership test',
                'Use set() to convert list'
            ]
        },
        syntax: {
            code: `nums = {1, 2, 2, 3, 3, 3}
print(nums)  # {1, 2, 3}

# Check membership
print(2 in nums)  # True

# Remove duplicates from list
unique = set([1, 1, 2, 2, 3])`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: 'len({1, 1, 2, 2, 3})',
                answer: '3',
                hints: ['Duplicates are removed']
            }
        ]
    },

    // ============ PHASE 9: STRINGS ============
    {
        id: 'string-basics',
        phase: 9,
        title: 'String Basics',
        mentalModel: {
            analogy: 'A string is like a chain of letters - each letter has a position',
            explanation: 'Strings are sequences of characters. You can access each character by its index.',
        },
        whyItExists: {
            problem: 'Programs need to work with text.',
            solution: 'Strings store and manipulate text data.'
        },
        plainEnglish: {
            explanation: `Strings are sequences of characters.

Created with quotes: "hello" or 'hello'
Each character has an index (0, 1, 2...)
Strings are immutable (cannot change)
Can use + to join strings`,
            keyPoints: [
                'Index starts at 0',
                'Negative index from end',
                'Immutable',
                'Use + to concatenate'
            ]
        },
        syntax: {
            code: `name = "Python"
print(name[0])   # P
print(name[-1])  # n
print(len(name)) # 6

# Concatenation
full = "Hello " + "World"`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: 's = "Hello"; print(s[1])',
                answer: 'e',
                hints: ['Index 1 is the second character']
            }
        ]
    },
    {
        id: 'string-methods',
        phase: 9,
        title: 'String Methods',
        mentalModel: {
            analogy: 'String methods are text transformation tools',
            explanation: 'Like word processing: uppercase, lowercase, find, replace.',
        },
        whyItExists: {
            problem: 'Raw text often needs cleaning or transformation.',
            solution: 'String methods provide convenient text manipulation.'
        },
        plainEnglish: {
            explanation: `Common string methods:

upper() - UPPERCASE
lower() - lowercase
strip() - remove whitespace
split() - break into list
join() - combine list into string
replace(old, new) - substitute
find(x) - find position of x`,
            keyPoints: [
                'Methods return new string',
                'Original unchanged',
                'split() makes list',
                'join() makes string'
            ]
        },
        syntax: {
            code: `text = "  Hello World  "
print(text.strip())    # "Hello World"
print(text.upper())    # "  HELLO WORLD  "
print(text.lower())    # "  hello world  "
print(text.replace("World", "Python"))

words = "a,b,c".split(",")  # ["a","b","c"]
joined = "-".join(words)    # "a-b-c"`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: '"hello".upper()',
                answer: 'HELLO',
                hints: ['upper() makes all uppercase']
            }
        ]
    },
    {
        id: 'string-slicing',
        phase: 9,
        title: 'String Slicing',
        mentalModel: {
            analogy: 'Slicing is like cutting a portion of text',
            explanation: 'Extract a substring from position A to position B.',
        },
        whyItExists: {
            problem: 'You often need just part of a string.',
            solution: 'Slicing extracts any portion using [start:end].'
        },
        plainEnglish: {
            explanation: `Slicing: [start:end:step]

start: where to begin (included)
end: where to stop (NOT included)
step: how many to skip

Default: start=0, end=length, step=1`,
            keyPoints: [
                '[start:end] - end not included',
                '[:n] - first n chars',
                '[n:] - from n to end',
                '[::-1] - reverse'
            ]
        },
        syntax: {
            code: `s = "Python"
print(s[0:3])   # Pyt
print(s[:3])    # Pyt (same)
print(s[3:])    # hon
print(s[::2])   # Pto (every 2nd)
print(s[::-1])  # nohtyP (reverse)`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: '"abcdef"[1:4]',
                answer: 'bcd',
                hints: ['Start at 1, stop before 4']
            }
        ]
    },

    // ============ PHASE 10: FILE HANDLING ============
    {
        id: 'file-concepts',
        phase: 10,
        title: 'File Handling Concepts',
        mentalModel: {
            analogy: 'Files are like notebooks - you open them, read/write, then close them',
            explanation: 'Always open before using, close when done. Or use "with" for automatic closing.',
        },
        whyItExists: {
            problem: 'Programs need to save data permanently.',
            solution: 'Files persist data even after the program ends.'
        },
        plainEnglish: {
            explanation: `File modes:
"r" - Read (default)
"w" - Write (overwrites!)
"a" - Append (add to end)
"r+" - Read and write

Always close files or use "with".`,
            keyPoints: [
                'open() to open file',
                'close() when done',
                '"with" auto-closes',
                'Mode specifies action'
            ]
        },
        syntax: {
            code: `# Best practice: use "with"
with open("file.txt", "r") as f:
    content = f.read()
    print(content)
# File auto-closes here

# Writing
with open("output.txt", "w") as f:
    f.write("Hello!")`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Which mode overwrites the entire file?',
                options: ['"r"', '"w"', '"a"', '"r+"'],
                correctIndex: 1,
                hints: ['w = write (fresh start)']
            }
        ]
    },
    {
        id: 'reading-files',
        phase: 10,
        title: 'Reading Files',
        mentalModel: {
            analogy: 'Reading a file is like reading a book - page by page or all at once',
            explanation: 'You can read the whole file, read line by line, or read into a list.',
        },
        whyItExists: {
            problem: 'Need different ways to read depending on file size and use case.',
            solution: 'Multiple read methods: read(), readline(), readlines().'
        },
        plainEnglish: {
            explanation: `Reading methods:

read() - entire file as one string
readline() - one line at a time
readlines() - all lines as list
for line in file: - iterate lines`,
            keyPoints: [
                'read() for small files',
                'readline() for one line',
                'for loop for large files',
                'strip() removes newline'
            ]
        },
        syntax: {
            code: `# Read entire file
with open("data.txt") as f:
    all_text = f.read()

# Read line by line
with open("data.txt") as f:
    for line in f:
        print(line.strip())`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Which reads ALL lines into a list?',
                options: ['read()', 'readline()', 'readlines()', 'readall()'],
                correctIndex: 2,
                hints: ['lines - plural = list']
            }
        ]
    },

    // ============ PHASE 11: EXCEPTION HANDLING ============
    {
        id: 'errors-exceptions',
        phase: 11,
        title: 'Errors and Exceptions',
        mentalModel: {
            analogy: 'Exceptions are like unexpected problems - flat tire, power outage',
            explanation: 'Even good code can face unexpected situations. Exceptions handle these gracefully.',
        },
        whyItExists: {
            problem: 'Programs crash when errors occur.',
            solution: 'Exception handling catches errors and handles them gracefully.'
        },
        plainEnglish: {
            explanation: `Common exception types:

ValueError - wrong type of value
TypeError - wrong type for operation
IndexError - index out of range
KeyError - key not in dictionary
FileNotFoundError - file does not exist
ZeroDivisionError - divide by 0`,
            keyPoints: [
                'Exceptions crash programs',
                'try-except catches them',
                'Different types for different errors',
                'Handle gracefully'
            ]
        },
        syntax: {
            code: `# Without handling - CRASHES
# x = 5 / 0  # ZeroDivisionError

# With handling
try:
    x = 5 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
    x = 0`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What error occurs with: int("hello")?',
                options: ['TypeError', 'ValueError', 'SyntaxError', 'NameError'],
                correctIndex: 1,
                hints: ['"hello" is not a valid integer value']
            }
        ]
    },
    {
        id: 'try-except',
        phase: 11,
        title: 'try-except Blocks',
        mentalModel: {
            analogy: 'try-except is like a safety net under a tightrope walker',
            explanation: 'Try the risky code. If you fall, the net (except) catches you.',
        },
        whyItExists: {
            problem: 'Need to continue running even when errors occur.',
            solution: 'try-except catches specific errors and runs alternative code.'
        },
        plainEnglish: {
            explanation: `try-except structure:

try: risky code here
except ErrorType: handle that error
else: runs if NO error
finally: ALWAYS runs`,
            keyPoints: [
                'try = code that might fail',
                'except = error handler',
                'else = if no error',
                'finally = always runs'
            ]
        },
        syntax: {
            code: `try:
    num = int(input("Number: "))
    result = 100 / num
except ValueError:
    print("Enter a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print(f"Result: {result}")
finally:
    print("Done!")`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Which block ALWAYS runs?',
                options: ['try', 'except', 'else', 'finally'],
                correctIndex: 3,
                hints: ['finally = final action, always']
            }
        ]
    },

    // ============ PHASE 12: MODULES ============
    {
        id: 'import-statement',
        phase: 12,
        title: 'Import Statement',
        mentalModel: {
            analogy: 'Importing is like borrowing tools from a toolbox',
            explanation: 'Python has many toolboxes (modules). Import brings their tools into your program.',
        },
        whyItExists: {
            problem: 'Including all code in every program wastes memory.',
            solution: 'Modules organize code. Import only what you need.'
        },
        plainEnglish: {
            explanation: `Import brings external code:

import module - import whole module
import module as alias - with short name
from module import x - import specific
from module import * - import all (avoid)`,
            keyPoints: [
                'import gets external code',
                'Use alias for shorter names',
                'from...import for specific',
                'Organize your own code too'
            ]
        },
        syntax: {
            code: `import math
print(math.sqrt(16))  # 4.0

import math as m
print(m.pi)  # 3.14159...

from random import randint
print(randint(1, 10))`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does "import math as m" do?',
                options: ['Creates math', 'Renames math to m', 'Deletes math', 'Copies math'],
                correctIndex: 1,
                hints: ['as = alias (another name)']
            }
        ]
    },
    {
        id: 'common-modules',
        phase: 12,
        title: 'Common Python Modules',
        mentalModel: {
            analogy: 'Built-in modules are pre-stocked toolboxes',
            explanation: 'Python includes many useful modules. No installation needed.',
        },
        whyItExists: {
            problem: 'Common tasks should not require writing from scratch.',
            solution: 'Standard library provides ready-made solutions.'
        },
        plainEnglish: {
            explanation: `Useful built-in modules:

math - mathematical functions
random - random numbers
datetime - dates and times
os - operating system
json - JSON data`,
            keyPoints: [
                'math: sqrt, sin, cos, pi',
                'random: randint, choice, shuffle',
                'datetime: now, date, time',
                'Many more available'
            ]
        },
        syntax: {
            code: `import math
print(math.sqrt(25))  # 5.0

import random
print(random.randint(1, 100))
print(random.choice(["a", "b", "c"]))

from datetime import datetime
print(datetime.now())`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Which module has sqrt() and pi?',
                options: ['random', 'math', 'datetime', 'os'],
                correctIndex: 1,
                hints: ['Mathematical functions']
            }
        ]
    },

    // ============ PHASE 13: OOP BASICS ============
    {
        id: 'class-object',
        phase: 13,
        title: 'Classes and Objects',
        mentalModel: {
            analogy: 'A class is like a blueprint, an object is the actual house built from it',
            explanation: 'The blueprint (class) describes what a house looks like. The actual house (object) is created from that blueprint.',
        },
        whyItExists: {
            problem: 'Related data and functions are scattered across the code.',
            solution: 'Classes group related data (attributes) and functions (methods) together.'
        },
        plainEnglish: {
            explanation: `Object-Oriented Programming (OOP):

Class = template/blueprint
Object = instance of a class

A class defines:
- Attributes (data)
- Methods (functions)`,
            keyPoints: [
                'class defines template',
                'object is instance',
                '__init__ initializes',
                'self refers to instance'
            ]
        },
        syntax: {
            code: `class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        print(f"{self.name} says Woof!")

# Create objects
my_dog = Dog("Buddy")
my_dog.bark()  # Buddy says Woof!`,
            lineExplanations: [
                'Define class',
                'Constructor',
                'Store name in self',
                '',
                'Method',
                '',
                '',
                'Create instance',
                'Call method'
            ]
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What is an object?',
                options: ['A template', 'An instance of a class', 'A function', 'A variable'],
                correctIndex: 1,
                hints: ['Houses built from blueprints']
            }
        ]
    },
    {
        id: 'init-self',
        phase: 13,
        title: '__init__ and self',
        mentalModel: {
            analogy: '__init__ is like a birth certificate - it sets up the initial identity',
            explanation: 'When an object is born (created), __init__ runs automatically to set it up.',
        },
        whyItExists: {
            problem: 'Objects need initial values when created.',
            solution: '__init__ is called automatically to initialize the object.'
        },
        plainEnglish: {
            explanation: `__init__ = constructor = initializer

Called automatically when object created
Sets up initial attributes
self = reference to current object

self.attribute = value stores data in the object`,
            keyPoints: [
                '__init__ runs on creation',
                'self is the object itself',
                'First param always self',
                'Store attributes in self'
            ]
        },
        syntax: {
            code: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def info(self):
        print(f"{self.name} is {self.age}")

s = Student("Ali", 20)
s.info()  # Ali is 20`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'When is __init__ called?',
                options: ['Manually', 'When object is created', 'At program end', 'Never'],
                correctIndex: 1,
                hints: ['Automatically on creation']
            }
        ]
    },
    {
        id: 'inheritance',
        phase: 13,
        title: 'Inheritance',
        mentalModel: {
            analogy: 'Inheritance is like a child inheriting traits from parents',
            explanation: 'A child class inherits all attributes and methods from the parent class, just like you inherit eye color from your parents.',
            diagram: `
    ┌────────────────┐
    │     Animal     │  ← Parent (base) class
    │  - name        │
    │  - eat()       │
    └───────┬────────┘
            │ inherits
    ┌───────┴────────┐
    │      Dog       │  ← Child (derived) class
    │  - breed       │
    │  - bark()      │
    └────────────────┘
            `
        },
        whyItExists: {
            problem: 'Copying code between similar classes is wasteful and error-prone.',
            solution: 'Inheritance lets you reuse code from one class in another.'
        },
        plainEnglish: {
            explanation: `Inheritance creates a parent-child relationship between classes.

Parent class (base/super): The original class
Child class (derived/sub): Inherits from parent

The child gets ALL:
- Attributes from parent
- Methods from parent
- Plus its own new ones`,
            keyPoints: [
                'Child inherits from parent',
                'Use class Child(Parent):',
                'Child can add new features',
                'Child can override parent methods'
            ]
        },
        syntax: {
            code: `class Animal:
    def __init__(self, name):
        self.name = name
    
    def eat(self):
        print(f"{self.name} is eating")

class Dog(Animal):  # Inherits from Animal
    def __init__(self, name, breed):
        super().__init__(name)  # Call parent's __init__
        self.breed = breed
    
    def bark(self):
        print(f"{self.name} says Woof!")

dog = Dog("Buddy", "Labrador")
dog.eat()   # Inherited from Animal
dog.bark()  # Dog's own method`,
            lineExplanations: [
                'Parent class',
                'Parent constructor',
                'Parent attribute',
                '',
                'Parent method',
                '',
                'Child inherits from Animal',
                'Child constructor',
                'Call parent constructor',
                'Child attribute',
                '',
                'Child method',
                '',
                'Create Dog object',
                'Uses inherited method',
                'Uses Dog method'
            ]
        },
        commonMistakes: [
            {
                wrong: 'class Dog(Animal):\n    def __init__(self, name, breed):\n        self.breed = breed',
                correct: 'class Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed',
                explanation: 'Forgot to call super().__init__()! The parent\'s constructor won\'t run, so self.name won\'t be set.'
            }
        ],
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does super() do?',
                options: ['Creates new object', 'Calls parent class', 'Deletes child', 'Returns None'],
                correctIndex: 1,
                hints: ['super = parent class']
            }
        ]
    },
    {
        id: 'encapsulation',
        phase: 13,
        title: 'Encapsulation',
        mentalModel: {
            analogy: 'Encapsulation is like a medicine capsule - the contents are protected inside',
            explanation: 'Just like a capsule protects medicine from the outside world, encapsulation protects data inside a class.',
        },
        whyItExists: {
            problem: 'If anyone can change object data directly, bugs are hard to find.',
            solution: 'Encapsulation hides internal data and controls access through methods.'
        },
        plainEnglish: {
            explanation: `Encapsulation = data hiding + controlled access

Python naming conventions:
- public: name (anyone can access)
- protected: _name (internal use hint)
- private: __name (name mangling)

Use methods (getters/setters) to control access.`,
            keyPoints: [
                '_name = protected (convention)',
                '__name = private (mangled)',
                'Use methods to access data',
                'Prevents accidental changes'
            ]
        },
        syntax: {
            code: `class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private
    
    def get_balance(self):  # Getter
        return self.__balance
    
    def deposit(self, amount):  # Controlled access
        if amount > 0:
            self.__balance += amount
            print(f"Deposited {amount}")
    
    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount

acc = BankAccount(1000)
print(acc.get_balance())  # 1000
# print(acc.__balance)    # Error! Private
acc.deposit(500)
print(acc.get_balance())  # 1500`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does __balance mean?',
                options: ['Public', 'Protected', 'Private', 'Static'],
                correctIndex: 2,
                hints: ['Double underscore = private']
            }
        ]
    },
    {
        id: 'polymorphism',
        phase: 13,
        title: 'Polymorphism',
        mentalModel: {
            analogy: 'Polymorphism is like a universal remote - same button, different actions for each device',
            explanation: 'Pressing "power" works for TV, AC, and fan - same action name, different behavior for each.',
        },
        whyItExists: {
            problem: 'Different classes need to do similar things in different ways.',
            solution: 'Polymorphism lets different classes use the same method name with different implementations.'
        },
        plainEnglish: {
            explanation: `Polymorphism = "many forms"

Same method name, different behavior:
- Dog.speak() → "Woof!"
- Cat.speak() → "Meow!"
- Cow.speak() → "Moo!"

Allows writing generic code that works with any class.`,
            keyPoints: [
                'Same method name',
                'Different implementations',
                'Works with inheritance',
                'Enables generic code'
            ]
        },
        syntax: {
            code: `class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

class Cow:
    def speak(self):
        return "Moo!"

# Same method name, different behavior
animals = [Dog(), Cat(), Cow()]
for animal in animals:
    print(animal.speak())
# Output: Woof! Meow! Moo!`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What is polymorphism?',
                options: ['One class only', 'Same method, different behavior', 'Hiding data', 'Multiple parents'],
                correctIndex: 1,
                hints: ['poly = many, morph = forms']
            }
        ]
    },
    {
        id: 'method-overriding',
        phase: 13,
        title: 'Method Overriding',
        mentalModel: {
            analogy: 'Overriding is like customizing an inherited recipe to suit your taste',
            explanation: 'You inherit a recipe but change some ingredients. The child class changes how an inherited method works.',
        },
        whyItExists: {
            problem: 'Inherited methods may not be exactly what the child class needs.',
            solution: 'Method overriding lets child classes redefine parent methods.'
        },
        plainEnglish: {
            explanation: `Overriding = redefining a parent's method in the child

Steps:
1. Child inherits method from parent
2. Child defines same method name
3. Child's version is used instead

Use super() to call parent's version if needed.`,
            keyPoints: [
                'Same method name in child',
                'Child version takes priority',
                'Can call parent with super()',
                'Common with __str__ method'
            ]
        },
        syntax: {
            code: `class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):  # Override parent method
        return "Woof!"

class Cat(Animal):
    def speak(self):  # Override parent method
        return "Meow!"

a = Animal()
d = Dog()
c = Cat()

print(a.speak())  # Some sound
print(d.speak())  # Woof!
print(c.speak())  # Meow!`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Which method gets called when both parent and child have same method?',
                options: ['Parent', 'Child', 'Both', 'Neither'],
                correctIndex: 1,
                hints: ['Child overrides parent']
            }
        ]
    },
    {
        id: 'class-methods-static',
        phase: 13,
        title: 'Class Methods & Static Methods',
        mentalModel: {
            analogy: 'Instance methods work on one object, class methods work on the whole class',
            explanation: 'Instance method = individual employee task. Class method = HR policy for all employees.',
        },
        whyItExists: {
            problem: 'Some methods should apply to the class itself, not individual objects.',
            solution: 'Class methods and static methods operate at the class level.'
        },
        plainEnglish: {
            explanation: `Three types of methods:

Instance method: works on self (instance)
Class method: works on cls (class)
Static method: independent utility

@classmethod uses cls instead of self
@staticmethod doesn't use self or cls`,
            keyPoints: [
                'Instance: uses self',
                '@classmethod: uses cls',
                '@staticmethod: no self/cls',
                'Class methods can access class vars'
            ]
        },
        syntax: {
            code: `class Student:
    school = "ABC School"  # Class variable
    
    def __init__(self, name):
        self.name = name
    
    def greet(self):  # Instance method
        return f"Hi, I'm {self.name}"
    
    @classmethod
    def get_school(cls):  # Class method
        return cls.school
    
    @staticmethod
    def is_adult(age):  # Static method
        return age >= 18

print(Student.get_school())    # ABC School
print(Student.is_adult(20))    # True
s = Student("Ali")
print(s.greet())               # Hi, I'm Ali`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Which decorator makes a class method?',
                options: ['@static', '@classmethod', '@instance', '@method'],
                correctIndex: 1,
                hints: ['Class + method']
            }
        ]
    },
    {
        id: 'abstraction',
        phase: 13,
        title: 'Abstraction',
        mentalModel: {
            analogy: 'Abstraction is like a TV remote - you press buttons without knowing the internal circuits',
            explanation: 'You don\'t need to know HOW something works internally, just WHAT it does.',
        },
        whyItExists: {
            problem: 'Complex implementation details make code hard to use.',
            solution: 'Abstraction hides complexity and shows only essential features.'
        },
        plainEnglish: {
            explanation: `Abstraction = hiding complexity

Abstract class: cannot be instantiated directly
Abstract method: must be implemented by child

Use abc module (Abstract Base Class):
- from abc import ABC, abstractmethod

Forces child classes to implement required methods.`,
            keyPoints: [
                'Hide implementation details',
                'Show only what\'s needed',
                'Abstract class = template',
                'Child must implement abstract methods'
            ]
        },
        syntax: {
            code: `from abc import ABC, abstractmethod

class Shape(ABC):  # Abstract class
    @abstractmethod
    def area(self):  # Must be implemented
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):  # Implemented
        return self.width * self.height
    
    def perimeter(self):  # Implemented
        return 2 * (self.width + self.height)

# shape = Shape()  # Error! Can't instantiate
rect = Rectangle(5, 3)
print(rect.area())       # 15
print(rect.perimeter())  # 16`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Can you create an object of an abstract class?',
                options: ['Yes', 'No', 'Sometimes', 'Only with super()'],
                correctIndex: 1,
                hints: ['Abstract = incomplete template']
            }
        ]
    },
    {
        id: 'dunder-methods',
        phase: 13,
        title: 'Special (Dunder) Methods',
        mentalModel: {
            analogy: 'Dunder methods are like magic spells - special names that Python recognizes',
            explanation: '__init__, __str__, __add__ etc. have special meaning. Python calls them automatically.',
        },
        whyItExists: {
            problem: 'Custom classes don\'t work well with built-in operations like print, +, ==.',
            solution: 'Dunder methods let your class work with Python\'s built-in features.'
        },
        plainEnglish: {
            explanation: `Dunder = Double UNDERscore

Common dunder methods:
__init__: constructor
__str__: for print()
__repr__: for debugging
__len__: for len()
__add__: for + operator
__eq__: for == comparison`,
            keyPoints: [
                '__str__ for print()',
                '__add__ for + operator',
                '__eq__ for == comparison',
                '__len__ for len()'
            ]
        },
        syntax: {
            code: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Point({self.x}, {self.y})"
    
    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

p1 = Point(1, 2)
p2 = Point(3, 4)
print(p1)         # Point(1, 2)
p3 = p1 + p2      # Uses __add__
print(p3)         # Point(4, 6)
print(p1 == p2)   # False (uses __eq__)`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Which method is called by print()?',
                options: ['__init__', '__str__', '__print__', '__repr__'],
                correctIndex: 1,
                hints: ['str = string representation']
            }
        ]
    },

    // ============ PHASE 14: EXAM PREPARATION ============
    {
        id: 'common-programs',
        phase: 14,
        title: 'Common Exam Programs',
        mentalModel: {
            analogy: 'Practice problems are like workout exercises - build muscle memory',
            explanation: 'These programs appear frequently in exams. Practice until automatic.',
        },
        whyItExists: {
            problem: 'Exams test common programming patterns.',
            solution: 'Master these programs for exam success.'
        },
        plainEnglish: {
            explanation: `Must-know programs:

1. Swap two numbers
2. Check even/odd
3. Find factorial
4. Check prime
5. Fibonacci series
6. Reverse a string/number
7. Sum of digits
8. Pattern printing`,
            keyPoints: [
                'Practice without looking',
                'Understand the logic',
                'Know variations',
                'Time yourself'
            ]
        },
        syntax: {
            code: `# Swap two numbers
a, b = 5, 10
a, b = b, a
print(a, b)  # 10, 5

# Check even/odd
n = 7
if n % 2 == 0:
    print("Even")
else:
    print("Odd")

# Factorial
n = 5
fact = 1
for i in range(1, n+1):
    fact *= i
print(fact)  # 120`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'write-code',
                question: 'Write code to check if a number is even or odd',
                answer: 'if n % 2 == 0: print("Even") else: print("Odd")',
                hints: ['Use modulus % to check remainder']
            }
        ]
    },
    {
        id: 'pattern-programs',
        phase: 14,
        title: 'Pattern Programs',
        mentalModel: {
            analogy: 'Patterns are like building blocks - understand the row and column logic',
            explanation: 'Every pattern is made of rows and columns. Outer loop = rows, inner loop = what to print.',
        },
        whyItExists: {
            problem: 'Pattern programs test loop understanding.',
            solution: 'Master nested loops with pattern practice.'
        },
        plainEnglish: {
            explanation: `Pattern logic:

Outer loop: controls rows
Inner loop: controls columns
Observation: what changes per row?

Common patterns:
- Right triangle
- Pyramid
- Diamond
- Number patterns`,
            keyPoints: [
                'Outer loop = rows',
                'Inner loop = columns',
                'Observe pattern rules',
                'Practice variations'
            ]
        },
        syntax: {
            code: `# Right triangle
# *
# **
# ***
for i in range(1, 4):
    print("*" * i)

# Number pattern
# 1
# 12
# 123
for i in range(1, 4):
    for j in range(1, i+1):
        print(j, end="")
    print()`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'In nested loops for patterns, outer loop controls:',
                options: ['Columns', 'Rows', 'Characters', 'Spaces'],
                correctIndex: 1,
                hints: ['Think vertical vs horizontal']
            }
        ]
    },
    {
        id: 'exam-tips',
        phase: 14,
        title: 'Exam Tips & Tricks',
        mentalModel: {
            analogy: 'Exam strategy is like a game plan - know the rules, prepare smart',
            explanation: 'Beyond coding skills, exam technique matters.',
        },
        whyItExists: {
            problem: 'Good coders sometimes score poorly due to exam technique.',
            solution: 'Strategic approach maximizes your score.'
        },
        plainEnglish: {
            explanation: `Exam strategies:

Before exam:
- Revise syntax
- Practice common programs
- Know error types

During exam:
- Read question carefully
- Write algorithm first
- Check for indentation
- Test with examples`,
            keyPoints: [
                'Read question twice',
                'Start with what you know',
                'Manage time well',
                'Check your answers'
            ]
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What should you do before writing code?',
                options: ['Start typing', 'Plan algorithm', 'Ask for help', 'Skip to next'],
                correctIndex: 1,
                hints: ['Planning prevents errors']
            }
        ]
    }
]
