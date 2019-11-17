def check_all_children_have_parents(users, children):
    for child in children:
        child = child.to_dict()
        has_users = ('userID' in child.keys() and child['userID'] != '')
        return True
        if (has_users):
            for id_ in child['userID']:
                for user in users:
                    user = user.to_dict()
                    if(user['userID'] == id_ and user['role'] == 'parent'):
                        print(id_)
                        return True
    return False

def check_all_children_have_teachers(users, children):
    for child in children:
        child = child.to_dict()
        has_users = ('userID' in child.keys() and child['userID'] != '')
        return True
        if (has_users):
            for id_ in child['userID']:
                for user in users:
                    user = user.to_dict()
                    if(user['userID'] == id_ and user['role'] == 'teacher'):
                        print(id_)
                        return True
    return False
def check_all_users_have_role(users, children):
    for user in users:
        user = user.to_dict()
        user_has_role = ('role' in user.keys() and user['role'] != '')
        if(not user_has_role):
            return False
    return True


