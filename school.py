def check_all_children_have_teachers(children):
    for child in children:
        child = child.to_dict()
        child_has_teacher = ('userID' in child.keys() and child['userID'] != '')
        if (not child_has_teacher):
            return False
    return True 




