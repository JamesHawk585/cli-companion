from models import User, Snippet, Tag
from flask import Flask
from config import db, app, bcrypt
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from faker import Faker
import json


fake = Faker()

print('Seeding db... 🌱')

with app.app_context():
    User.query.delete()
    Snippet.query.delete()
    Tag.query.delete()

    usernames = []
    users = []

    print('Creating users...👽 ')

    for i in range(3):
            username = fake.first_name()
            while username in usernames:
                  username = fake.first_name()
            first_name = fake.first_name()
            last_name = fake.last_name()
            email = fake.email()

            usernames.append(username)

            user = User(
                  username = username,
                  first_name = first_name,
                  last_name = last_name,
                  email = email
            )

            user.password_hash = user.username + 'password'
            users.append(user)

            user_id = user.id

            user.password_hash = username 
            # We are calling the password_hash setter method here


    db.session.add_all(users)
    db.session.commit()

