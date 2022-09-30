/// <reference types="react" />
import "./mylabel.css";
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
    fontColor?: string;
    /**
    * Aca puedes elegir color de fondo
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
