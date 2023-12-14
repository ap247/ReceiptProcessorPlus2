from flask import Flask, current_app, jsonify, request
from flask_cors import CORS
import uuid
import receipt_processing_module


app = Flask(__name__)
CORS(app)

# Store the dictionary in the application context
with app.app_context():
    current_app.receiptPoints = {}


@app.route('/receipts/<id>/points', methods=['GET'])
def get_receipt(id):
    point_data = {}
    if id in current_app.receiptPoints:
        pointsNum = current_app.receiptPoints[id]
        point_data = {
            'points' : pointsNum
        }
    else:
        point_data = {
            'error' : 'Receipt not found for id: ' + id
        }
    return jsonify(point_data)

@app.route('/receipts/process', methods=['POST'])
def process_receipt():
    receipt_data = request.json
    new_id = str(uuid.uuid4())
    current_app.receiptPoints[new_id] = receipt_processing_module.process_receipt(receipt_data)
    id_data = {
        'id':new_id
    }
    print(id_data)
    return id_data


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)