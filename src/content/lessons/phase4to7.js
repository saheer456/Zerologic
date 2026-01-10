// Phase 4-7 Lessons: Input/Output, Control Statements, Loops, Functions

export const phase4to7Lessons = [
    // ============ PHASE 4: INPUT & OUTPUT ============
    {
        id: 'input-function',
        phase: 4,
        title: 'The input() Function',
        mentalModel: {
            analogy: 'input() is like asking a question and waiting for an answer',
            explanation: 'Just like asking "What is your name?" and waiting for a reply, input() pauses the program and waits for the user to type something.',
        },
        whyItExists: {
            problem: 'Programs are boring if they only do the same thing every time.',
            solution: 'input() lets programs interact with users, making them dynamic and personalized.'
        },
        plainEnglish: {
            explanation: `The input() function does three things:
1. Displays a message (optional)
2. Waits for user to type something
3. Returns what was typed as a string

Important: input() ALWAYS returns a string, even if the user types a number.`,
            keyPoints: [
                'input() pauses and waits for user',
                'Always returns a string',
                'Convert to int/float for math',
                'The prompt message is optional'
            ]
        },
        syntax: {
            code: `name = input("What is your name? ")
print("Hello,", name)

age = input("Enter your age: ")
age = int(age)  # Convert string to int`,
            lineExplanations: [
                'Ask for name, store in variable',
                'Greet the user',
                '',
                'Get age as string',
                'Convert to integer for math'
            ]
        },
        commonMistakes: [
            {
                wrong: 'age = input("Age: ")\nprint(age + 1)',
                correct: 'age = int(input("Age: "))\nprint(age + 1)',
                explanation: 'input() returns a string. You cannot add 1 to a string. Convert with int() first.'
            }
        ],
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What type does input() always return?',
                options: ['int', 'float', 'str', 'bool'],
                correctIndex: 2,
                hints: ['Even if you type a number, it comes back as...']
            }
        ]
    },
    {
        id: 'print-formatting',
        phase: 4,
        title: 'Print Formatting',
        mentalModel: {
            analogy: 'f-strings are like fill-in-the-blank templates',
            explanation: 'Like a form where you write "Hello, ___!" and fill in the name, f-strings let you put variables inside text.',
        },
        whyItExists: {
            problem: 'Joining strings with + is messy and hard to read.',
            solution: 'f-strings make it easy to embed variables in text cleanly.'
        },
        plainEnglish: {
            explanation: `Python has several ways to format output:

1. Comma separation (simple):
   print("Hello", name)

2. f-strings (recommended):
   print(f"Hello {name}")
   
3. .format() method:
   print("Hello {}".format(name))

f-strings are the best - put f before the quote, then use {variable}.`,
            keyPoints: [
                'Use f before quotes for f-strings',
                'Put variables in {curly braces}',
                'Can do math inside braces',
                'Most readable option'
            ]
        },
        syntax: {
            code: `name = "Ali"
age = 20

# f-string (best way)
print(f"I am {name}, age {age}")

# Math in f-strings
print(f"Next year: {age + 1}")`,
            lineExplanations: [
                'Name variable',
                'Age variable',
                '',
                'Variables inside {}',
                '',
                'Math works inside {}'
            ]
        },
        microPractice: [
            {
                type: 'predict-output',
                question: 'What prints? x = 5; print(f"Value: {x * 2}")',
                answer: 'Value: 10',
                hints: ['Math happens inside the braces']
            }
        ]
    },

    // ============ PHASE 5: CONTROL STATEMENTS ============
    {
        id: 'if-statement',
        phase: 5,
        title: 'The if Statement',
        mentalModel: {
            analogy: 'if is like a security guard checking your ID',
            explanation: 'The guard checks your age. If you are 18+, you enter. Otherwise, you do not. if statements work the same way - they check a condition.',
            diagram: `
    ┌─────────────┐
    │ Check age   │
    │   >= 18?    │
    └──────┬──────┘
           │
     ┌─────┴─────┐
     │           │
   True       False
     │           │
     ▼           ▼
  [Enter]    [Denied]
      `
        },
        whyItExists: {
            problem: 'Programs need to make decisions based on different situations.',
            solution: 'if statements let code run only when certain conditions are true.'
        },
        plainEnglish: {
            explanation: `The if statement checks a condition:
- If True: run the indented code
- If False: skip the indented code

The condition must be a boolean (True/False).
The code block MUST be indented (4 spaces).`,
            keyPoints: [
                'Condition must be True or False',
                'Use colon : after condition',
                'Indent the code block',
                'Python uses indentation, not braces'
            ]
        },
        syntax: {
            code: `age = 20

if age >= 18:
    print("You can vote!")
    print("Welcome!")

print("This always runs")`,
            lineExplanations: [
                'Set age',
                '',
                'Check if 18 or older',
                'Runs if True',
                'Also runs if True',
                '',
                'Not indented = runs always'
            ]
        },
        commonMistakes: [
            {
                wrong: 'if age >= 18\n    print("Adult")',
                correct: 'if age >= 18:\n    print("Adult")',
                explanation: 'Forgot the colon : after the condition. Always end the if line with :'
            }
        ],
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What is required after an if condition?',
                options: ['semicolon ;', 'colon :', 'comma ,', 'nothing'],
                correctIndex: 1,
                hints: ['Look at the syntax example']
            }
        ]
    },
    {
        id: 'if-else',
        phase: 5,
        title: 'if-else Statements',
        mentalModel: {
            analogy: 'if-else is like a fork in the road - you must go one way or the other',
            explanation: 'You either turn left OR right, never both. if-else works the same: either the if code runs OR the else code runs.',
        },
        whyItExists: {
            problem: 'Sometimes you need to do something different when the condition is False.',
            solution: 'else provides an alternative path when if condition is not met.'
        },
        plainEnglish: {
            explanation: `if-else gives two paths:
- if condition is True: run first block
- else (condition is False): run second block

Only ONE block ever runs, never both.`,
            keyPoints: [
                'else has no condition',
                'else also needs a colon',
                'Only one block runs',
                'else is optional'
            ]
        },
        syntax: {
            code: `age = 15

if age >= 18:
    print("Adult")
else:
    print("Minor")`,
            lineExplanations: [
                'Age is 15',
                '',
                '15 >= 18 is False',
                'This is skipped',
                'So else runs',
                'This prints'
            ]
        },
        microPractice: [
            {
                type: 'predict-output',
                question: 'x = 10; if x > 20: print("Big") else: print("Small")',
                answer: 'Small',
                hints: ['Is 10 > 20?']
            }
        ]
    },
    {
        id: 'elif-statement',
        phase: 5,
        title: 'elif - Multiple Conditions',
        mentalModel: {
            analogy: 'elif is like a grade chart - A, B, C, D, or F based on score',
            explanation: 'A test score could be 90+ (A), 80+ (B), 70+ (C), etc. elif lets you check multiple conditions in order.',
        },
        whyItExists: {
            problem: 'What if you have more than two possibilities?',
            solution: 'elif (else-if) lets you check multiple conditions in sequence.'
        },
        plainEnglish: {
            explanation: `elif = "else if"

Python checks conditions from top to bottom.
The FIRST True condition runs, then it stops.
else catches anything that did not match.

Order matters! Put specific conditions first.`,
            keyPoints: [
                'elif = else if',
                'Check one by one from top',
                'First True wins',
                'Can have many elifs'
            ]
        },
        syntax: {
            code: `score = 85

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")`,
            lineExplanations: [
                'Score is 85',
                '',
                '85 >= 90? False, skip',
                '',
                '85 >= 80? True!',
                'Prints B, stops here',
                'Never checked',
                '',
                'Never reached'
            ]
        },
        microPractice: [
            {
                type: 'predict-output',
                question: 'x=75. if x>=90: "A" elif x>=80: "B" elif x>=70: "C" else: "F"',
                answer: 'C',
                hints: ['Check each condition from top']
            }
        ]
    },

    // ============ PHASE 6: LOOPS ============
    {
        id: 'while-loop',
        phase: 6,
        title: 'The while Loop',
        mentalModel: {
            analogy: 'while is like eating until you are full',
            explanation: 'You keep eating WHILE you are hungry. Once full, you stop. A while loop keeps running WHILE the condition is True.',
            diagram: `
         ┌──────────────┐
         │  Condition   │◄───┐
         │    True?     │    │
         └──────┬───────┘    │
                │            │
          Yes   │     No     │
                ▼            │
         ┌──────────────┐    │
         │  Run code    │────┘
         └──────────────┘
                │
                ▼ (when False)
            [Continue]
      `
        },
        whyItExists: {
            problem: 'Sometimes you do not know how many times to repeat.',
            solution: 'while loops repeat until a condition becomes False.'
        },
        plainEnglish: {
            explanation: `while loop repeats as long as condition is True:

1. Check condition
2. If True: run code, go back to step 1
3. If False: exit loop

Be careful of infinite loops - if condition never becomes False, the loop runs forever!`,
            keyPoints: [
                'Checks condition before each run',
                'Must eventually become False',
                'Infinite loop = program hangs',
                'Often uses a counter variable'
            ]
        },
        syntax: {
            code: `count = 1

while count <= 5:
    print(count)
    count = count + 1

print("Done!")`,
            lineExplanations: [
                'Start at 1',
                '',
                'While 1,2,3,4,5 <= 5',
                'Print current number',
                'Increase by 1 (critical!)',
                '',
                'After loop ends'
            ]
        },
        commonMistakes: [
            {
                wrong: 'x = 1\nwhile x <= 5:\n    print(x)',
                correct: 'x = 1\nwhile x <= 5:\n    print(x)\n    x = x + 1',
                explanation: 'Forgot to increase x. This creates an infinite loop because x is always 1!'
            }
        ],
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What causes an infinite loop?',
                options: ['Condition becomes False', 'Condition never becomes False', 'Using print()', 'Using variables'],
                correctIndex: 1,
                hints: ['When does the loop stop?']
            }
        ]
    },
    {
        id: 'for-loop',
        phase: 6,
        title: 'The for Loop',
        mentalModel: {
            analogy: 'for loop is like a teacher taking attendance through a list',
            explanation: 'The teacher goes through each name in the list, one by one. A for loop goes through each item in a sequence.',
        },
        whyItExists: {
            problem: 'while loops need manual counting. What if you just want to go through a list?',
            solution: 'for loops automatically iterate through sequences without manual counting.'
        },
        plainEnglish: {
            explanation: `for loop goes through each item in a sequence:
- Lists: [1, 2, 3]
- Strings: "hello" (each letter)
- range(): generates numbers

The variable takes each value, one at a time.`,
            keyPoints: [
                'Automatic iteration',
                'No infinite loop risk',
                'Works with any sequence',
                'range() for number sequences'
            ]
        },
        syntax: {
            code: `# Loop through a list
for name in ["Ali", "Sara", "Zara"]:
    print(f"Hello {name}")

# Loop using range
for i in range(5):
    print(i)  # 0,1,2,3,4`,
            lineExplanations: [
                'Loop through list',
                'name = each item',
                'Prints 3 greetings',
                '',
                'range(5) = 0,1,2,3,4',
                'Prints each number'
            ]
        },
        microPractice: [
            {
                type: 'predict-output',
                question: 'for i in range(3): print(i)',
                answer: '0 1 2',
                hints: ['range(3) gives 0, 1, 2 (not 3)']
            }
        ]
    },
    {
        id: 'range-function',
        phase: 6,
        title: 'The range() Function',
        mentalModel: {
            analogy: 'range() is like a number generator machine',
            explanation: 'You tell it where to start, where to stop, and how big each step is.',
        },
        whyItExists: {
            problem: 'Manually creating lists of numbers is tedious.',
            solution: 'range() generates number sequences automatically.'
        },
        plainEnglish: {
            explanation: `range() has three forms:

range(stop): 0 to stop-1
  range(5) → 0,1,2,3,4

range(start, stop): start to stop-1
  range(2, 6) → 2,3,4,5

range(start, stop, step): with step size
  range(0, 10, 2) → 0,2,4,6,8`,
            keyPoints: [
                'Stop value is NOT included',
                'Default start is 0',
                'Default step is 1',
                'Can count backwards with -1 step'
            ]
        },
        syntax: {
            code: `# Basic range
for i in range(5):
    print(i)  # 0,1,2,3,4

# Start and stop
for i in range(1, 4):
    print(i)  # 1,2,3

# With step
for i in range(0, 10, 2):
    print(i)  # 0,2,4,6,8`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: 'list(range(2, 8, 2))',
                answer: '[2, 4, 6]',
                hints: ['Start at 2, stop before 8, step by 2']
            }
        ]
    },
    {
        id: 'break-continue',
        phase: 6,
        title: 'break, continue, pass',
        mentalModel: {
            analogy: 'break=exit immediately, continue=skip to next, pass=do nothing',
            explanation: 'Like in a queue: break=leave the queue, continue=skip your turn but stay, pass=stand there doing nothing.',
        },
        whyItExists: {
            problem: 'Sometimes you need more control over loop flow.',
            solution: 'break exits the loop, continue skips to next iteration, pass does nothing.'
        },
        plainEnglish: {
            explanation: `Three loop control statements:

break: Exit the loop immediately
continue: Skip rest of this iteration, go to next
pass: Do nothing (placeholder)

break and continue only affect the innermost loop.`,
            keyPoints: [
                'break exits the loop',
                'continue skips to next iteration',
                'pass is a placeholder',
                'All work in while and for'
            ]
        },
        syntax: {
            code: `# break example
for i in range(10):
    if i == 5:
        break
    print(i)  # 0,1,2,3,4

# continue example
for i in range(5):
    if i == 2:
        continue
    print(i)  # 0,1,3,4`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does break do?',
                options: ['Skips one iteration', 'Exits the loop completely', 'Pauses the loop', 'Does nothing'],
                correctIndex: 1,
                hints: ['break = emergency exit']
            }
        ]
    },

    // ============ PHASE 7: FUNCTIONS ============
    {
        id: 'what-is-function',
        phase: 7,
        title: 'What is a Function?',
        mentalModel: {
            analogy: 'A function is like a recipe you can use over and over',
            explanation: 'Write the recipe once, then just say "make pizza" instead of repeating all the steps each time.',
            diagram: `
    ┌─────────────────────────────┐
    │    FUNCTION: make_tea()    │
    ├─────────────────────────────┤
    │  1. Boil water             │
    │  2. Add tea leaves         │
    │  3. Wait 3 minutes         │
    │  4. Add milk               │
    │  5. Return tea             │
    └─────────────────────────────┘
    
    Just call: make_tea()
    Instead of writing all 5 steps!
      `
        },
        whyItExists: {
            problem: 'Copying code every time you need it is wasteful and error-prone.',
            solution: 'Functions let you write code once and reuse it anywhere.'
        },
        plainEnglish: {
            explanation: `A function is a named block of reusable code.

Benefits:
- Write once, use many times
- Makes code organized
- Easier to test and fix
- Easier to understand

Python has many built-in functions: print(), input(), len(), etc.
You can also create your own!`,
            keyPoints: [
                'Named, reusable code block',
                'Define once, call many times',
                'Makes code DRY (Don\'t Repeat Yourself)',
                'Can take inputs and return outputs'
            ]
        },
        syntax: {
            code: `# Define a function
def greet():
    print("Hello!")
    print("Welcome!")

# Call the function
greet()
greet()  # Can call many times`,
            lineExplanations: [
                'def = define function',
                'Function name and ()',
                'Code inside function',
                '',
                '',
                'Call by name()',
                'Reuse!'
            ]
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What keyword defines a function?',
                options: ['function', 'def', 'define', 'func'],
                correctIndex: 1,
                hints: ['It is short for "define"']
            }
        ]
    },
    {
        id: 'function-parameters',
        phase: 7,
        title: 'Function Parameters',
        mentalModel: {
            analogy: 'Parameters are like order options at a restaurant',
            explanation: 'You do not just say "make food" - you specify what kind. Parameters let you customize what the function does.',
        },
        whyItExists: {
            problem: 'Functions that always do the exact same thing are limited.',
            solution: 'Parameters make functions flexible and customizable.'
        },
        plainEnglish: {
            explanation: `Parameters are inputs to a function.

When defining: these are called parameters
When calling: these are called arguments

You can have:
- Multiple parameters
- Default values
- Required and optional ones`,
            keyPoints: [
                'Parameters go in parentheses',
                'Separate multiple with commas',
                'Order matters (usually)',
                'Can have default values'
            ]
        },
        syntax: {
            code: `# One parameter
def greet(name):
    print(f"Hello {name}")

greet("Ali")  # Hello Ali

# Multiple parameters
def add(a, b):
    print(a + b)

add(3, 5)  # 8`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'predict-output',
                question: 'def double(x): print(x*2); double(7)',
                answer: '14',
                hints: ['x becomes 7, then 7*2']
            }
        ]
    },
    {
        id: 'return-statement',
        phase: 7,
        title: 'The return Statement',
        mentalModel: {
            analogy: 'return is like a vending machine giving you the product',
            explanation: 'You put in money (input), the machine processes, and RETURNS your snack. Without return, you get nothing back.',
        },
        whyItExists: {
            problem: 'Sometimes you need the result of a function to use later.',
            solution: 'return sends a value back to where the function was called.'
        },
        plainEnglish: {
            explanation: `return does two things:
1. Sends a value back
2. Exits the function immediately

A function without return gives None.
You can return any type: numbers, strings, lists, etc.`,
            keyPoints: [
                'return sends value back',
                'Exits function immediately',
                'Returned value can be stored',
                'No return = returns None'
            ]
        },
        syntax: {
            code: `def add(a, b):
    result = a + b
    return result

# Store the returned value
total = add(3, 5)
print(total)  # 8

# Use directly
print(add(10, 20))  # 30`,
            lineExplanations: []
        },
        commonMistakes: [
            {
                wrong: 'def add(a,b):\n    print(a+b)\nx = add(2,3)\nprint(x)',
                correct: 'def add(a,b):\n    return a+b\nx = add(2,3)\nprint(x)',
                explanation: 'print() shows the value but does not return it. x will be None. Use return to send the value back.'
            }
        ],
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does a function return if there is no return statement?',
                options: ['0', '""', 'None', 'Error'],
                correctIndex: 2,
                hints: ['The special "nothing" value in Python']
            }
        ]
    },
    {
        id: 'scope-variables',
        phase: 7,
        title: 'Variable Scope',
        mentalModel: {
            analogy: 'Scope is like rooms in a house - what is in one room is not automatically in another',
            explanation: 'A variable created inside a function is like a toy in a bedroom. It exists there but not in the kitchen.',
        },
        whyItExists: {
            problem: 'If all variables were everywhere, names would clash and cause bugs.',
            solution: 'Scope limits where variables can be accessed, preventing conflicts.'
        },
        plainEnglish: {
            explanation: `Two types of scope:

Local: Inside a function
- Created in function
- Dies when function ends
- Only accessible there

Global: Outside all functions
- Created at top level
- Lives for entire program
- Accessible everywhere`,
            keyPoints: [
                'Local = inside function',
                'Global = outside functions',
                'Local variables die after function',
                'Same name can exist in different scopes'
            ]
        },
        syntax: {
            code: `x = 10  # Global

def my_func():
    y = 5  # Local
    print(x)  # Can see global
    print(y)  # Can see local

my_func()
print(x)  # Works
# print(y)  # Error! y is local`,
            lineExplanations: []
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'A variable inside a function is called:',
                options: ['global', 'local', 'private', 'internal'],
                correctIndex: 1,
                hints: ['It is local to that function']
            }
        ]
    }
]
