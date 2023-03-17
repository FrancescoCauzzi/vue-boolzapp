// VueJS
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      me: {
        name: "Sofia",
        avatar: "./img/avatar_io.jpg",
      },
      activeIndex: 0,
      newInput: "",
      newSearch: "",

      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleClass(myIndex) {
      this.activeIndex = myIndex;
    },
    lastReceivedMessage(element) {
      let newArr = element.messages.filter(
        (item) => item.status === "received"
      );
      let lastLog = newArr[newArr.length - 1].date;
      // console.log(lastLog);
      // console.log(lastLog.slice(10, 16));
      return `${lastLog.slice(0, 10)} alle ${lastLog.slice(10, 16)}`;
    },
    addMessage() {
      let now = new Date();
      let options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "Europe/ROme",
      };
      let nowFormatted = new Intl.DateTimeFormat("it-IT", options).format(now);
      let newNowFormatted =
        nowFormatted.substring(0, 9) + nowFormatted.substring(10, 16);
      //console.log(newNowFormatted);
      let newMsgObj = {
        date: newNowFormatted,
        message: this.newInput,
        status: "sent",
      };
      //console.log(newMsgObj.date);
      this.contacts[this.activeIndex].messages.push(newMsgObj);
      this.newInput = "";
      // salvo il valore della keyword 'this' nella variabile che ho nominato 'self' per accedervi all'interno della 'closure'
      const self = this;
      setTimeout(function () {
        // codice da eseguire dopo 3 secondi
        let answer = {
          date: newNowFormatted,
          message: "Ok!",
          status: "received",
        };
        //console.log(self.contacts);
        self.contacts[self.activeIndex].messages.push(answer);
      }, 1000);
    },
  },
  computed: {
    activeItem() {
      return this.contacts[this.activeIndex];
    },
    // filteredSentItems() {
    //   // Filter the itemList based on some condition
    //   return this.contacts[this.activeIndex].messages.filter(
    //     (item) => item.status === "sent"
    //   );
    // },
    // filteredReceivedItems() {
    //   // Filter the itemList based on some condition
    //   return this.contacts[this.activeIndex].messages.filter(
    //     (item) => item.status === "received"
    //   );
    // },
  },
}).mount("#app");
