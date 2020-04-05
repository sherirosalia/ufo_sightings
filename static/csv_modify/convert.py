#!/usr/bin/python
import csv , json

csvFilePath = "ufo.csv"
jsonFilePath = "data.json"
data = []
#read the csv and add the arr to a arrayn

with open (csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    print(csvReader)
    for csvRow in csvReader:
        data.append(csvRow)

print(data[2])

# write the data to a json file
with open(jsonFilePath, "w") as jsonFile:
    jsonFile.write(json.dumps(data, indent = 4))


# import csv, json

# input_csv = 'ufo.csv'
# json_output = 'ufo.json'

# data = {}

# with open(input_csv) as file:
#     read_file = csv.DictReader(file)
#     for rows in read_file:
#         data = rows
#     print(data[9])


