
def picker(prices):
    possible_pair=[]
    valued_pair= (0,0)
    for num in prices:
        for n in prices[prices.index(num):]:
            if num<n:
                possible_pair.append([num,n])
    #print(possible_pair)
    for pair in possible_pair:
        evaluator=(pair, (pair[1]-pair[0]))
        if valued_pair[1] < evaluator[1]:
            valued_pair=evaluator        
    #print(valued_pair)
    return [prices.index(valued_pair[0][0]),prices.index(valued_pair[0][1])]

#print(stock_picker([19,17,6,9,8,15,6,3,1]))