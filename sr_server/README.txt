Current workaround for read_csv function:
Either: 1. Change the PATH in the read_csv function in symbol_check.py and match_name.py to your directory of data.csv file
        2. Move all the file to Desktop and comment out df = lib.pd.read_csv(r'C:\Users\khang\OneDrive\Desktop\stonkRecomm\server\data.csv') 
           and uncomment df = lib.pd.read_csv('data.csv') line in both symbol_check.py and match_name.py
