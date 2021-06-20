function chooseRandomly (arr){
    return arr[Math.floor(Math.random()*arr.length)]
} 

const topics = {
    topicList : ["work", "clothes", "sports"], 
    work : {
        topicActions : [
                        "Your actual job is ".concat(chooseRandomly(["Software Developer", "Network Engineer", "Recruiter", "Systems Engineer", "Physician", "Statistician", "Dentist"])),
                        "You will change your job in ".concat(chooseRandomly([ Math.ceil(Math.random()*10).toString().concat(" weeks") , 
                                                                                Math.ceil(Math.random()*18).toString().concat(" months"),
                                                                                Math.floor(Math.random()*5 + 1).toString().concat(" years")])), 
                        "You teammates are ".concat(chooseRandomly(["cool", "friendly", "hard working", "noisy", "young", "creative", "Visionary"])),  
                        "The thing you like the most at your job is ".concat(chooseRandomly( ["the wage", "the wellness program", "flexible schedule", "development plan", "the location", "the gym membership", "the free coffe"] )) 
                        ]

    },
    clothes : {
        topicActions : ["Your are currently wearing a ".concat(chooseRandomly(["black suit", "red jacket", "green rope", "Metalica T-Shirt", "cashmere sweater", "grey coat", "Nike tracksuit"])),
                        "Your shoes size is ".concat(chooseRandomly([ ((Math.ceil(Math.random()*10) + Math.random() > 0.5 ? 0.5 : 0)).toString().concat( " US"), 
                                                                      ((Math.floor(Math.random()*10 + 39) + Math.random() > 0.5 ? 0.5 : 0)).toString().concat( " EU"), 
                                                                      ((Math.floor(Math.random()*10 + 6) + Math.random() > 0.5 ? 0.5 : 0)).toString().concat( " UK")])), 
                        "You fashion style is ".concat(chooseRandomly(["vintage", "artsy", "casual", "grunge", "chic", "bohemian", "exotic"])), 
                        "The thing you like the most at your job is ".concat(chooseRandomly(["the wage", "the wellness program", "flexible schedule", "development plan", "the location", "the gym membership", "the free coffe"]))]
    },
    sports : {
        topicActions : [
                        "Your favorite sport is ".concat(chooseRandomly(["football", "handball", "basketball", "tennis", "snooker", "cricket", "field hockey"],)),
                        "You follow ".concat(chooseRandomly(["Real Madrid", "NY Yankess", "THW Kiel", "Roger Federer", "Mark Selby", "Punjab Kings", "NY Islanders"])),
                        "The last game you attended was ".concat(`${Math.ceil(Math.random()*100).toString()} - ${Math.ceil(Math.random()*100).toString()}`)
                        ]
    }
  
}

const todaysTopic = chooseRandomly(topics.topicList)
console.log(`Welcome to Mixed Messages project! Today's topic is ${todaysTopic}.\nYour message is:`);
topics[todaysTopic]["topicActions"].forEach(sentence => console.log(sentence));