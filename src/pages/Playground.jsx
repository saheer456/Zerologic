import { useState } from 'react'
import CodeEditor from '../components/editor/CodeEditor'

const codeTemplates = [
    {
        id: 'blank',
        name: '📄 Blank',
        code: '# Start coding here!\n\n'
    },
    {
        id: 'hello-world',
        name: '👋 Hello World',
        code: '# Your first Python program\nprint("Hello, World!")\nprint("Welcome to Python!")'
    },
    {
        id: 'variables',
        name: '📦 Variables',
        code: '# Working with variables\nname = "Python"\nage = 30\nprice = 19.99\nis_awesome = True\n\nprint("Language:", name)\nprint("Age:", age)\nprint("Price:", price)\nprint("Is awesome?", is_awesome)'
    },
    {
        id: 'user-input',
        name: '⌨️ User Input',
        code: '# Getting user input\n# Note: input() works in the playground!\nname = input("What is your name? ")\nprint("Hello,", name + "!")'
    },
    {
        id: 'loops',
        name: '🔄 Loops',
        code: '# Counting with loops\nfor i in range(1, 6):\n    print("Count:", i)\n\nprint("\\nDone counting!")'
    },
    {
        id: 'lists',
        name: '📝 Lists',
        code: '# Working with lists\nfruits = ["apple", "banana", "cherry"]\n\nprint("Original list:", fruits)\n\nfruits.append("date")\nprint("After adding:", fruits)\n\nfor fruit in fruits:\n    print("  -", fruit)'
    },
    {
        id: 'functions',
        name: '🔧 Functions',
        code: '# Creating functions\ndef greet(name):\n    return "Hello, " + name + "!"\n\ndef add(a, b):\n    return a + b\n\nprint(greet("Python"))\nprint("5 + 3 =", add(5, 3))'
    },
    {
        id: 'calculator',
        name: '🧮 Mini Calculator',
        code: '# Simple Calculator\ndef calculate(a, b, operation):\n    if operation == "+":\n        return a + b\n    elif operation == "-":\n        return a - b\n    elif operation == "*":\n        return a * b\n    elif operation == "/":\n        if b != 0:\n            return a / b\n        return "Cannot divide by zero"\n\nprint("10 + 5 =", calculate(10, 5, "+"))\nprint("10 - 5 =", calculate(10, 5, "-"))\nprint("10 * 5 =", calculate(10, 5, "*"))\nprint("10 / 5 =", calculate(10, 5, "/"))'
    }
]

function Playground() {
    const [selectedTemplate, setSelectedTemplate] = useState('blank')
    const [currentCode, setCurrentCode] = useState(codeTemplates[0].code)

    const handleTemplateChange = (templateId) => {
        const template = codeTemplates.find(t => t.id === templateId)
        if (template) {
            setSelectedTemplate(templateId)
            setCurrentCode(template.code)
        }
    }

    return (
        <div className="playground-container">
            <div className="playground-header">
                <div>
                    <h1 className="mb-1">Code Playground</h1>
                    <p className="text-secondary mb-0">
                        Experiment with Python code freely. No rules, just code!
                    </p>
                </div>
            </div>

            <div className="playground-templates mb-4">
                <span className="text-sm text-secondary mr-2">Templates:</span>
                <div className="template-buttons">
                    {codeTemplates.map(template => (
                        <button
                            key={template.id}
                            className={`template-btn ${selectedTemplate === template.id ? 'active' : ''}`}
                            onClick={() => handleTemplateChange(template.id)}
                        >
                            {template.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="playground-editor">
                <CodeEditor
                    key={selectedTemplate}
                    initialCode={currentCode}
                />
            </div>

            <div className="playground-tips mt-4">
                <div className="tip-card">
                    <span className="tip-icon">💡</span>
                    <span className="tip-text">
                        Press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to run your code
                    </span>
                </div>
                <div className="tip-card">
                    <span className="tip-icon">🎯</span>
                    <span className="tip-text">
                        Press <kbd>Tab</kbd> to add indentation
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Playground
