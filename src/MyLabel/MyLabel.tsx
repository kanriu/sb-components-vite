import "./mylabel.css";

interface Props {
  /**
   * Este es el mensaje a mostrar en la etiqueta bla
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Si quiere todo capitalizado
   */
  allCaps?: boolean;
  /**
   * Colores básicos del color
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
