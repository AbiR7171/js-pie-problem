



const isValuable = (N, T, K, D) =>{

        const forOnePieTimeNeed = T/K ;
        const toCompleteTargetWithOneOven = forOnePieTimeNeed * N;

        const findTheExtraOvenNumber = Math.round((toCompleteTargetWithOneOven /D));

        const beForExtraOven = Math.round(D/forOnePieTimeNeed); 

        const needMorePie = N - beForExtraOven;

       

        const withMultipleOvenForOnePie = forOnePieTimeNeed / findTheExtraOvenNumber ;

        const timeNeedWithMultipleOven =  Math.round( withMultipleOvenForOnePie * needMorePie );


        const totalTimeNeedWithMutipleOVen = timeNeedWithMultipleOven + D;

        console.log(beForExtraOven);


        if(toCompleteTargetWithOneOven > totalTimeNeedWithMutipleOVen){
         
             console.log("yes");
        }else{
            
            console.log("no");
        }
    }


isValuable(4, 2, 1,4)

