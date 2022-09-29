import "./mylabel.css";
import { AllCaps } from '../stories/components/MyLabel.stories';

export interface MyLabelProps {
  /**
  * Con esta etiqueta podras mostrar el mensaje de la etiqueta
  */
  label: string;
  /**
  * Acá puedes elegir el tamaño de la etiqueta
  */
  size: "normal" | "h1" | "h2" | "h3";
  /**
  * Si quiere todo capitalizado
  */
  allCaps?: boolean;
  /**
  * Acá puedes elegir los colores para el botón
  */
  color?: "primary" | "secondary" | "tertiary";
  /**
  * Aca puedes elegir color de fuente
  */
  fontColor?: string
}

export const MyLabel = ({ label = "sin label", size = 'normal', color, allCaps, fontColor }: MyLabelProps) => {


  return (
    <span className={`label ${size} text-${color}`} style={{color : fontColor}} >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
