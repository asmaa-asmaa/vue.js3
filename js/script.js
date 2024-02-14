const { createApp } = Vue;

const data = {
 age: 29,
 name: "asmaa",
}

// const my_component = {
//     template: "<h2> hello from my first component</h2>",
// }

const my_component = {
    template: `<h2> hello from my first component</h2>
    <h3>my name is {{name}} </h3>
    <h4>my age is {{age}} </h4>
    <button @click="changeAge">change me </button>`,

     data() {
          return data;
         
     },

   // data() {
       //return {
        //   name: "asmaa",
          // age:32,
       // }
    //},
    methods: {
       changeAge() {
            this.age++;
        }
    }
};

 //createApp({



const vue_1 = createApp({

    data() {
        return {
            //name: "ahmed",
            age: 29,
            link: "http://google.com",
            number: 0,
            city: "cairo",


            name: "",
            email:"",
            password:"",


           // isActive: false,
             newUser: {
              name: "",
              email:"",
              password:"",
            },
             myArray: [
                 {name: "ahmed", age: 29},
                 {name:"yaser", age: 25},
             ],

            numberOne: 0,
            numberTwo:0,

            //title: "test",
           // myColor: " ",
            myColor: "red",
            myFont: 15,

            //age: 29,
            name:"ahmed",

            //students: ["ahmed", "ali", "sami","asmaa", "sara"],
            students: [
                {
                    name: "asmaa",
                    id: 1,
                    age: 32,
                },
                {
                    name: "ahmed",
                    id: 2,
                    age: 12,
                },
                {
                    name: "ali",
                    id: 3,
                    age: 22,
                },
            ],


            products: [
                {
                    title: "lizard shoes",
                    description: "amazing product",
                    price: "50$",
                    brand: "lcwakiki",
                    id:1,
                    colors: ["red", "green","blue","yellow"],
                },
                {
                    title: "bag",
                    description: "amazing product",
                    price: "30$",
                    brand: "lcwakiki",
                    id:2,
                    colors: ["yellow", "green","blue","red"],
                },
                {
                    title: "lap top",
                    description: "amazing product",
                    price: "500$",
                    brand: "toshiba",
                    id:3,
                    colors: ["green", "red","blue","yellow"],
                },
                {
                    title: "watch",
                    description: "amazing product",
                    price: "40$",
                    brand: "toshiba",
                    id:4,
                    colors: ["blue", "green","red","yellow"],
                },
            ]

        };
    },
    methods: {
        sayHi(time, name) {
            return  "good"  + " "+ time + " , "+ name;
        },

        //testFunction() {
            //console.log(" is fired");
        //}
        testFunction() {
           this.number++;
        },
        testMe() {
            console.log("test once");
        },
        printMyName() {
            console.log("ahmed");
        },
        updateValue() {
            this.name = document.getElementById("textInp").value;
        },

         //sendData() {
           // const newUser = {
                //name: this.name,
               // email: this.email,
               // password: this.password,
            //};
            //console.log(newUser);
        // }
        sendData() {
            
            console.log(this.newUser);
        },

         //numOneChange() {
           // console.log("first");

            // return this.numberOne * 2;
         //},
         //numTwoChange() {
           // console.log("second");

             //return this.numberTwo + 10;
         //},

        checkRefs() {
          console.log(this.$refs);
          console.log(this.$refs.myInput);
          console.log(this.$refs.myInput.value);
          this.age= this.$refs.myInput.value;
        },
        
    },
    computed: {
        numOneChange() {
            console.log("first");
            return this.numberOne * 2;
        },
        numTwoChange() {
            console.log("second");
            return this.numberTwo + 10;
        },

    },
    components: {
        my_component,
    },


}).mount("#app-root");

const vue_2 = createApp({

    data() {
        return {
            name: "asmaa",
            students: ["asmaa","samir","moaaz"],
        };
    },
    methods: {
        increaseAge() {
            vue_1.age++;

       },
    },

    components: {
        my_component,
    },

}).mount("#app-root-2");

