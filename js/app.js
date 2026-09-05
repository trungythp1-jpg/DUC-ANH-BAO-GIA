(function () {
  "use strict";

  function $(id) {
    return document.getElementById(id);
  }

  function syncSo() {
    var so = $("so");
    var soCover = $("soCover");

    if (so && soCover) {
      soCover.textContent = so.value;
    }
  }

  window.fillDemo = function () {

    var values = {
      congTrinh: "MR. ĐẠI",
      diaChi: "69 Chợ Con",
      loaiThang: "Tải khách",
      hieuThang: "THANG MÁY ĐỨC ANH VIỆT NAM",
      load: "450kg – 4stop – 60m/phút",
      soLuong: "01 thang",

      thang: "Tháng 07 năm 2026",

      mayKeo: "Torin",
      xuatXu: "China",
      taiTrong: "450",
      diemDung: "04",
      tocDo: "60",
      congSuat: "3.3 KW",
      capKeo: "8",
      tuDien: "STEP",

      donGia1: "315,000,000",
      tongTien: "370,000,000"
    };

    Object.keys(values).forEach(function (key) {

      var element = $(key);

      if (element) {
        element.value = values[key];
      }

    });

    syncSo();
  };

  window.resetForm = function () {

    var ok = window.confirm(
      "Xóa toàn bộ dữ liệu đã nhập và khôi phục mẫu ban đầu?"
    );

    if (ok) {
      window.location.reload();
    }
  };

  document.addEventListener("DOMContentLoaded", function () {

    var so = $("so");

    if (so) {
      so.addEventListener("input", syncSo);
      so.addEventListener("change", syncSo);
    }

    syncSo();

  });

})();