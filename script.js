$(document).ready(function(){
    var url ="https://data.covid19india.org/data.json"
    $.getJSON(url ,function(data){
        console.log(data)
        var total_active,total_recovered,total_deaths,total_confirmed
        var state = []
        var confirmed = []
        var recovered = []
        var deaths = []
        
        $.each(data.statewise,function(id,obj){
            state.push(obj.state)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            deaths.push(obj.deaths)
        })

        state.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()

        console.log(state)

        total_active = data.statewise[0].active
        total_confirmed = data.statewise[0].confirmed
        total_recovered = data.statewise[0].recovered
        total_deaths = data.statewise[0].deaths

        $("#active").append(total_active)
        $("#confirmed").append(total_confirmed)
        $("#recovered").append(total_recovered)
        $("#deaths").append(total_deaths)


        var myChart = document.getElementById("myChart").getContext('2d')

        var chart = new Chart(myChart,{
            type: 'bar',
            data:{
                labels:state,
                datasets:[
                    { 
                        label:"Confirmed Cases",
                        data: confirmed,
                        backgroundColor: "yellow",
                        minBarLength:100

                    },
                    {
                        label:"Active Cases",
                        data: active,
                        backgroundColor: "blue",
                        minBarLength:100

                    },
                    {
                        label:"Recovered",
                        data: recovered,
                        backgroundColor: "green",
                        minBarLength:100
                    },
                    {
                        label:"Deaths",
                        data: deaths,
                        backgroundColor: "Red",
                        minBarLength:100
                    },
                ]
            },
            option:{}
        })



    }) 
})
