from flask import Flask, request, jsonify
from flask_cors import CORS
from proration import calculate_proration

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

@app.route('/prorate', methods=['POST'])
def prorate():
    data = request.get_json()
    allocation_amount = data['allocation_amount']
    investor_amounts = data['investor_amounts']
    
    result = calculate_proration(allocation_amount, investor_amounts)
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
