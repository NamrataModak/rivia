import { Card } from "react-bootstrap"


type CareerItemProps = {
    title: string
    content: string
    imgUrl: string
}

export function CareerItem({ title, content, imgUrl }:
    CareerItemProps) {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px" />
            
                <Card.Title className="d-flex 
                        justify-content-space-between align-item-baseline
                        mb-4">

                </Card.Title>

        </Card>
    )

}