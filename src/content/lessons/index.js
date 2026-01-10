// Phase and Lesson Data Structure
// Following the mandatory 6-step learning model

import { phase4to7Lessons } from './phase4to7'
import { phase8to14Lessons } from './phase8to14'
import { additionalLessons } from './additionalLessons'
import { advancedLessons } from './advancedLessons'

export const phases = [
    {
        id: 0,
        title: 'Phase 0: Programming Foundations',
        description: 'Understand how programming works before writing any code.',
        icon: '🧠',
        color: '#6366f1',
        colorEnd: '#8b5cf6',
        firstLesson: 'what-is-programming'
    },
    {
        id: 1,
        title: 'Phase 1: Python Basics',
        description: 'Get started with Python - installation, syntax, and your first program.',
        icon: '🐍',
        color: '#10b981',
        colorEnd: '#059669',
        firstLesson: 'intro-to-python'
    },
    {
        id: 2,
        title: 'Phase 2: Variables & Data Types',
        description: 'Learn how Python stores and handles different types of data.',
        icon: '📦',
        color: '#f59e0b',
        colorEnd: '#d97706',
        firstLesson: 'variables-naming'
    },
    {
        id: 3,
        title: 'Phase 3: Operators',
        description: 'Master arithmetic, comparison, and logical operations.',
        icon: '➕',
        color: '#ef4444',
        colorEnd: '#dc2626',
        firstLesson: 'arithmetic-operators'
    },
    {
        id: 4,
        title: 'Phase 4: Input & Output',
        description: 'Learn to get user input and display formatted output.',
        icon: '⌨️',
        color: '#8b5cf6',
        colorEnd: '#7c3aed',
        firstLesson: 'input-function'
    },
    {
        id: 5,
        title: 'Phase 5: Control Statements',
        description: 'Make decisions in your code with if, elif, and else.',
        icon: '🔀',
        color: '#06b6d4',
        colorEnd: '#0891b2',
        firstLesson: 'if-statement'
    },
    {
        id: 6,
        title: 'Phase 6: Loops',
        description: 'Repeat actions with while and for loops.',
        icon: '🔄',
        color: '#84cc16',
        colorEnd: '#65a30d',
        firstLesson: 'while-loop'
    },
    {
        id: 7,
        title: 'Phase 7: Functions',
        description: 'Organize code into reusable blocks.',
        icon: '🧩',
        color: '#f43f5e',
        colorEnd: '#e11d48',
        firstLesson: 'what-is-function'
    },
    {
        id: 8,
        title: 'Phase 8: Data Structures',
        description: 'Work with lists, tuples, sets, and dictionaries.',
        icon: '📊',
        color: '#14b8a6',
        colorEnd: '#0d9488',
        firstLesson: 'lists-intro'
    },
    {
        id: 9,
        title: 'Phase 9: Strings',
        description: 'Master text manipulation and string methods.',
        icon: '📝',
        color: '#f97316',
        colorEnd: '#ea580c',
        firstLesson: 'string-basics'
    },
    {
        id: 10,
        title: 'Phase 10: File Handling',
        description: 'Read from and write to files.',
        icon: '📁',
        color: '#a855f7',
        colorEnd: '#9333ea',
        firstLesson: 'file-concepts'
    },
    {
        id: 11,
        title: 'Phase 11: Exception Handling',
        description: 'Handle errors gracefully with try-except.',
        icon: '🛡️',
        color: '#ec4899',
        colorEnd: '#db2777',
        firstLesson: 'errors-exceptions'
    },
    {
        id: 12,
        title: 'Phase 12: Modules & Packages',
        description: 'Use and create Python modules.',
        icon: '📦',
        color: '#0ea5e9',
        colorEnd: '#0284c7',
        firstLesson: 'import-statement'
    },
    {
        id: 13,
        title: 'Phase 13: OOP Basics',
        description: 'Introduction to classes and objects.',
        icon: '🏗️',
        color: '#22c55e',
        colorEnd: '#16a34a',
        firstLesson: 'class-object'
    },
    {
        id: 14,
        title: 'Phase 14: Exam Preparation',
        description: 'Practice programs and exam tips.',
        icon: '🎯',
        color: '#eab308',
        colorEnd: '#ca8a04',
        firstLesson: 'common-programs'
    }
]

