import lib_import as lib

def match():
    #match company name to their stock symbols
    #create a dataframe to whole content of the csv file
    #sort out only the symbols and the name into 2 dfs
    #zip those 2 into a dictionary
    #return the dictionary

    
    #df = lib.pd.read_csv('data.csv')
    df = lib.pd.read_csv(r'data.csv')
    symbols = df['Symbol'].values.tolist()
    name = df['Name'].values.tolist()
    comp_dict = dict(zip(name, symbols))
    return comp_dict

def get_name(val, comp_dict):
    #parameter: val = symbol of the company; comp_dict = company dictionary
    #return: the company name
    
     
    for key, value in comp_dict.items():
         if val == value:
             return key
 
    return "key doesn't exist"

#comp_list = match()
#print(get_name('TSLA',comp_list)) 
#path = lib.os.path.join(lib.os.getcwd(), 'data.csv')
#print(lib.os.path.join(lib.os.getcwd(), 'data.csv'))