# 1. Ask a user to input how many songs they would like to add to their playlist

# Store this information in a variable called: playlist_length
playlist_length = int(input("How many songs you would like to add to your playlist?" ))

# 3. Using a for loop, prompt the user the enter the duration of each song in their playlist.

song_duractions = []

for song in range(playlist_length):
  duration = input(f"what is the duration of song {song + 1}?")
  song_duractions.append(duration)
print(song_duractions)

# 4. Store the duraction of each song in a list called: song_durations, and print these to the console.
