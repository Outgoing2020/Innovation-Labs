from PIL import Image

class Event:
    def __init__(self, title, location, image, portrait):
        self.title = title
        self.location = location
        self.image = image
        self.portrait = portrait


EVENT = {
        # EXAMPLE
        #  'event 1': Event('some event', 'Bucharest', Image.open('path1'), Image.open('portrait')),
        'event 1': 'some event',
        'event 2': 'some other event',
        'event 3': 'yet another event'
        }

# GET api endpoint for events
def read():
    return EVENT

