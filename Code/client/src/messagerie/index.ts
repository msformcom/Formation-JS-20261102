import { MessageService } from "../scripts/utilitaires/message-service.js";

// 
document.addEventListener("DOMContentLoaded",()=>{
    let new_message_input=document.querySelector("#new_message_input")! as HTMLInputElement;
    let send_message_button=document.querySelector("#send_message_button")! as HTMLButtonElement;
    let messages_list=document.querySelector("#messages_list")! as HTMLDivElement;

    let service=new MessageService();
    service.subscribeToNewMessage(m=>{
        let div=document.createElement("div") as HTMLDivElement;
        div.innerHTML=m;
        messages_list.prepend(div);
    });
    send_message_button.addEventListener("click",async ()=>{
        let message=new_message_input.value;
        try {
            await  service.sendMessage(message);
            new_message_input.value="";
        } catch (error) {
            alert("erreur");
        }
      

    });
});