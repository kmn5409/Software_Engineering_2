def check_all_children_have_teachers(users, children):
    for child in children:
        child = child.to_dict()
        child_has_teacher = ('userID' in child.keys() and child['userID'] != '')
        if (not child_has_teacher):
            return False
    return True 

def check_all_users_have_role(users, children):
    for user in users:
        user = user.to_dict()
        user_has_role = ('role' in user.keys() and user['role'] != '')
        if(not user_has_role):
            return False
    return True


