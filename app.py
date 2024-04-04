from flask import Flask, render_template

app = Flask(__name__)

CLICKS = 0


@app.route("/")
def hello_world():
    return render_template("index.html")


@app.route("/favicon.ico")
def favicon():
    return app.send_static_file("favicon.ico")


@app.route("/api/clicks", methods=["GET"])
def get_clicks():
    global CLICKS
    return {"clicks": CLICKS}


@app.route("/api/clicks", methods=["POST"])
def add_click():
    global CLICKS
    CLICKS += 1
    return {"clicks": CLICKS}
