import lib_import as lib

def inputProcess(inputs): 
# Process user input
    valid_input = []
    for input in inputs:

        
        #df = lib.pd.read_csv('data.csv')
        df = lib.pd.read_csv(r'data.csv')
        symbols = df['Symbol'].values.tolist()
        #print(symbols)
        user_input = input
        user_input = user_input.upper()
        if user_input not in symbols:
            print(user_input + ' not valid')
        else:
            valid_input.append(user_input)
    
    return valid_input

   
#print(lib.os.path.join(lib.os.getcwd(), 'data.csv'))
#stock_list = ['TsLA','NvdA','AMD', 'dfsjkl']
#stock_test = inputProcess(stock_list)
#data_path = lib.os.path.join(lib.os.getcwd(), 'data.csv')
#print(stock_test)