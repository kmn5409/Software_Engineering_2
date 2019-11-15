import unittest
import calculator

class Test(unittest.TestCase):
  def test_add(self):
    self.assertEqual(calcultor.add(2, 3), 5)
    
if __name__ == '__main__':
  unittest.main()
