const app = Vue.createApp({
    data() {
        return {
            Name: 'Jose Maria',
            Age: 33,
            vueLink: 'https://c.tenor.com/A-ozELwp694AAAAM/thumbs-thumbs-up-kid.gif'
        
        };
    },
    methods: {
        agePlusFive() {
            sum = this.Age + 5
            return sum
        },

        getRandom() {
            return Math.random();
        }

    }
});

app.mount('#assignment');