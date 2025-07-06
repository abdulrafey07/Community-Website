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


const form = document.querySelector(".resolve-form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const contact = document.getElementById("number").value;
    const description = document.getElementById("message").value;

    try {
      const response = await fetch("https://community-website-gch9.onrender.com/api/complaints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, description }),
      });

      const result = await response.json();

      const box = document.getElementById("responseBox");

      if (response.ok) {
        box.innerHTML = `
          <p style="color: green; font-weight: bold;">✅ Complaint submitted successfully!</p>
          <p><strong>Ticket ID:</strong> ${result.ticketId}</p>
          <img src="${result.qrCode}" alt="QR Code" style="width:150px;">
        `;
      } else {
        box.innerHTML = `<p style="color: red;">Error: ${result.error || 'Unknown error'}</p>`;
      }
    } catch (err) {
      console.error("Error submitting complaint:", err);
      document.getElementById("responseBox").innerHTML = `<p style="color: red;">❌ Network or server error.</p>`;
    }
  });
}





// Complaint form handling (resolve page only)
// const complaintForm = document.querySelector(".resolve-form");
// if (complaintForm) {
//   complaintForm.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const contact = document.getElementById("number").value;
//     const description = document.getElementById("message").value;

//     try {
//       const response = await fetch("https://community-website-gch9.onrender.com/api/complaints", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, contact, description })
//       });

//       const result = await response.json();

//       const box = document.getElementById("responseBox");
//       if (response.ok) {
//         box.innerHTML = `
//           <p style="color: green; font-weight: bold;">✅ Complaint submitted successfully!</p>
//           <p><strong>Ticket ID:</strong> ${result.ticketId}</p>
//           <img src="${result.qrCode}" alt="QR Code" style="width:150px;" />
//         `;
//       } else {
//         box.innerHTML = `<p style="color: red;">Error: ${result.error || 'Unknown error'}</p>`;
//       }
//     } catch (err) {
//       document.getElementById("responseBox").innerHTML = `<p style="color: red;">Network or server error.</p>`;
//     }
//   });
//}



