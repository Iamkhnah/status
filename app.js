const avt = document.getElementById("AVATA");
const st = document.getElementById("status");

fetch('https://raw.githubusercontent.com/Iamkhnah/status/refs/heads/main/int.json')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
    avt.src = data["avt"];
    st.innerHTML = data["status"];
    console.log(data);
  })