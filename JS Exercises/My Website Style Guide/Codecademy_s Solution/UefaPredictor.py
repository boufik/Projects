import math
import random

# The functions random.random() generates a number from 0.000000000 to 0.999999999 (from 0 inclusive to 1 exclusive)
# If I want to generate a number from 0......100, I have to write
# math.floor(random.random() * 101)

# 1. Introduction - Rules of the game
print()
print("**** WELCOME TO UEFA PREDICTOR PROGRAMME. You have to guess the score of a random match: Team A - Team B ****")
print()
print("1. If you guess the final winner/result of match (winner A, winner B or tie), you will get 3 points.")
print("2. If you guess correctly the exact goals of one team (such as Team A), you will get 1 point.")
print("3. If you have guessed correctly the final winner/result of the match AND you have also found correctly")
print("the goal difference between the 2 teams, you will get 1 point.")
print("So, if you guessed the EXACT SCORE of the match, you will get: 3 + (1 + 1) + 1 = 6 points")
print()
print()

# 2. Ask the user for the prediction - Check for invalid values in goals inputs
print("Time for prediction. The match is between Team A and Team B. Write down separately how many goals you think the teams will score.")
goalsA = int(input("Goals of Team A: "))
while(goalsA <= 0):
    goalsA = int(input("Goals of Team A: "))
goalsB = int(input("Goals of Team B: "))
while(goalsB <= 0):
    goalsB = int(input("Goals of Team B: "))

# 3. Generate 2 numbers as the goals for the 2 teams
    # 0: 0 will be created with 6/34 different ways (numbers )
    # 1: 1 will be created with 10/34 different ways (numbers )
    # 2: 2 will be created with 10/34 different ways (numbers )
    # 3: 3 will be created with 4/34 different ways (numbers )
    # 4: 4 will be created with 2/34 different ways (numbers )
    # 5: 5 will be created with 1/34 different ways (numbers )
    # 6: 6 will be created with 1/34 different ways (numbers )
# In the end I will create a number which will be 0,1,2,3,4,5 or 6 but with different possibility

# Creating 2 indexes from 0 to 33 (range = 34 numbers)
indexOfRealGoalsA = math.floor(random.random() * 34)
indexOfRealGoalsB = math.floor(random.random() * 34)
realGoalsA = -1000;
realGoalsB = -1000;

# Create 2 if-statements to find how many goals has every team scored

# TEAM A
if indexOfRealGoalsA >= 0 and indexOfRealGoalsA <=5:                            # 6 values
    realGoalsA = 0
elif indexOfRealGoalsA >= 6 and indexOfRealGoalsA <=15:                         # 10 values
    realGoalsA = 1
elif indexOfRealGoalsA >= 16 and indexOfRealGoalsA <=25:                        # 10 values
    realGoalsA = 2
elif indexOfRealGoalsA >= 26 and indexOfRealGoalsA <=29:                        # 4 values
    realGoalsA = 3
elif indexOfRealGoalsA == 30 or indexOfRealGoalsA == 31:                        # 2 values
    realGoalsA = 4
elif indexOfRealGoalsA == 32:                                                   # 1 value
    realGoalsA = 5
elif indexOfRealGoalsA == 33:                                                   # 1 value
    realGoalsA = 6


# TEAM B
if indexOfRealGoalsB >= 0 and indexOfRealGoalsB <=5:                            # 6 values
    realGoalsB = 0
elif indexOfRealGoalsB >= 6 and indexOfRealGoalsB <=15:                         # 10 values
    realGoalsB = 1
elif indexOfRealGoalsB >= 16 and indexOfRealGoalsB <=25:                        # 10 values
    realGoalsB = 2
elif indexOfRealGoalsB >= 26 and indexOfRealGoalsB <=29:                        # 4 values
    realGoalsB = 3
elif indexOfRealGoalsB == 30 or indexOfRealGoalsB == 31:                        # 2 values
    realGoalsB = 4
elif indexOfRealGoalsB == 32:                                                   # 1 value
    realGoalsB = 5
elif indexOfRealGoalsB == 33:                                                   # 1 value
    realGoalsB = 6


# 4. Printing the final results between the 2 teams and the guesses also
print()
print()
print("*************************************")
print("Final Result: Team A - Team B : " + str(realGoalsA) + " - " + str(realGoalsB))
print("You guessed:  Team A - Team B : " + str(goalsA) + " - " + str(goalsB))
print("*************************************")


# 5. Starting the process for giving points
points = 0

# **********************************************************************************************************************
# Start with **** RULE 2 ****
foundGoalsA = False
foundGoalsB = False

if goalsA == realGoalsA:
    points += 1
    foundGoalsA = True
if goalsB == realGoalsB:
    points += 1
    foundGoalsB = True
# **********************************************************************************************************************
# Continue with **** RULE 1 ****
result = -1000
realResult = -1000
foundResult = False
# Results will take one of these 3 values:
    # 1: Winner A
    # 2: Winner B
    # 0: Tie

# a) For the user's predictions
if goalsA > goalsB:
    result = 1
elif goalsA < goalsB:
    result = 2
else:
    result = 0

# b) For the final/real results
if realGoalsA > realGoalsB:
    realResult = 1
elif realGoalsA < realGoalsB:
    realResult = 2
else:
    realResult = 0

# Compare the 2 results
if result == realResult:
    points += 3
    foundResult = True


# **********************************************************************************************************************
# Last rule is **** RULE 3 ****
# Rule 3 precedes that user has found the result of the winner ---> foundResult == True
foundGoalDifference = False
if(foundResult):
    if goalsA - goalsB == realGoalsA - realGoalsB:
        points += 1
        foundGoalDifference = True


# **********************************************************************************************************************
# **********************************************************************************************************************
# **********************************************************************************************************************
# **********************************************************************************************************************
# Comparisons and calculations have stopped, it's time for displaying the user's points
print()
print("You got " + str(points) + " points!")
if(foundResult):
    print("Took +3 for guessing correctly the final winner/result of the match")
if(foundGoalsA):
    print("Took +1 for guessing correctly the goals from Team A")
if(foundGoalsB):
    print("Took +1 for guessing correctly the goals from Team B")
if(foundGoalDifference):
    print("Took +1 for guessing correctly the goal difference between the 2 teams")