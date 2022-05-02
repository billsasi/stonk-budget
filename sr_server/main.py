from code import compile_command
from concurrent.futures import process
import get_tweet as tweet
import match_name as translate
import queue_up as myQueue
import sentiment_check as senCheck
import symbol_check as symCheck
import lib_import as lib
import yfinance as yf


def main(userInput):
    processedInput = symCheck.inputProcess(userInput)
    error = 'Invalid inputs. Please enter again'
    if(len(processedInput) == 0):
        return error
    
    companyName = translate.match()

    companyList =[]
    for company in processedInput:
        companyList.append(translate.get_name(company, companyName))
    
    #print(companyList)
    companyScore = []
    companyTweet = []
    sentiment_model = lib.flair.models.TextClassifier.load('en-sentiment')
    for company in processedInput:
        print('Processing...' + company)
        df = lib.pd.DataFrame(tweet.get_tweet(company))
        sen_score, positive = senCheck.sen_check(df,sentiment_model)
        companyScore.append(sen_score)
        companyTweet.append(positive)
       
    print("Companies: ")
    print(processedInput)
    print("Sentimental score: ")
    print(companyScore)
    companyScoreDict = dict(zip(processedInput, companyScore))

    queue = myQueue.queue_up(processedInput,companyScoreDict)

    companyTweetDict = dict(zip(processedInput, companyTweet))
    print("Top 3 Recommendation: ") 
    
    stockInfo = {}
    for stock in processedInput:
        stockInfo[stock] = yf.Ticker(stock).info

    return queue, companyTweetDict, stockInfo

# userInput = ['TsLA','NvdA','AMD','GOOGl','AmZn']
# queue,dict = main(userInput)

# print(queue)
# print(dict)
