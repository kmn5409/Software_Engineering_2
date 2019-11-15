import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

def check_all_children_have_teachers(children):
    for child in children:
        child = child.to_dict()
        child_has_teacher = ('teacher' in child.keys() and child['teacher'] != '')
        if (not child_has_teacher):
            return False
    return True 

def add(x, y):
    cred = credentials.Certificate('se-project-4c4c4-7051f39dca6d.json')
    firebase_admin.initialize_app(cred)

    db = firestore.client()

    users_ref = db.collection(u'users')
    users = users_ref.stream()
    students = db.collection(u'children')
    students = students.stream()

    return check_all_children_have_teachers(students)


