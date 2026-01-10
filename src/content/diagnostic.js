// Entry Diagnostic Assessment for Python Learning Platform
// Purpose: Measure programming readiness, not confidence or memorized syntax

export const diagnosticQuestions = [
    // ============ LOGIC-FOCUSED QUESTIONS ============
    {
        id: 1,
        type: 'output-prediction',
        category: 'logic',
        difficulty: 1,
        question: 'What will this code display?',
        code: `x = 5
x = x + 3
print(x)`,
        options: ['5', '3', '8', 'Error'],
        correctIndex: 2,
        hint: 'Think about what happens step by step. First x is 5, then we add 3 to it.',
        explanation: 'x starts as 5, then x + 3 (which is 8) is stored back in x.'
    },
    {
        id: 2,
        type: 'condition-reasoning',
        category: 'logic',
        difficulty: 1,
        question: 'Which message will be printed?',
        code: `age = 17

if age >= 18:
    print("Adult")
else:
    print("Minor")`,
        options: ['Adult', 'Minor', 'Both', 'Nothing'],
        correctIndex: 1,
        hint: 'Is 17 greater than or equal to 18?',
        explanation: '17 is not >= 18, so the else branch runs, printing "Minor".'
    },
    {
        id: 3,
        type: 'output-prediction',
        category: 'logic',
        difficulty: 2,
        question: 'What numbers will be printed?',
        code: `count = 1
while count <= 3:
    print(count)
    count = count + 1`,
        options: ['1, 2, 3', '1, 2, 3, 4', '0, 1, 2, 3', '2, 3, 4'],
        correctIndex: 0,
        hint: 'Start at 1, keep going while count is 3 or less.',
        explanation: 'Starts at 1, prints 1, 2, 3, then count becomes 4 and the loop stops.'
    },
    {
        id: 4,
        type: 'loop-intuition',
        category: 'logic',
        difficulty: 2,
        question: 'How many times will "Hello" be printed?',
        code: `for i in range(4):
    print("Hello")`,
        options: ['3 times', '4 times', '5 times', '1 time'],
        correctIndex: 1,
        hint: 'range(4) creates the numbers 0, 1, 2, 3 — count them.',
        explanation: 'range(4) generates 4 numbers (0 through 3), so the loop runs 4 times.'
    },
    {
        id: 5,
        type: 'condition-reasoning',
        category: 'logic',
        difficulty: 2,
        question: 'What will be printed?',
        code: `score = 75

if score >= 90:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 50:
    grade = "C"
else:
    grade = "F"

print(grade)`,
        options: ['A', 'B', 'C', 'F'],
        correctIndex: 1,
        hint: 'Check each condition from top to bottom. Which is the FIRST one that is true?',
        explanation: '75 is not >= 90, but 75 IS >= 70, so grade = "B".'
    },

    // ============ SYNTAX AWARENESS QUESTIONS ============
    {
        id: 6,
        type: 'debug-the-code',
        category: 'syntax',
        difficulty: 1,
        question: 'This code has an error. What is wrong?',
        code: `name = "Alice"
print("Hello, " + Name)`,
        options: [
            'Missing quotes around Alice',
            'Name is different from name (uppercase N)',
            'Cannot use + with strings',
            'Missing parentheses'
        ],
        correctIndex: 1,
        hint: 'Look carefully at the variable name. Are they exactly the same?',
        explanation: 'Python is case-sensitive. "name" and "Name" are different variables.'
    },
    {
        id: 7,
        type: 'debug-the-code',
        category: 'syntax',
        difficulty: 2,
        question: 'Why does this code fail?',
        code: `if 10 > 5
    print("Yes")`,
        options: [
            '10 is not greater than 5',
            'Missing colon (:) after the if condition',
            'print needs more arguments',
            'Should use == instead of >'
        ],
        correctIndex: 1,
        hint: 'Look at the if line. What punctuation is missing at the end?',
        explanation: 'Python requires a colon (:) after if, elif, else, for, while, def, etc.'
    },

    // ============ ERROR UNDERSTANDING QUESTIONS ============
    {
        id: 8,
        type: 'why-does-this-fail',
        category: 'error',
        difficulty: 2,
        question: 'This code causes an error. Why?',
        code: `number = "5"
result = number + 3
print(result)`,
        options: [
            'You cannot store "5" in a variable',
            'You cannot add a string ("5") and a number (3)',
            'result is a reserved word',
            'print does not work with variables'
        ],
        correctIndex: 1,
        hint: 'Notice the quotes around the 5. What type of value is that?',
        explanation: '"5" is a string (text), not a number. Python cannot add text + number directly.'
    },
    {
        id: 9,
        type: 'why-does-this-fail',
        category: 'error',
        difficulty: 2,
        question: 'What is wrong with this code?',
        code: `items = [1, 2, 3]
print(items[3])`,
        options: [
            'Cannot print a list',
            'Lists should use {} not []',
            'Index 3 is out of range (valid indexes are 0, 1, 2)',
            'Numbers cannot be in a list'
        ],
        correctIndex: 2,
        hint: 'The list has 3 items. What are the valid index numbers?',
        explanation: 'With 3 items, valid indexes are 0, 1, 2. Index 3 does not exist.'
    },
    {
        id: 10,
        type: 'output-prediction',
        category: 'logic',
        difficulty: 3,
        question: 'What will be the final value of total?',
        code: `numbers = [2, 4, 6]
total = 0

for n in numbers:
    total = total + n

print(total)`,
        options: ['0', '6', '12', '246'],
        correctIndex: 2,
        hint: 'Add up each number in the list: 2 + 4 + 6 = ?',
        explanation: 'The loop adds each number to total: 0 + 2 = 2, 2 + 4 = 6, 6 + 6 = 12.'
    }
]

