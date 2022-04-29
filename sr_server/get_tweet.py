import lib_import as lib


def pull_info(tweet):
    data = {
        'content': tweet['full_text']
    }
    return data


def get_tweet(stock):
    df = lib.pd.DataFrame()

    params = {
        'q': stock,
        'tweet_mode': 'extended',
        'lang': 'en',
        'count': '100'
    }

    response = lib.requests.get(
        'https://api.twitter.com/1.1/search/tweets.json',
        params=params,
        headers={'authorization': 'Bearer '+'AAAAAAAAAAAAAAAAAAAAAK%2FuagEAAAAAZNY2%2BHt7vL013A49S3sxYK4XJJA%3Dwodzkz6BJvrScFBOyPufuSABYiM0cY4aPO5Gmu6mlDrjzPqIZg'}
        )

    for tweet in response.json()['statuses']:
        row = pull_info(tweet)
        df = df.append(row, ignore_index=True)
        
    return df