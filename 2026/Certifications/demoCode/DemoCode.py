# Function to reverse a string
def reverse_string(s):
    return s[::-1]
# No additional code needed here
# Example usage
print(reverse_string("Hello, World!"))  # Output: !dlroW ,olleH


# Function to find the max, min, and avg in a class room

def class_stats(grades):
    if not grades:
        return None, None, None
    maximum = max(grades)
    minimum = min(grades)
    average = sum(grades) / len(grades)
    return maximum, minimum, average
   