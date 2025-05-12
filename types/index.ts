import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ChatMessage {
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
}
