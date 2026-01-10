// Additional lessons for existing phases - filling gaps in the syllabus

export const additionalLessons = [
    // ============ PHASE 1: PYTHON BASICS ADDITIONS ============
    {
        id: 'python-setup',
        phase: 1,
        title: 'Installing Python & Setup',
        mentalModel: {
            analogy: 'Setting up Python is like installing a new kitchen - you need the tools before you can cook',
            explanation: 'Before writing code, you need Python installed, a code editor, and optionally pip for packages.',
        },
        whyItExists: {
            problem: 'You cannot run Python code without Python installed.',
            solution: 'Install Python, set up PATH, and learn to use pip for packages.'
        },
        plainEnglish: {
            explanation: `Setup steps:

1. Download Python from python.org
2. Install (check "Add to PATH")
3. Verify: python --version
4. Use pip for packages: pip install package_name

REPL = Read-Eval-Print-Loop
Type 'python' in terminal to enter REPL`,
            keyPoints: [
                'Download from python.org',
                'Add Python to PATH',
                'pip installs packages',
                'REPL for quick testing'
            ]
        },
        syntax: {
            code: `# In terminal/command prompt:
python --version    # Check Python version
pip --version       # Check pip version
pip install numpy   # Install a package
pip list            # See installed packages

# Enter Python REPL
python
>>> 2 + 2
4
>>> exit()`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does pip do?',
                options: ['Runs Python', 'Installs packages', 'Edits files', 'Debugs code'],
                correctIndex: 1,
                hints: ['pip = Package Installer for Python']
            }
        ]
    },
    {
        id: 'dynamic-typing',
        phase: 1,
        title: 'Dynamic Typing',
        mentalModel: {
            analogy: 'Python variables are like sticky notes - you can put any label on any item',
            explanation: 'Unlike some languages, Python figures out the type automatically. A variable can hold any type.',
        },
        whyItExists: {
            problem: 'Some languages require you to declare types explicitly.',
            solution: 'Python is dynamically typed - types are determined at runtime.'
        },
        plainEnglish: {
            explanation: `Dynamic typing means:
- No need to declare types
- Variables can change type
- Type is checked at runtime

Static typing (C, Java): int x = 5;
Dynamic typing (Python): x = 5`,
            keyPoints: [
                'No type declarations needed',
                'Variables can change types',
                'Type errors caught at runtime',
                'Use type() to check type'
            ]
        },
        syntax: {
            code: `x = 5           # x is int
print(type(x))  # <class 'int'>

x = "hello"     # Now x is str
print(type(x))  # <class 'str'>

x = [1, 2, 3]   # Now x is list
print(type(x))  # <class 'list'>

# Type checking
print(isinstance(x, list))  # True`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Can a Python variable change its type?',
                options: ['No, never', 'Yes, anytime', 'Only once', 'Only to numbers'],
                correctIndex: 1,
                hints: ['Dynamic = flexible']
            }
        ]
    },
    {
        id: 'keywords-identifiers',
        phase: 1,
        title: 'Keywords & Identifiers',
        mentalModel: {
            analogy: 'Keywords are reserved words like "if" and "for" - you cannot use them for your own names',
            explanation: 'Python has special reserved words. You choose identifiers (names) for variables, functions, etc.',
        },
        whyItExists: {
            problem: 'Python needs to distinguish its commands from your variable names.',
            solution: 'Keywords are reserved. You create identifiers following naming rules.'
        },
        plainEnglish: {
            explanation: `Keywords: Reserved by Python
Examples: if, else, for, while, def, class, return, True, False, None

Identifiers: Names you create
Rules:
- Start with letter or underscore
- Can contain letters, numbers, underscore
- Case-sensitive
- Cannot be a keyword`,
            keyPoints: [
                'Keywords are reserved',
                'Identifiers are your names',
                'Case-sensitive',
                'No spaces or special chars'
            ]
        },
        syntax: {
            code: `# Valid identifiers
name = "Ali"
_private = 10
myVar2 = 20
MAX_SIZE = 100

# Invalid identifiers
# 2name = "x"   # Cannot start with number
# my-var = 5   # No hyphens
# for = 10     # Cannot use keyword

# Check all keywords
import keyword
print(keyword.kwlist)`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Which is a valid identifier?',
                options: ['2name', 'my-var', '_count', 'for'],
                correctIndex: 2,
                hints: ['Start with letter or underscore']
            }
        ]
    },

    // ============ PHASE 2: DATA TYPES ADDITIONS ============
    {
        id: 'complex-none',
        phase: 2,
        title: 'Complex Numbers & NoneType',
        mentalModel: {
            analogy: 'Complex numbers have real + imaginary parts. None is like an empty box.',
            explanation: 'Python supports complex math. None means "no value" or "nothing".',
        },
        whyItExists: {
            problem: 'Some applications need complex numbers. Sometimes you need to represent "nothing".',
            solution: 'Python has built-in complex type and None for null values.'
        },
        plainEnglish: {
            explanation: `Complex numbers: a + bj
- j is the imaginary unit
- Used in math, engineering

NoneType:
- Only value is None
- Means "no value" or "empty"
- Default return for functions`,
            keyPoints: [
                'j is imaginary unit',
                'None means no value',
                'None is not 0 or ""',
                'Use is None to check'
            ]
        },
        syntax: {
            code: `# Complex numbers
z = 3 + 4j
print(z.real)   # 3.0
print(z.imag)   # 4.0
print(abs(z))   # 5.0 (magnitude)

# NoneType
x = None
print(type(x))  # <class 'NoneType'>

# Checking for None
if x is None:
    print("x has no value")

def greet():
    print("Hi")

result = greet()  # returns None`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'How to check if x is None?',
                options: ['x == None', 'x is None', 'x = None', 'isNone(x)'],
                correctIndex: 1,
                hints: ['Use "is" for None']
            }
        ]
    },
    {
        id: 'type-checking',
        phase: 2,
        title: 'Type Checking',
        mentalModel: {
            analogy: 'type() tells you what something IS. isinstance() asks if something IS A specific type.',
            explanation: 'Use these to check or verify types at runtime.',
        },
        whyItExists: {
            problem: 'Sometimes you need to know or verify the type of a value.',
            solution: 'type() gets exact type. isinstance() checks type hierarchy.'
        },
        plainEnglish: {
            explanation: `type(x): Returns exact type
isinstance(x, Type): Checks if x is Type or subclass

isinstance() is preferred because:
- Works with inheritance
- Can check multiple types`,
            keyPoints: [
                'type() for exact type',
                'isinstance() for checking',
                'isinstance works with inheritance',
                'Can check multiple types'
            ]
        },
        syntax: {
            code: `x = 5
print(type(x))              # <class 'int'>
print(type(x) == int)       # True

# isinstance is more flexible
print(isinstance(x, int))   # True
print(isinstance(x, (int, float)))  # True (either)

# Check before operations
def double(x):
    if isinstance(x, (int, float)):
        return x * 2
    else:
        return "Not a number!"`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: 'isinstance(5, (int, str))',
                answer: 'True',
                hints: ['5 is an int, int is in the tuple']
            }
        ]
    },

    // ============ PHASE 3: OPERATORS ADDITIONS ============
    {
        id: 'bitwise-operators',
        phase: 3,
        title: 'Bitwise Operators',
        mentalModel: {
            analogy: 'Bitwise operators work on individual bits like switches - 0 is off, 1 is on',
            explanation: 'These operate at the binary level. Useful for low-level programming, flags.',
        },
        whyItExists: {
            problem: 'Sometimes you need to manipulate individual bits for efficiency or hardware.',
            solution: 'Bitwise operators work directly on binary representations.'
        },
        plainEnglish: {
            explanation: `Bitwise operators:
& (AND) - both bits 1 → 1
| (OR) - any bit 1 → 1
^ (XOR) - different bits → 1
~ (NOT) - flip all bits
<< (left shift) - multiply by 2
>> (right shift) - divide by 2`,
            keyPoints: [
                '& AND: both must be 1',
                '| OR: either can be 1',
                '<< multiply by 2',
                '>> divide by 2'
            ]
        },
        syntax: {
            code: `a = 5   # binary: 0101
b = 3   # binary: 0011

print(a & b)   # 1 (0001 - AND)
print(a | b)   # 7 (0111 - OR)
print(a ^ b)   # 6 (0110 - XOR)
print(~a)      # -6 (inverted)

print(a << 1)  # 10 (shift left = *2)
print(a >> 1)  # 2 (shift right = /2)`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: '8 >> 1',
                answer: '4',
                hints: ['Right shift divides by 2']
            }
        ]
    },
    {
        id: 'membership-identity',
        phase: 3,
        title: 'Membership & Identity Operators',
        mentalModel: {
            analogy: '"in" checks if an item is in a collection. "is" checks if two variables point to the SAME object.',
            explanation: 'Membership tests containment. Identity tests if two references are the same object.',
        },
        whyItExists: {
            problem: 'Need to check if item exists in collection or if two variables are the same object.',
            solution: 'Membership (in, not in) and Identity (is, is not) operators.'
        },
        plainEnglish: {
            explanation: `Membership operators:
- in: True if found
- not in: True if not found

Identity operators:
- is: True if same object
- is not: True if different object

Note: == checks value, is checks identity`,
            keyPoints: [
                'in checks containment',
                'is checks identity',
                '== checks value equality',
                'Use is for None'
            ]
        },
        syntax: {
            code: `# Membership
fruits = ["apple", "banana"]
print("apple" in fruits)     # True
print("orange" not in fruits) # True

# Identity
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)   # True (same value)
print(a is b)   # False (different objects)
print(a is c)   # True (same object)

x = None
print(x is None)  # True`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does "is" check?',
                options: ['Value equality', 'Same object', 'Type', 'Length'],
                correctIndex: 1,
                hints: ['Identity, not equality']
            }
        ]
    },
    {
        id: 'operator-precedence',
        phase: 3,
        title: 'Operator Precedence',
        mentalModel: {
            analogy: 'Just like PEMDAS in math - some operations happen before others',
            explanation: 'Python has a specific order for evaluating operators.',
        },
        whyItExists: {
            problem: 'Expressions with multiple operators need consistent evaluation order.',
            solution: 'Operator precedence defines which operations happen first.'
        },
        plainEnglish: {
            explanation: `Precedence (high to low):
1. () Parentheses
2. ** Exponent
3. +x, -x, ~x (unary)
4. *, /, //, %
5. +, -
6. <<, >>
7. &
8. ^
9. |
10. ==, !=, <, >, <=, >=, is, in
11. not
12. and
13. or`,
            keyPoints: [
                'Parentheses first',
                '** before * /',
                '* / before + -',
                'Use () for clarity'
            ]
        },
        syntax: {
            code: `# Precedence examples
print(2 + 3 * 4)      # 14 (not 20)
print((2 + 3) * 4)    # 20 (parentheses first)

print(2 ** 3 ** 2)    # 512 (right-to-left)
print(10 - 4 - 2)     # 4 (left-to-right)

# Logical precedence
print(True or False and False)  # True
# and has higher precedence than or`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: '2 + 3 * 4',
                answer: '14',
                hints: ['Multiplication before addition']
            }
        ]
    },

    // ============ PHASE 5: CONTROL FLOW ADDITIONS ============
    {
        id: 'match-case',
        phase: 5,
        title: 'match-case (Pattern Matching)',
        mentalModel: {
            analogy: 'match-case is like a smart switch statement that can match patterns',
            explanation: 'Python 3.10+ feature. More powerful than if-elif for matching values.',
        },
        whyItExists: {
            problem: 'Long if-elif chains are hard to read when matching values.',
            solution: 'match-case provides cleaner syntax for pattern matching.'
        },
        plainEnglish: {
            explanation: `match-case (Python 3.10+):
- Matches value against patterns
- Cleaner than if-elif
- Can match sequences, types
- _ is wildcard (default)`,
            keyPoints: [
                'Python 3.10+ only',
                'match value:',
                'case pattern:',
                '_ matches anything'
            ]
        },
        syntax: {
            code: `def describe_type(x):
    match x:
        case 0:
            return "Zero"
        case 1 | 2 | 3:
            return "Small number"
        case str():
            return "It's a string"
        case [a, b]:
            return f"Two-item list: {a}, {b}"
        case _:
            return "Something else"

print(describe_type(0))       # Zero
print(describe_type(2))       # Small number
print(describe_type("hi"))    # It's a string
print(describe_type([1, 2]))  # Two-item list`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does _ (underscore) match in match-case?',
                options: ['Nothing', 'Everything (default)', 'Errors', 'None'],
                correctIndex: 1,
                hints: ['Wildcard pattern']
            }
        ]
    },
    {
        id: 'loop-else-pass',
        phase: 5,
        title: 'Loop else & pass Statement',
        mentalModel: {
            analogy: 'Loop else runs if no break happened - it means "we completed normally"',
            explanation: 'else after loop runs if loop finishes without break. pass is a placeholder.',
        },
        whyItExists: {
            problem: 'Sometimes you need to know if a loop completed without breaking.',
            solution: 'Loop else runs when no break. pass is a no-op placeholder.'
        },
        plainEnglish: {
            explanation: `Loop else:
- Runs if loop finishes normally
- Does NOT run if break was used
- Useful for search patterns

pass:
- Does nothing
- Placeholder for empty blocks
- Used when syntax requires statement`,
            keyPoints: [
                'else runs if no break',
                'break skips else',
                'pass does nothing',
                'pass is a placeholder'
            ]
        },
        syntax: {
            code: `# Loop else - search example
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(f"{n} = {x} * {n//x}")
            break
    else:
        print(f"{n} is prime")

# pass - placeholder
def todo_function():
    pass  # Will implement later

class EmptyClass:
    pass`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'When does loop else run?',
                options: ['Always', 'Never', 'When no break', 'When break happens'],
                correctIndex: 2,
                hints: ['Runs on normal completion']
            }
        ]
    },

    // ============ PHASE 7: FUNCTIONS ADDITIONS ============
    {
        id: 'args-kwargs',
        phase: 7,
        title: '*args and **kwargs',
        mentalModel: {
            analogy: '*args is a basket for any number of items. **kwargs is a labeled drawer system.',
            explanation: '*args collects extra positional args as tuple. **kwargs collects keywords as dict.',
        },
        whyItExists: {
            problem: 'Sometimes you do not know how many arguments a function will receive.',
            solution: '*args and **kwargs accept variable number of arguments.'
        },
        plainEnglish: {
            explanation: `*args - Variable positional arguments
- Collects extras as tuple
- Name "args" is convention

**kwargs - Variable keyword arguments
- Collects extras as dictionary
- Name "kwargs" is convention`,
            keyPoints: [
                '*args = tuple of extras',
                '**kwargs = dict of extras',
                'Order: regular, *args, **kwargs',
                'Names are conventions'
            ]
        },
        syntax: {
            code: `def greet(*names):
    for name in names:
        print(f"Hello, {name}!")

greet("Ali", "Sara", "John")

def profile(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

profile(name="Ali", age=25, city="NYC")

# Combined
def full_func(required, *args, **kwargs):
    print(required)
    print(args)
    print(kwargs)

full_func("first", 1, 2, 3, x=10, y=20)`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What type is *args inside the function?',
                options: ['list', 'tuple', 'dict', 'set'],
                correctIndex: 1,
                hints: ['Positional args collected as tuple']
            }
        ]
    },
    {
        id: 'lambda-functions',
        phase: 7,
        title: 'Lambda Functions',
        mentalModel: {
            analogy: 'Lambda is a mini-function without a name - like a sticky note vs a full document',
            explanation: 'One-line anonymous functions. Great for simple operations.',
        },
        whyItExists: {
            problem: 'Creating full function for tiny operations is verbose.',
            solution: 'Lambda creates small anonymous functions inline.'
        },
        plainEnglish: {
            explanation: `Lambda syntax:
lambda arguments: expression

- Anonymous (no name)
- Single expression only
- Returns result automatically
- Used with map, filter, sort`,
            keyPoints: [
                'Single expression',
                'No return keyword',
                'Anonymous function',
                'Good for callbacks'
            ]
        },
        syntax: {
            code: `# Regular function
def square(x):
    return x ** 2

# As lambda
square = lambda x: x ** 2
print(square(5))  # 25

# Multiple arguments
add = lambda a, b: a + b
print(add(3, 4))  # 7

# With sorted
points = [(1, 2), (3, 1), (2, 4)]
sorted_pts = sorted(points, key=lambda p: p[1])
print(sorted_pts)  # [(3,1), (1,2), (2,4)]`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: '(lambda x: x * 2)(5)',
                answer: '10',
                hints: ['Lambda multiplies by 2']
            }
        ]
    },
    {
        id: 'recursion',
        phase: 7,
        title: 'Recursive Functions',
        mentalModel: {
            analogy: 'Recursion is like Russian nesting dolls - a function containing itself',
            explanation: 'A function that calls itself. Must have a base case to stop.',
        },
        whyItExists: {
            problem: 'Some problems are naturally defined in terms of smaller versions of themselves.',
            solution: 'Recursion solves problems by breaking them into smaller subproblems.'
        },
        plainEnglish: {
            explanation: `Recursion = function calls itself

Two parts:
1. Base case - when to stop
2. Recursive case - call itself

Without base case = infinite loop!`,
            keyPoints: [
                'Function calls itself',
                'Must have base case',
                'Each call = smaller problem',
                'Watch for stack overflow'
            ]
        },
        syntax: {
            code: `# Factorial: 5! = 5 * 4 * 3 * 2 * 1
def factorial(n):
    if n <= 1:          # Base case
        return 1
    return n * factorial(n - 1)  # Recursive

print(factorial(5))  # 120

# Fibonacci
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

print(fib(10))  # 55`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What happens without a base case?',
                options: ['Returns 0', 'Infinite recursion', 'Nothing', 'Error on first call'],
                correctIndex: 1,
                hints: ['No stopping condition']
            }
        ]
    },
    {
        id: 'higher-order',
        phase: 7,
        title: 'Higher-Order Functions',
        mentalModel: {
            analogy: 'Higher-order functions treat functions like ingredients - pass them around, use them',
            explanation: 'Functions that take functions as arguments or return functions.',
        },
        whyItExists: {
            problem: 'Sometimes you need to pass behavior (not just data) to a function.',
            solution: 'Higher-order functions accept or return other functions.'
        },
        plainEnglish: {
            explanation: `Higher-order function:
- Takes function as argument, OR
- Returns a function

Built-in examples:
- map(func, iterable)
- filter(func, iterable)
- sorted(iterable, key=func)`,
            keyPoints: [
                'Functions are objects',
                'Can pass as arguments',
                'Can return functions',
                'Enables functional programming'
            ]
        },
        syntax: {
            code: `# map - apply function to all
nums = [1, 2, 3, 4]
squared = list(map(lambda x: x**2, nums))
print(squared)  # [1, 4, 9, 16]

# filter - keep items where function returns True
evens = list(filter(lambda x: x%2==0, nums))
print(evens)  # [2, 4]

# Custom higher-order function
def apply_twice(func, value):
    return func(func(value))

result = apply_twice(lambda x: x * 2, 5)
print(result)  # 20`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does filter() do?',
                options: ['Transforms items', 'Keeps items where func is True', 'Sorts items', 'Counts items'],
                correctIndex: 1,
                hints: ['Filter = keep matches']
            }
        ]
    },

    // ============ PHASE 8: DATA STRUCTURES ADDITIONS ============
    {
        id: 'list-comprehensions',
        phase: 8,
        title: 'List Comprehensions',
        mentalModel: {
            analogy: 'List comprehension is a recipe that creates a new list in one line',
            explanation: 'Compact way to create lists. Faster and more Pythonic than loops.',
        },
        whyItExists: {
            problem: 'Creating lists with loops is verbose.',
            solution: 'Comprehensions create lists in one readable line.'
        },
        plainEnglish: {
            explanation: `Syntax: [expression for item in iterable if condition]

Parts:
1. expression - what to include
2. for item in iterable - loop
3. if condition - optional filter`,
            keyPoints: [
                'One-line list creation',
                'Can include condition',
                'Faster than loops',
                'Very Pythonic'
            ]
        },
        syntax: {
            code: `# Traditional loop
squares = []
for x in range(5):
    squares.append(x ** 2)

# As comprehension
squares = [x ** 2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# With condition
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# Nested
matrix = [[i*j for j in range(3)] for i in range(3)]`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: '[x*2 for x in [1,2,3]]',
                answer: '[2, 4, 6]',
                hints: ['Each item multiplied by 2']
            }
        ]
    },
    {
        id: 'dict-set-comprehensions',
        phase: 8,
        title: 'Dict & Set Comprehensions',
        mentalModel: {
            analogy: 'Same as list comprehension but creates dictionaries or sets',
            explanation: 'Use {} for dict/set comprehensions. Key:value for dict.',
        },
        whyItExists: {
            problem: 'Creating dicts and sets with loops is verbose.',
            solution: 'Comprehensions for dicts and sets.'
        },
        plainEnglish: {
            explanation: `Dict comprehension: {key: value for ...}
Set comprehension: {value for ...}

Same syntax as list but:
- Uses {} braces
- Dict needs key: value`,
            keyPoints: [
                '{} for dict/set',
                'Dict: key: value',
                'Set: just value',
                'Same filter syntax'
            ]
        },
        syntax: {
            code: `# Dict comprehension
squares = {x: x**2 for x in range(5)}
print(squares)  # {0:0, 1:1, 2:4, 3:9, 4:16}

# From two lists
names = ["a", "b", "c"]
nums = [1, 2, 3]
d = {n: v for n, v in zip(names, nums)}

# Set comprehension
unique_lengths = {len(word) for word in ["hi", "hello", "hey"]}
print(unique_lengths)  # {2, 5, 3}`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Which creates a dict: [] or {}?',
                options: ['[]', '{}', 'Both', 'Neither'],
                correctIndex: 1,
                hints: ['Curly braces for dict']
            }
        ]
    },
    {
        id: 'collections-module',
        phase: 8,
        title: 'Collections Module',
        mentalModel: {
            analogy: 'Collections are specialized containers - each designed for specific tasks',
            explanation: 'Counter counts, defaultdict has defaults, deque is double-ended queue.',
        },
        whyItExists: {
            problem: 'Built-in containers sometimes lack specific functionality.',
            solution: 'Collections module provides specialized container types.'
        },
        plainEnglish: {
            explanation: `from collections import ...

Counter - count occurrences
defaultdict - dict with default value
namedtuple - tuple with names
deque - double-ended queue`,
            keyPoints: [
                'Counter for counting',
                'defaultdict avoids KeyError',
                'deque for queue/stack',
                'namedtuple for clarity'
            ]
        },
        syntax: {
            code: `from collections import Counter, defaultdict, deque

# Counter
c = Counter("abracadabra")
print(c)  # Counter({'a':5, 'b':2, 'r':2, 'c':1, 'd':1})
print(c.most_common(2))  # [('a',5), ('b',2)]

# defaultdict
dd = defaultdict(int)
dd["missing"] += 1  # No KeyError
print(dd["missing"])  # 1

# deque
dq = deque([1, 2, 3])
dq.append(4)       # Right: [1,2,3,4]
dq.appendleft(0)   # Left: [0,1,2,3,4]
dq.popleft()       # Remove left: 0`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does Counter do?',
                options: ['Counts to 10', 'Counts occurrences', 'Counts lines', 'Counts files'],
                correctIndex: 1,
                hints: ['Counts each item']
            }
        ]
    },

    // ============ PHASE 9: STRINGS ADDITIONS ============
    {
        id: 'regex-basics',
        phase: 9,
        title: 'Regular Expressions (Regex)',
        mentalModel: {
            analogy: 'Regex is a pattern language for finding text - like a super-powered search',
            explanation: 'Patterns to match, find, and replace text. Very powerful for text processing.',
        },
        whyItExists: {
            problem: 'Finding complex patterns in text with normal methods is hard.',
            solution: 'Regex provides powerful pattern matching.'
        },
        plainEnglish: {
            explanation: `import re

Common patterns:
\\d - digit
\\w - word character
\\s - whitespace
. - any character
* - 0 or more
+ - 1 or more
? - 0 or 1
^ - start
$ - end`,
            keyPoints: [
                'import re',
                're.search() finds pattern',
                're.findall() finds all',
                're.sub() replaces'
            ]
        },
        syntax: {
            code: `import re

text = "Call me at 123-456-7890 or 987-654-3210"

# Find first match
match = re.search(r"\\d{3}-\\d{3}-\\d{4}", text)
print(match.group())  # 123-456-7890

# Find all matches
phones = re.findall(r"\\d{3}-\\d{3}-\\d{4}", text)
print(phones)  # ['123-456-7890', '987-654-3210']

# Replace
new_text = re.sub(r"\\d", "X", text)
print(new_text)  # Call me at XXX-XXX-XXXX...`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does \\d match?',
                options: ['Letter', 'Digit', 'Space', 'Any char'],
                correctIndex: 1,
                hints: ['d = digit']
            }
        ]
    },
    {
        id: 'fstring-advanced',
        phase: 9,
        title: 'Advanced f-string Formatting',
        mentalModel: {
            analogy: 'f-strings have hidden formatting powers - alignment, precision, and more',
            explanation: 'Beyond basic substitution, f-strings can format numbers, align text, and more.',
        },
        whyItExists: {
            problem: 'Basic f-strings cannot control number precision or text alignment.',
            solution: 'Format specifiers give fine control over output.'
        },
        plainEnglish: {
            explanation: `Format: {value:format_spec}

Specifications:
:< left align
:> right align
:^ center
:.2f 2 decimal places
:, thousand separator
:b binary
:x hex`,
            keyPoints: [
                ':< > ^ for alignment',
                ':.Nf for decimals',
                ':, for thousands',
                ':width for padding'
            ]
        },
        syntax: {
            code: `pi = 3.14159265359
print(f"{pi:.2f}")      # 3.14
print(f"{pi:.4f}")      # 3.1416

big = 1234567
print(f"{big:,}")       # 1,234,567
print(f"{big:_}")       # 1_234_567

name = "Ali"
print(f"{name:>10}")    # "       Ali"
print(f"{name:<10}")    # "Ali       "
print(f"{name:^10}")    # "   Ali    "

# Debug mode (Python 3.8+)
x = 42
print(f"{x=}")          # x=42`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: 'f"{3.14159:.2f}"',
                answer: '3.14',
                hints: ['.2f = 2 decimal places']
            }
        ]
    },

    // ============ PHASE 10: FILE HANDLING ADDITIONS ============
    {
        id: 'csv-json',
        phase: 10,
        title: 'CSV & JSON Files',
        mentalModel: {
            analogy: 'CSV is like a spreadsheet, JSON is like structured notes',
            explanation: 'CSV for tabular data, JSON for structured data. Both very common.',
        },
        whyItExists: {
            problem: 'Data often comes in CSV or JSON format.',
            solution: 'Python has built-in modules for both formats.'
        },
        plainEnglish: {
            explanation: `CSV: Comma Separated Values
- Rows and columns
- import csv

JSON: JavaScript Object Notation
- Key-value pairs, lists
- import json`,
            keyPoints: [
                'csv.reader() for reading',
                'csv.writer() for writing',
                'json.load() reads file',
                'json.dumps() to string'
            ]
        },
        syntax: {
            code: `import csv
import json

# CSV reading
with open("data.csv") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

# CSV writing
with open("out.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "age"])
    writer.writerow(["Ali", 25])

# JSON reading
with open("data.json") as f:
    data = json.load(f)

# JSON writing
with open("out.json", "w") as f:
    json.dump({"name": "Ali"}, f)`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Which reads JSON from file?',
                options: ['json.read()', 'json.load()', 'json.parse()', 'json.open()'],
                correctIndex: 1,
                hints: ['load from file']
            }
        ]
    },
    {
        id: 'pathlib',
        phase: 10,
        title: 'File Paths with pathlib',
        mentalModel: {
            analogy: 'pathlib treats paths as objects, not just strings',
            explanation: 'Modern, object-oriented way to work with file paths.',
        },
        whyItExists: {
            problem: 'String manipulation for paths is error-prone.',
            solution: 'pathlib provides Path objects with useful methods.'
        },
        plainEnglish: {
            explanation: `from pathlib import Path

Path objects have methods:
.exists() - does it exist?
.is_file() - is it a file?
.is_dir() - is it a directory?
.read_text() - read contents
.write_text() - write contents`,
            keyPoints: [
                'from pathlib import Path',
                '/ operator joins paths',
                '.exists() checks existence',
                '.read_text() reads file'
            ]
        },
        syntax: {
            code: `from pathlib import Path

# Create path
p = Path("folder") / "file.txt"
print(p)  # folder/file.txt

# Check existence
if p.exists():
    print("File exists")

# Read/write
p.write_text("Hello!")
content = p.read_text()

# List directory
for f in Path(".").iterdir():
    print(f.name)

# Find files
for py_file in Path(".").glob("*.py"):
    print(py_file)`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'How to join paths with pathlib?',
                options: ['+ operator', '/ operator', '.join()', 'concat()'],
                correctIndex: 1,
                hints: ['Use / like directory separator']
            }
        ]
    },

    // ============ PHASE 11: EXCEPTIONS ADDITIONS ============
    {
        id: 'custom-exceptions',
        phase: 11,
        title: 'Custom Exceptions',
        mentalModel: {
            analogy: 'Custom exceptions are like creating your own error types for your app',
            explanation: 'Create exception classes specific to your application.',
        },
        whyItExists: {
            problem: 'Built-in exceptions may not describe your specific error.',
            solution: 'Create custom exceptions for domain-specific errors.'
        },
        plainEnglish: {
            explanation: `Custom exception = class inheriting from Exception

Steps:
1. Create class inheriting from Exception
2. Add custom attributes if needed
3. Raise with raise YourException()`,
            keyPoints: [
                'Inherit from Exception',
                'Can add attributes',
                'Raise with raise',
                'Catch like any exception'
            ]
        },
        syntax: {
            code: `# Simple custom exception
class InvalidAgeError(Exception):
    pass

# With custom message
class NegativeBalanceError(Exception):
    def __init__(self, balance):
        self.balance = balance
        super().__init__(f"Balance cannot be {balance}")

# Using custom exceptions
def set_age(age):
    if age < 0:
        raise InvalidAgeError("Age cannot be negative")
    return age

try:
    set_age(-5)
except InvalidAgeError as e:
    print(e)`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Custom exceptions inherit from?',
                options: ['Error', 'Exception', 'BaseException', 'Any class'],
                correctIndex: 1,
                hints: ['Exception is the base class']
            }
        ]
    },

    // ============ PHASE 12: MODULES ADDITIONS ============
    {
        id: 'virtual-environments',
        phase: 12,
        title: 'Virtual Environments',
        mentalModel: {
            analogy: 'Virtual env is like a separate room for each project with its own tools',
            explanation: 'Isolated Python environments for different projects.',
        },
        whyItExists: {
            problem: 'Different projects might need different package versions.',
            solution: 'Virtual environments isolate dependencies per project.'
        },
        plainEnglish: {
            explanation: `Virtual environment = isolated Python

Why?
- Different projects, different packages
- Avoid version conflicts
- Clean project dependencies

Use venv module (built-in)`,
            keyPoints: [
                'python -m venv name',
                'Activate before use',
                'pip install goes to venv',
                'requirements.txt lists deps'
            ]
        },
        syntax: {
            code: `# Create virtual environment
# python -m venv myenv

# Activate (Windows)
# myenv\\Scripts\\activate

# Activate (Mac/Linux)
# source myenv/bin/activate

# Install packages (goes to venv)
# pip install requests

# Save dependencies
# pip freeze > requirements.txt

# Install from requirements
# pip install -r requirements.txt

# Deactivate
# deactivate`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Why use virtual environments?',
                options: ['Faster code', 'Isolated dependencies', 'Better syntax', 'More memory'],
                correctIndex: 1,
                hints: ['Each project = separate packages']
            }
        ]
    },
    {
        id: 'creating-modules',
        phase: 12,
        title: 'Creating Your Own Modules',
        mentalModel: {
            analogy: 'A module is just a .py file. A package is a folder of modules.',
            explanation: 'Organize your code into reusable modules and packages.',
        },
        whyItExists: {
            problem: 'Large programs become unmanageable in one file.',
            solution: 'Split code into modules (files) and packages (folders).'
        },
        plainEnglish: {
            explanation: `Module = single .py file
Package = folder with __init__.py

To create:
1. Write functions in file.py
2. Import from other files
3. For package: create folder with __init__.py`,
            keyPoints: [
                'Module = .py file',
                'Package = folder',
                '__init__.py makes package',
                '__name__ is module name'
            ]
        },
        syntax: {
            code: `# mymodule.py
def greet(name):
    return f"Hello, {name}!"

PI = 3.14159

# Using it in another file
import mymodule
print(mymodule.greet("Ali"))
print(mymodule.PI)

# Package structure:
# mypackage/
#     __init__.py
#     module1.py
#     module2.py

# Import from package
from mypackage import module1
from mypackage.module2 import func`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What file makes a folder a package?',
                options: ['main.py', '__init__.py', 'setup.py', 'module.py'],
                correctIndex: 1,
                hints: ['Special initialization file']
            }
        ]
    }
]