const phase0to3Lessons = [
    // ============ PHASE 0: PROGRAMMING FOUNDATIONS ============
    {
        id: 'what-is-programming',
        phase: 0,
        title: 'What is Programming?',
        mentalModel: {
            analogy: 'Programming is like writing a recipe for a robot chef',
            explanation: 'Imagine you have a robot that can cook anything, but it needs extremely detailed, step-by-step instructions. It cannot guess or assume anything. Programming is writing those exact instructions.',
            diagram: `
    YOU (Human)          PROGRAM           COMPUTER
    ┌─────────┐         ┌─────────┐       ┌─────────┐
    │  Idea   │ ──────► │  Code   │ ────► │ Action  │
    │ "Make   │         │ Step 1  │       │ Result  │
    │  tea"   │         │ Step 2  │       │ appears │
    └─────────┘         │ Step 3  │       └─────────┘
                        └─────────┘
      `
        },
        whyItExists: {
            problem: 'Computers are extremely fast but incredibly stupid. They cannot understand vague instructions like "make something nice" or "figure it out".',
            solution: 'Programming gives us a way to communicate with computers using precise, unambiguous instructions that they can execute millions of times without getting tired or making mistakes.'
        },
        plainEnglish: {
            explanation: `Programming is simply telling a computer what to do, step by step.

Think about how you would explain making tea to someone who has never seen a kitchen before. You cannot just say "make tea" - you need to say: "Go to the kitchen. Open the cabinet. Take out a cup. Fill the kettle with water. Turn on the kettle. Wait until it boils..."

That is exactly what programming is. You break down a task into the smallest possible steps and write them in a language the computer understands.

The computer then follows your instructions exactly - no more, no less. If you forget a step or write something wrong, the computer will either stop or do the wrong thing. It never guesses.`,
            keyPoints: [
                'Programming = giving step-by-step instructions to a computer',
                'Computers are fast but cannot think or guess',
                'Instructions must be precise and in the correct order',
                'The computer does exactly what you tell it - nothing more'
            ]
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What is the best way to describe programming?',
                options: [
                    'Talking to the computer in English',
                    'Writing step-by-step instructions for a computer',
                    'Pressing buttons on a keyboard',
                    'Installing software'
                ],
                correctIndex: 1,
                hints: ['Think about the recipe analogy']
            },
            {
                type: 'multiple-choice',
                question: 'Why do computers need programming?',
                options: [
                    'Because they are slow',
                    'Because they can think on their own',
                    'Because they cannot understand vague instructions',
                    'Because they are expensive'
                ],
                correctIndex: 2,
                hints: ['Remember: computers are fast but stupid']
            }
        ]
    },
    {
        id: 'how-computers-think',
        phase: 0,
        title: 'How Computers Think',
        mentalModel: {
            analogy: 'A computer is like a very obedient but literal-minded assistant',
            explanation: 'Imagine an assistant who follows every instruction perfectly but takes everything literally. If you say "take a seat", they might pick up the chair and walk away with it. Computers work the same way.',
            diagram: `
    ┌──────────────────────────────────────┐
    │           COMPUTER'S BRAIN           │
    ├──────────────────────────────────────┤
    │  Can do:           Cannot do:        │
    │  ✓ Math (fast!)    ✗ Guess meaning   │
    │  ✓ Store data      ✗ Be creative     │
    │  ✓ Compare         ✗ Handle vague    │
    │  ✓ Repeat tasks    ✗ Learn by itself │
    └──────────────────────────────────────┘
      `
        },
        whyItExists: {
            problem: 'Many beginners think computers are smart like humans. This leads to frustration when programs do not work as expected.',
            solution: 'Understanding that computers only do exactly what they are told helps you write better programs and debug problems faster.'
        },
        plainEnglish: {
            explanation: `Computers do not think like humans. They follow a very simple pattern:

1. FETCH - Get the next instruction
2. DECODE - Figure out what the instruction means  
3. EXECUTE - Do the instruction
4. REPEAT - Go back to step 1

That is it. They do this billions of times per second, which makes them seem smart. But each individual step is extremely simple.

A computer cannot understand context. If you write "add 5 and 3" in English, it will not understand. But if you write "5 + 3" in a programming language, it knows exactly what to do.`,
            keyPoints: [
                'Computers follow a simple fetch-decode-execute cycle',
                'Speed makes them seem intelligent, but each step is simple',
                'They cannot understand context or implied meaning',
                'Everything must be explicitly stated'
            ]
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What does a computer do with each instruction?',
                options: [
                    'Thinks about it creatively',
                    'Fetches, decodes, and executes it',
                    'Asks for clarification',
                    'Tries different approaches'
                ],
                correctIndex: 1,
                hints: ['Remember the simple 3-step cycle']
            }
        ]
    },
    {
        id: 'algorithm-logic',
        phase: 0,
        title: 'Algorithm & Flow of Logic',
        mentalModel: {
            analogy: 'An algorithm is like a GPS navigation - a set of directions to reach a destination',
            explanation: 'Just like GPS tells you "turn left, go 500m, turn right", an algorithm tells the computer step by step how to solve a problem.',
            diagram: `
    START
      │
      ▼
    ┌─────────────┐
    │   Step 1    │
    └─────┬───────┘
          │
          ▼
    ┌─────────────┐
    │   Step 2    │
    └─────┬───────┘
          │
          ▼
    ┌─────────────┐
    │   Step 3    │
    └─────┬───────┘
          │
          ▼
       END
      `
        },
        whyItExists: {
            problem: 'Jumping straight into code without a plan leads to confusion, bugs, and wasted time.',
            solution: 'Algorithms help you plan the solution step by step before writing any code. Once you have a clear algorithm, coding becomes much easier.'
        },
        plainEnglish: {
            explanation: `An algorithm is simply a step-by-step solution to a problem.

Before cooking, you read the recipe. Before building furniture, you check the instructions. Before coding, you create an algorithm.

A good algorithm has these properties:
- Clear starting point
- Precise steps in order  
- Clear ending point
- Works for all valid inputs

Example: Algorithm to find if a number is even or odd:
1. Take the number
2. Divide it by 2
3. Check the remainder
4. If remainder is 0, it is even
5. Otherwise, it is odd`,
            keyPoints: [
                'Algorithm = step-by-step solution to a problem',
                'Plan before you code',
                'Every algorithm has a start, steps, and end',
                'Good algorithms work for all valid inputs'
            ]
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What is an algorithm?',
                options: [
                    'A type of computer',
                    'A programming language',
                    'A step-by-step solution to a problem',
                    'A computer virus'
                ],
                correctIndex: 2,
                hints: ['Think about the GPS analogy']
            }
        ]
    },
    {
        id: 'input-process-output',
        phase: 0,
        title: 'Input → Process → Output',
        mentalModel: {
            analogy: 'Every program is like a vending machine - you put something in, it does something, you get something out',
            explanation: 'You insert money (INPUT), the machine processes your selection (PROCESS), and gives you a snack (OUTPUT).',
            diagram: `
    ┌─────────┐     ┌─────────────┐     ┌─────────┐
    │  INPUT  │ ──► │   PROCESS   │ ──► │ OUTPUT  │
    │         │     │             │     │         │
    │ User    │     │ Your code   │     │ Result  │
    │ types   │     │ does        │     │ shows   │
    │ data    │     │ something   │     │ on      │
    │         │     │             │     │ screen  │
    └─────────┘     └─────────────┘     └─────────┘
      `
        },
        whyItExists: {
            problem: 'Many beginners do not understand how programs interact with users and data.',
            solution: 'The IPO model (Input-Process-Output) provides a simple framework for understanding any program, no matter how complex.'
        },
        plainEnglish: {
            explanation: `Every program you will ever write follows this pattern:

INPUT: Getting data from somewhere
- User typing on keyboard
- Reading from a file
- Receiving from internet

PROCESS: Doing something with that data  
- Calculations
- Comparisons
- Transformations

OUTPUT: Showing or storing the result
- Displaying on screen
- Saving to file
- Sending to internet

Even the simplest programs follow this. A calculator: you input numbers, it processes (adds/subtracts), it outputs the answer.`,
            keyPoints: [
                'All programs follow Input → Process → Output',
                'Input = data coming in',
                'Process = what your code does with data',
                'Output = the result'
            ]
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'In a calculator app, what is the "Process" step?',
                options: [
                    'Pressing number buttons',
                    'Adding or subtracting the numbers',
                    'Seeing the result on screen',
                    'Turning on the calculator'
                ],
                correctIndex: 1,
                hints: ['Process is what happens to the input before output']
            }
        ]
    },

    // ============ PHASE 1: PYTHON BASICS ============
    {
        id: 'intro-to-python',
        phase: 1,
        title: 'Introduction to Python',
        mentalModel: {
            analogy: 'Python is like English among programming languages - simple, readable, and widely understood',
            explanation: 'Just as English is easy to learn compared to some other languages, Python is designed to be readable and beginner-friendly.',
        },
        whyItExists: {
            problem: 'Older programming languages had complex syntax that was hard to read and write.',
            solution: 'Python was created to be simple and readable. Its motto is "There should be one obvious way to do it."'
        },
        plainEnglish: {
            explanation: `Python is a programming language created by Guido van Rossum in 1991.

Why learn Python?
1. Easy to read and write (almost like English)
2. Used everywhere: websites, AI, games, science
3. Huge community = lots of help available
4. Required for many college courses

Python is an "interpreted" language. This means Python reads and runs your code line by line, like reading a book page by page. You do not need to compile it first.`,
            keyPoints: [
                'Python is beginner-friendly and readable',
                'Created in 1991, widely used today',
                'Interpreted = runs line by line',
                'Great for learning programming concepts'
            ]
        },
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Why is Python good for beginners?',
                options: [
                    'It is the fastest language',
                    'It is easy to read and write',
                    'It was invented first',
                    'It only works on Windows'
                ],
                correctIndex: 1,
                hints: ['Think about readability']
            }
        ]
    },
    {
        id: 'first-program',
        phase: 1,
        title: 'Writing Your First Program',
        mentalModel: {
            analogy: 'print() is like telling Python to speak out loud',
            explanation: 'Just as you might ask someone to "say this out loud", print() tells Python to display something on screen.',
        },
        whyItExists: {
            problem: 'Programs need a way to show results to users.',
            solution: 'The print() function displays text or data on the screen so users can see the output.'
        },
        plainEnglish: {
            explanation: `Every programmer starts with a simple program that displays "Hello, World!" on screen.

In Python, we use print() to display text:

print("Hello, World!")

That is it! One line of code and you have written a working program.

The text inside the quotes is called a "string". You can put any text there.`,
            keyPoints: [
                'print() displays output on screen',
                'Text must be inside quotes',
                'This is called a "string"',
                'Your first program is complete!'
            ]
        },
        syntax: {
            code: `print("Hello, World!")
print("My name is Python")
print("I can display anything!")`,
            lineExplanations: [
                'Display Hello, World! on screen',
                'Display another message',
                'You can print multiple lines'
            ],
            note: 'Each print() creates a new line of output'
        },
        commonMistakes: [
            {
                wrong: 'print(Hello World)',
                correct: 'print("Hello World")',
                explanation: 'Text (strings) must be inside quotes. Without quotes, Python thinks Hello and World are variable names.'
            },
            {
                wrong: 'Print("Hello")',
                correct: 'print("Hello")',
                explanation: 'Python is case-sensitive. print (lowercase) is correct. Print will cause an error.'
            }
        ],
        microPractice: [
            {
                type: 'predict-output',
                question: 'What will this code display?',
                code: 'print("Welcome to Python!")',
                answer: 'Welcome to Python!',
                hints: ['print() shows exactly what is inside the quotes']
            }
        ]
    },

    // ============ PHASE 2: VARIABLES & DATA TYPES ============
    {
        id: 'variables-naming',
        phase: 2,
        title: 'Variables & Naming Rules',
        mentalModel: {
            analogy: 'A variable is like a labeled box where you store things',
            explanation: 'Imagine boxes in a storage room. Each box has a label (variable name) and contains something (value). You can change what is inside the box anytime.',
            diagram: `
    ┌──────────────┐   ┌──────────────┐
    │     age      │   │    name      │
    │   ┌──────┐   │   │   ┌──────┐   │
    │   │  21  │   │   │   │"Ali" │   │
    │   └──────┘   │   │   └──────┘   │
    └──────────────┘   └──────────────┘
         Box 1              Box 2
      `
        },
        whyItExists: {
            problem: 'Programs need to remember values and use them later.',
            solution: 'Variables let you store data with a name so you can use it throughout your program.'
        },
        plainEnglish: {
            explanation: `A variable stores a value that you can use later.

To create a variable in Python:
1. Choose a name (the label)
2. Use = to assign a value
3. Done!

Naming rules:
- Start with letter or underscore
- Can contain letters, numbers, underscore
- Cannot use spaces or special characters
- Cannot use Python keywords (like print, if, for)
- Case matters: age and Age are different`,
            keyPoints: [
                'Variables store data with a name',
                'Use = to assign values',
                'Names are case-sensitive',
                'Follow naming rules or Python will error'
            ]
        },
        syntax: {
            code: `age = 21
name = "Ali"
is_student = True

print(age)
print(name)`,
            lineExplanations: [
                'Create variable age, store 21',
                'Create variable name, store "Ali"',
                'Create boolean variable',
                'Display the value of age',
                'Display the value of name'
            ]
        },
        commonMistakes: [
            {
                wrong: '1name = "Ali"',
                correct: 'name1 = "Ali"',
                explanation: 'Variable names cannot start with a number. Start with a letter or underscore.'
            },
            {
                wrong: 'my name = "Ali"',
                correct: 'my_name = "Ali"',
                explanation: 'Variable names cannot have spaces. Use underscore instead.'
            }
        ],
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'Which variable name is INVALID?',
                options: ['student_name', '_age', '2ndPlace', 'myVar'],
                correctIndex: 2,
                hints: ['Check the naming rules - what cannot a name start with?']
            }
        ]
    },
    {
        id: 'data-types',
        phase: 2,
        title: 'Data Types in Python',
        mentalModel: {
            analogy: 'Data types are like different containers for different things',
            explanation: 'You would not store water in a paper bag or books in a bottle. Each type of data needs the right "container" (data type).',
        },
        whyItExists: {
            problem: 'Different kinds of data need different storage and operations.',
            solution: 'Data types tell Python how to store and handle different values (numbers vs text vs true/false).'
        },
        plainEnglish: {
            explanation: `Python has several basic data types:

int (integer): Whole numbers
  Examples: 1, 42, -7, 0

float: Decimal numbers
  Examples: 3.14, -0.5, 100.0

str (string): Text
  Examples: "Hello", 'Python', "123"

bool (boolean): True or False
  Only two values: True or False

Use type() to check what type a value is.`,
            keyPoints: [
                'int = whole numbers',
                'float = decimal numbers',
                'str = text (in quotes)',
                'bool = True or False',
                'type() reveals the data type'
            ]
        },
        syntax: {
            code: `age = 21          # int
price = 99.99     # float
name = "Ali"      # str
active = True     # bool

print(type(age))
print(type(name))`,
            lineExplanations: [
                'Integer (whole number)',
                'Float (decimal)',
                'String (text)',
                'Boolean (True/False)',
                'Shows: <class \'int\'>',
                'Shows: <class \'str\'>'
            ]
        },
        commonMistakes: [
            {
                wrong: 'number = "42"\nresult = number + 10',
                correct: 'number = 42\nresult = number + 10',
                explanation: '"42" is a string (text), not a number. You cannot add text and numbers. Remove the quotes to make it an integer.'
            }
        ],
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What is the type of: 3.14',
                options: ['int', 'float', 'str', 'bool'],
                correctIndex: 1,
                hints: ['Does it have a decimal point?']
            }
        ]
    },

    // ============ PHASE 3: OPERATORS ============
    {
        id: 'arithmetic-operators',
        phase: 3,
        title: 'Arithmetic Operators',
        mentalModel: {
            analogy: 'Arithmetic operators are like calculator buttons',
            explanation: 'Just like a calculator has +, -, ×, ÷ buttons, Python has operators for math.',
        },
        whyItExists: {
            problem: 'Programs need to perform mathematical calculations.',
            solution: 'Arithmetic operators let you add, subtract, multiply, divide, and more.'
        },
        plainEnglish: {
            explanation: `Python has these arithmetic operators:

+  Addition: 5 + 3 = 8
-  Subtraction: 5 - 3 = 2  
*  Multiplication: 5 * 3 = 15
/  Division: 5 / 2 = 2.5 (always gives float)
// Floor division: 5 // 2 = 2 (removes decimal)
%  Modulus: 5 % 2 = 1 (remainder)
** Power: 5 ** 2 = 25 (5 squared)`,
            keyPoints: [
                '+ - * / work as expected',
                '/ always gives a float result',
                '// gives integer division',
                '% gives the remainder',
                '** is for power/exponent'
            ]
        },
        syntax: {
            code: `a = 10
b = 3

print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.333...
print(a // b)  # 3
print(a % b)   # 1
print(a ** b)  # 1000`,
            lineExplanations: [
                'First number',
                'Second number',
                'Addition',
                'Subtraction',
                'Multiplication',
                'Division (float)',
                'Floor division',
                'Modulus (remainder)',
                'Power (10³)'
            ]
        },
        commonMistakes: [
            {
                wrong: 'result = 5 / 2\nprint(result)  # Expected: 2',
                correct: 'result = 5 // 2\nprint(result)  # Result: 2',
                explanation: '/ always gives a float (2.5). Use // for integer division to get 2.'
            }
        ],
        microPractice: [
            {
                type: 'predict-output',
                question: 'What is 17 % 5?',
                answer: '2',
                hints: ['% gives the remainder. 17 ÷ 5 = 3 remainder ?']
            }
        ]
    },
    {
        id: 'comparison-operators',
        phase: 3,
        title: 'Comparison Operators',
        mentalModel: {
            analogy: 'Comparison operators are like asking yes/no questions',
            explanation: 'Is 5 greater than 3? Yes (True). Is 10 equal to 20? No (False). Comparisons always give True or False.',
        },
        whyItExists: {
            problem: 'Programs need to make decisions based on conditions.',
            solution: 'Comparison operators compare values and return True or False.'
        },
        plainEnglish: {
            explanation: `Comparison operators compare two values:

==  Equal to: 5 == 5 is True
!=  Not equal: 5 != 3 is True
>   Greater than: 5 > 3 is True
<   Less than: 5 < 3 is False
>=  Greater or equal: 5 >= 5 is True
<=  Less or equal: 5 <= 3 is False

The result is always True or False (boolean).`,
            keyPoints: [
                '== checks equality (not =)',
                '!= means not equal',
                'Result is always True or False',
                'These are used in if statements'
            ]
        },
        syntax: {
            code: `a = 5
b = 3

print(a == b)  # False
print(a != b)  # True
print(a > b)   # True
print(a >= 5)  # True`,
            lineExplanations: [
                'First value',
                'Second value',
                'Is 5 equal to 3? No',
                'Is 5 not equal to 3? Yes',
                'Is 5 greater than 3? Yes',
                'Is 5 greater than or equal to 5? Yes'
            ]
        },
        commonMistakes: [
            {
                wrong: 'if x = 5:',
                correct: 'if x == 5:',
                explanation: '= is assignment (storing). == is comparison. Use == when checking equality.'
            }
        ],
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What is the result of: 10 != 10',
                options: ['True', 'False', 'Error', '10'],
                correctIndex: 1,
                hints: ['!= means "not equal". Is 10 not equal to 10?']
            }
        ]
    },
    {
        id: 'logical-operators',
        phase: 3,
        title: 'Logical Operators',
        mentalModel: {
            analogy: 'Logical operators combine conditions like "and", "or" in sentences',
            explanation: '"I will go out if it is sunny AND I finish my work" - both must be true. "I will rest if I am tired OR it is late" - at least one must be true.',
        },
        whyItExists: {
            problem: 'Sometimes you need to check multiple conditions at once.',
            solution: 'Logical operators combine multiple conditions into one check.'
        },
        plainEnglish: {
            explanation: `Python has three logical operators:

and: Both must be True
  True and True = True
  True and False = False

or: At least one must be True
  True or False = True
  False or False = False

not: Flips the value
  not True = False
  not False = True`,
            keyPoints: [
                'and: ALL conditions must be True',
                'or: AT LEAST ONE must be True',
                'not: reverses True/False',
                'Used to combine comparisons'
            ]
        },
        syntax: {
            code: `age = 20
has_id = True

# Both conditions checked
can_enter = age >= 18 and has_id
print(can_enter)  # True

# At least one condition
is_minor = age < 18 or age > 65
print(is_minor)  # False`,
            lineExplanations: [
                'Age value',
                'Has ID card?',
                '',
                'Both must be True',
                'Result: True (20>=18 and has_id)',
                '',
                'Either one True',
                'Result: False (20 is not <18 or >65)'
            ]
        },
        commonMistakes: [
            {
                wrong: 'if age > 18 and < 30:',
                correct: 'if age > 18 and age < 30:',
                explanation: 'You must write the full comparison on each side of "and". Python does not understand "and < 30" alone.'
            }
        ],
        microPractice: [
            {
                type: 'multiple-choice',
                question: 'What is: True and False',
                options: ['True', 'False', 'Error', 'None'],
                correctIndex: 1,
                hints: ['For "and", BOTH must be True']
            }
        ]
    }
]

// Combine all lessons from all phases
export const lessons = [
    ...phase0to3Lessons,
    ...phase4to7Lessons,
    ...phase8to14Lessons,
    ...additionalLessons,
    ...advancedLessons
].sort((a, b) => {
    // Sort by phase, then by original order
    if (a.phase !== b.phase) return a.phase - b.phase
    return 0
})
