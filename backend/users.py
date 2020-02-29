class User:

    def __init__(self, first_name, last_name, username):#, profile_picture):
        self.first_name = first_name
        self.last_name = last_name
        self.username = username

    def as_dict(self):
        return {'first_name': self.first_name, 'last_name': self.last_name, 'username': self.username}


USERS = {
        #example
        'user1': User('first name', 'last name', '@username').as_dict(),
        }

def read():
    return USERS
