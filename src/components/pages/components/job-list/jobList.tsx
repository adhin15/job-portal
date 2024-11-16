import Button from "@/components/shared/Button";
import JobCard from "./components"
import useGetJobs from "./jobList.hook"
import Loader from "@/components/shared/Skeleton/loader";

const JobList = () => {
    const { data, setFilter, onSearch, payload, setPayload, isjobDataLoading } = useGetJobs();
    return (
        <div className="flex flex-col gap-2 mb-8">
            <div className="md:flex mb-3">
                <div className="md:w-1/4 flex flex-col">
                    <label className="text-lg">
                        Job Description
                    </label>
                    <input
                        type="text"
                        name="searchinput"
                        className="w-11/12 text-[#000000] p-2 focus:outline-0 px-5"
                        placeholder="Filter by Job Description"
                        onChange={(e) => {
                            setFilter((prevData) => ({ ...prevData, description: e.target.value }))
                        }}
                    />
                </div>
                <div className="w-full md:w-1/4 flex flex-col">
                    <label className="text-lg">
                        Location
                    </label>
                    <input
                        type="text"
                        name="searchinput"
                        className="w-11/12 text-[#000000] p-2 focus:outline-1 px-5"
                        placeholder="Filter by Location"
                        onChange={(e) => {
                            setFilter((prevData) => ({ ...prevData, location: e.target.value }))
                        }}
                    />
                </div>
                <div className="w-full md:w-1/4 flex justify-start	 items-center pt-6 gap-2">
                    <input className="hover:cursor-pointer" type="checkbox"
                        onChange={(e) => {
                            setFilter((prevData) => ({
                                ...prevData, fulltime: e.target.checked
                            }))
                        }}
                    />
                    <span>
                        Fulltime Only
                    </span>
                </div>
                <div className="w-full md:w-1/4 flex justify-center items-center pt-4">
                    <Button isLoading={isjobDataLoading} variant="regular"
                        onClick={onSearch}>
                        Search
                    </Button>
                </div>
            </div>
            <h2 className="text-3xl font-bold mb-3">
                Job List
            </h2>
            {!isjobDataLoading && data ?
                data?.map((value: any, index: number) => {
                    return (
                        value &&
                        <JobCard
                            key={index}
                            title={value?.title}
                            company={value?.company}
                            type={value?.type}
                            created_at={value?.created_at}
                            location={value?.location}
                            id={value?.id}
                        />
                    )
                }) : <Loader size={64} />
            }

            <div className="flex justify-center mt-4">
                {!isjobDataLoading &&
                    <Button variant="regular"
                        onClick={() => {
                            setPayload((prevData) => ({ ...prevData, page: payload?.page + 1 }))
                        }}>
                        Load More
                    </Button>}
            </div>

        </div>
    )
}

export default JobList