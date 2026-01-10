// Advanced Python lessons - Decorators, Iterators, Generators, and more

export const advancedLessons = [
    // ============ NEW PHASE: BUILT-IN FUNCTIONS ============
    {
        id: 'builtin-functions',
        phase: 7,
        title: 'Essential Built-in Functions',
        mentalModel: {
            analogy: 'Built-in functions are tools that come with Python - ready to use',
            explanation: 'Python provides many useful functions without importing anything.',
        },
        whyItExists: {
            problem: 'Common operations should not require external libraries.',
            solution: 'Built-in functions handle common tasks efficiently.'
        },
        plainEnglish: {
            explanation: `Essential built-ins:
len() - length of object
range() - sequence of numbers
enumerate() - index + value
zip() - combine iterables
sorted() - return sorted list
any() / all() - boolean checks
min() / max() / sum() - math
abs() / round() - numbers`,
            keyPoints: [
                'No import needed',
                'Very efficient',
                'Learn these well',
                'Used constantly'
            ]
        },
        syntax: {
            code: `# Length
print(len([1, 2, 3]))     # 3
print(len("hello"))       # 5

# Range
print(list(range(5)))     # [0,1,2,3,4]
print(list(range(2,8,2))) # [2,4,6]

# Enumerate
for i, val in enumerate(["a","b","c"]):
    print(i, val)  # 0 a, 1 b, 2 c

# Zip
names = ["Ali", "Sara"]
ages = [25, 30]
for name, age in zip(names, ages):
    print(f"{name} is {age}")

# Math
print(min([3,1,4]))  # 1
print(max([3,1,4]))  # 4
print(sum([3,1,4]))  # 8`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: 'sum([1, 2, 3, 4])',
                answer: '10',
                hints: ['Add all elements']
            }
        ]
    },
    {
        id: 'map-filter-reduce',
        phase: 7,
        title: 'map, filter, reduce',
        mentalModel: {
            analogy: 'map transforms, filter selects, reduce combines into one',
            explanation: 'Functional programming tools for processing collections.',
        },
        whyItExists: {
            problem: 'Processing collections with loops is verbose.',
            solution: 'Functional tools transform data cleanly.'
        },
        plainEnglish: {
            explanation: `map(func, iterable) - apply func to all
filter(func, iterable) - keep where func is True
reduce(func, iterable) - combine to single value

Note: reduce needs functools import`,
            keyPoints: [
                'map transforms each item',
                'filter keeps matching items',
                'reduce combines all',
                'Return iterators (use list())'
            ]
        },
        syntax: {
            code: `from functools import reduce

nums = [1, 2, 3, 4, 5]

# Map: double each
doubled = list(map(lambda x: x * 2, nums))
print(doubled)  # [2, 4, 6, 8, 10]

# Filter: keep evens
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)  # [2, 4]

# Reduce: sum all
total = reduce(lambda a, b: a + b, nums)
print(total)  # 15

# Reduce: find max
maximum = reduce(lambda a, b: a if a > b else b, nums)
print(maximum)  # 5`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does filter() return?',
                options: ['All items', 'Items where func is True', 'First item', 'Last item'],
                correctIndex: 1,
                hints: ['Filter keeps matches']
            }
        ]
    },

    // ============ ITERATORS & GENERATORS ============
    {
        id: 'iterators',
        phase: 8,
        title: 'Iterators',
        mentalModel: {
            analogy: 'An iterator is like a bookmark - it remembers where you are in a sequence',
            explanation: 'Iterators provide one item at a time. Uses __iter__ and __next__.',
        },
        whyItExists: {
            problem: 'Loading entire sequences into memory is wasteful for large data.',
            solution: 'Iterators generate one item at a time, saving memory.'
        },
        plainEnglish: {
            explanation: `Iterable: can be looped over (list, string, etc.)
Iterator: object that produces values one at a time

Methods:
__iter__() - returns iterator
__next__() - returns next value
StopIteration - signals end`,
            keyPoints: [
                'iter() gets iterator',
                'next() gets next value',
                'StopIteration when done',
                'for loop uses iterators'
            ]
        },
        syntax: {
            code: `# List is iterable
nums = [1, 2, 3]

# Get iterator
it = iter(nums)

print(next(it))  # 1
print(next(it))  # 2
print(next(it))  # 3
# next(it)       # StopIteration!

# Custom iterator
class Counter:
    def __init__(self, max):
        self.max = max
        self.n = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.n >= self.max:
            raise StopIteration
        self.n += 1
        return self.n

for num in Counter(3):
    print(num)  # 1, 2, 3`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What exception signals iterator end?',
                options: ['EndOfIterator', 'StopIteration', 'IteratorDone', 'NoMoreItems'],
                correctIndex: 1,
                hints: ['Stop + Iteration']
            }
        ]
    },
    {
        id: 'generators',
        phase: 8,
        title: 'Generators',
        mentalModel: {
            analogy: 'A generator is like a factory that makes items on demand',
            explanation: 'Functions that use yield instead of return. Create iterators easily.',
        },
        whyItExists: {
            problem: 'Creating custom iterators requires lots of boilerplate.',
            solution: 'Generators make iterators simple with yield keyword.'
        },
        plainEnglish: {
            explanation: `Generator function: uses yield
- Pauses at yield
- Resumes when next() called
- Memory efficient
- Great for large/infinite data`,
            keyPoints: [
                'yield returns value and pauses',
                'next() resumes execution',
                'Memory efficient',
                'Creates iterator automatically'
            ]
        },
        syntax: {
            code: `# Generator function
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

# Use it
for num in count_up_to(5):
    print(num)  # 1, 2, 3, 4, 5

# Generator expression
squares = (x**2 for x in range(5))
print(list(squares))  # [0, 1, 4, 9, 16]

# Infinite generator
def infinite_numbers():
    n = 0
    while True:
        yield n
        n += 1

gen = infinite_numbers()
print(next(gen))  # 0
print(next(gen))  # 1`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What keyword makes a generator?',
                options: ['return', 'yield', 'generate', 'iterate'],
                correctIndex: 1,
                hints: ['Gives a value and pauses']
            }
        ]
    },

    // ============ DECORATORS ============
    {
        id: 'decorators-intro',
        phase: 13,
        title: 'Decorators - Introduction',
        mentalModel: {
            analogy: 'A decorator wraps a function like gift wrapping - adds extra features',
            explanation: 'Decorators modify functions without changing their code.',
        },
        whyItExists: {
            problem: 'Adding features to many functions creates code duplication.',
            solution: 'Decorators wrap functions to add reusable features.'
        },
        plainEnglish: {
            explanation: `Decorator = function that wraps another function

Syntax: @decorator_name
Equivalent to: func = decorator(func)

Common uses:
- Logging
- Timing
- Authentication
- Caching`,
            keyPoints: [
                '@ syntax applies decorator',
                'Decorator takes function',
                'Returns modified function',
                'Keeps original behavior'
            ]
        },
        syntax: {
            code: `# Simple decorator
def my_decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Before function
# Hello!
# After function

# Equivalent to:
# say_hello = my_decorator(say_hello)`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does a decorator return?',
                options: ['None', 'A modified function', 'The original function', 'A string'],
                correctIndex: 1,
                hints: ['Wraps and returns']
            }
        ]
    },
    {
        id: 'decorators-with-args',
        phase: 13,
        title: 'Decorators with Arguments',
        mentalModel: {
            analogy: 'Decorators can handle any function by accepting *args and **kwargs',
            explanation: 'Make decorators work with functions that have any arguments.',
        },
        whyItExists: {
            problem: 'Basic decorators break with functions that have arguments.',
            solution: 'Use *args and **kwargs to pass through any arguments.'
        },
        plainEnglish: {
            explanation: `To handle function arguments:
- wrapper takes *args, **kwargs
- Pass them to original function
- Use functools.wraps to preserve metadata`,
            keyPoints: [
                'wrapper(*args, **kwargs)',
                'func(*args, **kwargs)',
                '@functools.wraps preserves name',
                'Works with any function'
            ]
        },
        syntax: {
            code: `import functools

def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end-start:.4f}s")
        return result
    return wrapper

@timer
def slow_function(n):
    import time
    time.sleep(n)
    return "Done"

result = slow_function(1)  # slow_function took 1.00s`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does @functools.wraps do?',
                options: ['Speeds up function', 'Preserves function metadata', 'Adds arguments', 'Removes decorator'],
                correctIndex: 1,
                hints: ['Preserves __name__, __doc__']
            }
        ]
    },
    {
        id: 'builtin-decorators',
        phase: 13,
        title: 'Built-in Decorators',
        mentalModel: {
            analogy: 'Python provides decorators for common patterns',
            explanation: '@staticmethod, @classmethod, @property are built-in decorators.',
        },
        whyItExists: {
            problem: 'Common patterns like properties and static methods need clean syntax.',
            solution: 'Built-in decorators handle these patterns.'
        },
        plainEnglish: {
            explanation: `Built-in decorators:

@staticmethod - no self, no cls
@classmethod - uses cls, not self
@property - access method like attribute`,
            keyPoints: [
                '@property makes getter',
                '@x.setter makes setter',
                '@staticmethod is utility',
                '@classmethod gets class'
            ]
        },
        syntax: {
            code: `class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value > 0:
            self._radius = value
    
    @property
    def area(self):
        import math
        return math.pi * self._radius ** 2
    
    @staticmethod
    def from_diameter(d):
        return Circle(d / 2)

c = Circle(5)
print(c.radius)   # 5 (uses getter)
print(c.area)     # 78.54... (calculated property)`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: '@property turns a method into what?',
                options: ['Class variable', 'Static method', 'Readable attribute', 'Constructor'],
                correctIndex: 2,
                hints: ['Access method like attribute']
            }
        ]
    },

    // ============ ADVANCED OOP ============
    {
        id: 'multiple-inheritance',
        phase: 13,
        title: 'Multiple Inheritance & MRO',
        mentalModel: {
            analogy: 'Multiple inheritance is like having two parents - you inherit from both',
            explanation: 'A class can inherit from multiple parents. MRO determines the order.',
        },
        whyItExists: {
            problem: 'Sometimes a class needs features from multiple parent classes.',
            solution: 'Python allows inheriting from multiple classes.'
        },
        plainEnglish: {
            explanation: `Multiple inheritance: class Child(A, B)

MRO = Method Resolution Order
- The order Python searches for methods
- Use ClassName.mro() to see it
- Follows C3 linearization`,
            keyPoints: [
                'Can have multiple parents',
                'MRO determines search order',
                'Left-to-right priority',
                'Use super() properly'
            ]
        },
        syntax: {
            code: `class Flyable:
    def fly(self):
        return "Flying!"

class Swimmable:
    def swim(self):
        return "Swimming!"

class Duck(Flyable, Swimmable):
    def quack(self):
        return "Quack!"

d = Duck()
print(d.fly())   # Flying!
print(d.swim())  # Swimming!
print(d.quack()) # Quack!

# Check MRO
print(Duck.mro())
# [Duck, Flyable, Swimmable, object]`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does MRO stand for?',
                options: ['Multiple Reuse Order', 'Method Resolution Order', 'Module Run Order', 'Method Return Object'],
                correctIndex: 1,
                hints: ['How Python finds methods']
            }
        ]
    },
    {
        id: 'dataclasses',
        phase: 13,
        title: 'Data Classes',
        mentalModel: {
            analogy: 'Dataclasses auto-generate __init__, __repr__, and more',
            explanation: 'Reduce boilerplate for classes that mainly store data.',
        },
        whyItExists: {
            problem: 'Writing __init__, __repr__, __eq__ for data classes is repetitive.',
            solution: '@dataclass decorator generates these methods automatically.'
        },
        plainEnglish: {
            explanation: `from dataclasses import dataclass

@dataclass generates:
- __init__
- __repr__
- __eq__
- Optional: __hash__, ordering`,
            keyPoints: [
                'Reduce boilerplate',
                'Type hints required',
                'Auto __init__, __repr__',
                'Can add methods too'
            ]
        },
        syntax: {
            code: `from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float

# Auto-generated __init__
p1 = Point(1.0, 2.0)

# Auto-generated __repr__
print(p1)  # Point(x=1.0, y=2.0)

# Auto-generated __eq__
p2 = Point(1.0, 2.0)
print(p1 == p2)  # True

# With defaults and methods
@dataclass
class Circle:
    radius: float = 1.0
    
    def area(self):
        import math
        return math.pi * self.radius ** 2`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does @dataclass auto-generate?',
                options: ['Only __init__', '__init__ and __repr__', '__init__, __repr__, __eq__', 'Nothing'],
                correctIndex: 2,
                hints: ['Multiple dunder methods']
            }
        ]
    },

    // ============ STANDARD LIBRARY ============
    {
        id: 'datetime-module',
        phase: 12,
        title: 'datetime Module',
        mentalModel: {
            analogy: 'datetime handles dates and times like a calendar and clock combined',
            explanation: 'Work with dates, times, and durations.',
        },
        whyItExists: {
            problem: 'Date and time calculations are complex.',
            solution: 'datetime module handles dates, times, and math correctly.'
        },
        plainEnglish: {
            explanation: `from datetime import datetime, date, timedelta

datetime - date and time together
date - just date
time - just time
timedelta - duration/difference`,
            keyPoints: [
                'datetime.now() current time',
                'date.today() current date',
                'timedelta for differences',
                'strftime for formatting'
            ]
        },
        syntax: {
            code: `from datetime import datetime, date, timedelta

# Current date/time
now = datetime.now()
print(now)

today = date.today()
print(today)

# Create specific date
birthday = date(2000, 5, 15)

# Date math with timedelta
tomorrow = today + timedelta(days=1)
next_week = today + timedelta(weeks=1)

# Formatting
print(now.strftime("%Y-%m-%d %H:%M:%S"))
print(now.strftime("%B %d, %Y"))  # May 15, 2024

# Parsing
dt = datetime.strptime("2024-05-15", "%Y-%m-%d")`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does timedelta represent?',
                options: ['A date', 'A time', 'A duration', 'A timestamp'],
                correctIndex: 2,
                hints: ['Difference between times']
            }
        ]
    },
    {
        id: 'os-sys-modules',
        phase: 12,
        title: 'os and sys Modules',
        mentalModel: {
            analogy: 'os talks to the operating system, sys talks to Python itself',
            explanation: 'os for files/directories, sys for Python runtime.',
        },
        whyItExists: {
            problem: 'Programs need to interact with the OS and Python runtime.',
            solution: 'os and sys provide these interfaces.'
        },
        plainEnglish: {
            explanation: `import os - Operating system
- Files, directories, environment

import sys - Python system
- Command line args
- Python path
- Exit program`,
            keyPoints: [
                'os.path for file paths',
                'os.environ for env vars',
                'sys.argv for CLI args',
                'sys.exit() to quit'
            ]
        },
        syntax: {
            code: `import os
import sys

# OS - Environment
print(os.getcwd())           # Current directory
print(os.listdir("."))       # List files
os.makedirs("new/folder", exist_ok=True)

# OS - Environment variables
print(os.environ.get("PATH"))
os.environ["MY_VAR"] = "value"

# SYS - Command line args
# python script.py arg1 arg2
print(sys.argv)  # ['script.py', 'arg1', 'arg2']

# SYS - Python path
print(sys.path)
print(sys.version)

# Exit program
# sys.exit(0)  # Success
# sys.exit(1)  # Error`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'sys.argv contains?',
                options: ['Environment', 'Command line arguments', 'File list', 'Memory'],
                correctIndex: 1,
                hints: ['argv = argument values']
            }
        ]
    },
    {
        id: 'logging-module',
        phase: 12,
        title: 'Logging',
        mentalModel: {
            analogy: 'Logging is like a ship\'s log - recording what happens in your program',
            explanation: 'Better than print() for tracking program execution.',
        },
        whyItExists: {
            problem: 'print() statements are hard to manage and cannot be disabled easily.',
            solution: 'logging module provides configurable, leveled logging.'
        },
        plainEnglish: {
            explanation: `import logging

Levels (low to high):
DEBUG - detailed info
INFO - general info
WARNING - something unexpected
ERROR - something failed
CRITICAL - serious error`,
            keyPoints: [
                'logging.info() etc.',
                'Set level to filter',
                'Can log to file',
                'Better than print()'
            ]
        },
        syntax: {
            code: `import logging

# Basic config
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

# Log messages
logging.debug("Debug info")    # Not shown (level=INFO)
logging.info("Program started")
logging.warning("Disk space low")
logging.error("File not found")
logging.critical("Database down!")

# Log to file
logging.basicConfig(
    filename='app.log',
    level=logging.DEBUG
)`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Which log level is highest severity?',
                options: ['DEBUG', 'INFO', 'WARNING', 'CRITICAL'],
                correctIndex: 3,
                hints: ['Most serious problems']
            }
        ]
    }
]
