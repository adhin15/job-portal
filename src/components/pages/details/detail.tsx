'use client'
import Link from "next/link";
import useDetail from "./detail.hook"
import Button from "@/components/shared/Button";
import { useRouter } from "next/navigation";
import Loader from "@/components/shared/Skeleton/loader";

const DetailJob = () => {
    const { detailData, isDetailDataLoading } = useDetail();
    const router = useRouter();
    const addDefaultImg = (ev: any) => {
        ev.target.src = "/images/image-placeholder.png"
    }
    return (
        <div className="mb-8">
            <Button
                variant="text"
                onClick={() => {
                    router.back()
                }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 4
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
                back
            </Button>

            <div className="border-b-2 py-6 mb-8">
                {isDetailDataLoading ?
                    <Loader size={48} /> :
                    <>
                        <p>
                            {detailData?.location} / {detailData?.type}
                        </p>
                        <h3 className="text-2xl text-[#FFC300] font-bold">
                            {detailData?.title}
                        </h3>
                    </>
                }
            </div>
            <div className="md:flex">
                <div className="md:hidden block md:w-1/3 ps-2">
                    {isDetailDataLoading ?
                        <Loader size={128} /> :
                        <>
                            <div className="border-2 p-4 mb-4">
                                <h4 className="text-md text-[#FFC300] font-bold border-b-2 mb-4 py-2">
                                    {detailData?.company}
                                </h4>
                                <img className="mb-4 w-full object-cover	" src={detailData?.company_logo}
                                    style={{}}
                                    alt="err"
                                    onError={addDefaultImg}
                                />
                                <Link className="ellipsis block underline hover:underline-offset-4 text-[#FFC300]" href={detailData?.url || ''}>
                                    {detailData?.url}
                                </Link>
                            </div>
                            <div>
                                <div id="detail-html" dangerouslySetInnerHTML={{ __html: detailData?.how_to_apply }}></div>
                            </div>
                        </>
                    }

                </div>
                <div className="md:w-2/3 pe-3 mb-4">
                    <div>
                        {isDetailDataLoading ?
                            <Loader size={128} /> :
                            <div id="detail-html" dangerouslySetInnerHTML={{ __html: detailData?.description }}></div>
                        }
                    </div>
                </div>
                <div className="hidden md:block md:w-1/3 ps-2">
                    {isDetailDataLoading ?
                        <Loader size={128} /> :
                        <>
                            <div className="border-2 p-4 mb-4">
                                <h4 className="text-md text-[#FFC300] font-bold border-b-2 mb-4 py-2">
                                    {detailData?.company}
                                </h4>
                                <img className="mb-4" src={detailData?.company_logo}
                                    style={{}}
                                    alt="err"
                                    onError={addDefaultImg}
                                />
                                <Link className="ellipsis block underline hover:underline-offset-4 text-[#FFC300]" href={detailData?.url || ''}

                                >
                                    {detailData?.url}
                                </Link>
                            </div>
                            <div>
                                <div id="detail-html" dangerouslySetInnerHTML={{ __html: detailData?.how_to_apply }}></div>
                            </div>
                        </>
                    }

                </div>
            </div>
        </div>
    )
}

export default DetailJob