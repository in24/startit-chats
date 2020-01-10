const ATJAUNOT = 5000; // atjauno ik pēc 5 sekundēm

async function lasiChatu() {
  // JavaScriptā tā var apstrādāt pieprasījumu, kuram atnāk atbilde no servera
  const atbilde = await fetch("/chats/lasi"); // await strādā tikai asinc
  const datuObjekts = await atbilde.json();
  raadiChatuVienkarsi(datuObjekts);
}
function raadiChatuVienkarsi(dati) {
  const jaunaRinda = "</br>";
  let chats = "";
  let chataDiv = document.getElementById("chats");
  for (let rinda of dati["chats"]) {
    chats = chats + rinda + jaunaRinda;
  }
  chataDiv.innerHTML = chats;
}
async function suutiZinju() {
  let zinjasElements = document.getElementById("zinja");
  let zinja = zinjasElements.value;
  zinjasElements.value = "";
  const atbilde = await fetch("/chats/suuti", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ chats: zinja })
  });
  const datuObjekts = await atbilde.json();
  raadiChatuVienkarsi(datuObjekts);
}
