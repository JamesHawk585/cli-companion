from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt


class user(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.string)
    last_name = db.Column(db.string)
    username = db.Column(db.string, unique=True)
    _password_hash = db.Column(db.string)


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

