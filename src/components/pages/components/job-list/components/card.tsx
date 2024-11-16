import Link from "next/link";

type props = {
    title?: string,
    company?: string,
    type?: string,
    company_logo?: string,
    company_url?: string,
    created_at?: string,
    description?: string,
    how_to_apply?: string,
    id?: string,
    location?: string,
    url?: string,

}

const JobCard = ({
    title = 'Job Title',
    company = 'Company Name',
    type = 'Job Type',
    company_logo = '',
    company_url = '',
    created_at = '',
    description = 'Job Description',
    how_to_apply = 'How to Apply',
    id = '0',
    location = '',
    url = '',

}: props) => {

    const formattedDated = (dateStr: string) => {
        const date = new Date(dateStr);
        const weekday = date.toLocaleString('en-US', { weekday: 'short' });
        const month = date.toLocaleString('en-US', { month: 'short' });
        const day = date.getDate();
        const formattedDate = `${weekday} ${month} ${day}`;
        return formattedDate;
    }

    return (
        <div className="p-2" data-aos="fade-up">
            {/* card section */}
            <Link href={`/detail/${id}`}>
                <div className="card bg-[#003566] shadow-xl rounded-lg border-1 p-4 flex justify-between 
                            transition ease-in-out delay-50 hover:-translate-y-1 cursor-pointer	">
                    <div className="w-2/4">
                        <h4 className="text-lg text-[#FFC300] font-bold">
                            {title}
                        </h4>
                        <div className="text-xs	">
                            <span>{company}</span> - <span className="text-[#FFC300]">{type}</span>
                        </div>
                    </div>
                    <div className="w-1/4 text-right flex flex-col justify-center">
                        <p className="text-xs">
                            {location}
                        </p>
                        <p className="text-xs">
                            {formattedDated(created_at)}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default JobCard;