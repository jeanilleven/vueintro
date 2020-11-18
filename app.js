new Vue ({
  el: '#vue-app',
  data:{
    name: 'Jeanille',
    job: 'tambay',
    websitetag: "<a href='www.facebook.com'>Facebook</a>",
    grade: 5,
    task: "",
    tasks: [],
  },
  methods:{
    // add: function(){
    //   this.grade+=2
    // }
    addtodo: function(item){
      this.tasks.push(item)
    },
    logTask: function(){
      if(this.task!=""){
        this.tasks.push({item:this.task, completed:"0"})
        this.task=""
      }
    },
    completeTask: function(index){
      console.log(index)
    }
  }
})