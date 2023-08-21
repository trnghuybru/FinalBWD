var chat = () => {
    var input = document.querySelector("#chat_input");
    var chatList = document.querySelector("#chat_list");
    var chatContainer = document.querySelector(".chat_content");

    input.addEventListener("change", (e) => {
        const liElement = document.createElement("li");
        liElement.setAttribute("class", "chat_content_user");

        // Tạo một thẻ h4 và thêm nội dung vào bên trong
        const h4Element = document.createElement("h4");
        const h4Text = document.createTextNode(e.target.value.trim());
        h4Element.appendChild(h4Text);

        // Tạo một thẻ img và thêm thuộc tính src và alt vào
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", "../img/avt1.png");
        imgElement.setAttribute("alt", "");

        liElement.appendChild(h4Element);
        liElement.appendChild(imgElement);

        // Thêm phần tử li vào một phần tử cha nào đó trong DOM
        chatList.appendChild(liElement);

        chatContainer.scrollTop = chatContainer.scrollHeight - liElement.clientHeight;

        input.value = "";

        logMovies();
    });
}
async function logMovies() {
    const response = await fetch("https://poe.com/api/gql_POST");
    const movies = await response.json();
    console.log(movies);
}