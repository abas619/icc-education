var body = document.querySelector("body");

if (document.querySelector(".btn-mobile-menu") != null) {
  var btnMobileMenu = document.querySelector(".btn-mobile-menu");
  var sidebarMenu = document.getElementById("sidebar-menu");
  var menuOverlay = document.querySelector(".overlay-back");
  var btnCloseSidebar = document.querySelector(".btn-close-menu");
  btnMobileMenu.onclick = () => {
    menuOverlay.classList.add("active");
    sidebarMenu.classList.add("active");
  };
  menuOverlay.onclick = () => {
    menuOverlay.classList.remove("active");
    sidebarMenu.classList.remove("active");
  };
  btnCloseSidebar.onclick = () => {
    menuOverlay.classList.remove("active");
    sidebarMenu.classList.remove("active");
  };
}

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

if (document.querySelector(".btn-close-toast") != null) {
  var btnsColse = document.querySelectorAll(".btn-close-toast");
  btnsColse.forEach((btnClose, i) => {
    btnClose.addEventListener("click", function () {
      btnClose.parentElement.style.display = "none";
    });
  });
}

function showDesktopSearch() {
  var desktopSearchContent = document.getElementById("desktop-search-content");
  desktopSearchContent.classList.add("active");
  body.classList.add("fixedposition");
}
function hideDesktopSearch() {
  var desktopSearchContent = document.getElementById("desktop-search-content");
  desktopSearchContent.classList.remove("active");
  body.classList.remove("fixedposition");
}

function changeValue(el) {
  var btnclear = document.querySelector(".btn-clear");
  if (el.value.length > 0) {
    btnclear.classList.add("active");
  } else {
    btnclear.classList.remove("active");
  }
}

function clearInputValue(el) {
  var mobileSearchInput = document.querySelector(".desktop-search-input");
  mobileSearchInput.value = "";
  el.classList.remove("active");
  mobileSearchInput.focus();
}

// Show Side Filter
function showSideFilter() {
  const productsSide = document.querySelector(".products-side");
  const sideOverlay = document.querySelector(".side-overlay");
  productsSide.classList.add("active");
  sideOverlay.classList.add("active");
  body.classList.add("fixedposition");
}
function hiddenOverlay() {
  const productsSide = document.querySelector(".products-side");
  const sideOverlay = document.querySelector(".side-overlay");
  productsSide.classList.remove("active");
  sideOverlay.classList.remove("active");
  body.classList.remove("fixedposition");
}

function addActiveClass(el) {
  el.classList.toggle("active");
}

function showUserProfileSideMenu() {
  const userMenu = document.querySelector(".grid-user-menu");
  const overlayUserMenu = document.querySelector(".overlay-userMenu");
  userMenu.classList.add("active");
  overlayUserMenu.classList.add("active");
}
function hideUserProfileSideMenu() {
  const userMenu = document.querySelector(".grid-user-menu");
  const overlayUserMenu = document.querySelector(".overlay-userMenu");
  userMenu.classList.remove("active");
  overlayUserMenu.classList.remove("active");
}
// Show Side Basket
if (document.getElementById("btn-basket") !== null) {
  var btnSideBasket = document.getElementById("btn-basket");
  var sideBasket = document.getElementById("side-basket");
  var dismissBasket = document.getElementById("dismiss-basket");
  var basketOverlay = document.querySelector(".basket-overlay");
  var body = document.querySelector("body");
  btnSideBasket.addEventListener("click", function () {
    sideBasket.classList.add("active");
    basketOverlay.classList.add("active");
    body.classList.add("fixedposition");
  });
  basketOverlay.addEventListener("click", function () {
    sideBasket.classList.remove("active");
    basketOverlay.classList.remove("active");
    body.classList.remove("fixedposition");
  });
  dismissBasket.addEventListener("click", function () {
    sideBasket.classList.remove("active");
    basketOverlay.classList.remove("active");
    body.classList.remove("fixedposition");
  });
}

// For Sort Buttons
function changeSort(el) {
  let btnsGroup = document.querySelectorAll(".btn-li");
  let i;
  for (i = 0; i < btnsGroup.length; i++) {
    btnsGroup[i].classList.remove("active");
  }
  el.classList.add("active");
}

// For User Course Video Player
if (document.querySelector(".course-season-list") !== null) {
  var videoList = document.querySelectorAll(".sub-info");
  var courseVideoPreview = document.querySelector(".course-video-preview");
  videoList.forEach((vidItem) => {
    vidItem.addEventListener("click", function () {
      ChangeVideoInfo(vidItem);
      window.scroll(0, findPosition(courseVideoPreview) - 120);
    });
  });
}
function findPosition(obj) {
  var currenttop = 0;
  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currenttop];
  }
}
function ChangeVideoInfo(videoItem) {
  let videoname = courseVideoPreview.querySelector(".vid-name");
  let videoTime = courseVideoPreview.querySelector(".vid-time");
  let videoSource = courseVideoPreview.getElementsByTagName("video")[0];
  let source = videoSource.getElementsByTagName("source");
  videoname.innerHTML = videoItem.querySelector(".name").innerHTML;
  videoTime.innerHTML = videoItem.querySelector(".time").innerHTML;
  source[0].src = videoItem.dataset.videoSrc;
  videoSource.load();
}
