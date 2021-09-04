import argparse
import json

import numpy as np
import requests
from keras.applications import inception_v3
from keras.preprocessing import image

ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", required=True,
                help="path of the image")
args = vars(ap.parse_args())

image_path = args['image']
img = image.img_to_array(image.load_img(image_path, target_size=(224, 224))) / 255.

img = img.astype('float16')

payload = {
    "instances": [{'input_image': img.tolist()}]
}

r = requests.post('http://localhost:9000/v1/models/ImageClassifier:predict', json=payload)
pred = json.loads(r.content.decode('utf-8'))

print(json.dumps(inception_v3.decode_predictions(np.array(pred['predictions']))[0]))
