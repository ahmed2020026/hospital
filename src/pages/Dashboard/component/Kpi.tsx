interface KPI {
    style: string,
    head: string,
    result: string,
    image: any,
    status?: boolean
}
const Kpi = ({ head, result, image, style , status }: KPI) => {
    return (
        <div
            className={`
        ${style}
        flex justify-between items-start gap-4
        p-4 rounded-2xl
        text-white shadow-lg
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        cursor-pointer
      `}
        >
            {/* Icon / Image */}
            <img
                src={image}
                alt={`${head} icon`}
                className={`w-12 h-12 object-contain shrink-0 ${status? 'bg-white px-1 py-2 rounded-lg': ''} `}
            />

            {/* Content */}
            <div className="flex-1">
                <h2 className="text-sm font-medium opacity-90">
                    {head}
                </h2>
                <p className="text-3xl font-bold mt-1">
                    {result}
                </p>
            </div>
        </div>
    );
};


export default Kpi
