(function(){

  "use strict";


  function get(id){
    return document.getElementById(id);
  }


  function sync(){

    const so = get("so");
    const soCover = get("soCover");

    if(so && soCover){
      soCover.textContent = so.value || "";
    }

  }


  function bind(){

    const inputs =
      document.querySelectorAll(
        "input, textarea"
      );

    inputs.forEach(function(el){

      el.addEventListener(
        "input",
        sync
      );

    });

  }


  window.fillDemo = function(){

    const values = {

      so:
        "34.2026/BG-GROVA",

      congTrinh:
        "MR. ĐẠI",

      diaChi:
        "69 Chợ Con",

      loaiThang:
        "Tải khách",

      hieuThang:
        "THANG MÁY ĐỨC ANH VIỆT NAM",

      load:
        "450kg – 4stop – 60m/phút",

      soLuong:
        "01 thang",

      thang:
        "Tháng 07 năm 2026",

      mayKeo:
        "Torin",

      xuatXu:
        "China",

      taiTrong:
        "450",

      diemDung:
        "04",

      tocDo:
        "60",

      congSuat:
        "3.3 KW",

      capKeo:
        "8",

      tuDien:
        "STEP",

      donGia1:
        "315,000,000",

      chuTien1:
        "BA TRĂM MƯỜI NĂM TRIỆU ĐỒNG CHẴN",

      khungThep:
        "KHUNG THÉP THANG MÁY DẦY 4 MM BẢN 120 X 120 X 50 X 40 - 4 Tầng",

      donGia2:
        "55,000,000 VNĐ",

      thanhTien2:
        "55,000,000 VNĐ",

      tongTien:
        "370,000,000"

    };


    Object.keys(values).forEach(function(key){

      const el = get(key);

      if(el){
        el.value = values[key];
      }

    });


    sync();

  };


  window.resetForm = function(){

    const ok =
      window.confirm(
        "Xóa toàn bộ dữ liệu đã nhập và khôi phục mẫu ban đầu?"
      );

    if(!ok){
      return;
    }

    window.location.reload();

  };


  document.addEventListener(
    "DOMContentLoaded",
    function(){

      bind();

      sync();

    }
  );

})();