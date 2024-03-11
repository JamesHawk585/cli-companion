from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

from config import db, bcrypt


snippets_tags_join_table = db.Table('snippet_to_tag',
                                    db.Column("snippet_id", db.Integer, db.ForeignKey("snippet.snippet_id")),
                                    db.Column("user_id", db.Integer, db.ForeignKey("user.user_id"))
                                    )
# 1. [x] db relationships 
    # - [x] Ref: "snippets"."tags" <> "tags"."tag"
    # - [x] Ref: "users"."user_id" < "snippets"."snippet_id"

# 2. [x] Add contraints
# 3. [] Add valdiations 
# 4. [x] IAM for user model 

class User(db.Model):
    __tablename__ = 'user'
    user_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.string(100), nullable=False)
    last_name = db.Column(db.string(100), nullable=False)
    username = db.Column(db.string, unique=True(100), nullable=False)
    _password_hash = db.Column(db.string)

    snippets = db.relationship("Snippet", backref='user')

    @validates('username')
    def validate_username(self, key, username):
        username_exists = db.sessionquery(User).filter(User.username == username).first()
        if not username:
            raise ValueError("username field is required")
        if username_exists:
            raise ValueError("username must be unique")
        elif key == 'username':
            if len(username) >= 100:
                raise ValueError("username must be 100 characters or less")
        return username

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


class Snippet(db.Model, SerializerMixin):
    __tablename__ = "snipets"

    snippet_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), unique=True)
    tags = db.Column(db.String)
    langauge_select = db.Column(db.String)
    code = db.Column(db.String)
    explanation = db.Column(db.String(1000))

    user_id = db.Column(db.Integer(), db.ForeignKey('user.user_id'))


class Tag(db.Model, SerializerMixin):
    __tablename__ = "tags"

    tag_id = db.Column(db.Integer, primary_key=True)
    tag = db.Column(db.String)

