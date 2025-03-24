export default function Title({ subtitle, title, description }) {
    return (
        <div className="title">
            <h3 className="subtitle">{subtitle}</h3>
            <h1 className="main-title">
                {title.split("\\n").map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </h1>
            <h2 className="subtitle-info">
                {description.split("\\n").map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </h2>
        </div>
    );
}
