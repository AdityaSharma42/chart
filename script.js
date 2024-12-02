const ctx= document.getElementById('barChart');

new Chart(
    ctx,{
        type:'bar',
        data:{
            labels:["Red","Blue","Yellow","Green"],
            datasets:[
                {
                    label:"Votes",
                    data:[12,19,3,7],
                    backgroundColor:[
                        'red','blue','yellow','green',
                        ],
                    borderColor:["black"],
                    
                }
            ]
        }
    }
)