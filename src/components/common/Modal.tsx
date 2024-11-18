import { useState, useEffect } from 'react';
import Portal from './Portal';
import Slider from 'react-slick';
import { ModalProps } from 'types/Modal';
import { projectDetailData } from 'data/projectDetail';
import { ReactComponent as DeleteBtn } from '../../assets/icon/delete-btn.svg';
import { LoadingIcon } from './LoadingIcon';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Modal = ({ projectId, toggleModal, modalRef }: ModalProps) => {
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: 'linear',
  };

  useEffect(() => {
    setLoading(true);
  }, [projectId]);

  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-70">
        <div className="relative" ref={modalRef}>
          <div className="w-[20rem] sm:w-[30rem] md:w-[50rem] h-[35rem] lg:h-[55rem] md:h-[45rem] text-zinc-800 bg-white px-5 md:px-20 py-6 pb-12 overflow-y-auto thin-scrollbar">
            <DeleteBtn
              onClick={toggleModal}
              className="absolute top-2 right-3 cursor-pointer hover:opacity-80"
            />
            <div className="text-center">
              <p className="font-Pretendard-300 text-[1.5rem] md:text-[1.8rem]">
                {projectDetailData[projectId].title}
              </p>
              <p className="text-[0.8rem] md:text-[0.9rem]">
                {projectDetailData[projectId].subTitle}
              </p>
              <p className="text-[0.6rem] md:text-[0.7rem] text-zinc-500">
                {projectDetailData[projectId].duration}
              </p>
              <div className="flex justify-center items-center my-6">
                <Slider {...settings} className="w-[16rem] md:w-[30rem]">
                  {loading && <LoadingIcon />}
                  {projectDetailData[projectId].images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="상세 이미지"
                      className="h-full w-full object-cover"
                      onLoad={() => setLoading(false)}
                    />
                  ))}
                </Slider>
              </div>
            </div>
            {/* 팀 */}
            <p className="font-Pretendard-200 text-[1.1rem] md:text-[1.3rem] mb-2 mt-16">
              &#128204; 팀
            </p>
            <ul className="list-disc ml-5 text-[0.9rem] md:text-[1rem]">
              {projectDetailData[projectId].team.map((member, index) => (
                <li key={index} className="mb-1 break-words">
                  {member}
                </li>
              ))}
            </ul>

            {/* 주요 기능 */}
            <p className="font-Pretendard-200 text-[1.1rem] md:text-[1.3rem] mb-2 mt-6">
              &#128204; 주요 기능
            </p>
            <ul className="list-disc ml-5 text-[0.9rem] md:text-[1rem]">
              {projectDetailData[projectId].keyFeatures.map((item, index) => (
                <li key={index} className="mb-2">
                  {/* 기능명 */}
                  <p className="font-Pretendard-100">{item.feature}</p>
                  {/* 세부 사항 */}
                  <ul className="text-[0.85rem] md:text-[0.95rem] list-none">
                    {item.detail.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="mb-0.5 break-words flex items-start"
                      >
                        <span className="mr-2 flex-shrink-0">-</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            {/* 사용 기술 */}
            <p className="font-Pretendard-200 text-[1.1rem] md:text-[1.3rem] mb-2 mt-6">
              &#128204; 사용 기술
            </p>
            <ul className="list-disc ml-5 text-[0.9rem] md:text-[1rem]">
              {projectDetailData[projectId].techStack.map((item, index) => (
                <li key={index} className="mb-2">
                  <div className="flex items-start">
                    {/* 기술명 */}
                    <span className="font-Pretendard-100 break-words">
                      {item.tech}
                    </span>
                  </div>
                  {/* 세부 사항 */}
                  <ul className="text-[0.85rem] md:text-[0.95rem] text-start leading-[1.2rem]">
                    {item.reason.map((reason, reasonIndex) => (
                      <li
                        key={reasonIndex}
                        className="mt-1 mb-1.5 flex items-start"
                      >
                        <span className="mr-2 flex-shrink-0">-</span>
                        <span className="break-words">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            {/* 프로젝트 기여 내용 */}
            <p className="font-Pretendard-200 text-[1.1rem] md:text-[1.3rem] mb-2 mt-6">
              &#128204; 프로젝트 기여 내용
            </p>
            {Object.entries(projectDetailData[projectId].contributions).map(
              ([category, items], index) => (
                <div key={index}>
                  {/* 페이지 */}
                  <h2 className="font-Pretendard-100 text-[1rem] mt-4 mb-2 underline decoration-double decoration-amber-200 decoration-2">
                    {category}
                  </h2>

                  {/* 페이지 이미지 */}
                  <div className="flex justify-center">
                    <img
                      src={items.image}
                      alt={`${category} 이미지`}
                      className="flex justify-center items-center my-4 w-[70%] h-auto"
                    />
                  </div>

                  <div>
                    <ul className="ml-5 list-disc text-[0.9rem] md:text-[1rem]">
                      {items.details.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-3">
                          {/* 타이틀 */}
                          <h3 className="font-Pretendard-100 break-words mb-1">
                            {item.contribution}
                          </h3>
                          {/* 세부 사항 */}
                          <ul className="text-[0.85rem] md:text-[0.95rem] list-none">
                            {item.detail.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="mb-2 break-words flex items-start leading-[1.2rem]"
                              >
                                <span className="mr-2 flex-shrink-0">-</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ),
            )}

            {/* 협업 */}
            <p className="font-Pretendard-200 text-[1.1rem] md:text-[1.3rem] mb-2 mt-6">
              &#128204; 협업
            </p>
            <ul className="list-disc ml-5 text-[0.9rem] md:text-[1rem]">
              {projectDetailData[projectId].collaboration.map((item, index) => (
                <li key={index} className="mb-2">
                  <div className="flex items-start">
                    {/* 타이틀 */}
                    <span className="font-Pretendard-100 break-words">
                      {item.feature}
                    </span>
                  </div>
                  {/* 세부 사항 */}
                  <ul className="text-[0.85rem] md:text-[0.95rem] text-start leading-[1.2rem]">
                    {item.detail.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="mt-1 mb-1 flex items-start"
                      >
                        <span className="mr-2 flex-shrink-0">-</span>
                        <span className="break-words">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
