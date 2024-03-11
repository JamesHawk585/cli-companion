
# Client 

1. [x] SPA
2. [x] Main page will display our list of code snippets as cards. 
    a. [x] Each snippet will have:
        - [x] title
        - [x] tags
        - [x] a block of code
        - [x] description 
    b. [x] Each card will have edit and delete buttons.
    c. [] Each card will have appropriate css.  
3. [x] Main page will have a button to create a new snippet. 
    a. [x] When clicked, a modal popup will appear. 
    b. [x] It will have a form to create a new snippet. 
    c. [] Use the same modal popup when we edit a snippet, too. 
4. [] This main page will have a search bar. 
    a. Serch bar can search by: name, tag, desciprion, or code block.  


    ## Add Snippet:
    1. [x] Clear the modal form on submission. 


    ## Delete Snippet:
    1. [x] attached onClick event to delete button. onCick calls an anonymous function that in turn calls handleDeleteSnippet in App.jsx. 
    2. [x] Create handleDeleteSnippet in App.jsx
    3. [x] handleDeleteSnippet should:
        - [x] Delete the snippet from the db. 
        - [x] Remove the snippet from the 'snippets' stateful array. 
        - [x] Prompt the user with window.confirm before deletion. 


        ### Consider changing SnippetForm.jsx to addSnippetForm.jsx for clarity. 
        


    ## EditSnippetForm modal 
    1. [x] Create EditSnippetForm.jsx in EditSnippetForm directory. 
    2. [x] Import useRef in SnippetCard.jsx
    3. [x] declared const refName = useRef(null) in SnippetCard.jsx  
    4. [x] Pass the refName from SnippetCard.jsx to EditSnippetForm.jsx
    5. [x] Use <dialog ref={refName}> on <form></form> element jsx in EditSnippetForm.jsx
      Add a callback function to be called when the edit button is clicked. This function will display the modal: 
      const onEditButtonClick = () => {
        editRef.current.showModal();
    }

    __________________________________________________________________________________________________
    
    
    6. [x] Submit form. onSubmit={} triggers onSubmitEditForm()
    7. [x] OnSubmitEditForm handles the PATCH request
    8. [x] onSubmitEditForm passes the patched object up to onSnippetFormEdited() in Header.jsx.
    9. [x] onSubmitFOrmEdited() closes the modal and passes the patched object up to App.jsx.  
    
    
    onSnippetFormPatched() in EditSnippetForm.jsx 
        - Should onSnippetFormPatched() be in App.jsx, since it will have to update the snippets stateful array? 
        - PATCH request updated backend resource. 
        - Updates stateful array of objects to replace the snippetObj if snippetId == snippet.id. 
    7. [x] Create a close button for the editSnippet modal form. 
    8. [x] Ensure onSnippetFormPatched resets the form upon submission. 

    *** Edit Form should have all previous value in input fields 


# Server 
1. Create an empty repository with a README and clone to local environment 
2. Creating the Env
    - `cd` into the project folder and create two sub-directories:
    - server
    - client
- Create the virtual env with pipenv:
    - `pipenv --python 3.8.13`
- Install Flask app dependencies:
    - `pipenv install flask flask-sqlalchemy flask-migrate sqlalchemy-serializer flask-restful flask-cors ipdb flask-bcrypt faker`
- In the `server` directory, create the following files:
    - app.py
    - seed.py
    - models.py
    - config.py
- In the [config.py](http://config.py) file, we can configure the application and set things like the database URI,  CORS, the session secret_key, and bcrypt:
    
    ```python
    # config.py
    from flask import Flask
    from flask_bcrypt import Bcrypt
    from flask_migrate import Migrate
    from flask_restful import Api
    from flask_sqlalchemy import SQLAlchemy
    from flask_cors import CORS
    
    app = Flask(__name__)
    app.secret_key = 'YOUR_APP_SECRET_HERE' # In the terminal, run: python -c 'import os; print(os.urandom(16))'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.json.compact = False
    
    db = SQLAlchemy()
    
    migrate = Migrate(app, db)
    db.init_app(app)
    
    bcrypt = Bcrypt(app)
    
    CORS(app)
    
    api = Api(app)
    ```
    
    - Commit changes

4. # Creating the models

Here is a sample User model that will have a unique username and password. Add any other attributes that you will need as well as other models and model relationships. 

```python
# models.py
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True)
    _password_hash = db.Column(db.String)

    @hybrid_property **# Restrict access to the password hash.**
    def password_hash(self):
        raise Exception("Password hashes may not be viewed.")

    @password_hash.setter **# Generate a Bcrypt password hash and set it to the _password_hash attribute**
    def password_hash(self, password):
        bcrypt_hash = bcrypt.generate_password_hash(password).decode("utf-8")
        self._password_hash = bcrypt_hash

    def authenticate(self, password): **# Check if the provided password matches the one stored in the db**
        return bcrypt.check_password_hash(self._password_hash, password)

    def __repr__(self):
        return f"User {self.username}, ID: {self.id}"
```

    - Commit changes

5. # Creating the seeds

Phase 3 Seed file cheatsheet: https://furry-shrimp-4f0.notion.site/DB-Seeds-Cheat-Sheet-for-SQLAlchemy-Alembic-CLI-fee13f02dd68491bb338aac2e9d4f41a?pvs=4
from faker import Faker
from models import User
from config import db, app, bcrypt

faker = Faker()

with app.app_context():

    User.query.delete()

    for _ in range(20):
        username = faker.profile(fields=["username"])["username"]
        user = User(
            username=username
        )
        
        user.password_hash = username # We are calling the password_hash setter method here
        db.session.add(user)
        db.session.commit()

# 6. Initializing the Flask app

- Enter the virtual env `pipenv shell`
- `cd` into the `/server` directory and run:
    - `flask db init`
- Create migrations
    - `flask db revision --autogenerate -m 'Create tables'`
- Run migration:
    - `flask db upgrade`
- Seed db:
    - `python seed.py`
- Test your model relations and make any adjustments. Get the DB where you want it


# Deployment 