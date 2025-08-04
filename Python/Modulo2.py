# string formating - format()
name = "Alice"
age = 30
message = "My name is {} and I'm {} years old".format(name, age)
print(message)

#string formating - fstrings

message = f"My name is {name} and I'm {age} years old" #better when you have a lots of variables
print(message)

message = "My name is " + name + " and I'm " + str(age) + " years old"

print(message)

# ////

#create two variables to store the title and artist of a song
title = "here comes the sun"
artist = "the beatles"

#create a formatted string to display the message
message = f"My favourite song is {title} and the artist is {artist}"
print(message)

#create a list called 'playlist' that contains three song titles of your choice
playlist = ["Come together", "Let It Be", "Hey Jude"]

#print this to the console
print(playlist)
#add a new song to the playlist using .extend
playlist.extend(["Don't let me down"])
print(playlist)