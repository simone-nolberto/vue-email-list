console.log('it works!');

const { createApp } = Vue
createApp({
    data() {
        return {

            randomEmailList: [],
        }
    },
    methods: {
        generateRandomEmail() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        console.log(response.data.response);
                        this.randomEmailList.push(response.data.response);
    
                    });
            };
            
            console.log(this.randomEmailList);
        }

    }
}).mount('#app')