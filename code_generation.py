# Python code with dummy sql queries (unable to verify until database is impliemented) and random code generation to fill out the lecture codes in the database


import random
import sqlite3

# db = sqlite3.connect("lectures.db")
# db.row_factory = sqlite3.Row
# start_query = "SELECT COUNT(lecture_id) FROM lectures;"
# cursor = db.execute(start_query)
# total_lectures = cursor.fetchone()
query_result = 100
codes = []
def generate_lecture_code():
    code = ""
    chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    valid = False
    while not valid:
        code = ""
        for i in range(6):
            code += random.choice(chars)
        if code not in codes:
            valid = True
    codes.append(code)
    return code

for i in range(query_result): # total_lectures):
    code = generate_lecture_code()
    # end_query = "UPDATE lectures SET lecture_code = ? WHERE lecture_id = ?;"
    # cursor = db.execute(end_query, (code, i+1))

# Prints codes to console for debugging purposes
print(codes)