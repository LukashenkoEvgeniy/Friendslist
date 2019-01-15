// Respond to message from parent thread
self.addEventListener('message', ({data}) => {
    let result = data.list.sort((a, b) => b.id - a.id);
    self.postMessage({ list: result })
})