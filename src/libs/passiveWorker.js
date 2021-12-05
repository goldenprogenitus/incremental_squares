/* eslint-disable no-restricted-globals */
self.addEventListener("message", receiveMessage);

function receiveMessage(e) {
  console.log("wtf", e);
}
