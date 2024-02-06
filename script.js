var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);

 //1) Get all the countries from Asia continent/region using Filter function?
        var asia_continent = res.filter((ele)=>ele.region=="Asia");
        console.log(asia_continent);
        var countries_asia = asia_continent.map((ele)=>ele.name.common);
        console.log(countries_asia);

    //2) Get all the countries with a population of less than 2 lakhs using Filter function?
        var population = res.filter((ele)=>ele.population<200000);
        console.log(population);
        var countries_population = population.map((ele)=>ele.name.common);
        console.log(countries_population);
    
    //3) Print the following details name, capital, flag, using forEach function?
            //res.forEach(element =>console.log(element.name.common));
            //res.forEach(element =>console.log(element.flags.png));

            res.forEach(element => {
                //forEach for name:
                console.log(element.name.common)

                //forEach for capital:
                if(element.capital){
                    console.log(element.capital[0])
                }
                else{
                    console.log(undefined);
                }

                //forEach for flag:
                console.log(element.flags.png)
                //console.log(element.flag)
            });        

    //4) Print the total population of countries using reduce function?
        var total_population = res.reduce((acc,cv)=>acc+cv.population,0);
        console.log(total_population);

    //5) Print the country that uses US dollars as currency?
        var us_dollar = res.filter((ele) => {
            if (ele.currencies){
                return (Object.values(ele.currencies)[0].name === "United States dollar")
                }
        })
        console.log(us_dollar);
        
        var usd_country = us_dollar.map((element) => element.name.common);
        console.log(usd_country);
    
}