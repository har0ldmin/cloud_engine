import pandas as pd
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import certifi

uri = "mongodb+srv://root:cloudengine16@cloudengine.k6tdg6g.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'), tlsCAFile=certifi.where())

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


db = client["test"]  # replace with your database name
collection = db["services"]  # replace with your collection name

# read data from CSV file into pandas DataFrame
data = pd.read_csv('data.csv')  # replace 'file.csv' with your csv file path

# convert DataFrame into list of dictionaries for insertion into MongoDB 
data_dict = data.to_dict("records")

# insert records into MongoDB (this will insert each row in the CSV as a separate document in MongoDB)
collection.insert_many(data_dict)
