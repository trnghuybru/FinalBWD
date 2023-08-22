var chat = () => {
  var chatContainer = document.querySelector(".chat_content");
  let input = document.querySelector("#chat_input");
  let botWaiting = document.getElementById("bot_waiting");
  const apiKey = "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";

  input.addEventListener("change", async (e) => {
    let training = "Your name is \"Trek TourGuide\" - Tour guide of TechTrek (Website combined with house rental, this website does not provide tours), please answer the following request of visitors: " + e.target.value.trim();

    message("chat_content_user", e.target.value)
    input.value = "";
    botWaiting.hidden = false;
    chatContainer.scrollBy(0, 200);
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: training,
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    botWaiting.hidden = true;

    const chatbotResponse = response.data.choices[0].text.replaceAll("?\n", "");

    message("chat_content_bot", chatbotResponse);
  });
}

const message = (className, inputValue) => {
  var chatList = document.querySelector("#chat_list");
  var chatContainer = document.querySelector(".chat_content");

  const liElement = document.createElement("li");
  liElement.setAttribute("class", className);

  // Tạo một thẻ h4 và thêm nội dung vào bên trong
  const h4Element = document.createElement("h4");
  const h4Text = document.createTextNode(inputValue.trim());
  h4Element.appendChild(h4Text);

  // Tạo một thẻ img và thêm thuộc tính src và alt vào
  const imgElement = document.createElement("img");
  if (className == "chat_content_bot") {
    imgElement.setAttribute("src", "../img/bot.png");
  } else {
    imgElement.setAttribute("src", "../img/avt2.png");
  }
  imgElement.setAttribute("alt", "");

  if (className == "chat_content_user") {
    liElement.appendChild(h4Element);
    liElement.appendChild(imgElement);
  } else {
    liElement.appendChild(imgElement);
    liElement.appendChild(h4Element);
  }

  // Thêm phần tử li vào một phần tử cha nào đó trong DOM
  chatList.appendChild(liElement);

  chatContainer.scrollTop = chatContainer.scrollHeight - liElement.clientHeight;
}