const { createApp } = Vue;

createApp({
	data() {
		return {
			
		};
	},
	methods: {
        requestAlbums() {
			axios.get('http://localhost/classe96-0900-todo-list/todos.php')
				.then(response => this.arrTodos = response.data);
        },
    },
	created() {
        
    }
}).mount('#app')