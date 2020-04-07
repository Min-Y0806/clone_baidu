const input = document.getElementById("input");

document.querySelector('.primary-btn').addEventListener("click", function (e) {
    if (input.value) {
        location.href = `https://www.baidu.com/s?wd=${input.value}`
    } else {
        alert("请输入搜索语或网站")
    }
})