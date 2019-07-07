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


$(".activate-chatbot, .close-chatbot").on("click",()=>{
	console.log("aC")
	toggleChatbot();
})

const toggleChatbot = ()=>{
	$(".chatbot-wrapper").toggleClass("shown");
	$(".black-overlay").fadeToggle("fast");
}