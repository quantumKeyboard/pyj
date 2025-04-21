// Questions data from the provided list
const questions = [
    { 
        id: 1, 
        text: "Write a Python program to display calendar of given month using Calendar module.",
        code: `import calendar

# Get the month and year from the user
year = int(input("Enter year: "))
month = int(input("Enter month: "))

# Display the calendar
print(calendar.month(year, month))`
    },
    { 
        id: 2, 
        text: "Write a python program to calculate area of circle using inbuilt Math module.",
        code: `import math

# Get the radius from the user
radius = float(input("Enter the radius of the circle: "))

# Calculate the area
area = math.pi * radius ** 2

# Display the result
print("The area of the circle is:", area)`
    },
    { 
        id: 3, 
        text: "Create your own package in Python",
        code: `# mypackage/__init__.py
def greet():
    print("Hello from mypackage!")

# mypackage/utils.py
def add(a, b):
    return a + b

# main.py
from mypackage import greet, utils

greet()
result = utils.add(5, 3)
print("5 + 3 =", result)`
    },
    { 
        id: 4, 
        text: "Write a program on constructor overloading in Python.",
        code: `class Student:
    def __init__(self, name=None, age=None):
        self.name = name
        self.age = age
        
    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# Creating objects with different parameters
s1 = Student()  # No parameters
s2 = Student("John")  # One parameter
s3 = Student("Alice", 20)  # Two parameters

s1.display()
s2.display()
s3.display()`
    },
    { 
        id: 5, 
        text: "Write a python program to implement constructor.",
        code: `class Person:
    def __init__(self):
        print("Constructor called")
        self.name = "Default Name"
        self.age = 0
        
    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# Creating object
p = Person()
p.display()`
    },
    { 
        id: 6, 
        text: "Write a python program to implement parameterized constructor.",
        code: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# Creating object with parameters
s = Student("John", 20)
s.display()`
    },
    { 
        id: 7, 
        text: "Write a python program to implement constructor overriding",
        code: `class Parent:
    def __init__(self):
        print("Parent constructor")
        
class Child(Parent):
    def __init__(self):
        print("Child constructor")
        super().__init__()

# Creating object
c = Child()`
    },
    { 
        id: 8, 
        text: "Write a Python program to create a class to print the area of a square and a rectangle. The class has two methods with the same name but different number of parameters. The method for printing area of rectangle has two parameters which are length and breadth respectively while the other method for printing area of square has one parameter which is side of square.",
        code: `class Shape:
    def area(self, length, breadth=None):
        if breadth is None:
            # Square area
            return length * length
        else:
            # Rectangle area
            return length * breadth

# Creating object
s = Shape()

# Calculating areas
square_area = s.area(5)  # Square
rectangle_area = s.area(4, 6)  # Rectangle

print("Area of square:", square_area)
print("Area of rectangle:", rectangle_area)`
    },
    { 
        id: 9, 
        text: "Write a Python program to create a class 'Degree' having a method 'getDegree' that prints 'I got a degree'. It has two subclasses namely 'Undergraduate' and Postgraduate' each having a method with the same name that prints 'I am an Undergraduate' and 'I am a Postgraduate' respectively. Call the method by creating an object of each of the three classes.",
        code: `class Degree:
    def getDegree(self):
        print("I got a degree")

class Undergraduate(Degree):
    def getDegree(self):
        print("I am an Undergraduate")

class Postgraduate(Degree):
    def getDegree(self):
        print("I am a Postgraduate")

# Creating objects
d = Degree()
u = Undergraduate()
p = Postgraduate()

# Calling methods
d.getDegree()
u.getDegree()
p.getDegree()`
    },
    { 
        id: 10, 
        text: "Write Python program to read and print students information using single inheritance.",
        code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def display(self):
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")

class Student(Person):
    def __init__(self, name, age, rollno):
        super().__init__(name, age)
        self.rollno = rollno
        
    def display(self):
        super().display()
        print(f"Roll No: {self.rollno}")

# Creating object
s = Student("John", 20, 101)
s.display()`
    },
    { 
        id: 11, 
        text: "Write a Python program to implement multiple inheritance.",
        code: `class Father:
    def father_method(self):
        print("Father's method")

class Mother:
    def mother_method(self):
        print("Mother's method")

class Child(Father, Mother):
    def child_method(self):
        print("Child's method")

# Creating object
c = Child()
c.father_method()
c.mother_method()
c.child_method()`
    },
    { 
        id: 12, 
        text: "Write a Python program to implement multilevel inheritance.",
        code: `class Grandfather:
    def grandfather_method(self):
        print("Grandfather's method")

class Father(Grandfather):
    def father_method(self):
        print("Father's method")

class Child(Father):
    def child_method(self):
        print("Child's method")

# Creating object
c = Child()
c.grandfather_method()
c.father_method()
c.child_method()`
    },
    { 
        id: 13, 
        text: "Write a Python program to create series from array using Panda.",
        code: `import pandas as pd
import numpy as np

# Creating array
arr = np.array([10, 20, 30, 40, 50])

# Creating series from array
series = pd.Series(arr)

print(series)`
    },
    { 
        id: 14, 
        text: "Write a Python program to create series from list using Panda.",
        code: `import pandas as pd

# Creating list
my_list = [10, 20, 30, 40, 50]

# Creating series from list
series = pd.Series(my_list)

print(series)`
    },
    { 
        id: 15, 
        text: "Write a Python program to access element of series using Panda.",
        code: `import pandas as pd

# Creating series
series = pd.Series([10, 20, 30, 40, 50], index=['a', 'b', 'c', 'd', 'e'])

# Accessing elements
print("First element:", series[0])
print("Element at index 'c':", series['c'])
print("First three elements:", series[:3])`
    },
    { 
        id: 16, 
        text: "Write a Python program to create DataFrame using list or dictionary using Panda.",
        code: `import pandas as pd

# Creating DataFrame from list of lists
data = [
    ['John', 20, 'A'],
    ['Alice', 22, 'B'],
    ['Bob', 21, 'A']
]
df1 = pd.DataFrame(data, columns=['Name', 'Age', 'Grade'])

# Creating DataFrame from dictionary
data_dict = {
    'Name': ['John', 'Alice', 'Bob'],
    'Age': [20, 22, 21],
    'Grade': ['A', 'B', 'A']
}
df2 = pd.DataFrame(data_dict)

print("DataFrame from list:")
print(df1)
print("\nDataFrame from dictionary:")
print(df2)`
    },
    { 
        id: 17, 
        text: "Write GUI program to import Tkinter package and create a window and set its title.",
        code: `import tkinter as tk

# Create the main window
root = tk.Tk()

# Set window title
root.title("My First GUI")

# Set window size
root.geometry("400x300")

# Start the main event loop
root.mainloop()`
    }
];

// Function to copy code to clipboard
async function copyCode(code, button) {
    try {
        await navigator.clipboard.writeText(code);
        button.textContent = 'Copied!';
        button.classList.add('copied');
        setTimeout(() => {
            button.textContent = 'Copy';
            button.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy code:', err);
        alert('Failed to copy code to clipboard');
    }
}

// Function to create question elements
function createQuestionElements() {
    const container = document.querySelector('.questions-container');
    
    questions.forEach(question => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question-item';
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = question.text;
        
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.textContent = 'Copy';
        copyButton.onclick = () => copyCode(question.code, copyButton);
        
        questionElement.appendChild(questionText);
        questionElement.appendChild(copyButton);
        container.appendChild(questionElement);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', createQuestionElements); 