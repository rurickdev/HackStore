<<<<<<< HEAD
/* let chatbotJson = [
=======
const toggleForm = ()=>{
	$(".register-field").toggleClass("d-none");
	if($("#submit-btn").hasClass("register")){
		$("#submit-btn").text("Ingresar")
	} else {
		$("#submit-btn").text("Registrarse")
	}
}

const launchModal = (modalId)=>{
	$(modalId).modal("show");
}

const loadContent = (contentUrl) => {
	$(".content-wrapper").load(contentUrl)
}

launchModal("#login-modal")

let chatbotJson = [
>>>>>>> 3038e5fcc270e473161942f5c1b647b41f05a1a6
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
}) */

$(".activate-chatbot, .close-chatbot").on("click",()=>{
	console.log("aC")
	toggleChatbot();
})

const toggleChatbot = ()=>{
	$(".chatbot-wrapper").toggleClass("shown");
	$(".black-overlay").fadeToggle("fast");
}