import requests
# Write a function called get_song that asks the user to input a song title, along with the artist's name, using two input prompts.

def get_song():
  song_title = input("Enter a song title: ")
  song_artist = input("What's the artist: ")
  return [song_title, song_artist]

  

# Write another function called get_lyrics that makes a HTTP Get request and prints the response to the endpoint:
#https://api.lyrics.ovh/v1/{artist}/{title}

def get_lyrics(artist, title):
  response = requests.get("https://api.lyrics.ovh/v1/{artist}/{title}")
  print(response.json())


# Combine these functions into a main function tha calls get_song, then calls get_lyrics, with the information that the user entered.

def main():
  song_info = get_song()
  song_artist = song_info[1]
  song_title = song_info[0]
  get_lyrics(song_artist, song_title)
  
  
main()
  
