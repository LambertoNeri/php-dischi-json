const { createApp } = Vue;

createApp({
	data() {
		return {
			
		};
	},
	methods: {
        requestAlbums() {
			axios.get('http://localhost/php-dischi-json/albums.php')
				.then(response => this.arrTodos = response.data);
        },
    },
	created() {
        
    }
}).mount('#app')