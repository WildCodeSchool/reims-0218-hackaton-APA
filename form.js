//Faire la somme des 4 curseurs
getTotal = () => {
    const total = document.getElementById("total")
    const first = document.getElementById("value_range1").innerText
    const second = document.getElementById("value_range2").innerText
    const third = document.getElementById("value_range3").innerText
    const fourth = document.getElementById("value_range4").innerText
    total.innerHTML = "" + (Number(first) + Number(second) + Number(third) + Number(fourth))
}
//on récupère la valeur de chaque range-slider
const rangeSlider = function () {
    let slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');

    slider.each(function () {
        value.each(function () {
            const value = $(this).prev().attr('value');
            $(this).html(value);
        });

        range.on('input', function () {
            console.log(this.value)
            $(this).next(value).html(this.value)
            getTotal()
        });
    });
};
rangeSlider()
