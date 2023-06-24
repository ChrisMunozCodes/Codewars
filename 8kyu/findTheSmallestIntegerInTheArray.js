class SmallestIntegerFinder {

    findSmallestInt(args) {
        
     const arrSort = args.sort((a,b) => a - b)
     return arrSort[0]

    }

}