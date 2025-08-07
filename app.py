from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')
    return render_static('style.css')

@app.route('/generate-plan', methods=['POST'])
def generate_plan():
    data = request.json
    
    # In a real application, you would:
    # 1. Process the data
    # 2. Call an AI API or use your own logic to generate the plan
    # 3. Return the generated plan
    
    # For this example, we'll return a simple response
    response = {
        "status": "success",
        "message": "Travel plan generated successfully",
        "plan": {
            "destination": data['destination'],
            "duration": data['tripDuration'],
            "budget": data['budget'],
            # Add more fields as needed
        }
    }
    
    return jsonify(response)

@app.route('/submit-feedback', methods=['POST'])
def submit_feedback():
    data = request.json
    # Process feedback data (store in database, etc.)
    return jsonify({"status": "success", "message": "Feedback received"})

if __name__ == '__main__':
    app.run(debug=True)  