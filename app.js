console.log('it works!');

const { createApp } = Vue
createApp({
    data() {
        return {

            randomEmailList: [],
            check: false,
        }
    },
    methods: {
        generateRandomEmail() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        // console.log(response.data.response);
                        this.randomEmailList.push(response.data.response);
                        console.log(this.randomEmailList.length);
                        if (this.randomEmailList.length === 10) {

                            this.check = true;
                            console.log(this.check);

                        } else {
                            this.check = false;
                        }

                    });


            };





        }

    },
    // mounted(){
    //     console.log(this.check);
    // }
}).mount('#app')