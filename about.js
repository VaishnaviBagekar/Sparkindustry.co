$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

document.getElementById('view-license').addEventListener('click', function () {
    document.getElementById('license-modal').classList.remove('hidden');
});

document.querySelector('.close-button').addEventListener('click', function () {
    document.getElementById('license-modal').classList.add('hidden');
});

