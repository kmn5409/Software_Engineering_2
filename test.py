import unittest
import school 
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('se-project-4c4c4-7051f39dca6d.json')
firebase_admin.initialize_app(cred)
db = firestore.client()
users_ref = db.collection(u'users')
users = users_ref.stream()
children = db.collection(u'children')
children = children.stream()
children_container = []
user_container = []
for child in children:
    children_container.append(child.to_dict())

for user in users:
    user_container.append(user.to_dict())
 
class Test(unittest.TestCase):

  def test_all_children_have_teacher(self):

    self.assertEqual(school.check_all_children_have_teachers(user_container, children_container), True)

  def test_all_children_have_parent(self):


    self.assertEqual(school.check_all_children_have_parents(user_container, children_container), True)

  def test_all_users_have_role(self):


    self.assertEqual(school.check_all_users_have_role(user_container, children_container), True)

  def test_check_all_parents_have_children(self):


    self.assertEqual(school.check_all_parents_have_children(user_container, children_container), True)

if __name__ == '__main__':
  unittest.main()
