import os
import time
import json
import flask
import click
import sqlite3
import datetime

database_path = ".\\resource\\"

app = flask.Flask(__name__)
app.config["DATABASE"] = os.path.join(database_path, "database.db")

#################################################### DataBase ####################################################

def init_db():
    db = get_db()
    with flask.current_app.open_resource(os.path.join(database_path, "schema.sql")) as f:
        db.executescript(f.read().decode("utf-8"))

def get_db():
    if "db" not in flask.g:
        flask.g.db = sqlite3.connect(flask.current_app.config["DATABASE"], detect_types = sqlite3.PARSE_DECLTYPES)
        flask.g.db.row_factory = sqlite3.Row
    return flask.g.db

def close_db():
    db = flask.g.pop("db", None)
    if db is not None:
        db.close()

@app.cli.command("init-db")
def init_db_command():
    init_db()
    click.echo("Initialized the Database")

def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)

#################################################### Utils ####################################################

def get_history():
    my_db = get_db()
    cur = my_db.execute("SELECT * FROM ANALYSIS_HISTORY")
    results = [(dict((cur.description[i][0], value) for i, value in enumerate(row))) for row in cur.fetchall()]
    history_index = [result["id"] for result in results]
    history_summary = [json.dumps({
                        "DB Insert Time": result["db_insert_time"],
                        "Process ID": result["process_id"], 
                        "Current Step": result["current_step"], 
                        "Duration Start": result["duration_start"], 
                        "Duration End": result["duration_end"]}) for result in results]
    return history_index, history_summary

def get_history_info(query_index):
    if "spanned" in query_index:
        action = "simplify"
    else:
        action = "span"
    print(action)
    query_index = query_index.split("_")[-1]
    my_db = get_db()
    cur = my_db.execute("SELECT * FROM ANALYSIS_HISTORY")
    results = [(dict((cur.description[i][0], value) for i, value in enumerate(row))) for row in cur.fetchall()]
    for result in results:
        if result["id"] == int(query_index):
            if action == "span":
                return json.dumps({
                        "DB Insert Time": result["db_insert_time"],
                        "Line ID": result["line_id"], 
                        "Process ID": result["process_id"], 
                        "Current Step": result["current_step"], 
                        "Start Step": result["start_step"], 
                        "Duration Start": result["duration_start"], 
                        "Duration End": result["duration_end"],
                        "CPO": result["cpo"], 
                        "Area": result["area"], 
                        "Distance": result["distance"], 
                        "Mark Type": result["mark_type"], 
                        })
            else:
                print("here")
                return json.dumps({
                        "DB Insert Time": result["db_insert_time"],
                        "Process ID": result["process_id"], 
                        "Current Step": result["current_step"], 
                        "Duration Start": result["duration_start"], 
                        "Duration End": result["duration_end"]})
    return None

def insert_data(db_insert_time, request):
    columns = [
        "line_id",
        "process_id",
        "current_step",
        "start_step",
        "duration_start",
        "duration_end",
        "cpo",
        "area",
        "distance",
        "mark_type",
        "db_insert_time",
    ]
    my_db = get_db()

    line_id = request.form["LineID"]
    process_id = request.form["ProcessID"]
    current_step = request.form["CurrentStep"]
    start_step = request.form["StartStep"]
    duration_start = request.form["DurationStart"]
    duration_end = request.form["DurationEnd"]
    distance = request.form["Distance"]
    mark_type = request.form["MarkType"]

    if "CPO" not in request.form.keys():
        cpo = ["G_X_1", "G_Y_1", "R_X_1", "R_Y_1", "NIR_X_1", "NIR_Y_1", "FIR_X_1", "FIR_Y_1"]
    else:
        cpo = request.form["CPO"]
    cpo = json.dumps(cpo)
    
    if "Area" not in request.form.keys():
        area = ["PHOTO", "ETCH", "CMP"]
    else:
        area = request.form["Area"]
    area = json.dumps(area)

    my_db.execute("INSERT INTO ANALYSIS_HISTORY ({}) VALUES ({})".format(','.join(columns), ','.join(['?' for _ in range(len(columns))])),
        (
            line_id,
            process_id,
            current_step,
            start_step,
            duration_start,
            duration_end,
            cpo,
            area,
            distance,
            mark_type,
            db_insert_time
        )
    )

    my_db.commit()

#################################################### Rendering ####################################################

@app.route('/')
@app.route('/home', methods = ['GET', 'POST'])
def home():
    return flask.render_template('home.html')

@app.route('/analysis_multiple', methods = ['GET', 'POST'])
def analysis_multiple():
    if flask.request.method == "POST":
        print(flask.request.form)
        if flask.request.form["type"] == "run":
            db_insert_time = datetime.datetime.now()
            db_insert_time = db_insert_time.strftime("%Y-%m-%d %H:%M:%S")
            insert_data(db_insert_time, flask.request)
            #TODO Calculate
        
        elif flask.request.form["type"] == "reset":
            print("Reset Function Not Implemented")

        elif flask.request.form["type"] == "info":
            info_index = flask.request.form["info_index"]
            if info_index:
                db_index = info_index.split("_")[-1]
                content_index = info_index.replace("spanned_", "")
                content_index = content_index.replace("info", "content")
                content_data = get_history_info(info_index)
                return flask.jsonify(
                    db_index = db_index, 
                    info_index = info_index,
                    content_index = content_index,
                    content_data = content_data)

        return flask.redirect(flask.url_for("analysis_multiple"))

    history_index, history_summary = get_history()
    return flask.render_template('analysis_multiple.html', 
        history_index = history_index, 
        history_summary = history_summary, 
        zip = zip), 200
    
if __name__ == "__main__":

    app.run(debug = False)
