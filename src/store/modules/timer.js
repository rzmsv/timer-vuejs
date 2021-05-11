const state = {
    timers:[],
    counter : 1
}
const mutations = {
    start(state,id){
        var foundTimer = state.timers.find(time => time.id === id)
        foundTimer.start = true
        foundTimer.stop = setInterval(()=>{
            foundTimer.seconds ++
            // console.log(Math.floor(foundTimer.seconds %(1000 * 60)) / 1000)
        },1000)
        
        // state.timers.find((el)=>{
        //     if(el.id == id){
        //         el.stop = setInterval(()=>{
        //             if (el.seconds > 0){
        //                     el.seconds --
        //                         if(el.seconds == 0){
        //                             el.minutes --
        //                         if(el.minutes > 0){
        //                             el.seconds = 60
        //                          }
        //                     }
        //                 }
        //         },1000)
        //     }
            
        // })
    },
    reset(state,id){
        var foundTimer = state.timers.find(time => time.id === id)
        foundTimer.start = false
        clearInterval(foundTimer.stop)
        foundTimer.seconds = 0
        foundTimer.minutes = 0
        
        // state.times.find((el)=>{
        //     if (el.id == id){
        //         el.seconds= 60,
        //         el.minutes= 10
        //     }
        // })
    },
    duplicate(state){
        state.timers.push({id:Math.random(),seconds: 0,stop: null,start: false})
    },
    stop (state,id){
        var foundTimer = state.timers.find(time => time.id === id)
        foundTimer.start = false
        return clearInterval(foundTimer.stop)
        
        // state.times.find((el)=>{
        //     if (el.id == id){
        //         return clearInterval(el.stop)
        //     }
        // })
    },
}


export default {
    namespaced: true,
    state,
    mutations
}