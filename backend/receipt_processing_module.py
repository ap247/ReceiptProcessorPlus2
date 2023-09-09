import math
from datetime import datetime

def process_receipt(receipt_data):
    # Perform data processing logic here
    points = 0
    retailer_name = receipt_data["retailer"]
    for char in retailer_name:
        if char.isalnum():
            points += 1

    totalNum = float(receipt_data["total"])
    
    if totalNum % 1 == 0:
        points += 50
    
    if totalNum % .25 == 0:
        points += 25

    size = len(receipt_data["items"])

    points += int(size / 2) * 5

    for item in receipt_data["items"]:
        if len(item["shortDescription"].strip()) % 3 == 0:
            points += math.ceil(float(item["price"]) * .2)

    if datetime.strptime(receipt_data["purchaseDate"], "%Y-%m-%d").day % 2 == 1:
        points += 6
    
    hour = int(receipt_data["purchaseTime"].split(":")[0])
    min = int(receipt_data["purchaseTime"].split(":")[1])

    if(hour == 14 and min != 0) or hour == 15:
        points += 10

    return points