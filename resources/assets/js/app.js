		new Vue({
			el: '#paisvue',
			created:function(){
				this.getPaises();
			},
			data:{
				paises:[]
			},
			methods:{
				getPaises:function(){
					var url='pais';
					axios.get(url).then(response=>{
						this.paises=response.data;
					});
				},
				deletePais:function(id){
					var url='pais/'+id;
					axios.delete(url).then(response=>{
						this.getPaises();
					});
				},
			}
		});