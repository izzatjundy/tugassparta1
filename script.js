function showNotification(message, duration) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, duration);
}

function copyEmail() {
    // Copy the text inside the text field
    navigator.clipboard.writeText("izzatjundy04@gmail.com");
  
    // Alert the copied text
    showNotification("E-mail copied!", 5000);
  }