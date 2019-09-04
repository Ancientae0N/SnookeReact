import datetime
from flask import Flask
from flask import jsonify
from flask import request
from pymongo import MongoClient
from flask_cors import CORS
client = MongoClient('mongodb://localhost:27017/')
db = client['snooker_analysis'] #creates the database
def getToday():
	today = datetime.datetime.now()
	return(today.strftime("%A"))
#snooker_report = {'Monday':[], 'Tuesday': [], 'Wednesday': [], 'Thursday': [], 'Friday': [], 'Saturday': [], 'Sunday': [], 'name':'Vishal'}
snooker_reports = db.snooker_reports #this creates the schema or collection
#result = snooker_reports.insert_one(snooker_report)

#print(db.collection_names())
#first.save()
#print(first.analysis)
print(snooker_reports.find_one())
app = Flask(__name__)
CORS(app)
@app.route("/")
def home():
    return "Hello, Flask!"
@app.route("/enterstats", methods = ['POST'])
def enterstats():
    data = request.get_json()
    print(data)
    #get the answer in json and then update
    query = {"name": "Vishal"}
    new_data = {"$push": {''+ getToday(): data['stats'] }}
    snooker_reports.update(query, new_data)
    return("Succesfully updated your stats for today!")
    