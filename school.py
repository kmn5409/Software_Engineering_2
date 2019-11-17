import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

def check_all_parents_have_children(users, children):
    child_ids = [children[x]['childID'] for x in range(len(children))]
    for user in users:
        if user['role'] == 'parent':
            for child in user['children']:
                if child not in child_ids:
                    return False
    return True


def check_all_users_have_role(users, children):
    for user in users:
        user_has_role = ('role' in user.keys() and user['role'] != '')
        if(not user_has_role):
            return False
    return True

def check_all_children_have_parents(users, children):
    for child in children:
        has_users = ('userID' in child.keys() and child['userID'] != '')
        if (has_users):
            for id_ in child['userID']:
                for user in users:
                    if(user['userID'] == id_ and user['role'] == 'parent'):
                        return True
    return False


def check_all_children_have_teachers(users, children):
    for child in children:
        has_users = ('userID' in child.keys() and child['userID'] != '')
        if (has_users):
            for id_ in child['userID']:
                for user in users:
                    if(user['userID'] == id_ and user['role'] == 'teacher'):
                        return True
    return False


