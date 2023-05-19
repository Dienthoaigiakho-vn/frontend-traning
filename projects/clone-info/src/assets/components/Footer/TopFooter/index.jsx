import React from 'react'
import "./index.css"

const TopFooter = () => {
  return (
    <div className='topFooter-container'>
      <ul className='topFooter-list'>
        <li className='topFooter-listInfoContact'>
          <h3 className='topFooter-title'>THÔNG TIN LIÊN HỆ</h3>
          <ul className='topFooter-information'>
            <li>
              <img src="https://stg.dienthoaigiakho.vn/_next/image?url=%2Ficons%2Ffooter%2Fhotline.png&w=32&q=75" alt="" />
              <span>Mua Nhanh Online: 19008922 (8h đến 24H mỗi ngày)</span>
            </li>
            <li>
              <img src="https://stg.dienthoaigiakho.vn/_next/image?url=%2Ficons%2Ffooter%2Fhotline.png&w=32&q=75" alt="" />
              <span>Bảo hành - Hỗ trợ kỹ thuật: 0868922247 (9-21H mỗi ngày)</span>
            </li>
            <li>
              <img src="https://stg.dienthoaigiakho.vn/_next/image?url=%2Ficons%2Ffooter%2Flocation.png&w=32&q=75" alt="" />
              <span>121 Chu Văn An, P26, Quận Bình Thạnh, HCM</span>
            </li>
            <li>
              <img src="https://stg.dienthoaigiakho.vn/_next/image?url=%2Ficons%2Ffooter%2Flocation.png&w=32&q=75" alt="" />
              <span>1247, Đường 3 Tháng 2, P6, Quận 11, HCM</span>
            </li>
            <li>
              <img src="https://stg.dienthoaigiakho.vn/_next/image?url=%2Ficons%2Ffooter%2Flocation.png&w=32&q=75" alt="" />
              <span>56 Lê Văn Việt, Phường Hiệp Phú, TP. Thủ Đức</span>
            </li>
            <li>
              <img src="https://stg.dienthoaigiakho.vn/_next/image?url=%2Ficons%2Ffooter%2Ftime.png&w=32&q=75" alt="" />
              <span>Giờ hoạt động Showroom: 8:30AM - 9:30PM</span>
            </li>
            <li>
              <img src="https://stg.dienthoaigiakho.vn/_next/image?url=%2Ficons%2Ffooter%2Femail.png&w=32&q=75" alt="" />
              <a href="">Hỗ trợ khách hàng: hotro@giakho.vn</a>
            </li>
            <li>
              <img src="https://stg.dienthoaigiakho.vn/_next/image?url=%2Ficons%2Ffooter%2Femail.png&w=32&q=75" alt="" />
              <a href="">Khách hàng doanh nghiệp: B2B@giakho.vn</a>
            </li>
          </ul>
        </li>

        <li className='topFooter-listInfo'>
          <h3 className='topFooter-title'>THÔNG TIN TRA CỨU</h3>
          <ul className='topFooter-information'>
            <li><a href="">Mua hàng trả góp</a></li>
            <li><a href="">Chính sách bảo hành</a></li>
            <li><a href="">Chính sách đổi trả</a></li>
            <li><a href="">Chính sách bán hàng</a></li>
            <li><a href="">Chính sách bảo mật</a></li>
            <li><a href="">Chính sách sử dụng</a></li>
            <li><a href="">Chính sách giao hàng</a></li>
            <li><a href="">Hướng dẫn mua hàng từ xa</a></li>
            <li><a href="">Hướng dẫn thanh toán</a></li>
            <li><a href="">Tích lũy điểm Giá Kho Member</a></li>
          </ul>
        </li>

        <li className='topFooter-listInfo'>
          <h3 className='topFooter-title'>CÂU CHUYỆN GIÁ KHO</h3>
          <ul className='topFooter-information'>
            <li><a href="">Giới thiệu về Giá Kho</a></li>
            <li><a href="">Tuyển dụng</a></li>
            <li><a href="">Hợp tác cùng GIÁ KHO</a></li>
            <li><a href="">Quy định về việc sao lưu dữ liệu</a></li>
            <li><a href="">Nhật ký Giao Niềm Vui</a></li>
          </ul>
        </li>

        <li className='topFooter-listInfo'>
          <h3 className='topFooter-title'>KẾT NỐI VỚI CHÚNG TÔI</h3>
          <ul className='topFooter-informationImg'>
            <li><a href=""><img src="https://stg.dienthoaigiakho.vn/icons/footer/facebook.png" alt="" /></a></li>
            <li><a href=""><img src="https://stg.dienthoaigiakho.vn/icons/footer/youtube.png" alt="" /></a></li>
            <li><a href=""><img src="https://stg.dienthoaigiakho.vn/icons/footer/zalo.png" alt="" /></a></li>
            <li><a href=""><img src="https://stg.dienthoaigiakho.vn/icons/footer/instagram.png" alt="" /></a></li>
          </ul>
          <p className='topFooter-payment'>Phương thức thanh toán</p>
          <ul className='topFooter-paymentImg'>
            <li><img src="https://stg.dienthoaigiakho.vn/icons/footer/visa.svg" alt="" /></li>
            <li><img src="https://stg.dienthoaigiakho.vn/icons/footer/master.svg" alt="" /></li>
            <li><img src="https://stg.dienthoaigiakho.vn/icons/footer/atm.svg" alt="" /></li>
            <li><img src="https://stg.dienthoaigiakho.vn/icons/footer/alepay.svg" alt="" /></li>
            <li><img src="https://stg.dienthoaigiakho.vn/icons/footer/mpos.svg" alt="" /></li>
            <li><img src="https://stg.dienthoaigiakho.vn/icons/footer/epay.svg" alt="" /></li>
            <li><img src="https://stg.dienthoaigiakho.vn/icons/footer/vnpay.svg" alt="" /></li>
            <li><img src="https://stg.dienthoaigiakho.vn/icons/footer/kredivo.svg" alt="" /></li>
          </ul>
        </li>


      </ul>
    </div>
  )
}

export default TopFooter
