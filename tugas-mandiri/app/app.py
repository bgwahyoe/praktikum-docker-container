from flask import Flask
import redis

app = Flask(__name__)

r = redis.Redis(host='redis', port=6379)

@app.route('/')
def home():
    count = r.incr('counter')
    return f"Jumlah kunjungan: {count}"

# 🔥 TAMBAHAN RESET
@app.route('/reset')
def reset():
    r.set('counter', 0)
    return "Counter direset ke 0"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
