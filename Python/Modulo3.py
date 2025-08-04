#1. Ask a user for their age, and how long they have had their subscription for (in years).
age = input("How old are you? ")
subscription_length = input("how many years have you had your subscription? ")

#The user qualifies for a discount if they meet the following criteria:

#The user is a student (under 25 years old) or a senior citizen (65 years old or older)
#The user has had their subscription for at least 12 months


if (int(age) <= 25 or int(age) >= 65) and int(subscription_length) >= 1:
  print("Great news! You qualify for a discount in your music streaming subscription!")
else:
  print("Sorry, you do not qualify for a discount at this time!")
