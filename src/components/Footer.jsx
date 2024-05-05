import "./StyleSheet.css";
import IconFB from "../assets/fb-icon.png"
import iconIns from "../assets/ins-icon.png"
import IconTwt from  "../assets/twt-icon.png"
function Footer() {
  return (
    <>
      <div className="bg-green">
        <div className="container-sm">
          <div className="w-full h-full bg-green">
            <div className="container-sm">
              <img
                className="grab-logo mt-6 mx-8 w-44 h-20 cursor-pointer"
                src="	https://food.grab.com/static/images/logo-grabfood-white2.svg"
                alt="grab-logo"
                />
              <div class="border-bottom h-0 ml-4 w-full"></div>
              <div className="flex flex-wrap ml-9">
                <div className="w-72 sm:h-20 ">
                  <li className="list-none text-white my-8 font-semibold cursor-pointer text-lg">Về GrabFood</li>
                  <li className="list-none text-white my-8 font-semibold cursor-pointer text-lg">Về Grab</li>
                  <li className="list-none text-white my-8 font-semibold cursor-pointer text-lg">Blog</li>
                </div>
                <div className="w-72 sm:h-20">
                  <li className="list-none text-white my-8 font-semibold cursor-pointer text-lg">Mở quán trên GrabFood</li>
                  <li className="list-none text-white my-8 font-semibold cursor-pointer text-lg">Trở thành tài xế Grab</li>
                </div>
                <div className="w-72 sm:h-20">
                  <li className="list-none text-white my-8 font-semibold cursor-pointer text-lg">Trung tâm hỗ trợ</li>
                  <li className="list-none text-white my-8 font-semibold cursor-pointer text-lg">Câu hỏi thường gặp</li>
                </div>
                <div className="mt-8 md:flex">
                  <span className="cursor-pointer m-3">
                    <img src={IconFB}></img>
                  </span>
                  <span className="cursor-pointer m-3">
                    <img src={iconIns}></img>
                  </span>
                  <span className="cursor-pointer m-3">
                    <img src={IconTwt}></img>
                  </span>
                </div>
              </div>
              <div
                class="border-bottom h-0 ml-6 w-full"
                style={{ marginTop: "140px", marginBottom: "20px" }}
              ></div>
              <div className="grid-cols-1 ">
            <div class="grid xl:grid-cols-4 gap-4  lg:grid-cols-6">
              <div class="col-span-2 inline md:flex items-center ml-8 py-2">
                <img
                  className="mr-4"
                  src="https://food.grab.com/static/images/logo-appstore.svg"
                />
                <img src="https://food.grab.com/static/images/logo-playstore.svg" />
              </div>
              <div class="col-span-2 py-4 text-xs md:text-right  text-left mr-8 ml-8 text-white">
                <span class="mr-4">© 2024 Grab</span>
                <span class="mr-4">Terms of Service</span>
                <span>• Privacy Policy</span>
              </div>
            </div>
          </div>
              {/* <div className="flex justify-between ">
                <div>
                  <a href="https://apps.apple.com/us/app/grab-%C4%91%E1%BA%B7t-xe-giao-%C4%91%E1%BB%93-%C4%83n/id647268330?l=vi&af_prt=food.grab.com&c=direct&is_retargeting=true&pid=other_websites">
                    <img
                      className="appstore"
                      src="https://food.grab.com/static/images/logo-appstore.svg"
                      style={{ marginRight: "18px", marginLeft: "25px" }}
                    ></img>
                  </a>
                  <span>
                    <a href="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&hl=vi_VN&pid=other_websites&c=direct&is_retargeting=true&af_prt=food.grab.com">
                      <img
                        className="appstore"
                        src="https://food.grab.com/static/images/logo-playstore.svg"
                      ></img>
                    </a>
                  </span>
                </div>
                <div className="flex">
                  <li className="list-none mr-8 cursor-pointer text-white text-base">@2024</li>
                  <li className="list-none mr-8 cursor-pointer text-white text-base">Câu hỏi thường gặp</li>
                  <li className="list-none mr-8 cursor-pointer text-white text-base">Chính sách bảo mật</li>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;