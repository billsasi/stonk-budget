import lib_import as lib


def sen_check(df, sentiment_model):
    numberOfPositive = 0
    sentimental_score =0
    for tweet in df['content']:
        #Setting clean up parameters
        whitespace = lib.re.compile(r"\s+")
        web_address = lib.re.compile(r"(?i)http(s):\/\/[a-z0-9.~_\-\/]+")
        user = lib.re.compile(r"(?i)@[a-z0-9_]+")
        
        #Cleaning up tweet
        tweet = whitespace.sub(' ', tweet)
        tweet = web_address.sub('', tweet)
        tweet = user.sub('', tweet)
        sentence = lib.flair.data.Sentence(tweet)
        sentiment_model.predict(sentence)
        
        #Get sentimental score
        sentiment = sentence.labels[0].value
        if sentiment == 'POSITIVE':
            sentimental_score = sentimental_score + 2
            numberOfPositive = numberOfPositive + 1
        else:
            sentimental_score = sentimental_score - 1
    
    return sentimental_score, numberOfPositive
    
