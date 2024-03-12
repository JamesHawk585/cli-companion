from flask import request, session
from flask_restful import Resource
from flask_marshmallow import Marshmallow, fields
from flask import make_response, jsonify, request, session, Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from marshmallow import fields
import ipdb

# migrate = Migrate(app, db)

from config import (
    app,
    db,
    api,
    ma,
)  # This line will run the config.py file and initialize our app
from models import User, Snippet, Tag


class UserSchema(ma.SQLAlchemySchema):
    id = fields.Int(dump_only=True)

    class Meta:
        model = User

    username = ma.auto_field()
    email = ma.auto_field()
    first_name = ma.auto_field()
    last_name = ma.auto_field()

    url = ma.Hyperlinks(
        {
            "self": ma.URLFor(
                "user_by_id", 
                values=dict(id="<id>")),
            "collection": ma.URLFor("users"),
        }
    )



user_schema = UserSchema()
users_schema = UserSchema(many=True)


class SnippetSchema(ma.SQLAlchemySchema):
    id = fields.Int(dump_only=True)

    class Meta:
        model = Snippet

    title = ma.auto_field()
    tags = ma.auto_field()
    language_select = ma.auto_field()
    code = ma.auto_field()
    explanation = ma.auto_field()

    url = ma.Hyperlinks(
        {
            "self": ma.URLFor("user_by_id", values=dict(id="<id>")),
            "collection": ma.URLFor("users"),
        }
    )


snippet_schema = SnippetSchema()
snippets_schema = SnippetSchema(many=True)


class TagSchema(ma.SQLAlchemySchema):
    id = fields.Int(dump_only=True)

    class Meta:
        model = Tag

    tag = ma.auto_field()

    url = ma.Hyperlinks(
        {
            "self": ma.URLFor("user_by_id", values=dict(id="<id>")),
            "collection": ma.URLFor("users"),
        }
    )


# Routes here 

if __name__ == "__main__":
    app.run(port=4000, debug=True)
