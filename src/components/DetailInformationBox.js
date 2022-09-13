export default function DetailInformationBox({ heading, value }) {
    return (
        <div className="flex flex-row">
            {value && (
                <>
                    <h4 className="text-gray-400 text-lg">{heading}:&nbsp;</h4>
                    <p className="text-gray-300 text-lg">{value}</p>
                </>
            )}
        </div>
    )
}
