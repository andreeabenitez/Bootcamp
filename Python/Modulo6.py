# Ask the user to input the duration of a song of their choice, in seconds.

# Use a try-except block to handle cases where the user enters non-numeric values.

# If the input is invalid, show a descriptive error message.

# Define a custom exception called InvalidLength for an invalid song length.

# Raise your custom exception if the song length entered is a negative number.

# If the user has entered a valid song length, calculate this lenght in minutes and display the result to the user.

class InvalidLenght(Exception):
  pass


try:
  song_length = int(input("Duration of the song in seconds: "))
  if song_length < 0:
    raise InvalidLenght
  song_length_min = song_length / 60
  print(song_length_min)
except:
  print("Error: Insert a number")