// Questions data from the provided list
const questions = [
    {
        id: 1,
        text: "Write a program using different Bitwise operators in Python",
        code: `# Bitwise AND
a = 5  # 0101
b = 3  # 0011
print(a & b)  # 0001 = 1

# Bitwise OR
print(a | b)  # 0111 = 7

# Bitwise XOR
print(a ^ b)  # 0110 = 6

# Bitwise NOT
print(~a)  # -6

# Left Shift
print(a << 1)  # 1010 = 10

# Right Shift
print(a >> 1)  # 0010 = 2`
    },
    {
        id: 2,
        text: "Write a program using different logical operators in Python",
        code: `# Logical AND
a = True
b = False
print(a and b)  # False

# Logical OR
print(a or b)  # True

# Logical NOT
print(not a)  # False

# Combining operators
print((a and b) or (not b))  # True`
    },
    {
        id: 3,
        text: "Write a program to swap the value of two variables",
        code: `# Method 1: Using a temporary variable
a = 5
b = 10
temp = a
a = b
b = temp
print(f"After swapping: a = {a}, b = {b}")

# Method 2: Without temporary variable
a = 5
b = 10
a, b = b, a
print(f"After swapping: a = {a}, b = {b}")`
    },
    {
        id: 4,
        text: "Write a program to calculate surface volume and area of a cylinder",
        code: `import math

def calculate_cylinder(radius, height):
    # Calculate volume
    volume = math.pi * radius**2 * height
    
    # Calculate surface area
    surface_area = 2 * math.pi * radius * (radius + height)
    
    return volume, surface_area

# Example usage
radius = float(input("Enter radius of cylinder: "))
height = float(input("Enter height of cylinder: "))
volume, area = calculate_cylinder(radius, height)
print(f"Volume: {volume:.2f}")
print(f"Surface Area: {area:.2f}")`
    },
    {
        id: 5,
        text: "Write a program to check the largest number among the three numbers",
        code: `def find_largest(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c

# Example usage
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
num3 = float(input("Enter third number: "))
largest = find_largest(num1, num2, num3)
print(f"The largest number is: {largest}")`
    },
    {
        id: 6,
        text: "Write a program to check if the input year is a leap year or not",
        code: `def is_leap_year(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            else:
                return False
        else:
            return True
    else:
        return False

# Example usage
year = int(input("Enter a year: "))
if is_leap_year(year):
    print(f"{year} is a leap year")
else:
    print(f"{year} is not a leap year")`
    },
    {
        id: 7,
        text: "Write a program to check if a Number is Positive, Negative or Zero",
        code: `def check_number(num):
    if num > 0:
        return "Positive"
    elif num < 0:
        return "Negative"
    else:
        return "Zero"

# Example usage
number = float(input("Enter a number: "))
result = check_number(number)
print(f"The number is {result}")`
    },
    {
        id: 8,
        text: "Write a program that takes the marks of 5 subjects and displays the grades",
        code: `def calculate_grade(marks):
    if marks >= 90:
        return 'A'
    elif marks >= 80:
        return 'B'
    elif marks >= 70:
        return 'C'
    elif marks >= 60:
        return 'D'
    else:
        return 'F'

# Example usage
subjects = ['Math', 'Science', 'English', 'History', 'Geography']
total_marks = 0

for subject in subjects:
    marks = float(input(f"Enter marks for {subject}: "))
    total_marks += marks

average = total_marks / len(subjects)
grade = calculate_grade(average)
print(f"Average marks: {average:.2f}")
print(f"Grade: {grade}")`
    },
    {
        id: 9,
        text: "The following program uses a nested for loop to find the prime numbers from 2 to 100",
        code: `def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Find prime numbers from 2 to 100
primes = []
for num in range(2, 101):
    if is_prime(num):
        primes.append(num)

print("Prime numbers from 2 to 100:")
print(primes)`
    },
    {
        id: 10,
        text: "Write a Python program that takes a number and checks whether it is a palindrome or not",
        code: `def is_palindrome(num):
    original = num
    reverse = 0
    
    while num > 0:
        digit = num % 10
        reverse = reverse * 10 + digit
        num = num // 10
    
    return original == reverse

# Example usage
number = int(input("Enter a number: "))
if is_palindrome(number):
    print(f"{number} is a palindrome")
else:
    print(f"{number} is not a palindrome")`
    },
    {
        id: 11,
        text: "Write a Python program to print all even numbers between 1 to 100 using while loop",
        code: `num = 2
print("Even numbers between 1 and 100:")
while num <= 100:
    print(num, end=" ")
    num += 2`
    },
    {
        id: 12,
        text: "Print the following patterns using loop: 1010101 101 1",
        code: `def print_pattern(n):
    for i in range(n, 0, -1):
        # Print spaces
        print(" " * (n - i), end="")
        # Print 1s and 0s
        for j in range(2 * i - 1):
            print("1" if j % 2 == 0 else "0", end="")
        print()

# Example usage
print_pattern(3)`
    },
    {
        id: 13,
        text: "Print the following patterns using loop: * *** ***** *** *",
        code: `def print_diamond(n):
    # Upper half
    for i in range(n):
        print(" " * (n - i - 1) + "*" * (2 * i + 1))
    
    # Lower half
    for i in range(n - 2, -1, -1):
        print(" " * (n - i - 1) + "*" * (2 * i + 1))

# Example usage
print_diamond(3)`
    },
    {
        id: 14,
        text: "Write a Python Program to Reverse a given number by using loop",
        code: `def reverse_number(num):
    reverse = 0
    while num > 0:
        digit = num % 10
        reverse = reverse * 10 + digit
        num = num // 10
    return reverse

# Example usage
number = int(input("Enter a number: "))
reversed_num = reverse_number(number)
print(f"Reversed number: {reversed_num}")`
    },
    {
        id: 15,
        text: "Write a python program to find Factorial of given number",
        code: `def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Example usage
number = int(input("Enter a number: "))
result = factorial(number)
print(f"Factorial of {number} is {result}")`
    },
    {
        id: 16,
        text: "Write a python program to find Fibonacci series for given number",
        code: `def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    series = [0, 1]
    for i in range(2, n):
        series.append(series[i-1] + series[i-2])
    return series

# Example usage
terms = int(input("Enter number of terms: "))
fib_series = fibonacci(terms)
print("Fibonacci series:", fib_series)`
    },
    {
        id: 17,
        text: "Find sum of four digit number using loop",
        code: `def sum_of_digits(num):
    sum_digits = 0
    while num > 0:
        digit = num % 10
        sum_digits += digit
        num = num // 10
    return sum_digits

# Example usage
number = int(input("Enter a four-digit number: "))
if 1000 <= number <= 9999:
    result = sum_of_digits(number)
    print(f"Sum of digits: {result}")
else:
    print("Please enter a valid four-digit number")`
    },
    {
        id: 18,
        text: "Write program to demonstrate use of nested if-else",
        code: `def check_triangle(a, b, c):
    if a + b > c and b + c > a and c + a > b:
        if a == b == c:
            return "Equilateral Triangle"
        elif a == b or b == c or c == a:
            return "Isosceles Triangle"
        else:
            return "Scalene Triangle"
    else:
        return "Not a valid triangle"

# Example usage
side1 = float(input("Enter first side: "))
side2 = float(input("Enter second side: "))
side3 = float(input("Enter third side: "))
result = check_triangle(side1, side2, side3)
print(result)`
    },
    {
        id: 19,
        text: "Write a program to demonstrate use of different list Functions",
        code: `# Create a list
my_list = [1, 2, 3, 4, 5]

# Append an element
my_list.append(6)
print("After append:", my_list)

# Extend with another list
my_list.extend([7, 8, 9])
print("After extend:", my_list)

# Insert at specific position
my_list.insert(0, 0)
print("After insert:", my_list)

# Remove an element
my_list.remove(0)
print("After remove:", my_list)

# Pop an element
popped = my_list.pop()
print("Popped element:", popped)
print("After pop:", my_list)

# Count occurrences
count = my_list.count(2)
print("Count of 2:", count)

# Sort the list
my_list.sort()
print("After sort:", my_list)

# Reverse the list
my_list.reverse()
print("After reverse:", my_list)`
    },
    {
        id: 20,
        text: "Write a program to reverse a list",
        code: `def reverse_list(lst):
    # Method 1: Using slicing
    reversed_list = lst[::-1]
    return reversed_list

    # Method 2: Using reverse() method
    # lst.reverse()
    # return lst

    # Method 3: Using reversed() function
    # return list(reversed(lst))

# Example usage
original_list = [1, 2, 3, 4, 5]
reversed_list = reverse_list(original_list)
print("Original list:", original_list)
print("Reversed list:", reversed_list)`
    },
    {
        id: 21,
        text: "Write a Python program to find common items from two lists",
        code: `def find_common_items(list1, list2):
    # Method 1: Using list comprehension
    common = [item for item in list1 if item in list2]
    return common

    # Method 2: Using set intersection
    # return list(set(list1) & set(list2))

# Example usage
list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]
common_items = find_common_items(list1, list2)
print("Common items:", common_items)`
    },
    {
        id: 22,
        text: "Write a Python program to sort a list",
        code: `def sort_list(lst):
    # Method 1: Using sort() method (modifies original list)
    # lst.sort()
    # return lst

    # Method 2: Using sorted() function (returns new list)
    return sorted(lst)

# Example usage
numbers = [5, 2, 8, 1, 9, 3]
sorted_numbers = sort_list(numbers)
print("Original list:", numbers)
print("Sorted list:", sorted_numbers)`
    },
    {
        id: 23,
        text: "Write program to copy specific elements existing tuple into new tuple",
        code: `def copy_tuple_elements(original_tuple, indices):
    new_tuple = tuple(original_tuple[i] for i in indices)
    return new_tuple

# Example usage
original = (1, 2, 3, 4, 5, 6, 7, 8, 9)
indices = [0, 2, 4, 6, 8]  # Copy elements at these indices
new_tuple = copy_tuple_elements(original, indices)
print("Original tuple:", original)
print("New tuple:", new_tuple)`
    },
    {
        id: 24,
        text: "Create a tuple and find the minimum and maximum number from it",
        code: `def find_min_max(numbers_tuple):
    minimum = min(numbers_tuple)
    maximum = max(numbers_tuple)
    return minimum, maximum

# Example usage
numbers = (5, 2, 8, 1, 9, 3, 7, 4, 6)
min_num, max_num = find_min_max(numbers)
print("Tuple:", numbers)
print("Minimum number:", min_num)
print("Maximum number:", max_num)`
    },
    {
        id: 25,
        text: "Write a Python program to find the repeated items of a tuple",
        code: `def find_repeated_items(tup):
    repeated = []
    for item in tup:
        if tup.count(item) > 1 and item not in repeated:
            repeated.append(item)
    return repeated

# Example usage
my_tuple = (1, 2, 3, 2, 4, 5, 4, 6, 7, 8, 7)
repeated = find_repeated_items(my_tuple)
print("Tuple:", my_tuple)
print("Repeated items:", repeated)`
    },
    {
        id: 26,
        text: "Write a program on the various set operations",
        code: `# Create two sets
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Union
union_set = set1 | set2
print("Union:", union_set)

# Intersection
intersection_set = set1 & set2
print("Intersection:", intersection_set)

# Difference
difference_set = set1 - set2
print("Difference (set1 - set2):", difference_set)

# Symmetric Difference
symmetric_diff = set1 ^ set2
print("Symmetric Difference:", symmetric_diff)

# Subset check
is_subset = set1 <= set2
print("Is set1 subset of set2:", is_subset)

# Superset check
is_superset = set1 >= set2
print("Is set1 superset of set2:", is_superset)`
    },
    {
        id: 27,
        text: "Write a Python program to create a set, add member(s) in a set and remove one item from set",
        code: `# Create a set
my_set = {1, 2, 3}
print("Original set:", my_set)

# Add single element
my_set.add(4)
print("After adding 4:", my_set)

# Add multiple elements
my_set.update([5, 6, 7])
print("After adding multiple elements:", my_set)

# Remove an element
my_set.remove(7)
print("After removing 7:", my_set)

# Remove an element safely (no error if not present)
my_set.discard(8)
print("After discarding 8:", my_set)`
    },
    {
        id: 28,
        text: "Write a Python program to find maximum and the minimum value in a set",
        code: `def find_min_max_in_set(my_set):
    if not my_set:
        return None, None
    return min(my_set), max(my_set)

# Example usage
numbers = {5, 2, 8, 1, 9, 3, 7, 4, 6}
min_val, max_val = find_min_max_in_set(numbers)
print("Set:", numbers)
print("Minimum value:", min_val)
print("Maximum value:", max_val)`
    },
    {
        id: 29,
        text: "Write a Python program to find the length of a set",
        code: `def get_set_length(my_set):
    return len(my_set)

# Example usage
my_set = {1, 2, 3, 4, 5, 6, 7, 8, 9}
length = get_set_length(my_set)
print("Set:", my_set)
print("Length of set:", length)`
    },
    {
        id: 30,
        text: "Write a Python program to perform following operations on set: intersection of sets, union of sets, set difference, symmetric difference, clear a set",
        code: `# Create two sets
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Intersection
intersection = set1.intersection(set2)
print("Intersection:", intersection)

# Union
union = set1.union(set2)
print("Union:", union)

# Difference
difference = set1.difference(set2)
print("Difference (set1 - set2):", difference)

# Symmetric Difference
symmetric_diff = set1.symmetric_difference(set2)
print("Symmetric Difference:", symmetric_diff)

# Clear a set
set1.clear()
print("After clearing set1:", set1)`
    },
    {
        id: 31,
        text: "Write a Python script to sort (ascending and descending) a dictionary by value",
        code: `def sort_dict_by_value(dictionary, reverse=False):
    return dict(sorted(dictionary.items(), key=lambda x: x[1], reverse=reverse))

# Example usage
my_dict = {'a': 5, 'b': 2, 'c': 8, 'd': 1, 'e': 9}

# Sort ascending
ascending = sort_dict_by_value(my_dict)
print("Ascending order:", ascending)

# Sort descending
descending = sort_dict_by_value(my_dict, reverse=True)
print("Descending order:", descending)`
    },
    {
        id: 32,
        text: "Write a Python script to concatenate following dictionaries to create a new one",
        code: `# Sample dictionaries
dic1 = {1: 10, 2: 20}
dic2 = {3: 30, 4: 40}
dic3 = {5: 50, 6: 60}

# Method 1: Using update()
result = {}
result.update(dic1)
result.update(dic2)
result.update(dic3)
print("Concatenated dictionary (Method 1):", result)

# Method 2: Using dictionary unpacking
result = {**dic1, **dic2, **dic3}
print("Concatenated dictionary (Method 2):", result)`
    },
    {
        id: 33,
        text: "Write a Python program to perform following operations on set: intersection of sets, union of sets, set difference, symmetric difference, clear a set",
        code: `# Create two sets
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Intersection
intersection = set1.intersection(set2)
print("Intersection:", intersection)

# Union
union = set1.union(set2)
print("Union:", union)

# Difference
difference = set1.difference(set2)
print("Difference (set1 - set2):", difference)

# Symmetric Difference
symmetric_diff = set1.symmetric_difference(set2)
print("Symmetric Difference:", symmetric_diff)

# Clear a set
set1.clear()
print("After clearing set1:", set1)`
    },
    {
        id: 34,
        text: "Write a Python program to combine two dictionary adding values for common keys",
        code: `def combine_dicts(d1, d2):
    result = d1.copy()
    for key, value in d2.items():
        if key in result:
            result[key] += value
        else:
            result[key] = value
    return result

# Example usage
d1 = {'a': 100, 'b': 200, 'c': 300}
d2 = {'a': 300, 'b': 200, 'd': 400}
combined = combine_dicts(d1, d2)
print("Combined dictionary:", combined)`
    },
    {
        id: 35,
        text: "Write a Python program to find the highest 3 values in a dictionary",
        code: `def find_highest_values(dictionary, n=3):
    sorted_items = sorted(dictionary.items(), key=lambda x: x[1], reverse=True)
    return dict(sorted_items[:n])

# Example usage
my_dict = {'a': 100, 'b': 200, 'c': 300, 'd': 400, 'e': 500}
highest_three = find_highest_values(my_dict)
print("Highest 3 values:", highest_three)`
    },
    {
        id: 36,
        text: "Write a Python function that takes a number as a parameter and check the number is prime or not",
        code: `def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Example usage
number = int(input("Enter a number: "))
if is_prime(number):
    print(f"{number} is a prime number")
else:
    print(f"{number} is not a prime number")`
    },
    {
        id: 37,
        text: "Write a Python function to calculate the factorial of a number (a non-negative integer). The function accepts the number as an argument",
        code: `def factorial(n):
    if n < 0:
        return "Factorial is not defined for negative numbers"
    elif n == 0 or n == 1:
        return 1
    else:
        result = 1
        for i in range(2, n + 1):
            result *= i
        return result

# Example usage
number = int(input("Enter a non-negative integer: "))
result = factorial(number)
print(f"Factorial of {number} is {result}")`
    },
    {
        id: 38,
        text: "Write a Python function that accepts a string and calculate the number of upper case letters and lower case letters",
        code: `def count_case_letters(string):
    upper_count = 0
    lower_count = 0
    
    for char in string:
        if char.isupper():
            upper_count += 1
        elif char.islower():
            lower_count += 1
    
    return upper_count, lower_count

# Example usage
text = input("Enter a string: ")
upper, lower = count_case_letters(text)
print(f"Number of uppercase letters: {upper}")
print(f"Number of lowercase letters: {lower}")`
    },
    {
        id: 39,
        text: "Write a program on Function Argument in Python",
        code: `# Positional arguments
def greet(name, message):
    print(f"{message}, {name}!")

# Default arguments
def greet_default(name, message="Hello"):
    print(f"{message}, {name}!")

# Variable-length arguments
def sum_numbers(*args):
    return sum(args)

# Keyword arguments
def print_info(name, age, city):
    print(f"Name: {name}")
    print(f"Age: {age}")
    print(f"City: {city}")

# Example usage
# Positional arguments
greet("Alice", "Hi")

# Default arguments
greet_default("Bob")
greet_default("Charlie", "Good morning")

# Variable-length arguments
result = sum_numbers(1, 2, 3, 4, 5)
print("Sum:", result)

# Keyword arguments
print_info(name="David", age=25, city="New York")`
    },
    {
        id: 40,
        text: "Write a program on keyword argument",
        code: `def create_profile(name, age, city, country="USA", occupation="Student"):
    print(f"Name: {name}")
    print(f"Age: {age}")
    print(f"City: {city}")
    print(f"Country: {country}")
    print(f"Occupation: {occupation}")

# Example usage
# Using positional arguments
create_profile("Alice", 25, "New York")

# Using keyword arguments
create_profile(name="Bob", age=30, city="London", country="UK")

# Mixing positional and keyword arguments
create_profile("Charlie", 35, city="Paris", occupation="Engineer")`
    },
    {
        id: 41,
        text: "Write a Python program to create a user defined module that will ask your college name and will display the name of the college",
        code: `# college_module.py
def get_college_name():
    college_name = input("Enter your college name: ")
    return college_name

def display_college_name():
    name = get_college_name()
    print(f"Your college name is: {name}")

# main.py
from college_module import display_college_name

display_college_name()`
    },
    {
        id: 42,
        text: "Write a Python program to define a module to find Fibonacci Numbers and import the module to another program",
        code: `# fibonacci_module.py
def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    series = [0, 1]
    for i in range(2, n):
        series.append(series[i-1] + series[i-2])
    return series

# main.py
from fibonacci_module import fibonacci

terms = int(input("Enter number of terms: "))
fib_series = fibonacci(terms)
print("Fibonacci series:", fib_series)`
    },
    {
        id: 43,
        text: "Write a Python program to display calendar of given month using Calendar module",
        code: `import calendar

def display_calendar(year, month):
    print(calendar.month(year, month))

# Example usage
year = int(input("Enter year: "))
month = int(input("Enter month (1-12): "))
display_calendar(year, month)`
    },
    {
        id: 44,
        text: "Write a python program to calculate area of circle using inbuilt Math module",
        code: `import math

def calculate_circle_area(radius):
    return math.pi * radius ** 2

# Example usage
radius = float(input("Enter the radius of the circle: "))
area = calculate_circle_area(radius)
print(f"Area of the circle: {area:.2f}")`
    },
    {
        id: 45,
        text: "Create your own package in Python",
        code: `# mypackage/__init__.py
def greet():
    print("Hello from mypackage!")

# mypackage/utils.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

# main.py
from mypackage import greet
from mypackage.utils import add, subtract

greet()
print("5 + 3 =", add(5, 3))
print("5 - 3 =", subtract(5, 3))`
    },
    {
        id: 46,
        text: "Write a program on constructor overloading in Python",
        code: `class Student:
    def __init__(self, name=None, age=None, roll_no=None):
        self.name = name
        self.age = age
        self.roll_no = roll_no
        
    def display(self):
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")
        print(f"Roll No: {self.roll_no}")

# Creating objects with different parameters
s1 = Student()  # No parameters
s2 = Student("John")  # One parameter
s3 = Student("Alice", 20)  # Two parameters
s4 = Student("Bob", 21, 101)  # Three parameters

s1.display()
s2.display()
s3.display()
s4.display()`
    },
    {
        id: 47,
        text: "Write a python program to implement constructor",
        code: `class Person:
    def __init__(self):
        print("Constructor called")
        self.name = "Default Name"
        self.age = 0
        
    def display(self):
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")

# Creating object
p = Person()
p.display()`
    },
    {
        id: 48,
        text: "Write a python program to implement parameterized constructor",
        code: `class Student:
    def __init__(self, name, age, roll_no):
        self.name = name
        self.age = age
        self.roll_no = roll_no
        
    def display(self):
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")
        print(f"Roll No: {self.roll_no}")

# Creating object with parameters
s = Student("John", 20, 101)
s.display()`
    },
    {
        id: 49,
        text: "Write a python program to implement constructor overriding",
        code: `class Parent:
    def __init__(self):
        print("Parent constructor")
        self.parent_attr = "Parent attribute"
        
class Child(Parent):
    def __init__(self):
        print("Child constructor")
        super().__init__()
        self.child_attr = "Child attribute"
        
    def display(self):
        print(self.parent_attr)
        print(self.child_attr)

# Creating object
c = Child()
c.display()`
    },
    {
        id: 50,
        text: "Write a Python program to create a class to print the area of a square and a rectangle",
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
        id: 51,
        text: "Write a Python program to create a class 'Degree' having a method 'getDegree' that prints 'I got a degree'",
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
        id: 52,
        text: "Write Python program to read and print students information using single inheritance",
        code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def display(self):
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")

class Student(Person):
    def __init__(self, name, age, roll_no, marks):
        super().__init__(name, age)
        self.roll_no = roll_no
        self.marks = marks
        
    def display(self):
        super().display()
        print(f"Roll No: {self.roll_no}")
        print(f"Marks: {self.marks}")

# Creating object
s = Student("John", 20, 101, 85)
s.display()`
    },
    {
        id: 53,
        text: "Write a Python program to implement multiple inheritance",
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
        id: 54,
        text: "Write a Python program to implement multilevel inheritance",
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
        id: 55,
        text: "Write a Python program to create series from array using Panda",
        code: `import pandas as pd
import numpy as np

# Creating array
arr = np.array([10, 20, 30, 40, 50])

# Creating series from array
series = pd.Series(arr)

print("Array:", arr)
print("Series:", series)`
    },
    {
        id: 56,
        text: "Write a Python program to create series from list using Panda",
        code: `import pandas as pd

# Creating list
my_list = [10, 20, 30, 40, 50]

# Creating series from list
series = pd.Series(my_list)

print("List:", my_list)
print("Series:", series)`
    },
    {
        id: 57,
        text: "Write a Python program to access element of series using Panda",
        code: `import pandas as pd

# Creating series
series = pd.Series([10, 20, 30, 40, 50], index=['a', 'b', 'c', 'd', 'e'])

# Accessing elements
print("Series:", series)
print("First element:", series[0])
print("Element at index 'c':", series['c'])
print("Last element:", series[-1])
print("Slice from index 1 to 3:", series[1:4])`
    },
    {
        id: 58,
        text: "Write a Python program to create DataFrame using list or dictionary using Panda",
        code: `import pandas as pd

# Creating DataFrame from list of lists
data_list = [
    ['John', 25, 'New York'],
    ['Alice', 30, 'London'],
    ['Bob', 35, 'Paris']
]
df1 = pd.DataFrame(data_list, columns=['Name', 'Age', 'City'])
print("DataFrame from list:")
print(df1)

# Creating DataFrame from dictionary
data_dict = {
    'Name': ['John', 'Alice', 'Bob'],
    'Age': [25, 30, 35],
    'City': ['New York', 'London', 'Paris']
}
df2 = pd.DataFrame(data_dict)
print("\nDataFrame from dictionary:")
print(df2)`
    },
    {
        id: 59,
        text: "Write GUI program to import Tkinter package and create a window and set its title",
        code: `import tkinter as tk

# Create the main window
root = tk.Tk()

# Set window title
root.title("My First GUI Program")

# Set window size
root.geometry("400x300")

# Add a label
label = tk.Label(root, text="Welcome to my GUI program!")
label.pack(pady=20)

# Start the main loop
root.mainloop()`
    }
];

// Function to copy code to clipboard
async function copyCode(code, button) {
    try {
        await navigator.clipboard.writeText(code);
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy code: ', err);
    }
}

// Function to create question elements
function createQuestionElements() {
    const container = document.querySelector('.questions-container');
    questions.forEach(question => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        
        const questionText = document.createElement('p');
        questionText.textContent = `${question.id}. ${question.text}`;
        
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.onclick = () => copyCode(question.code, copyButton);
        
        questionDiv.appendChild(questionText);
        questionDiv.appendChild(copyButton);
        
        container.appendChild(questionDiv);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', createQuestionElements);