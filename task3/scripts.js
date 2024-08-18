$(document).ready(function() {
    // Вітрина 1
    $(".interactive img").click(function() {
        let description = $(this).data("description");
        $(".details").text(description);
    });

    
    // Вітрина №3
    let maxImages = 20;
    let customItems = [];

    function renderImages() {
        $(".custom-items").empty();
        customItems.forEach((item, index) => {
            $(".custom-items").append(`<img src="${item}" data-index="${index}">`);
        });
    }

    $(".select-image").click(function() {
        $(".image-grid").toggle();
    });

    $(".image-grid img").click(function() {
        if (customItems.length < maxImages) {
            customItems.push($(this).data("src"));
            renderImages();
            $(".image-grid").hide();
        }
    });

    $(".custom-items").on("click", "img", function() {
        let index = $(this).data("index");
        customItems.splice(index, 1);
        renderImages();
    });
});
