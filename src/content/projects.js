// Practice Projects for each skill level

export const projects = [
    // Beginner Projects (After Phase 0-3)
    {
        id: 'calculator-basic',
        title: 'Simple Calculator',
        level: 'beginner',
        phase: 3,
        description: 'Build a calculator that performs basic math operations',
        concepts: ['Variables', 'Input/Output', 'Operators'],
        difficulty: 1,
        timeMinutes: 30,
        instructions: `
Create a simple calculator that:
1. Asks for two numbers
2. Shows a menu of operations (+, -, *, /)
3. Performs the selected operation
4. Displays the result

Bonus: Handle division by zero!`,
        starterCode: `# Simple Calculator
# Get two numbers from user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Show menu
print("\\nSelect operation:")
print("1. Add")
print("2. Subtract")
print("3. Multiply")
print("4. Divide")

choice = input("Enter choice (1-4): ")

# TODO: Perform calculation based on choice
# Hint: Use if-elif-else

`,
        solution: `num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print("\\nSelect operation:")
print("1. Add")
print("2. Subtract")
print("3. Multiply")
print("4. Divide")

choice = input("Enter choice (1-4): ")

if choice == "1":
    result = num1 + num2
    print(f"{num1} + {num2} = {result}")
elif choice == "2":
    result = num1 - num2
    print(f"{num1} - {num2} = {result}")
elif choice == "3":
    result = num1 * num2
    print(f"{num1} * {num2} = {result}")
elif choice == "4":
    if num2 == 0:
        print("Error: Cannot divide by zero!")
    else:
        result = num1 / num2
        print(f"{num1} / {num2} = {result}")
else:
    print("Invalid choice!")`
    },
    {
        id: 'grade-checker',
        title: 'Grade Checker',
        level: 'beginner',
        phase: 5,
        description: 'Convert marks to grades using if-elif-else',
        concepts: ['Control Statements', 'Comparison Operators'],
        difficulty: 1,
        timeMinutes: 20,
        instructions: `
Create a grade checker that:
1. Asks for marks (0-100)
2. Converts to grade:
   - 90+ = A
   - 80-89 = B
   - 70-79 = C
   - 60-69 = D
   - Below 60 = F
3. Shows pass/fail status`,
        starterCode: `# Grade Checker
marks = int(input("Enter your marks (0-100): "))

# TODO: Use if-elif-else to determine grade
# Hint: Check highest first, then go down

`,
        solution: `marks = int(input("Enter your marks (0-100): "))

if marks >= 90:
    grade = "A"
elif marks >= 80:
    grade = "B"
elif marks >= 70:
    grade = "C"
elif marks >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Grade: {grade}")

if marks >= 60:
    print("Status: PASS")
else:
    print("Status: FAIL")`
    },

    // Intermediate Projects (After Phase 4-7)
    {
        id: 'number-guessing',
        title: 'Number Guessing Game',
        level: 'intermediate',
        phase: 6,
        description: 'Build a game where the computer picks a random number',
        concepts: ['Loops', 'Random', 'Control Flow'],
        difficulty: 2,
        timeMinutes: 45,
        instructions: `
Create a number guessing game:
1. Computer picks a random number (1-100)
2. Player guesses until correct
3. Give hints: "Too high" or "Too low"
4. Count the number of attempts
5. Congratulate when correct!`,
        starterCode: `import random

# Generate random number 1-100
secret = random.randint(1, 100)
attempts = 0

print("🎮 Number Guessing Game!")
print("I'm thinking of a number between 1 and 100...")

# TODO: Create a while loop for guessing
# Hint: Loop until guess == secret

`,
        solution: `import random

secret = random.randint(1, 100)
attempts = 0

print("🎮 Number Guessing Game!")
print("I'm thinking of a number between 1 and 100...")

while True:
    guess = int(input("\\nYour guess: "))
    attempts += 1
    
    if guess < secret:
        print("📈 Too low! Try higher.")
    elif guess > secret:
        print("📉 Too high! Try lower.")
    else:
        print(f"\\n🎉 Correct! You got it in {attempts} attempts!")
        break`
    },
    {
        id: 'password-generator',
        title: 'Password Generator',
        level: 'intermediate',
        phase: 7,
        description: 'Generate random secure passwords',
        concepts: ['Functions', 'Random', 'Strings'],
        difficulty: 2,
        timeMinutes: 40,
        instructions: `
Create a password generator:
1. Ask for password length
2. Include: letters, numbers, symbols
3. Generate random password
4. Make it a function!`,
        starterCode: `import random
import string

def generate_password(length):
    """Generate a random password of given length"""
    # Characters to use
    chars = string.ascii_letters + string.digits + "!@#$%"
    
    # TODO: Generate password using random.choice()
    # Hint: Use a loop or list comprehension
    
    pass

# Get length from user
length = int(input("Password length: "))
password = generate_password(length)
print(f"Your password: {password}")
`,
        solution: `import random
import string

def generate_password(length):
    chars = string.ascii_letters + string.digits + "!@#$%"
    password = ""
    for _ in range(length):
        password += random.choice(chars)
    return password

length = int(input("Password length: "))
password = generate_password(length)
print(f"Your password: {password}")`
    },
    {
        id: 'todo-list',
        title: 'To-Do List Manager',
        level: 'intermediate',
        phase: 8,
        description: 'Create a command-line to-do list app',
        concepts: ['Lists', 'Functions', 'Loops'],
        difficulty: 2,
        timeMinutes: 60,
        instructions: `
Build a to-do list that can:
1. Add tasks
2. View all tasks
3. Mark tasks as done
4. Delete tasks
5. Use a menu loop`,
        starterCode: `# To-Do List Manager
tasks = []

def show_menu():
    print("\\n📋 To-Do List")
    print("1. Add task")
    print("2. View tasks")
    print("3. Mark done")
    print("4. Delete task")
    print("5. Exit")

def add_task():
    task = input("Enter task: ")
    tasks.append({"task": task, "done": False})
    print("✅ Task added!")

def view_tasks():
    if not tasks:
        print("No tasks yet!")
        return
    for i, t in enumerate(tasks, 1):
        status = "✓" if t["done"] else " "
        print(f"{i}. [{status}] {t['task']}")

# TODO: Add mark_done() and delete_task() functions
# Then create the main menu loop

`,
        solution: `tasks = []

def show_menu():
    print("\\n📋 To-Do List")
    print("1. Add task")
    print("2. View tasks")
    print("3. Mark done")
    print("4. Delete task")
    print("5. Exit")

def add_task():
    task = input("Enter task: ")
    tasks.append({"task": task, "done": False})
    print("✅ Task added!")

def view_tasks():
    if not tasks:
        print("No tasks yet!")
        return
    for i, t in enumerate(tasks, 1):
        status = "✓" if t["done"] else " "
        print(f"{i}. [{status}] {t['task']}")

def mark_done():
    view_tasks()
    if tasks:
        num = int(input("Task number to mark done: "))
        if 1 <= num <= len(tasks):
            tasks[num-1]["done"] = True
            print("Marked as done!")

def delete_task():
    view_tasks()
    if tasks:
        num = int(input("Task number to delete: "))
        if 1 <= num <= len(tasks):
            tasks.pop(num-1)
            print("Deleted!")

while True:
    show_menu()
    choice = input("Choice: ")
    if choice == "1": add_task()
    elif choice == "2": view_tasks()
    elif choice == "3": mark_done()
    elif choice == "4": delete_task()
    elif choice == "5": break`
    },

    // Advanced Projects (After Phase 8-14)
    {
        id: 'quiz-game',
        title: 'Quiz Game',
        level: 'advanced',
        phase: 8,
        description: 'Interactive quiz with score tracking',
        concepts: ['Dictionaries', 'Lists', 'Functions'],
        difficulty: 3,
        timeMinutes: 60,
        instructions: `
Build a quiz game:
1. Store questions in dictionaries
2. Display multiple choice options
3. Check answers and track score
4. Show final result with percentage`,
        starterCode: `# Quiz Game
questions = [
    {
        "question": "What is the capital of France?",
        "options": ["London", "Paris", "Berlin", "Madrid"],
        "answer": 1  # Index of correct answer
    },
    {
        "question": "What is 5 + 3?",
        "options": ["6", "7", "8", "9"],
        "answer": 2
    },
    # Add more questions!
]

def run_quiz():
    score = 0
    # TODO: Loop through questions
    # Display each question and options
    # Check answer and update score
    pass

run_quiz()
`,
        solution: `questions = [
    {
        "question": "What is the capital of France?",
        "options": ["London", "Paris", "Berlin", "Madrid"],
        "answer": 1
    },
    {
        "question": "What is 5 + 3?",
        "options": ["6", "7", "8", "9"],
        "answer": 2
    },
    {
        "question": "Which is a Python data type?",
        "options": ["integer", "text", "character", "decimal"],
        "answer": 0
    }
]

def run_quiz():
    score = 0
    for i, q in enumerate(questions, 1):
        print(f"\\nQ{i}: {q['question']}")
        for j, opt in enumerate(q['options']):
            print(f"  {j+1}. {opt}")
        
        user = int(input("Your answer (1-4): ")) - 1
        if user == q['answer']:
            print("✅ Correct!")
            score += 1
        else:
            print(f"❌ Wrong! Answer: {q['options'][q['answer']]}")
    
    percent = (score / len(questions)) * 100
    print(f"\\n📊 Score: {score}/{len(questions)} ({percent:.0f}%)")

run_quiz()`
    },
    {
        id: 'word-counter',
        title: 'Word Counter & Analyzer',
        level: 'advanced',
        phase: 9,
        description: 'Analyze text files and count words',
        concepts: ['Strings', 'File Handling', 'Dictionaries'],
        difficulty: 3,
        timeMinutes: 45,
        instructions: `
Build a word analyzer:
1. Read text from user or file
2. Count total words
3. Find most common words
4. Count each character`,
        starterCode: `# Word Counter & Analyzer

def analyze_text(text):
    """Analyze text and return statistics"""
    # TODO: Count words, find common words
    pass

text = input("Enter text to analyze: ")
# Or read from file:
# with open("sample.txt") as f:
#     text = f.read()

analyze_text(text)
`,
        solution: `def analyze_text(text):
    words = text.lower().split()
    word_count = {}
    
    for word in words:
        word = word.strip(".,!?")
        word_count[word] = word_count.get(word, 0) + 1
    
    print(f"\\n📊 Text Analysis:")
    print(f"Total words: {len(words)}")
    print(f"Unique words: {len(word_count)}")
    print(f"Characters: {len(text)}")
    
    sorted_words = sorted(word_count.items(), key=lambda x: x[1], reverse=True)
    print("\\nTop 5 words:")
    for word, count in sorted_words[:5]:
        print(f"  '{word}': {count}")

text = input("Enter text to analyze: ")
analyze_text(text)`
    },
    {
        id: 'contact-book',
        title: 'Contact Book with File Storage',
        level: 'advanced',
        phase: 10,
        description: 'Save and load contacts from a file',
        concepts: ['File Handling', 'Dictionaries', 'JSON'],
        difficulty: 3,
        timeMinutes: 75,
        instructions: `
Build a contact book that:
1. Adds contacts (name, phone, email)
2. Searches contacts
3. Saves to JSON file
4. Loads on startup`,
        starterCode: `import json

FILENAME = "contacts.json"

def load_contacts():
    try:
        with open(FILENAME, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return {}

def save_contacts(contacts):
    with open(FILENAME, "w") as f:
        json.dump(contacts, f, indent=2)

contacts = load_contacts()

# TODO: Add menu and functions for:
# - Add contact
# - Search contact
# - List all contacts
# - Delete contact

`,
        solution: `import json

FILENAME = "contacts.json"

def load_contacts():
    try:
        with open(FILENAME, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return {}

def save_contacts(contacts):
    with open(FILENAME, "w") as f:
        json.dump(contacts, f, indent=2)

def add_contact(contacts):
    name = input("Name: ")
    phone = input("Phone: ")
    email = input("Email: ")
    contacts[name] = {"phone": phone, "email": email}
    save_contacts(contacts)
    print(f"Added {name}!")

def search_contact(contacts):
    name = input("Search name: ")
    if name in contacts:
        c = contacts[name]
        print(f"📞 {c['phone']} | ✉️ {c['email']}")
    else:
        print("Not found!")

def list_all(contacts):
    for name, info in contacts.items():
        print(f"{name}: {info['phone']}")

contacts = load_contacts()
print(f"Loaded {len(contacts)} contacts")

while True:
    print("\\n1.Add 2.Search 3.List 4.Exit")
    c = input("Choice: ")
    if c == "1": add_contact(contacts)
    elif c == "2": search_contact(contacts)
    elif c == "3": list_all(contacts)
    elif c == "4": break`
    },
    {
        id: 'student-management',
        title: 'Student Management System',
        level: 'advanced',
        phase: 13,
        description: 'OOP-based student record system',
        concepts: ['Classes', 'OOP', 'File Handling'],
        difficulty: 4,
        timeMinutes: 90,
        instructions: `
Build a student system using OOP:
1. Student class with attributes
2. Add/view/update students
3. Calculate average grades
4. Save/load from file`,
        starterCode: `class Student:
    def __init__(self, name, roll_no):
        self.name = name
        self.roll_no = roll_no
        self.grades = []
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def get_average(self):
        # TODO: Calculate average
        pass
    
    def __str__(self):
        return f"{self.roll_no}: {self.name}"

class StudentManager:
    def __init__(self):
        self.students = []
    
    def add_student(self, student):
        self.students.append(student)
    
    # TODO: Add more methods

# Create manager and test
manager = StudentManager()
`,
        solution: `class Student:
    def __init__(self, name, roll_no):
        self.name = name
        self.roll_no = roll_no
        self.grades = []
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def get_average(self):
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)
    
    def __str__(self):
        avg = self.get_average()
        return f"{self.roll_no}: {self.name} (Avg: {avg:.1f})"

class StudentManager:
    def __init__(self):
        self.students = []
    
    def add_student(self, student):
        self.students.append(student)
        print(f"Added {student.name}")
    
    def find_student(self, roll_no):
        for s in self.students:
            if s.roll_no == roll_no:
                return s
        return None
    
    def list_all(self):
        for s in self.students:
            print(s)

manager = StudentManager()
s1 = Student("Ali", "101")
s1.add_grade(85)
s1.add_grade(90)
manager.add_student(s1)
manager.list_all()`
    }
]
