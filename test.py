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

class Test(unittest.TestCase):


  def test_all_children_have_teacher(self):

    global users
    global children
    self.assertEqual(school.check_all_children_have_teachers(users, children), True)

  def test_all_children_have_parent(self):

    global users
    global children
    self.assertEqual(school.check_all_children_have_parents(users, children), True)

  def test_all_users_have_role(self):
    self.assertEqual(school.check_all_users_have_role(users, children), True)
    
if __name__ == '__main__':
  unittest.main()
