const { createApp } = Vue;

createApp({
    data() {
        return {
            arrAlbums: [],
        };
    },
    methods: {
        requestAlbums() {
            axios.get('http://localhost/php-dischi-json/albums.php')
            .then(response => this.arrAlbums = response.data);
        },  
    },
            



created() {
    this.requestAlbums()
}
}).mount('#app')