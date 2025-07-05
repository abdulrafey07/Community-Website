document.querySelectorAll(".op").forEach((box)=> {
    box.addEventListener("click", () =>{
        const link = box.getAttribute("data-link");
        if(link){
        window.location.href = link;
        }
    });
});


document.querySelectorAll(".nav-links li").forEach((e) => {
    e.addEventListener("click", ()=> {
        let link2 = e.getAttribute("data-link");
        if(link2){
            window.location.href = link2;
        }
    });
});


let logo = document.querySelector(".logo");
    logo.addEventListener("click", ()=> {
        let link3 = logo.getAttribute("data-link");
        if(link3){
            window.open(link3, "_self");
        }
    });


let footerContent = document.querySelectorAll(".footerContent");
footerContent.forEach( (e)=> {
    footerContent.addEventListener("click", ()=> {
        let link = e.getAttribute("data-link");
        if(link){
            window.open(link, "_blank");
        }
    });
});



const feedback = document.querySelector(".feedback-form");
if (feedback) {
    feedback.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const number = document.getElementById("number").value;
        const message = document.getElementById("message").value;

        try {
            const res = await fetch("https://community-website-gch9.onrender.com/api/complaints", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, contact: number, description: message })
            });

            const data = await res.json();
            alert("Complaint submitted! Ticket ID: " + data.ticketId);
        } catch (error) {
            console.error("Error:", error);
            alert("Submission failed.");
        }
    });
}



