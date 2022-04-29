import lib_import as lib
import collections

#companyList = ['Apple', 'Telsa', 'Nvidia','AMZN','GOOGL']
#companyscore =['10','-24','99','-17','55']
#companyScoreDict = dict(zip(companyList, companyscore))


def get_key(val, companyScoreDict):
    for key, value in companyScoreDict.items():
         if val == value:
             return key
 
    return "key doesn't exist"


def queue_up(companyList, companyScoreDict):

    
    myQueue =[]
    priorQueue = []
    returnQueue = []
    for item in companyList:
        myQueue.append(companyScoreDict[item])

    priorQueue = sorted(myQueue)

    for item in range(3):
        score = priorQueue.pop()
        name = get_key(score, companyScoreDict)
        returnQueue.append(name)
    
    return returnQueue
    
#queue = queue_up(companyList,companyScoreDict)
#print(queue)
    
