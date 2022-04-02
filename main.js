var app = new Vue(
{
    el: '#root',
    data: {
        lista: [
            {
                'project': 'Portare fuori il cane',
                'progress' : true,
            },
            {
                'project': 'Fare colazione',
                'progress' : true,
            },
            {
                'project': 'Fare la spesa',
                'progress' : true,
            }
        ]
  },





  methods:{
    removeLista: function(indexLista){
        this.lista.splice(indexLista,1);
    },
    
    addDuty: function(){
        let newDutyObj = {
            'project': this.newDuty,
            'progress' : true,  
        }
        
        this.lista.push(newDutyObj)
    

    }



  }
}

)

