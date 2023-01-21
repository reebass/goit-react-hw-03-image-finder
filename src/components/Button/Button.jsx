import { LoadButton } from "./Button.styled"

export const Button = ({onLoadmore}) => {
    return (
        <LoadButton type="button" onClick={() => onLoadmore()}>Load More</LoadButton>
    )
}