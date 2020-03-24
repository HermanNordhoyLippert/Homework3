
window.onload = init;

function init() {

    get_api("Oslo")

    $("#user_input").on("change",function() {
        $("#error").html("")
        get_api($("#user_input").val())
    })

}

function get_api(userinput) {
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?",
        dataType: "Json",
        data: {
            "q":userinput,
            "units":"metric",
            "appid":"c6bbcffcd56abbeb6070a1d90a5f82ee"
        },
        error: function(result,status) {
            $("#error").html("No data")
        },
        success: function(result,status) {
            $("#name").html(result.name)
            $("#country").html(result.sys.country)
            $("#description").html('"'+result.weather[0].description+'"')
            $("#temp").html(result.main.temp+"°C")
            $("#max").html(result.main.temp_max+"°C")
            $("#min").html(result.main.temp_min+"°C")
            $("#humidity").html(result.main.humidity + " mm")
            $("#pressure").html(result.main.pressure)
            $("#speed").html(result.wind.speed + " m/s")
            //Icon
            var iconCode = result.weather[0].icon;
            console.log(iconCode);
            $("#wicon").attr('src', "http://openweathermap.org/img/wn/" + iconCode + "@2x.png");
        }
    });
}
