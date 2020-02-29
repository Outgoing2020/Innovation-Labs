from flask import render_template
import connexion

app = connexion.App(__name__, specification_dir='./openapi/')

app.add_api('conf.yml')

if __name__ == '__main__':
    app.run(port=5000, debug=True)
