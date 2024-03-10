from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt



# 1. [] db relationships 
# 2. [] Add contraints
# 3. [] Add valdiations 
# 4. [x] IAM for user model 

class user(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.string)
    last_name = db.Column(db.string)
    username = db.Column(db.string, unique=True)
    _password_hash = db.Column(db.string)

    @hybrid_property # Restrict access to the password hash.
    def password_hash(self):
        raise Exception("Password hashes may not be viewed.")

    @password_hash.setter # Generate a Bcrypt password hash and set it to the _password_hash attribute
    def password_hash(self, password):
        bcrypt_hash = bcrypt.generate_password_hash(password).decode("utf-8")
        self._password_hash = bcrypt_hash

    def authenticate(self, password): # Check if the provided password matches the one stored in the db
        return bcrypt.check_password_hash(self._password_hash, password)

    def __repr__(self):
        return f"User {self.username}, ID: {self.id}"


class snippet(db.Model, SerializerMixin):
    __tablename__ = "snipets"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, unique=True)
    tags = db.Column(db.String)
    langauge_select = db.Column(db.String)
    code = db.Column(db.String)
    explanation = db.Column(db.String)


class tag(db.Model, SerializerMixin):
    __tablename__ = "tags"

    id = db.Column(db.Integer, primary_key=True)
    tag = db.Column(db.String)

