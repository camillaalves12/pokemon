import Card from 'react-bootstrap/Card';
import S from './styles.module.scss';

type PokemonCardProps = {
  src: string;
  name: string;
  type: string[];
  id: number;
};

const PokemonCard = ({ src, name, type, id }: PokemonCardProps) => {
  return (
    <Card className={S.card}>
      <Card.Img variant="top" src={src} className={S.img} />
      <Card.Text className={S.idPoke}>
        Nº {String(id).padStart(4, '0')}
      </Card.Text>
      <Card.Body>
        <Card.Title className={S.name}>{name}</Card.Title>
        <Card.Text className={S.typesContainer}>
          {type.map((t) => (
            <div key={t} className={`${S.type} ${S[t]}`}>
              {t}
            </div>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
