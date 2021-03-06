let input = document.getElementById('betterSourceText');
let submit = document.getElementById('betterSourceSubmit');

submit.addEventListener('click', function() {
    chrome.storage.sync.set({betterSourceURL: input.value}, function() {
        console.log('Set betterSource = ' + input.value);
    });

    chrome.runtime.sendMessage({type: 'reloadList', url: input.value}, (response) => {
        if (response) {
            console.log("BETTER_ALTERNATIVES list is reloaded");
        }
    });
});
