import { type ReactNode } from "react";

export type BannerProps = {
  children: ReactNode;
};

export default function Banner({ children }: BannerProps) {
  return (
    <div className="container bg-light p-4 rounded shadow-sm mb-4">
      {children}
    </div>
  );
}