// Scoring and classification logic
export function calculateDiagnosticResult(answers) {
    // answers = [{ questionId, selectedIndex, timeMs, usedHint }]

    let logicCorrect = 0
    let logicTotal = 0
    let syntaxCorrect = 0
    let syntaxTotal = 0
    let errorCorrect = 0
    let errorTotal = 0
    let totalTime = 0
    let hintsUsed = 0

    answers.forEach(answer => {
        const question = diagnosticQuestions.find(q => q.id === answer.questionId)
        if (!question) return

        const isCorrect = answer.selectedIndex === question.correctIndex
        totalTime += answer.timeMs
        if (answer.usedHint) hintsUsed++

        switch (question.category) {
            case 'logic':
                logicTotal++
                if (isCorrect) logicCorrect++
                break
            case 'syntax':
                syntaxTotal++
                if (isCorrect) syntaxCorrect++
                break
            case 'error':
                errorTotal++
                if (isCorrect) errorCorrect++
                break
        }
    })

    // Calculate percentages
    const logicScore = logicTotal > 0 ? (logicCorrect / logicTotal) * 100 : 0
    const syntaxScore = syntaxTotal > 0 ? (syntaxCorrect / syntaxTotal) * 100 : 0
    const errorScore = errorTotal > 0 ? (errorCorrect / errorTotal) * 100 : 0
    const overallScore = answers.length > 0
        ? (answers.filter(a => {
            const q = diagnosticQuestions.find(q => q.id === a.questionId)
            return q && a.selectedIndex === q.correctIndex
        }).length / answers.length) * 100
        : 0

    // Determine logic level
    let logicLevel
    if (logicScore >= 80) {
        logicLevel = 'high'
    } else if (logicScore >= 50) {
        logicLevel = 'medium'
    } else {
        logicLevel = 'low'
    }

    // Determine syntax familiarity
    const syntaxFamiliarity = syntaxScore >= 50

    // Determine recommended starting phase
    let recommendedPhase
    let startingLessonId

    if (logicLevel === 'high' && syntaxFamiliarity) {
        // Ready for control flow
        recommendedPhase = 5
        startingLessonId = 'if-statement'
    } else if (logicLevel === 'medium' || (logicLevel === 'high' && !syntaxFamiliarity)) {
        // Start with Python basics
        recommendedPhase = 1
        startingLessonId = 'python-setup'
    } else {
        // Start with programming foundations
        recommendedPhase = 0
        startingLessonId = 'what-is-programming'
    }

    // Generate feedback message
    let strengthsText = ''
    let gapsText = ''
    let feedbackMessage = ''

    if (logicLevel === 'high') {
        strengthsText = 'Your logical thinking is strong.'
    } else if (logicLevel === 'medium') {
        strengthsText = 'Your logical thinking is developing well.'
    } else {
        strengthsText = 'You have room to grow in logical thinking.'
    }

    if (syntaxFamiliarity) {
        strengthsText += ' You show some familiarity with code structure.'
    } else {
        gapsText = 'You\'ll benefit from learning Python syntax from the ground up.'
    }

    // Construct final message
    if (recommendedPhase === 0) {
        feedbackMessage = `${strengthsText} ${gapsText} We'll start with programming foundations to build a solid base before diving into code.`
    } else if (recommendedPhase === 1) {
        feedbackMessage = `${strengthsText} ${gapsText} We'll start with Python basics to strengthen your foundation.`
    } else {
        feedbackMessage = `${strengthsText} You're ready to dive into control flow and start writing real logic!`
    }

    return {
        scores: {
            logic: Math.round(logicScore),
            syntax: Math.round(syntaxScore),
            error: Math.round(errorScore),
            overall: Math.round(overallScore)
        },
        classification: {
            logicLevel,
            syntaxFamiliarity
        },
        recommendation: {
            phase: recommendedPhase,
            startingLessonId,
            phaseName: getPhaseNameFromNumber(recommendedPhase)
        },
        stats: {
            totalTimeMs: totalTime,
            averageTimePerQuestion: answers.length > 0 ? Math.round(totalTime / answers.length) : 0,
            hintsUsed,
            totalQuestions: answers.length,
            correctAnswers: answers.filter(a => {
                const q = diagnosticQuestions.find(q => q.id === a.questionId)
                return q && a.selectedIndex === q.correctIndex
            }).length
        },
        feedback: {
            message: feedbackMessage,
            strengths: strengthsText,
            gaps: gapsText || 'None identified'
        }
    }
}

function getPhaseNameFromNumber(phase) {
    const phaseNames = {
        0: 'Programming Foundations',
        1: 'Python Basics',
        5: 'Control Flow'
    }
    return phaseNames[phase] || 'Programming Foundations'
}
