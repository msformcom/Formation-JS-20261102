
// la classe de base Eventtarget permet à un objet de declencher des évènement
// ajoute addEventListener 
// newMessage => il y a un nouveauMessage
export class MessageService extends EventTarget {


    connection!: WebSocket;
    constructor() {
        super();
        // connection au server
        this.openConnection();

    }

    openConnection() {
        this.connection = new WebSocket("ws://localhost:8080");
        // en cas de réception de message
        this.connection.addEventListener("message", async (event) => {
            // déclenchement de l'évènement newmessage
            // en transformat le blob reçu en texte
           

            let message =  await  event.data.text();
            this.dispatchEvent(new CustomEvent<string>("newmessage", {detail:message}));
        });
        this.connection.addEventListener("close", () => {
            //this.openConnection();
        })
    }

    sendMessage(message: string): Promise<void> {
        // envoi du message au server
        this.connection.send(message);
        return Promise.resolve();
    }
    // sur une instance de cette classe
    // ms.subscribeToNewMessage((s)=>{
    // console.log(s);
    // })
    subscribeToNewMessage(f: (message: string) => void) {
        this.addEventListener("newmessage", (e: any) => f(e.detail))
    }



}

