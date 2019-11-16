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
students = db.collection(u'children')
students = students.stream()

class Test(unittest.TestCase):


  def test_all_children_have_teacher(self):

    global users
    global students
    self.assertEqual(school.check_all_children_have_teachers(students), True)

  def test_all_users_have_role(self):

    self.assertEqual(school.check_all_users_have_role(users), True)
    
if __name__ == '__main__':
  unittest.main()
