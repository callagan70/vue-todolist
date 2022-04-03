var app = new Vue(
{
    el: '#root',
    data: {
        lista: [
            {
                'project': 'Portare fuori il cane',
                'progress' : false,
            },
            {
                'project': 'Fare colazione',
                'progress' : false,
            },
            {
                'project': 'Fare la spesa',
                'progress' : false,
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
            'progress' : false,}

        this.lista.push(newDutyObj)
        this.newDuty = ' ' },

    done: function(element){

        if (element.progress == true){
            element.progress = false
            }
        else{
                element.progress = true
            }
    }
  }
})

