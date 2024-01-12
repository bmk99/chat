const messages = [
    {
        "_id": "659f7a7a24c9394ecfe6dc5f",
        "conversationId": "659f769e24c9394ecfe6dc49",
        "senderId": "659e60202e69baca6e997257",
        "text": "hello",
        "createdAt": "2024-02-11T05:19:54.794Z",
        "updatedAt": "2024-01-11T05:19:54.794Z",
        "__v": 0
    },
    {
        "_id": "659f96057389623a4ce8043d",
        "conversationId": "659f769e24c9394ecfe6dc49",
        "senderId": "659e60202e69baca6e997257",
        "text": "sadfasf",
        "createdAt": "2024-02-11T07:17:25.123Z",
        "updatedAt": "2024-01-11T07:17:25.123Z",
        "__v": 0
    },
    {
        "_id": "659f96097389623a4ce8043f",
        "conversationId": "659f769e24c9394ecfe6dc49",
        "senderId": "659e600b2e69baca6e997255",
        "text": "sdafasfasdf",
        "createdAt": "2024-01-11T07:17:29.841Z",
        "updatedAt": "2024-01-11T07:17:29.841Z",
        "__v": 0
    },
    {
        "_id": "659f960f7389623a4ce80441",
        "conversationId": "659f769e24c9394ecfe6dc49",
        "senderId": "659e60202e69baca6e997257",
        "text": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "createdAt": "2024-01-11T07:17:35.106Z",
        "updatedAt": "2024-01-11T07:17:35.106Z",
        "__v": 0
    },
    {
        "_id": "659f96947389623a4ce80461",
        "conversationId": "659f769e24c9394ecfe6dc49",
        "senderId": "659e600b2e69baca6e997255",
        "text": "heyy\n",
        "createdAt": "2024-01-11T07:19:48.590Z",
        "updatedAt": "2024-01-11T07:19:48.590Z",
        "__v": 0
    },
    {
        "_id": "659f969c7389623a4ce80463",
        "conversationId": "659f769e24c9394ecfe6dc49",
        "senderId": "659e60202e69baca6e997257",
        "text": "yes plesse",
        "createdAt": "2024-01-11T07:19:56.685Z",
        "updatedAt": "2024-01-11T07:19:56.685Z",
        "__v": 0
    },
    {
        "_id": "659fa7e17389623a4ce80477",
        "conversationId": "659f769e24c9394ecfe6dc49",
        "senderId": "659e600b2e69baca6e997255",
        "text": "hey let'sgo\n",
        "createdAt": "2024-01-11T08:33:37.021Z",
        "updatedAt": "2024-01-11T08:33:37.021Z",
        "__v": 0
    },
    {
        "_id": "659fa7ed7389623a4ce8047a",
        "conversationId": "659f769e24c9394ecfe6dc49",
        "senderId": "659e60202e69baca6e997257",
        "text": "yaa sure",
        "createdAt": "2024-01-11T08:33:49.250Z",
        "updatedAt": "2024-01-11T08:33:49.250Z",
        "__v": 0
    },
    {
        "_id": "659fa7ff7389623a4ce8047f",
        "conversationId": "659f769e24c9394ecfe6dc49",
        "senderId": "659e600b2e69baca6e997255",
        "text": "ehat time",
        "createdAt": "2024-01-11T08:34:07.166Z",
        "updatedAt": "2024-01-11T08:34:07.166Z",
        "__v": 0
    },
    {
        "_id": "659fa80b7389623a4ce80481",
        "conversationId": "659f769e24c9394ecfe6dc49",
        "senderId": "659e60202e69baca6e997257",
        "text": "by evening",
        "createdAt": "2024-01-11T08:34:19.991Z",
        "updatedAt": "2024-01-11T08:34:19.991Z",
        "__v": 0
    }
]

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function groupMessagesByDate(messages) {
  const groupedMessages = {};

  messages.forEach((message) => {
    const date = formatDate(message.createdAt);

    if (!groupedMessages[date]) {
      groupedMessages[date] = [];
    }

    groupedMessages[date].push(message);
  });
// const sortedGroupedMessages = Object.entries(groupedMessages).sort(
//     ([a], [b]) => new Date(b) - new Date(a)
//   );

//   return sortedGroupedMessages.map(([date, messages]) => ({
//     date,
//     messages,
//   }));
  return Object.entries(groupedMessages).map(([date, messages]) => ({
    date,
    messages,
  }));
}

const groupedMessages = groupMessagesByDate(messages);

groupedMessages.forEach((group) => {
  console.log(group.date);
  group.messages.forEach((message) => {
    console.log(message);
  });
});

console.log(groupedMessages);
