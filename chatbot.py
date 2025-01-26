from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json['message']
    # Logika untuk memproses input pengguna dan memberikan respons
    response = process_input(user_input)
    return jsonify({'response': response})

def process_input(user_input):
    # Contoh logika sederhana untuk respons
    if "help" in user_input.lower():
        return "How can I assist you today?"
    return "I'm sorry, I didn't understand that."

if __name__ == '__main__':
    app.run(debug=True)