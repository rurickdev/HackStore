let chatbotJson = [
	{
		sender:"chatbot",
		message:"¡Hola! ¿Cómo puedo ayudarte?"
	}
]

const sendQuestion = ()=>{
	console.log("question")
	let message = $("#user-question").val();
	let questionObject = {sender:"user",message};
	chatbotJson.push(questionObject);
	console.log(message)
	addMessage(message);
}

const addMessage = (message)=>{
	$(".chatbot-body").append(`
		<div class="user-dialog">
			<span>${message}</span>
		</div>
	`)
}

$("#send-chatbot-message").on("click",() => {
	sendQuestion();
})

$(".activate-chatbot, .close-chatbot").on("click",()=>{
	console.log("aC")
	toggleChatbot();
})

const toggleChatbot = ()=>{
	$(".chatbot-wrapper").toggleClass("shown");
	$(".black-overlay").fadeToggle("fast");
}