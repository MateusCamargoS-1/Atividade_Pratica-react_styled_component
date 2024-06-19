import SectionsImgStyled from "./SectionsImgStyled";

interface SectionsImgProps {
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
  }
  
  const SectionsImg = ({ title, description, image, reverse = false }: SectionsImgProps) => {
    return (
      <SectionsImgStyled reverse={reverse}>
        <div className="description">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="image">
          <img src={image} alt={title} />
        </div>
      </SectionsImgStyled>
    );
  };
  
  export default SectionsImg;
  