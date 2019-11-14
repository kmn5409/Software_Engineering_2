import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

def teacher_student_access(teacher):
    print('Students')
    students_ref = db.collection(u'children')
    students = students_ref.stream()
    for student in teacher['students']:
        for child in students:
            child = child.to_dict()
            if(teacher['id'] == child['teacher']):
                print(child)

def check_teacher_has_student_access(teacher, student):
    print('Students')
    for child in teacher['students']:
        if(student['id'] == child):
            return True
    return False

cred = credentials.Certificate('se-project-4c4c4-7051f39dca6d.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

users_ref = db.collection(u'users')
users = users_ref.stream()
students = db.collection(u'children')
students = students.stream()

for user in users:
    user = user.to_dict()
    #if(user['role'] == 'teacher'):
    #    print('Teacher: ' + str(user['id']))
    #    teacher_student_access(user)
    if(user['id'] == 'vsiGyzuZF2RzGYdc93FTuhLVkH53'):
        for student in students:
            student = student.to_dict()
            if(student['id'] == 'jsjNOm7SikNnsCG1UHHB'):
                print(check_teacher_has_student_access(user, student))
    #for student in user['students']:
    #    print(student)
    print('\n\n')
