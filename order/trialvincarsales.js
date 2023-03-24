function hideAllImageDivs() {
    var fadinImageDiv = document.querySelector(".fadin-image-ngoaithat");
    var luxaImageDiv = document.querySelector(".luxa-image-ngoaithat");
    var luxsaImageDiv = document.querySelector(".luxsa-image-ngoaithat");
    var presidentImageDiv = document.querySelector(".president-image-ngoaithat");
    fadinImageDiv.style.display = "none";
    luxaImageDiv.style.display = "none";
    luxsaImageDiv.style.display = "none";
    presidentImageDiv.style.display = "none";
};
const fadinButton = document.getElementById("fadin-select");
const fadinImageDiv = document.getElementById("fadin-image-ngoaithat");
fadinButton.onclick = function () {
    hideAllImageDivs();
    fadinImageDiv.style.display = "block";
};
const luxaButton = document.getElementById("luxa-select");
const luxaImageDiv = document.getElementById("luxa-image-ngoaithat");
luxaButton.onclick = function () {
    hideAllImageDivs();
    luxaImageDiv.style.display = "block";
};

const luxsaButton = document.getElementById("luxsa-select");
const luxsaImageDiv = document.getElementById("luxsa-image-ngoaithat");
luxsaButton.onclick = function () {
    hideAllImageDivs();
    luxsaImageDiv.style.display = "block";
};

const presidentButton = document.getElementById("president-select");
const presidentImageDiv = document.getElementById("president-image-ngoaithat");
presidentButton.onclick = function () {
    hideAllImageDivs();
    presidentImageDiv.style.display = "block";
};

var imgFeature1 = document.querySelector(".img-fadin-future");
var listImage1 = document.querySelectorAll(".list-fadin-img");
var currentIndex1 = 0;
function updateImageByIndex1() {
    document.querySelectorAll('.list-fadin-img div').forEach(item => {
        item.classList.remove('active')
    })
    currentIndex1 = index
    imgFeature1.src = listImage1[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}
listImg.forEach((imgElement, index)=>{
    imgElement.addEventListener('click', e=>{
        updateImageByIndex1(index)
    })
})

//function updateImageByIndex1(index) {
    document.querySelectorAll(".list-fadin-img").forEach((item) => {
        item.classList.remove("active");
    });
    currentIndex1 = index;
    imgFeature1.src = listImage1[index].getAttribute("src");
    listImage1[index].parentElement.classList.add("active");


listImage1.forEach((imgElement, index) => {
    imgElement.addEventListener("click", (e) => {
        updateImageByIndex1(index);
    });
});

updateImageByIndex1(0)
var imgFeature2 = document.querySelector('.img-luxa-future')
var listImage2 = document.querySelectorAll('.list-luxa-img')
var currentIndex2 = 0;

function updateImageByIndex2(index) {
    document.querySelectorAll('.list-luxa-img').forEach(item => {
        item.classList.remove('active')
    })
    currentIndex2 = index
    imgFeature2.src = listImage2[index].getAttribute('src')
    listImage2[index].parentElement.classList.add('active')
}

listImage2.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        updateImageByIndex2(index)
    })
})

updateImageByIndex2(0)
var imgFeature3 = document.querySelector('.img-luxsa-future')
var listImage3 = document.querySelectorAll('.list-luxsa-img')
var currentIndex3 = 0;

function updateImageByIndex3(index) {
    document.querySelectorAll('.list-luxsa-img').forEach(item => {
        item.classList.remove('active')
    })
    currentIndex3 = index
    imgFeature3.src = listImage3[index].getAttribute('src')
    listImage3[index].parentElement.classList.add('active')
}

listImage3.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        updateImageByIndex3(index)
    })
})
updateImageByIndex3(0)
var imgFeature4 = document.querySelector('.img-president-future')
var listImage4 = document.querySelectorAll('.list-president-img')
var currentIndex4 = 0;

function updateImageByIndex4(index) {
    document.querySelectorAll('.list-president-img').forEach(item => {
        item.classList.remove('active')
    })
    currentIndex4 = index
    imgFeature4.src = listImage4[index].getAttribute('src')
    listImage4[index].parentElement.classList.add('active')
}

listImage4.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        updateImageByIndex4(index)
    })
})
updateImageByIndex4(0)


//form đăng nhập
function openLogin() {
    loginForm.style.display = "block";
    event.stopPropagation(); // Ngăn chặn sự kiện click truyền xuống phần tử cha
}
loginForm.onsubmit = function(event) {
    event.preventDefault(); // Ngăn chặn gửi yêu cầu tải lại trang
    loginForm.style.display = "none";
}

document.addEventListener('click', function(event) {
    var isClickInside = loginBtn.contains(event.target) || loginForm.contains(event.target);
    if (!isClickInside) {
        loginForm.style.display = 'none';
    }
});
// form đặt hàng
    function validateForm(event) {
        event.preventDefault(); // prevent form from submitting

        const fullname = document.getElementById("fullname").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;
        const payment = document.getElementById("payment").value;
        const car = document.getElementById("car").value;
        const note = document.getElementById("note").value;

        // Kiểm tra nếu KH không điền thông tin
        if (!fullname || !phone || !address || !email || !payment || !car || !note) {
            alert("Vui lòng điền đầy đủ thông tin");
            return false;
        }

        // Kiểm tra độ dài số điện thoại
        if (phone.length !== 10 || isNaN(phone)) {
            alert("Vui lòng nhập số điện thoại hợp lệ");
            return false;
        }


        // Kiểm tra định dạng email
        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            alert("Vui lòng nhập địa chỉ email hợp lệ");
            return false;
        }

        // Thông báo đặt hàng thành công
        alert("Đặt hàng thành công!");
        return true;}