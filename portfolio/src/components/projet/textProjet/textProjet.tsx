

type TextProps = {
    text: string,
    title: string
}

export default function DescriptionProjet({title, text}: TextProps) {

    return (
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}