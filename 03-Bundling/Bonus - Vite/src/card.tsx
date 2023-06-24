import { FC } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import logoImg from "./content/vite-js-logo.png";

export const CardComponent: FC = () => {
  return (
    <Card className="card-vite">
      <Card.Img variant="top" src={logoImg} />
      <Card.Body>
        <Card.Title>Lemon card</Card.Title>
        <Card.Text>
          Haz click en el botón de abajo para encontrar toda la documentación
          sobre Vite.
        </Card.Text>
        <Button href="https://vitejs.dev/" target="_blank" variant="primary">
          Go to Vite doc
        </Button>
      </Card.Body>
    </Card>
  );
};
