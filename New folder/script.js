// Script to handle profile picture upload
const uploadInput = document.getElementById('uploadInput');
const profilePicture = document.getElementById('profilePicture');

uploadInput.addEventListener('change', function () {
    const file = uploadInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePicture.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
